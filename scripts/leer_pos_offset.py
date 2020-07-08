import pyvisa
import time



rm = pyvisa.ResourceManager()
inst = rm.open_resource("GPIB0::4::INSTR",query_delay=0.1)
inst.write_termination = "\r\n"
inst.read_termination = "\r\n"
inst.clear()
time.sleep(1)
inst.flush(pyvisa.constants.VI_READ_BUF_DISCARD | pyvisa.constants.VI_WRITE_BUF_DISCARD)
inst.timeout = 100
inst.write("H")
inst.write("E1<")
time.sleep(1)
print(str(inst.query("X2<")))
inst.write("H")
inst.write("E2<")
time.sleep(1)
print(str(inst.query("X2<")))
inst.write("E3<")
time.sleep(1)
print(str(inst.query("X2<")))
inst.write("E4<")
time.sleep(1)
print(str(inst.query("X2<")))
inst.write("S")
time.sleep(1)
print(str(inst.query("A1<O<")))
time.sleep(1)
print(str(inst.query("A2<O<")))
time.sleep(1)
inst.write("H")
inst.close();


inst = rm.open_resource("GPIB0::4::INSTR",query_delay=0.1)
inst.write_termination = "\r\n"
inst.read_termination = "\r\n"
inst.clear()
time.sleep(1)
inst.flush(pyvisa.constants.VI_READ_BUF_DISCARD | pyvisa.constants.VI_WRITE_BUF_DISCARD)
inst.timeout = 100
inst.write("S")
print(str(inst.query("A3<O<")))
time.sleep(0.5)
print(str(inst.query("A4<O<")))
inst.write("H")
inst.close();

"""#print(rm.list_resources())
inst = rm.open_resource("GPIB0::4::INSTR")
inst.write_termination = "\r\n"
inst.timeout = 10
inst.write("H")
inst.write("L")
inst.write("A4<")
inst.write("O01432<")
inst.write("H")
inst.write("K<")
time.sleep(0.01)
inst.close()"""



"""inst = rm.open_resource("GPIB0::4::INSTR",query_delay=1)
inst.write_termination = "\r\n"
inst.read_termination = "\r\n"
inst.timeout = 10
inst.write("H")
inst.write("S")
time.sleep(0.01)
print(str(inst.query("A4<O<")))
inst.close();"""