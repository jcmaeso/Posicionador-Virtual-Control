import os
import webview
from control import Instrument

class Api():
    def __init__(self):
        self._instrument = Instrument.get_instance()
        self._n_axis = 6
    def PyConnect(self):
        self._instrument.tester()

    def PyGetNumberAxis(self):
        print("Called Get Number Axis")
        return self._n_axis

    def PyWriteOffset(self,axis):
        print("Called WriteOffset")
        self._instrument.write_offset(axis['number'],axis['desiredOffset'])
    
    def PyReadOffsets(self):
        offsets = []
        for ax in range(1,self._n_axis+1):
            #read_ofset = self._instrument.read_offset(ax)
            #DebugTest
            #offsets.append({"number": ax,"currentOffset":read_ofset,"desiredOffset":read_ofset})
            offsets.append({"number": ax,"currentOffset":ax+0.25,"desiredOffset":ax+0.25})
        return offsets

if __name__ == '__main__':
    api = Api()
    webview.create_window('Todos magnificos', 'dist/index.html', js_api=api, min_size=(650, 1200))
    webview.start()