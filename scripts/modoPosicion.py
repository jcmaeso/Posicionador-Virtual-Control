import pyvisa
import time

#Variables
eje_principal = 1
origen_principal = 350
fin_principal = 10
velocidad_principal = 10;
incremento_angular = 0.1


rm = pyvisa.ResourceManager()


#Numero entero entre
#print(rm.list_resources())
inst = rm.open_resource("GPIB0::4::INSTR")
inst.write_termination = "\r\n"
inst.timeout = 10
inst.write("H")
inst.write("L")
inst.write("Aa{}<".format(eje_principal))
inst.write("Pas"+"".join("{:06.2f}".format(origen_principal).split("."))+"<")
inst.write("Pab"+"".join("{:06.2f}".format(fin_principal).split("."))+"<")
inst.write("Va"+"".join("{:06.1f}".format(velocidad_principal).split("."))+"<")
inst.write("I"+"".join("{:06.3f}".format(incremento_angular).split("."))+"<")
inst.write("MR")
inst.write("H")
time.sleep(0.1)
inst.write("G")
while(True):
    if(inst.stb == 88):
        break
    time.sleep(0.4)
inst.close()
