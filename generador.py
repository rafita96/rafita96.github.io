import random, json, collections

nombres = ["Rafael", "Gildardo", "Roberto", "Manuel", "Anairene",
"Eunice", "Gabriela", "David", "Humberto", "Iván", "Carlos", 
"José", "Juan", "Pedro", "Jesús", "Victoria", "María", "Everardo",
"Evelio", "Eloísa", "Omar", "Leopoldo", "Francisco"]

apellidos = ["Peralta", "Blanco", "Rosas", "Urías", "Carrillo", "León", 
"Ishihara", "Moros", "Villegas", "Rios", "Galván", "Domínguez", "Velasco",
"Ramírez", "Covarrubias", "López", "Gómez", "Pérez", "Gutiérrez", "Kubo",
"Meza", "Canseco", "García", "Moran", "Xochihua", "Álvarez", "Martínez", "Juárez"]

facultades = { "Ciencias" : ["Ciencias Computacionales", "Física", "Matemáticas", "Biología"], 
"Marinas" : ["Oceanología", "Ciencias Ambientales", "Biotecnología en Acuacultura"],
"Ingeniería" : ["Ingeniero Civil", "Ingeniero Electrónico", "Ingeniero en Computación",
                "Ingeniero Industrial", "Arquitecto", "Bioingeniero", "Ingeniero en Nanotecnologia"],
"Gastronomía" : ["Gastronomía"],
"Deportes" : ["Actividad Física"],
"Ciencias de la Salud" : ["Enfermería", "Medicina"]
}

etapas = ["Basica", "Disciplinaria", "Terminal", "Optativa"]
examenes = ["Ord", "Extra"]

def quitarAcentos(palabra):

    palabra = palabra.replace("í", "i")
    palabra = palabra.replace("é", "e")
    palabra = palabra.replace("á", "a")
    palabra = palabra.replace("ó", "o")
    palabra = palabra.replace("ú", "u")

    return palabra

def alumnos():
    personas = {}
    personas["alumnos"] = []

    matricula = 342400

    for i in range(50):
        persona = collections.OrderedDict()

        persona["matricula"] = str(matricula)
        persona["nombre"] = random.choice(nombres)
        persona["aPaterno"] = random.choice(apellidos)
        persona["aMaterno"] = random.choice(apellidos)
        
        matricula += 1

        correo = (persona["nombre"] + "." + persona["aPaterno"] + "." + persona["aMaterno"]).lower()
            
        correo = quitarAcentos(correo)

        persona["correo"] = correo
        persona["clave"] = "123456"

        persona["fecha_nacimiento"] = {}

        persona["fecha_nacimiento"]["dia"] = random.randint(1, 28)
        persona["fecha_nacimiento"]["mes"] = random.randint(1, 12)
        persona["fecha_nacimiento"]["ano"] = random.randint(1985, 1999)

        persona["facultad"] = random.choice(list(facultades.keys()))
        persona["carrera"] = random.choice( facultades[persona["facultad"]] )

        personas["alumnos"].append(persona)

    with open("alumnos.json", "w+", encoding="utf-8") as file:
        file.write(json.dumps(personas, indent=1))

def kardex():
    kardexs = {}
    kardexs["kardex"] = []


    matricula = 342400

    for i in range(50):
        kardex = {}

        
        kardex["matricula"] = matricula

        matricula += 1

        kardex["materias"] = []
        cant = random.randint(10, 15)
        for i in range(cant):
            materia = {}
            materia["etapa"] = random.choice(etapas)
            materia["codigo"] = random.randint(1, 200)

            materia["calificacion"] = round(random.uniform(60, 100), 2)
            kardex["materias"].append(materia)
        
            
        kardex["cred_requeridos"] = random.randint(250, 350)
        kardex["cred_cursados"] = random.randint(250, kardex["cred_requeridos"])


        kardexs["kardex"].append(kardex)

    with open("kardexs.json", "w+", encoding="utf-8") as file:
        file.write(json.dumps(kardexs, indent=1))

def tutores():
    tutores = {}
    tutores["tutores"] = []
    
    noEmpleado = 243400
    matriculas = [x + 342400 for x in range(50)]
    
    for _ in range(10):
        tutor = collections.OrderedDict()
        tutor["noEmpleado"] = noEmpleado
        noEmpleado += 1
        tutor["nombre"] = random.choice(nombres)
        tutor["aPaterno"] = random.choice(apellidos)
        tutor["aMaterno"] = random.choice(apellidos)
        correo = ("%s.%s" % (tutor["nombre"], tutor["aPaterno"])).lower()
        correo = quitarAcentos(correo)
        tutor["correo"] = correo
        tutor["clave"] = 123456
        tutor["alumnos"] = []
        for _ in range(5):
            alumno = random.choice(matriculas)
            tutor["alumnos"].append(alumno)
            matriculas.remove(alumno)
        tutores["tutores"].append(tutor)

    with open("tutores.json", "w+", encoding="utf-8") as f:
        f.write(json.dumps(tutores, indent=1))