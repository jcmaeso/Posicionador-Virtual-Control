import pyvisa
import time



rm = pyvisa.ResourceManager()
#print(rm.list_resources())
inst = rm.open_resource("GPIB0::4::INSTR")
inst.write_termination = "\r\n"
inst.timeout = 10
inst.write("L")
inst.write("A4<")
inst.write("O02000<")
inst.write("H")
inst.write("K<")
time.sleep(1)
inst.close()



inst = rm.open_resource("GPIB0::4::INSTR",query_delay=1)
inst.write_termination = "\r\n"
inst.read_termination = "\r\n"
inst.timeout = 10
inst.write("S")
time.sleep(1)
print(str(inst.query("A4<O<")))
inst.close();