import pyvisa
import time

rm = pyvisa.ResourceManager()

eje_principal = 2
destino_principal = 359.82
direccion_principal = "d" #f forward r reverse d (El posicionador elige el camino mas corto)
velocidad_principal = 90

#NO Tocar
eje_secundario = None
destino_secundario = 90
direccion_secundario = "f" #f forward r reverse
velocidad_secundario = 90

#print(rm.list_resources())
inst = rm.open_resource("GPIB0::4::INSTR",query_delay=0.1)
inst.write_termination = "\r\n"
inst.timeout = 2000
inst.write("H")
inst.write("L")
inst.write("Aa{}<".format(eje_principal))
if eje_secundario != None:
    inst.write("Ae{}<".format(eje_secundario))
inst.write("Pat"+"".join("{:06.2f}".format(destino_principal).split("."))+"<")
if eje_secundario != None:
    inst.write("Pet"+"".join("{:06.2f}".format(destino_secundario).split("."))+"<")
inst.write("Da"+direccion_principal+"<")
if eje_secundario != None:
    inst.write("De"+direccion_secundario+"<")
inst.write("Va"+"".join("{:06.1f}".format(velocidad_principal).split("."))+"<")
if eje_secundario != None:
    inst.write("Ve"+"".join("{:06.1f}".format(velocidad_secundario).split("."))+"<")
inst.write("MT")
inst.write("H")
time.sleep(0.1)
inst.write("G")
while(True):
    if(inst.stb == 88):
        break
    time.sleep(0.4)
print("Salgo")
inst.close()