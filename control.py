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
                self._visa = pyvisa.ResourceManager().open_resource("GPIB0::4::INSTR")
                self._visa.write_termination = "\r\n"
                self._visa.timeout = 10
                self._connection_open = True
            except:
                print("Error openning Visa")

    def close_connection(self):
        if self._connection_open:
            try:
                self._visa.close()
                self._connection_open = False
            except:
                print("Error Closing VISA")

    def read_offset(self, axis):
        if (axis <= 0 or axis > 6):
            print("Error: (ReadOffset) axis is not ok AX:" + str(axis))
            return
        self.open_connection()
        self._visa.write("S")
        time.sleep(2)
        try:
            read_offset = str(self._visa.query("A{}<O<".format(axis)))
            self.close_connection()
        except:
            raise Exception("ERROR READING")

        print("Read Offset from AX:" + str(axis) + "O:" + read_offset)
        # Format is Sxxxyy xxx integer part yy decimal part
        return float(read_offset[1:4] + "." + read_offset[4:])

    def write_offset(self, axis, offset):
        if (axis <= 0 or axis > 6):
            print("Error: (WriteOffset) axis is not ok AX:" +
                  str(axis) + " O:" + str(offset))
            return
        elif (offset < 0 or offset >= 360):
            print("Error: (WriteOffset) offset is not ok AX:" +
                  str(axis) + " O:" + str(offset))

        self.open_connection()
        self._visa.write("L")
        self._visa.write("A{}<".format(axis))
        self._visa.write("O".join("{:05.2f}".format(offset).split(".")) + "<")
        self._visa.write("H")
        # Save to permanent Memory
        self._visa.write("K<")
        self.close_connection()

    def tester(self):
        print("Working Instrument")
