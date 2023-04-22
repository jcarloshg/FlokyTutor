
import { DataStore } from "aws-amplify";
import { Activity, ActivityLevel, ActivityType, Answer, Topic } from "src/contexts/shared/domain/models";

interface inputTopic {
    name: string;
    conceptInformation: string[];
    examples: string[];
}

interface inputActivity {
    name: String;
    conceptInformation: String[];
    examples: String[];
}

const topics: inputTopic[] = [
    // A1
    {
        name: "Saludos y despedidas",
        conceptInformation: ["Podemos encontrar dos tipos de saludos: formales e informales.", "Los saludos informales los puedes utilizar con familiares, amigos, colegas y personas en general con los que te lleves bien y tengas confianza."],
        examples: ["Good morning/afternoon/evening (Buenos días/tardes/noches) -Este saludo varía de acuerdo con la hora del día", "How are you?(¿Cómo está?) - Dos maneras formales para saludar en inglés; sin embargo, la primera está cayendo en desuso."],
    },
    {
        // https://whatsup.es/blog/aprende-como-hacer-una-descripcion-de-una-ciudad-en-ingles
        name: "Lugar donde vivimos",
        conceptInformation: ["Podemos encontrar dos tipos de saludos: formales e informales.", "Los saludos informales los puedes utilizar con familiares, amigos, colegas y personas en general con los que te lleves bien y tengas confianza."],
        examples: [
            "Airport. (aeropuerto)",
            "Ancient. (antigua)",
            "Apartment block. (edificio)",
            "Avenue. (avenida)",
            "Bakery. (panadería)",
            "Bank. (banco)",
            "Beautiful. (bonita)",
            "Big. (grande)",
            "Boring. (aburrida)",
            "Bus station. (Estación de autobuses)",
            "Bus stop. (parada de autobús)",
            "Busy. (ocupada, llena)",
            "Butcher. (carnicería)",
            "Calm. (tranquila)",
            "Car park. (parking)",
            "Cheap. (barata)",
            "church. (iglesia)",
            "cinema  cine)",
            "Crowded. (aglomerada)",
            "Dress shop. (tienda de ropa)",
            "Exciting. (emocionante)",
            "Expensive. (cara)",
            "Fire station. (station de bomberos)",
            "Grocery. (colmado)",
            "Gym. (gimnasio)",
            "Hairdressers. (peluquería)",
            "Huge. (enorme)",
            "Interesting. (interesante)",
            "Modern. (moderna)",
            "Pavement. (acera)",
            "Pedestrian crossing. (paso de cebra)",
            "Pharmacy. (farmacia)",
            "Polluted. (contaminada)",
            "Post office. (Correos)",
            "Quiet. (tranquila)",
            "Road. (carretera)",
            "Second–hand shop. (tienda de segunda mano)",
            "Shopping center. (centro comercial)",
            "Small. (pequeña)",
            "Square. (plaza)",
            "Street. (calle)",
            "Tailors. (sastre)",
            "Town hall. (ayuntamiento)",
            "Traffic light. (semáforo)",
            "Train station. (estación de tren)",
            "Unpleasant. (desagradable)",
        ],
    },
    {
        // https://englishlive.ef.com/es-mx/blog/tips-para-estudiar/hablando-de-tu-familia-en-ingles/
        name: "Yo y mi familia",
        conceptInformation: [
            "Una persona puede tener un “brother” o “sister“.",
            "La hermana de mamá es 'aunt', el hermano de mi padre es 'uncle'",
            "Los primos en ingles es 'cousins'",
        ],
        examples: [
            "No, I am an only child. What about you? (No, yo soy un hijo único. ¿Y tú?)",
            "I have 2 brothers and a sister! (¡Tengo dos hermanos y una hermana!)",
            "Wow, a big family… I would have liked a sister. (Wow, una gran familia… Me hubiera gustado tener una hermana.)",
        ],
    },
    {
        // https://whatsup.es/blog/aprende-decir-el-tiempo-en-ingles-how-weather
        name: "Clima",
        conceptInformation: [
            "En inglés, el pronóstico del tiempo se dice weather forecast. ",
            "Una de las soluciones para crear adjetivos que usa el idioma inglés es la de agregar -ly a ciertos sustantivos. (Sunny. (Soleado)",
            "Para hablar del tiempo en inglés, es decir, de qué clima hace en este momento, se suele usar la construcción: It’s + adjetivo/sustantivo/verbo"
        ],
        examples: [
            "Sun. (sol)",
            "Wind. (viento)",
            "Heat. (calor)",
            "Cloud. (nube)",
            "Fog. (niebla)",
            "Ice. (hielo)",
            "Rain. (lluvia)",
            "Weather. (clima)",
            "Humidity. (humedad)",
            "Temperature. (temperatura)",
            "Sunny. (Soleado)",
            "Cloudy. (nublado)",
            "Stormy. (tormentoso)",
            "Foggy. (nublado, lleno de niebla)",
            "Windy. (ventoso)",
            "Showery. (lluvioso)",
            "Icy. (helado)",
            "Winter. (Invierno)",
            "Spring. (primavera)",
            "Summer. (verano)",
            "Atumn/Fall. (otoño)",
        ],
    },
    {
        // https://lingokids.com/es/ingles-para-ninos/en-el-doctor
        name: "Enfermedades",
        conceptInformation: [
            "Desde el punto de vista del paciente es fundamental que podamos expresar claramente nuestros síntomas para que el doctor realice su diagnóstico.",
            "Aunque parezca mentira saber inglés puede salvarte la vida.",
            "Saber los síntomas en inglés más comunes es esencial para la comunicación entre el paciente y el doctor.",
        ],
        examples: [
            "Nariz Constipada : Runny Nose",
            "Dolor de Oído : Ear Ache",
            "Tos : Coughing",
            "Dolor de Garganta : Sore Throats",
            "Dolor de Estómago : Stomach Ache",
            "Estornudos : Sneeze",
            "Dolor: Pain",
            "Fiebre : Fever",
        ],
    },
    // A2
    {
        name: "Fin de semana",
        conceptInformation: [
            "Sirve para comunicar ideas y sucesos que tuvieron lugar en el pasado.",
            "El past simple, o pasado simple, es uno de los tiempos verbales más importantes",
            "Los verbos en pasado tienen conjugaciones muy diferentes, en el inglés hay verbos que conservan su forma tanto en presente como pasado, y los más irregulares llegan a tener solo hasta tres formas. ",
        ],
        examples: [
            "I went to London. It was great!. (Fui a Londres.¡Fue grandioso!)",
            "I was there for 5 days. (Estuve allí durante 5 días.)",
            "Did you like the food?. (¿Te gustó la comida?)",
        ],
    },
    {
        // https://www.ingles.com/guia/como-hablar-del-trabajo-en-ingles
        name: "Hablar en el trabajo",
        conceptInformation: [
            "Debemos recordar que si queremos hablar sobre nuestra profesión u ocupación en inglés, a diferencia del español, tenemos que usar el artículo definido a o an.",
            "Hoy en día, existen múltiples maneras de trabajar. ¿Eres un employee (empleado) o un  freelancer (trabajador por cuenta propia)?",
            "será necesario incorporar vocabulario más específico. ¿Tienes una job offer(oferta de trabajo) en un país anglófono? ¡Necesitarás hablar de cosas como tu gross wage (salario bruto)!"
        ],
        examples: [
            "part-time job - trabajo de media jornada",
            "full-time job - trabajo de tiempo completo",
            "temporary job - trabajo temporario",
            "entry - level job - trabajo básico",
            "internship - pasantía",
            "day shift - turno de día",
            "night shift - turno de noche",
            "skilled work trabajo calificado",
            "unskilled work - trabajo no calificado",
            "volunteer work - trabajo voluntario",
        ],
    },
    {
        // https://www.ef.com.mx/blog/language/13-frases-en-ingles-basico-mas-utiles-en-el-extranjero/
        name: "Frases y expresiones",
        conceptInformation: [
            "Estas frases y expresiones son usadas en frecuencia en distintos contextos como familiares, compras, geografía local y trabajo",
        ],
        examples: [
            "My name is Hugo. What’s yours?. (Me llamo Hugo. ¿Y tú?).",
            "I don’t understand. (No lo entiendo).",
            "Can you please repeat that?. (¿Puedes repetir eso?)",
            "I need help. (Necesito ayuda.)"
        ],
    },
    {
        name: "Planes de vacaciones",
        conceptInformation: [
            "Funciona para poder hablar de tus objetivos a corto, mediano y largo plazo.",
            "Para hablar del planes en el futuro hacemos uso de palabras clave como 'will' & 'going to' ",
        ],
        examples: [
            "I will pick you up tomorrow. (Yo te voy a recoger mañana)",
            "Will you marry me?. (¿Te casarías conmigo?)",
            "The concert is going to be the best of the year!. (El concierto va a ser el mejor del año)",
        ],
    },
]

