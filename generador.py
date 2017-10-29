import random
import json

nombres = ["Rafael", "Gildardo", "Roberto", "Manuel", "Anairene",
"Eunice", "Gabriela", "David", "Humberto", "Iván", "Carlos", 
"José", "Juan", "Pedro", "Jesús", "Victoria", "María", "Everardo",
"Evelio", "Eloísa", "Omar", "Leopoldo", "Francisco"]

apellidos = ["Peralta", "Blanco", "Rosas", "Urías", "Carrillo", "León", 
"Ishihara", "Moros", "Villegas", "Rios", "Galván", "Domínguez", "Velasco",
"Ramírez", "Covarrubias", "López", "Gómez", "Pérez", "Gutiérrez", "Kubo",
"Meza", "Canseco", "García", "Moran", "Xochihua", "Álvarez", "Martínez", "Juárez"]

def main():
    personas = {}
    personas["alumnos"] = []

    matricula = 342400

    for i in range(50):
        persona = {}

        persona["nombre"] = random.choice(nombres)
        persona["aPaterno"] = random.choice(apellidos)
        persona["aMaterno"] = random.choice(apellidos)
        persona["matricula"] = str(matricula)
        matricula += 1

        persona["correo"] = (persona["nombre"] + "." + persona["aPaterno"] + "." + persona["aMaterno"]).lower()
        persona["clave"] = "123456"

        persona["fecha_nacimiento"] = {}

        persona["fecha_nacimiento"]["dia"] = random.randint(1, 28)
        persona["fecha_nacimiento"]["mes"] = random.randint(1, 12)
        persona["fecha_nacimiento"]["ano"] = random.randint(1985, 1999)

        personas["alumnos"].append(persona)

    with open("alumnos.json", "w+", encoding="utf-8") as file:
        file.write(json.dumps(personas, indent=1))

main()