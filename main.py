import os
import webview
import threading
from control import Instrument


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

    def PyWriteOffset(self,axis):
        print("Called WriteOffset")
        try:
            offset = self._instrument.write_offset(axis['number'],axis['desiredOffset'])
        except:
            return False
        return offset
    
    def PyReadOffsets(self):
        offsets = []
        #Real
        # read_ofset = self._instrument.read_all_offsets()
        #Debug 
        for ax in range(1,self._n_axis+1):
            #read_ofset = self._instrument.read_offset(ax)
            #DebugTest
            #offsets.append({"number": ax,"currentOffset":read_ofset,"desiredOffset":read_ofset})
            offsets.append({"number": ax,"currentOffset":ax+0.25,"desiredOffset":ax+0.25})
        return offsets
    
    def PyReadPositions(self):
        return self._instrument.read_all_positions()

    def PyReadPositionsAndOffsets(self):
        pos_off = []
        try:
            offsets = self.PyReadOffsets()
            positions = self.PyReadPositions()
        except:
            return False
        
        for i in range(0,len(offsets)):
            pos_off.append({"number": i+1,"currentOffset":offsets[i],"desiredOffset":offsets[i],"currentPosition": positions[i],"desiredPosition": positions[i]})
        
        return pos_off


if __name__ == '__main__':
    api = Api()
    webview.create_window('Todos magnificos', 'dist/index.html', js_api=api, min_size=(650, 1200))
    webview.start()