const topicsCreated: Topic[] = [
    {
        "id": "88cd6826-3dad-416e-9ed8-4c9f17a7ccdc",
        "name": "Saludos y despedidas",
        "conceptInformation": [
            "Podemos encontrar dos tipos de saludos: formales e informales.",
            "Los saludos informales los puedes utilizar con familiares, amigos, colegas y personas en general con los que te lleves bien y tengas confianza."
        ],
        "examples": [
            "Good morning/afternoon/evening (Buenos días/tardes/noches) -Este saludo varía de acuerdo con la hora del día",
            "How are you?(¿Cómo está?) - Dos maneras formales para saludar en inglés; sin embargo, la primera está cayendo en desuso."
        ],
    },
    {
        "id": "d4307f49-ee44-4a0a-a84f-9fc48b6eda31",
        "name": "Lugar donde vivimos",
        "conceptInformation": [
            "Podemos encontrar dos tipos de saludos: formales e informales.",
            "Los saludos informales los puedes utilizar con familiares, amigos, colegas y personas en general con los que te lleves bien y tengas confianza."
        ],
        "examples": [
            "Airport. (aeropuerto)",
            "Ancient. (antigua)",
            "Apartment block. (edificio)",
            "Avenue. (avenida)",
            "Bakery. (panadería)",
            "Bank. (banco)",
            "Beautiful. (bonita)",
            "Big. (grande)",
            "Boring. (aburrida)",
            "Bus station. (Estación de autobuses)",
            "Bus stop. (parada de autobús)",
            "Busy. (ocupada, llena)",
            "Butcher. (carnicería)",
            "Calm. (tranquila)",
            "Car park. (parking)",
            "Cheap. (barata)",
            "church. (iglesia)",
            "cinema  cine)",
            "Crowded. (aglomerada)",
            "Dress shop. (tienda de ropa)",
            "Exciting. (emocionante)",
            "Expensive. (cara)",
            "Fire station. (station de bomberos)",
            "Grocery. (colmado)",
            "Gym. (gimnasio)",
            "Hairdressers. (peluquería)",
            "Huge. (enorme)",
            "Interesting. (interesante)",
            "Modern. (moderna)",
            "Pavement. (acera)",
            "Pedestrian crossing. (paso de cebra)",
            "Pharmacy. (farmacia)",
            "Polluted. (contaminada)",
            "Post office. (Correos)",
            "Quiet. (tranquila)",
            "Road. (carretera)",
            "Second–hand shop. (tienda de segunda mano)",
            "Shopping center. (centro comercial)",
            "Small. (pequeña)",
            "Square. (plaza)",
            "Street. (calle)",
            "Tailors. (sastre)",
            "Town hall. (ayuntamiento)",
            "Traffic light. (semáforo)",
            "Train station. (estación de tren)",
            "Unpleasant. (desagradable)"
        ],
    },
    {
        "id": "25b20744-fc71-45ad-9476-849105ff54af",
        "name": "Yo y mi familia",
        "conceptInformation": [
            "Una persona puede tener un “brother” o “sister“.",
            "La hermana de mamá es 'aunt', el hermano de mi padre es 'uncle'",
            "Los primos en ingles es 'cousins'"
        ],
        "examples": [
            "No, I am an only child. What about you? (No, yo soy un hijo único. ¿Y tú?)",
            "I have 2 brothers and a sister! (¡Tengo dos hermanos y una hermana!)",
            "Wow, a big family… I would have liked a sister. (Wow, una gran familia… Me hubiera gustado tener una hermana.)"
        ],
    },
    {
        "id": "3cf76d94-c635-4c6b-8245-9dda73dc6450",
        "name": "Clima",
        "conceptInformation": [
            "En inglés, el pronóstico del tiempo se dice weather forecast. ",
            "Una de las soluciones para crear adjetivos que usa el idioma inglés es la de agregar -ly a ciertos sustantivos. (Sunny. (Soleado)",
            "Para hablar del tiempo en inglés, es decir, de qué clima hace en este momento, se suele usar la construcción: It’s + adjetivo/sustantivo/verbo"
        ],
        "examples": [
            "Sun. (sol)",
            "Wind. (viento)",
            "Heat. (calor)",
            "Cloud. (nube)",
            "Fog. (niebla)",
            "Ice. (hielo)",
            "Rain. (lluvia)",
            "Weather. (clima)",
            "Humidity. (humedad)",
            "Temperature. (temperatura)",
            "Sunny. (Soleado)",
            "Cloudy. (nublado)",
            "Stormy. (tormentoso)",
            "Foggy. (nublado, lleno de niebla)",
            "Windy. (ventoso)",
            "Showery. (lluvioso)",
            "Icy. (helado)",
            "Winter. (Invierno)",
            "Spring. (primavera)",
            "Summer. (verano)",
            "Atumn/Fall. (otoño)"
        ],
    },
    {
        "id": "27f4ecc1-d0d4-485b-889f-4bf2f0406e25",
        "name": "Enfermedades",
        "conceptInformation": [
            "Desde el punto de vista del paciente es fundamental que podamos expresar claramente nuestros síntomas para que el doctor realice su diagnóstico.",
            "Aunque parezca mentira saber inglés puede salvarte la vida.",
            "Saber los síntomas en inglés más comunes es esencial para la comunicación entre el paciente y el doctor."
        ],
        "examples": [
            "Nariz Constipada : Runny Nose",
            "Dolor de Oído : Ear Ache",
            "Tos : Coughing",
            "Dolor de Garganta : Sore Throats",
            "Dolor de Estómago : Stomach Ache",
            "Estornudos : Sneeze",
            "Dolor: Pain",
            "Fiebre : Fever"
        ],
    },
    {
        "id": "b8230f02-d93f-4733-9714-ff66e8b5ee43",
        "name": "Fin de semana",
        "conceptInformation": [
            "Sirve para comunicar ideas y sucesos que tuvieron lugar en el pasado.",
            "El past simple, o pasado simple, es uno de los tiempos verbales más importantes",
            "Los verbos en pasado tienen conjugaciones muy diferentes, en el inglés hay verbos que conservan su forma tanto en presente como pasado, y los más irregulares llegan a tener solo hasta tres formas. "
        ],
        "examples": [
            "I went to London. It was great!. (Fui a Londres.¡Fue grandioso!)",
            "I was there for 5 days. (Estuve allí durante 5 días.)",
            "Did you like the food?. (¿Te gustó la comida?)"
        ],
    },
    {
        "id": "3ef63d6d-f8f2-469c-ab44-9199961c881d",
        "name": "Hablar en el trabajo",
        "conceptInformation": [
            "Debemos recordar que si queremos hablar sobre nuestra profesión u ocupación en inglés, a diferencia del español, tenemos que usar el artículo definido a o an.",
            "Hoy en día, existen múltiples maneras de trabajar. ¿Eres un employee (empleado) o un  freelancer (trabajador por cuenta propia)?",
            "será necesario incorporar vocabulario más específico. ¿Tienes una job offer(oferta de trabajo) en un país anglófono? ¡Necesitarás hablar de cosas como tu gross wage (salario bruto)!"
        ],
        "examples": [
            "part-time job - trabajo de media jornada",
            "full-time job - trabajo de tiempo completo",
            "temporary job - trabajo temporario",
            "entry - level job - trabajo básico",
            "internship - pasantía",
            "day shift - turno de día",
            "night shift - turno de noche",
            "skilled work trabajo calificado",
            "unskilled work - trabajo no calificado",
            "volunteer work - trabajo voluntario"
        ],
    },
    {
        "id": "2f7dfe16-6cfb-46e1-8a57-b66bc502bbef",
        "name": "Frases y expresiones",
        "conceptInformation": [
            "Estas frases y expresiones son usadas en frecuencia en distintos contextos como familiares, compras, geografía local y trabajo"
        ],
        "examples": [
            "My name is Hugo. What’s yours?. (Me llamo Hugo. ¿Y tú?).",
            "I don’t understand. (No lo entiendo).",
            "Can you please repeat that?. (¿Puedes repetir eso?)",
            "I need help. (Necesito ayuda.)"
        ],
    },
    {
        "id": "bb2647ae-2d3e-445d-876d-32d937a1b323",
        "name": "Planes de vacaciones",
        "conceptInformation": [
            "Funciona para poder hablar de tus objetivos a corto, mediano y largo plazo.",
            "Para hablar del planes en el futuro hacemos uso de palabras clave como 'will' & 'going to' "
        ],
        "examples": [
            "I will pick you up tomorrow. (Yo te voy a recoger mañana)",
            "Will you marry me?. (¿Te casarías conmigo?)",
            "The concert is going to be the best of the year!. (El concierto va a ser el mejor del año)"
        ],
    }
];

