import pyvisa
import time


class Instrument:
    __instance = None
    _connection_open = False
    _visa = None

    @staticmethod
    def get_instance():
        """ Static access method. """
        if Instrument.__instance == None:
            Instrument()
        return Instrument.__instance

    def __init__(self):
        """ Virtually private constructor. """
        if Instrument.__instance != None:
            raise Exception("This class is a singleton!")
        else:
            Instrument.__instance = self

    def open_connection(self):
        if not self._connection_open:
            try:
                self._visa = pyvisa.ResourceManager().open_resource(
                    "GPIB0::4::INSTR", query_delay=0.1)
                self._visa.write_termination = "\r\n"
                self._visa.timeout = 100
                self._connection_open = True
                self._visa.flush(pyvisa.constants.VI_READ_BUF_DISCARD |
                                 pyvisa.constants.VI_WRITE_BUF_DISCARD)
                self._visa.clear()  # Need 1s delay to clear buffers
                time.sleep(1)
            except:
                print("Error openning Visa")
        raise Exception("Connection Already Openned")

    def close_connection(self):
        if self._connection_open:
            try:
                self._write_instrument("H")
                self._visa.close()
                self._connection_open = False
            except:
                print("Error Closing VISA")

    def _write_instrument(self, query, delay=0.1):
        self._visa.write(query)
        time.sleep(delay)

    def _read_instrument(self, query, delay=0.1):
        read = str(self._visa.query(query))
        time.sleep(delay)
        return read

    def _read_status_byte(self):
        return self._visa.stb

    def _offset_parser(self, offset):
        return float(read_offset[1:4] + "." + read_offset[4:])

    def read_offset(self, axis):
        if (axis <= 0 or axis > 6):
            print("Error: (ReadOffset) axis is not ok AX:" + str(axis))
            return
        self.open_connection()
        self._write_instrument("S")
        try:
            read_offset = self._read_instrument("A{}<O<".format(axis))
            self.close_connection()
        except:
            print(self._visa.stb)
            self.close_connection()
            raise Exception("ERROR READING")
        print("Read Offset from AX:" + str(axis) + "O:" + read_offset)
        # Format is Sxxxyy xxx integer part yy decimal part
        return self._offset_parser(read_offset)

    def read_all_offsets(self, n_ax=6):
        offsets = []
        self.open_connection()
        self._write_instrument("S")
        for i in range(1, n_ax+1):
            self._write_instrument("A{}<".format(i), delay=1)
            offsets.append(self._offset_parser(
                self._read_instrument("O<")))
        return offsets

    def write_offset(self, axis, offset):
        if (axis <= 0 or axis > 6):
            print("Error: (WriteOffset) axis is not ok AX:" +
                  str(axis) + " O:" + str(offset))
            return
        elif (offset < 0 or offset >= 360):
            print("Error: (WriteOffset) offset is not ok AX:" +
                  str(axis) + " O:" + str(offset))

        self.open_connection()
        self._write_instrument("L")
        self._write_instrument("A{}<".format(axis))
        self._write_instrument(
            "O".join("{:06.2f}".format(offset).split(".")) + "<")
        self._write_instrument("H")
        # Save to permanent Memory
        self._write_instrument("K<")
        self.close_connection()

        # Check Offset written
        new_offset = self.read_offset(axis)
        if(new_offset != offset):
            raise Exception("Offset written not stored")
        return new_offset

    def _position_parser(self, position):
        pos = float(position[5:len(position)-3]+"."+position[-3:])
        ax = int(position[3])
        return (ax, pos)

    def read_position(self, axis):
        if (axis <= 0 or axis > 6):
            print("Error: (WriteOffset) axis is not ok AX:" + str(axis))

        self.open_connection()
        self._write_instrument("E{}<".format(axis))
        try:
            res = self._position_parser(self._read_instrument("X2<"))
        except:
            print(self._visa.stb)
            self.close_connection()
            raise Exception("ERROR READING")
        if (res[0] != axis):
            raise Exception("Axis not matching")
        return res[1]

    def read_all_positions(self, n_ax=6):
        positions = []
        self.open_connection()
        for i in range(1, n_ax+1):
            self._write_instrument("E{}<".format(i), delay=1)
            try:
                position = self._position_parser(
                    self._read_instrument("X2<"))
            except:
                raise
            if position[0] != i:
                raise Exception("Axis not matching")    
            positions.append(position[1])
        return positions

    def mode_register_movement(self, axis, pos_origin, pos_end, speed, angular_increment):
        self.open_connection()
        self._write_instrument("L")
        self._write_instrument("Aa{}<".format(axis))
        self._write_instrument(
            "Pas"+"".join("{:06.2f}".format(pos_origin).split("."))+"<")
        self._write_instrument(
            "Pab"+"".join("{:06.2f}".format(pos_end).split("."))+"<")
        self._write_instrument(
            "Va"+"".join("{:06.1f}".format(speed).split("."))+"<")
        self._write_instrument(
            "I"+"".join("{:06.3f}".format(angular_increment).split("."))+"<")
        self._write_instrument("MR")
        self._write_instrument("H")
        self._write_instrument("G")
        while(True):
            if(self._read_status_byte() == 88):
                break
            time.sleep(0.4)
        self.close_connection()

    def mode_track_movement(self, axis, pos_target, direction, speed):
        self.open_connection()
        self._write_instrument("H")
        self._write_instrument("L")
        self._write_instrument("Aa{}<".format(axis))
        self._write_instrument("Pat"+"".join("{:06.2f}".format(pos_target).split("."))+"<")
        self._write_instrument("Da"+direction+"<")
        self._write_instrument("Va"+"".join("{:06.1f}".format(speed).split("."))+"<")
        self._write_instrument("MT")
        self._write_instrument("H")
        self._write_instrument("G") #delay included in write instrument
        while(True):
            if(self._read_status_byte() == 88):
                break
            time.sleep(0.4)
        self.close_connection()

    def tester(self):
        print("Working Instrument")
