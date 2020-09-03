import os
import webview
import threading
import time
from control import Instrument

debug = False

class Api():
    def __init__(self):
        self._instrument = Instrument.get_instance()
        self._n_axis = 6
        self._block = threading.Lock()

    def PyConnect(self):
        self._instrument.tester()

    def PyGetNumberAxis(self):
        print("Called Get Number Axis")
        return self._n_axis

    def PyWriteOffset(self,axis,offset):
        print("Called WriteOffset")
        try:
            offset = self._instrument.write_offset(int(axis),float(offset))
        except:
            return False
        return offset
    
    #Unused need just in case bulk read doesn't work
    def PyReadOffsets(self):
        #offsets = []
        #Real
        read_offsets = self._instrument.read_all_offsets()
        #Debug 
        """for ax in range(1,self._n_axis+1):
            #read_ofset = self._instrument.read_offset(ax)
            #DebugTest
            #offsets.append({"number": ax,"currentOffset":read_ofset,"desiredOffset":read_ofset})
            offsets.append({"number": ax,"currentOffset":ax+0.25,"desiredOffset":ax+0.25}) """
        return read_offsets
    
    def PyReadPositions(self):
        try:
            positions = self._instrument.read_all_positions()
        except:
            return False
        return positions

    def PyReadPosition(self,axis):
        print("Reading Position")
        try:
            position = self._instrument.read_position(int(axis))
        except:
            return False
        return position

    def PyReadPositionsAndOffsets(self):
        if(debug):
            return [{"number": 1,"currentOffset":1,"desiredOffset":1,"currentPosition": 2,"desiredPosition": 2}]
        
        pos_off = []
        
        offsets = self.PyReadOffsets()
        positions = self.PyReadPositions()
        #Check if exception has been made
        if(type(offsets) is bool or type(positions) is bool):
            return False

        for i in range(0,len(offsets)):
            pos_off.append({"number": i+1,"currentOffset":offsets[i],"desiredOffset":offsets[i],"currentPosition": positions[i],"desiredPosition": positions[i]})
        
        return pos_off

    def PyMoveTrack(self,direction,speed,pos_target,axis):
        if(debug):
            time.sleep(8)
            return True
        try:
            self._instrument.mode_track_movement(int(axis),float(pos_target),direction,float(speed))
        except:
            return False
        
        return self.PyReadPosition(axis)

    def PyMoveRegister(self,direction,speed,pos_origin,pos_end,angular_increment,axis):
        try:
            self._instrument.mode_register_movement(int(axis),float(pos_origin),float(pos_end),float(speed),float(angular_increment),direction)
        except:
            return False
        
        return self.PyReadPosition(axis)
    
    def PyReadLimit(self,axis):
        limit = {}
        try:
            limit = self._instrument.read_limit(axis)
        except:
            return False
        return limit

    def PyReadLimits(self):
        limits = []
        try:
            limits = self._instrument.read_limits()
        except:
            return False
        return limits

    def PyWriteLimit(self,axis,lim_fwd,lim_rev):
        try:
            self._instrument.write_limit(axis,lim_fwd,lim_rev)
        except:
            return False
        return self.PyReadLimit(axis)


if __name__ == '__main__':
    api = Api()
    webview.create_window('Control Virtual de Posiciones', 'dist/index.html', js_api=api, min_size=(650, 1200))
    webview.start(debug=True)