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

    for i in range(50):
        persona = {}

        persona["nombre"] = random.choice(nombres)
        persona["aPaterno"] = random.choice(apellidos)
        persona["aMaterno"] = random.choice(apellidos)
        persona["correo"] = (persona["nombre"] + "." + persona["aPaterno"] + "." + persona["aMaterno"]).lower()
        persona["clave"] = 123456

        personas["alumnos"].append(persona)

    with open("alumnos.json", "w+") as file:
        file.write(json.dumps(personas, indent=1))

main()