const activitiesToLoad = [

    // hola
    { activityLevel: "ActivityLevel.A1", activityType: "ActivityType.WRITING", topic: "", name: "HOLA", question: "Ves a tu compañero de clases", questionBody: "¿Cómo lo saludas?", answers: { correct: "Hello", incorrect_1: "Hola", incorrect_2: "Gelow", incorrect_3: "Good night", pronunciation: "həˈlō", } },
    { activityLevel: "ActivityLevel.A1", activityType: "ActivityType.READING", topic: "", name: "HOLA", question: "Ves a tu compañero de clases", questionBody: "¿Cómo lo saludas?", answers: { correct: "Hello", incorrect_1: "Hola", incorrect_2: "Gelow", incorrect_3: "Good night", pronunciation: "həˈlō", } },
    { activityLevel: "ActivityLevel.A1", activityType: "ActivityType.TALKING", topic: "", name: "HOLA", question: "Ves a tu compañero de clases", questionBody: "¿Cómo lo saludas?", answers: { correct: "Hello", incorrect_1: "Hola", incorrect_2: "Gelow", incorrect_3: "Good night", pronunciation: "həˈlō", } },
    { activityLevel: "ActivityLevel.A1", activityType: "ActivityType.LISTENING", topic: "", name: "HOLA", question: "Ves a tu compañero de clases", questionBody: "¿Cómo lo saludas?", answers: { correct: "Hello", incorrect_1: "Hola", incorrect_2: "Gelow", incorrect_3: "Good night", pronunciation: "həˈlō", } },

    // good morning
    { activityLevel: "ActivityLevel.A1", activityType: "ActivityType.WRITING", topic: "", name: "Buenos días", question: "Tu profesor pregunta, ¿Cómo se dice 'buenos días' en inglés?", questionBody: "¿Cómo respondes?", answers: { correct: "Good morning", incorrect_1: "Hola", incorrect_2: "Buenas", incorrect_3: "Good night", pronunciation: "ɡo͝od ˈmôrniNG", } },
    { activityLevel: "ActivityLevel.A1", activityType: "ActivityType.READING", topic: "", name: "Buenos días", question: "Tu profesor pregunta, ¿Cómo se dice 'buenos días' en inglés?", questionBody: "¿Cómo respondes?", answers: { correct: "Good morning", incorrect_1: "Hola", incorrect_2: "Buenas", incorrect_3: "Good night", pronunciation: "ɡo͝od ˈmôrniNG", } },
    { activityLevel: "ActivityLevel.A1", activityType: "ActivityType.TALKING", topic: "", name: "Buenos días", question: "Tu profesor pregunta, ¿Cómo se dice 'buenos días' en inglés?", questionBody: "¿Cómo respondes?", answers: { correct: "Good morning", incorrect_1: "Hola", incorrect_2: "Buenas", incorrect_3: "Good night", pronunciation: "ɡo͝od ˈmôrniNG", } },
    { activityLevel: "ActivityLevel.A1", activityType: "ActivityType.LISTENING", topic: "", name: "Buenos días", question: "Tu profesor pregunta, ¿Cómo se dice 'buenos días' en inglés?", questionBody: "¿Cómo respondes?", answers: { correct: "Good morning", incorrect_1: "Hola", incorrect_2: "Buenas", incorrect_3: "Good night", pronunciation: "ɡo͝od ˈmôrniNG", } },

    // que bueno verte
    { activityLevel: "ActivityLevel.A1", activityType: "ActivityType.WRITING", topic: "", name: "Que bueno verte", question: "Te casas y tu amiga va a la boda", questionBody: "¿Cómo la saludas?", answers: { correct: "Good to see you", incorrect_1: "My gift?", incorrect_2: "Gracias por venir", incorrect_3: "You will love the dinner", pronunciation: "ɡo͝od to͞o sē yo͞o", } },
    { activityLevel: "ActivityLevel.A1", activityType: "ActivityType.READING", topic: "", name: "Que bueno verte", question: "Te casas y tu amiga va a la boda", questionBody: "¿Cómo la saludas?", answers: { correct: "Good to see you", incorrect_1: "My gift?", incorrect_2: "Gracias por venir", incorrect_3: "You will love the dinner", pronunciation: "ɡo͝od to͞o sē yo͞o", } },
    { activityLevel: "ActivityLevel.A1", activityType: "ActivityType.TALKING", topic: "", name: "Que bueno verte", question: "Te casas y tu amiga va a la boda", questionBody: "¿Cómo la saludas?", answers: { correct: "Good to see you", incorrect_1: "My gift?", incorrect_2: "Gracias por venir", incorrect_3: "You will love the dinner", pronunciation: "ɡo͝od to͞o sē yo͞o", } },
    { activityLevel: "ActivityLevel.A1", activityType: "ActivityType.LISTENING", topic: "", name: "Que bueno verte", question: "Te casas y tu amiga va a la boda", questionBody: "¿Cómo la saludas?", answers: { correct: "Good to see you", incorrect_1: "My gift?", incorrect_2: "Gracias por venir", incorrect_3: "You will love the dinner", pronunciation: "ɡo͝od to͞o sē yo͞o", } },

];


export const createTopics = async () => {
    topics.forEach(async (topic, index, array) => {
        const newTopic: Topic = new Topic({
            name: topic.name,
            conceptInformation: topic.conceptInformation,
            examples: topic.examples,
        });
        const topicCreated: Topic = await DataStore.save(newTopic);
        console.log(topicCreated);
    });
}

export const getAllTopics = async () => {
    const topics = await DataStore.query(Topic);
    console.log({ topics });
}

// export const createActivities = async () => {
//     try {

//     } catch (error) {
//         const newActivitie = new Activity({
//             activityLevel: ActivityLevel.A1,
//             activityType: ActivityType.LISTENING,
//             activityTopicId: "",
//             answers: { correct: "Hello", incorrect_1: "Hola", incorrect_2: "Gelow", incorrect_3: "Good night" },
//             name: "",
//             question: "",
//             questionBody: "",
//             topic: 
//         });
//         const topicCreated: Topic = await DataStore.save();
//     }
// }