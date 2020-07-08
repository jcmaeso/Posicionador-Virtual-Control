import pyvisa
import time
import sys


ax = int(sys.argv[1])
offset = float(sys.argv[2])

print(ax)
print(offset)
print("A{}<".format(ax))
print("O"+"".join("{:06.2f}".format(offset).split("."))+"<")


if(ax <= 0 or ax > 6):
    print("Axis incorrect")
    exit(1)

if(offset < 0 or offset > 359.99):
    print("Offset incorrect")
    exit(1)

rm = pyvisa.ResourceManager()

#print(rm.list_resources())
inst = rm.open_resource("GPIB0::4::INSTR")
inst.write_termination = "\r\n"
inst.timeout = 10
inst.write("H")
inst.write("L")
inst.write("A{}<".format(ax))
inst.write("O"+"".join("{:06.2f}".format(offset).split("."))+"<")
inst.write("H")
inst.write("K<")
time.sleep(0.01)
inst.close()