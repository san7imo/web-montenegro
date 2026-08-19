import { getServiceCardDescription } from './serviceCardDescriptions'

export type PricingCategory = 'oasis' | 'tez' | 'filo' | 'brote' | 'hebra' | 'tacto' | 'raiz'

export type ServicePriceOption = {
  bonus?: string
  group?: string
  name: string
  price: string
}

export type ServicePricing = {
  bonus?: string
  description: string
  id: string
  options: ServicePriceOption[]
  title: string
}

/**
 * Tarifario transcrito de PRECIOS SERVICIOS MONTENEGRO (1).xlsx.
 * Los nombres de servicios y packs se conservan como aparecen en el documento.
 */
export const servicePricingByCategory = {
  "oasis": [
    {
      "id": "cerrar-matriz",
      "title": "Cerrar Matriz",
      "description": "Tratamiento de entrada posparto o cierre simbólico. Incluye: Bienvenida sensorial, aromaterapia, masaje de bienestar femenino (20 min), compresas de hierbas calientes (10 min), faja de contención (10 min) y té relajante.",
      "options": [
        {
          "name": "Ritual Matriz Esencial",
          "price": "95 €"
        },
        {
          "name": "Ritual Matriz Estándar",
          "price": "190 €"
        },
        {
          "name": "Ritual Matriz Avanzado",
          "price": "285 €"
        }
      ]
    },
    {
      "id": "exfoliacion-corporal-frutal",
      "title": "Exfoliación Corporal Frutal",
      "description": "Tarifa Única. Incluye: Diagnóstico exprés, toallas calientes, peeling mecánico y enzimático (cóctel de piña, papaya, frutos rojos y aguacate), retirada sensorial, masaje renovador con aceite de rosas y sellado sublime con mantecas de cacao y karité.",
      "options": [
        {
          "name": "Exfoliación Corporal Frutal",
          "price": "90 €"
        }
      ]
    },
    {
      "id": "drenaje-linfatico",
      "title": "Drenaje Linfático",
      "description": "Cuidado manual de máxima precisión imprescindible tras liposucciones, abdominoplastias o BBL. Este servicio consiste en masajes manuales específicos y extremadamente suaves que guían los líquidos retenidos hacia tus puntos de eliminación naturales, evitando endurecimientos sin causar dolor.",
      "options": [
        {
          "name": "Moldeo Corporal Post-Lipo Básico",
          "price": "70 €",
          "bonus": "BONOS: 5 Sesiones / 300€ 10 Sesiones / 550€"
        },
        {
          "name": "Moldeo Corporal Post-Lipo Avanzado",
          "price": "90 €"
        },
        {
          "name": "Moldeo Corporal Estético",
          "price": "60 €"
        }
      ]
    },
    {
      "id": "masaje-relajante",
      "title": "Masaje Relajante",
      "description": "Focalizado estrictamente en las zonas de mayor acumulación de estrés: espalda completa, cuello, hombros y cráneo.",
      "options": [
        {
          "name": "Masaje Relajante Express",
          "price": "55 €"
        },
        {
          "name": "Masaje Relajante Estándar",
          "price": "70 €"
        },
        {
          "name": "Masaje Relajante Premium",
          "price": "90 €"
        }
      ]
    },
    {
      "id": "ventosas",
      "title": "Ventosas",
      "description": "Enfoque exclusivo en la zona de mayor sobrecarga: lumbar o cervical.",
      "options": [
        {
          "name": "Cupping Lite",
          "price": "60 €",
          "bonus": "BONOS: 3 Sesiones (160 euros) 5 Sesiones (200 euros)"
        },
        {
          "name": "Cupping Pro",
          "price": "80 €"
        }
      ]
    },
    {
      "id": "bano-de-flores",
      "title": "Baño de Flores",
      "description": "Incluye aprox. 300g de pétalos flotando en el agua, bomba efervescente dorada con mica natural biodegradable: El agua toma un brillo dorado suave al disolverse • Velas flotantes encendidas en el agua (4-6 ud) • Cava o prosecco + copa por persona • Carta de amor o felicitación personalizada: Escrita a mano por el centro con el mensaje que el cliente nos dicte. Esta nota es en papel kraft con lacre dorado • Música de chill-out suave. SIN MASAJE INCLUIDO.",
      "options": [
        {
          "name": "Baño de Flores (Individual)",
          "price": "85 €"
        },
        {
          "name": "Baño de Flores (Dúo / Pareja)",
          "price": "140 € (70 €/pers)"
        }
      ]
    },
    {
      "id": "ritual-botanico",
      "title": "Ritual Botánico",
      "description": "Exfoliación corporal (10-12 min): Manual en tina (sal marina/azúcar + aceite de argán) en brazos, piernas, espalda y abdomen. Masaje focalizado (15 min): En camilla para piernas y pies con aceite floral/cítrico. Toque final: Crema hidratante en piernas post-exfoliación.",
      "options": [
        {
          "name": "Ritual Botánico Básico",
          "price": "75 €"
        },
        {
          "name": "Ritual Botánico Estándar",
          "price": "115 €"
        },
        {
          "name": "Ritual Botánico Premium",
          "price": "130 €"
        }
      ]
    },
    {
      "id": "bano-cleopatra",
      "title": "Baño Cleopatra",
      "description": "Inmersión de 30 min en tina tibia a temperatura corporal (36°C-37°C) con mezcla de leche cosmética, miel pura y aceite de argán. Incluye cromoterapia cálida, aroma a vainilla/almendra, albornoz, toalla y 5 min de sellado final con manteca de karité.",
      "options": [
        {
          "name": "Baño Cleopatra",
          "price": "45 €"
        }
      ]
    },
    {
      "id": "ritual-dos-almas",
      "title": "Ritual Dos Almas",
      "description": "Iniciación al spa en pareja: Inmersión hidrotérmica + Infusión 21 hierbas + Consulta alquímica inicial (5 min).",
      "options": [
        {
          "name": "Ritual Dos Almas Esencial",
          "price": "75 €"
        },
        {
          "name": "Ritual Dos Almas Básico",
          "price": "100 €"
        },
        {
          "name": "Ritual Dos Almas Estándar",
          "price": "150 €"
        },
        {
          "name": "Ritual Dos Almas Premium",
          "price": "195 €"
        }
      ]
    },
    {
      "id": "ritual-de-cacao",
      "title": "Ritual de Cacao",
      "description": "Peeling botánico de cacao crudo y argán (15 min) + Inmersión hidrotérmica con manteca de cacao y esencia noble (20 min) + Aclarado pausado (5 min) + Unción nutritiva final (5 min) + Aclimatación y reposo en cabina privada (15 min). Incluye lencería de spa y atmósfera olfativa adaptativa.",
      "options": [
        {
          "name": "Ritual de Cacao (individual)",
          "price": "65 €"
        },
        {
          "name": "Ritual de Cacao (En pareja)",
          "price": "120 €"
        }
      ]
    },
    {
      "id": "ritual-vida",
      "title": "Ritual Vida",
      "description": "Incluye tina hidrotérmica privada, sales de uva concentradas en resveratrol, 150ml de cava o prosecco vertido directamente en el agua, dos copas de cava o prosecco frío para consumo, aceite puro de semilla de uva para hidratación final, atmósfera olfativa de moscatel y rosa, lencería de spa en préstamo (albornoces y toallas).",
      "options": [
        {
          "name": "SOLO APLICA PAREJAS (DOS PERSONAS)",
          "price": "135 €"
        }
      ]
    },
    {
      "id": "ritual-volcanico",
      "title": "Ritual Volcánico",
      "description": "Incluye aplicación de arcilla volcánica o fango marino en ambos cuerpos (15 min): — La esteticista aplica la arcilla en espalda, piernas, abdomen y brazos — La pareja puede aplicarse mutuamente en zonas de difícil acceso — Actúa durante 12-15 min (arcilla se seca parcialmente) • Inmersión en tina con agua mineral + sales marinas para retirar la arcilla (25 min): — El agua va limpiando suavemente la arcilla de los cuerpos • Ducha con jabón neutro para aclarado completo • Aplicación de crema hidratante corporal por la esteticista al finalizar (5 min) • Agua mineral + zumo natural para reponer minerales",
      "options": [
        {
          "name": "SOLO APLICA PAREJAS (DOS PERSONAS)",
          "price": "150 €"
        }
      ]
    },
    {
      "id": "tina-de-sanacion",
      "title": "Tina de Sanación",
      "description": "Inmersión privada en elíxir botánico medicinal de 21 hierbas y 7 sales minerales a 36-37°C. Incluye consulta alquímica previa (5 min), cromoterapia adaptativa, aromaterapia ambiental, Playlist Montenegro, préstamo de lencería de spa (albornoz y toalla) y tiempo de descanso y cierre energético. (No incluye masaje ni exfoliación).",
      "options": [
        {
          "name": "SOLO APLICA INDIVIDUAL",
          "price": "55 €"
        }
      ]
    }
  ],
  "tez": [
    {
      "id": "eliminacion-de-tatuajes",
      "title": "Eliminación de Tatuajes",
      "description": "Hasta 5 x 5 cm. Incluye: • Higiene profunda de la zona • Aplicación de tecnología láser focalizada • Emulsión regeneradora • Apósito protector",
      "options": [
        {
          "name": "Tatuaje Pequeño",
          "price": "140 €"
        },
        {
          "name": "Tatuaje Mediano",
          "price": "320 €"
        },
        {
          "name": "Tatuaje Grande",
          "price": "530 €"
        }
      ]
    },
    {
      "id": "eliminacion-de-manchas",
      "title": "Eliminación de Manchas",
      "description": "• Higiene preparatoria • Exfoliación biológica aclararante •Aplicación tecnológica despigmentante •Mascarilla antioxidante • Protección solar de alta oclusión",
      "options": [
        {
          "name": "Zona Facial Pequeña",
          "price": "85 €"
        },
        {
          "name": "Rostro Completo",
          "price": "135 €"
        },
        {
          "name": "Cuello + Escote",
          "price": "170 €"
        }
      ]
    },
    {
      "id": "curacion-de-varices",
      "title": "Curación de Varices",
      "description": "Toma de contacto y alivio inmediato. Ideal para nuevos clientes que buscan verificar la eficacia y experimentar el frescor sintomático antes de un bono.",
      "options": [
        {
          "name": "Pack Esencial",
          "price": "45 €"
        },
        {
          "name": "Pack Básico (3 Sesiones)",
          "price": "120 €"
        },
        {
          "name": "Pack Estándar (5 Sesiones)",
          "price": "190 €"
        },
        {
          "name": "Pack Intensivo (8 a 10 Sesiones)",
          "price": "320 €"
        }
      ]
    },
    {
      "id": "gym-pasiva",
      "title": "Gym Pasiva",
      "description": "Diagnóstico de objetivos, colocación de electrodos de alta precisión en zonas clave (glúteos, abdomen o piernas) y ciclo de activación EMS personalizado.",
      "options": [
        {
          "name": "Gym Pasiva (Sesión Individual)",
          "price": "45 €",
          "bonus": "BONOS: Bono Estándar (10 sesiones)380€ Bono Transformación (20 sesiones) 690€"
        },
        {
          "name": "Gym Pasiva (Mantenimiento Mensual)",
          "price": "260 €/mes (Mediante suscripción)"
        }
      ]
    },
    {
      "id": "limpieza-facial",
      "title": "Limpieza Facial",
      "description": "Ideal para limpiezas profundas mensuales, pieles jóvenes, o como primer contacto con la tecnología Hydro.",
      "options": [
        {
          "name": "Limpieza Facial Esencial",
          "price": "85 €"
        },
        {
          "name": "Limpieza Facial Anti-Aging",
          "price": "125 €"
        }
      ]
    },
    {
      "id": "lipo-sin-cirugia",
      "title": "Lipo Sin Cirugía",
      "description": "Paso Innegociable. Consulta diagnóstica dirigida por Olga Lucia para diseñar el \"Mapa Corporal Maestro\"",
      "options": [
        {
          "name": "Consulta Lipo Sin Cirugía",
          "price": "50 €"
        },
        {
          "name": "Pack Lipo Escultura Flash",
          "price": "300 €"
        },
        {
          "name": "Programa \"Lipo sin Cirugía\"",
          "price": "Desde 3.995 € por Zona (Precio Orientativo tras Valoración)"
        },
        {
          "name": "Lipo Sin Cirugía (Mantenimiento Estándar/Intensivo)",
          "price": "110€-150€"
        }
      ]
    },
    {
      "id": "masajes-reductores",
      "title": "Masajes Reductores",
      "description": "Tarifa Esencial Focalizada. Para clientes que buscan reducir centímetros en una zona muy específica (ej. solo abdomen/cintura, o solo cara interna de muslos).",
      "options": [
        {
          "name": "Masaje Reductor Básico",
          "price": "50 €",
          "bonus": "BONOS: Bono de 5 Sesiones (Básico) 225 €"
        },
        {
          "name": "Masaje Reductor Estándar",
          "price": "70 €"
        },
        {
          "name": "Masaje Reductor Premium",
          "price": "80 €"
        }
      ]
    },
    {
      "id": "maderoterapia",
      "title": "Maderoterapia",
      "description": "1 sesión. Evaluación básica + masaje reductor manual + crema anticelulítica + drenaje linfático básico + sellado reafirmante.",
      "options": [
        {
          "name": "Maderoterapia Express",
          "price": "50 €"
        },
        {
          "name": "Maderoterapia Básica",
          "price": "140 €"
        },
        {
          "name": "Maderoterapia Premium",
          "price": "200 €"
        },
        {
          "name": "Maderoterapia Post Parto",
          "price": "280 €"
        }
      ]
    },
    {
      "id": "metaterapia",
      "title": "Metaterapia",
      "description": "Sesión individual de 60 min para un cambio visible en compactación y desinflamación desde la primera visita. Incluye drenaje linfático de apertura, maniobras de precisión con herramientas metálicas, presión controlada y cosmética anticelulítica básica.",
      "options": [
        {
          "name": "Pack Anticelulitis Express",
          "price": "80 € (Sesión Individual)"
        },
        {
          "name": "Pack Anticelulitis Plus",
          "price": "400 € (Según Valoración. Paso obligatorio)"
        },
        {
          "name": "Pack Anticelulitis 360°",
          "price": "600 € (Según Valoración. Paso obligatorio)"
        }
      ]
    },
    {
      "id": "micropigmentacion-de-labios",
      "title": "Micropigmentación de Labios",
      "description": "Sesión especializada para la eliminación segura de micropigmentación en la totalidad de los labios.",
      "options": [
        {
          "name": "ÚNICO SERVICIO",
          "price": "130 € (por sesión)"
        }
      ]
    },
    {
      "id": "rejuvenecimiento-360-incluye-zona-corporal-combinado-con-rostro",
      "title": "Rejuvenecimiento 360' (Incluye zona corporal combinado con rostro)",
      "description": "Reset celular profundo, redefinición del óvalo facial y atenuación de líneas de expresión de toda la tez.",
      "options": [
        {
          "name": "Rostro Completo",
          "price": "145 € por persona"
        },
        {
          "name": "Rostro + Cuello",
          "price": "170 € por persona"
        },
        {
          "name": "Cuello (Zonas Cervical)",
          "price": "95 € por persona"
        },
        {
          "name": "Escote",
          "price": "105 € por persona"
        },
        {
          "name": "Manos (Anti-edad)",
          "price": "80 € por persona"
        }
      ]
    },
    {
      "id": "rejuvenecimiento-facial",
      "title": "Rejuvenecimiento Facial",
      "description": "Incluye diagnóstico cutáneo inicial, fase de preparación y renovación celular, estimulación tecnológica profunda, mascarilla biológica de alta concentración y masaje de fijación de activos.",
      "options": [
        {
          "name": "ÚNICO SERVICIO",
          "price": "145 € por sesión"
        }
      ]
    },
    {
      "id": "rejuvenecimiento-intimo",
      "title": "Rejuvenecimiento Íntimo",
      "description": "Enfocado en la estética externa y la recuperación de la elasticidad de los labios mayores. Consiste en Hidratación y Tonificación Vulvar.",
      "options": [
        {
          "name": "Rejuvenecimiento Íntimo Express",
          "price": "90 € por sesión"
        },
        {
          "name": "Rejuvenecimiento Íntimo 360",
          "price": "160 € por sesión"
        }
      ]
    },
    {
      "id": "manicura-y-pedicura-semipermanente",
      "title": "Manicura y Pedicura Semipermanente",
      "description": "Sesión conjunta para el cuidado integral de manos y pies con esmaltado semipermanente.",
      "options": [
        {
          "name": "Manicura y Pedicura Semipermanente",
          "price": "55 €"
        },
        {
          "name": "Pack Familiar (Adulto + Infantil)",
          "price": "65 €"
        }
      ]
    },
    {
      "id": "manicura-tradicional",
      "title": "Manicura Tradicional",
      "description": "Duración de 45 minutos. Incluye diagnóstico, limado de precisión, cuidado y limpieza de cutículas, hidratación y esmaltado tradicional con acabado de brillo.",
      "options": [
        {
          "name": "Manicura Tradicional",
          "price": "22 €"
        },
        {
          "name": "Pack Familiar (Adulto + Infantil)",
          "price": "38 €"
        }
      ]
    },
    {
      "id": "pedicura-completa-tradicional",
      "title": "Pedicura Completa Tradicional",
      "description": "Duración de 60 minutos de dedicación a los pies. Incluye valoración inicial, higienización, corte técnico preventivo de uñas, limpieza de cutículas, eliminación de durezas superficiales, exfoliación completa, mascarilla nutritiva, masaje relajante en pies y tobillos, y esmaltado tradicional.",
      "options": [
        {
          "name": "Pedicura Completa Tradicional",
          "price": "40 €"
        },
        {
          "name": "Pack Familiar de Pedicura (Adulto + Infantil)",
          "price": "58 €"
        }
      ]
    }
  ],
  "filo": [
    {
      "id": "depilacion-con-cera",
      "title": "Depilación con Cera",
      "description": "Depilación de mantenimiento en rostro.",
      "options": [
        {
          "name": "Facial, Labio o Cejas",
          "price": "8 €",
          "group": "Depilación con Cera (Zonas pequeñas):"
        },
        {
          "name": "Axilas",
          "price": "10 €",
          "group": "Depilación con Cera (Zonas pequeñas):"
        },
        {
          "name": "Ingles Normales",
          "price": "12 €",
          "group": "Depilación con Cera (Zonas pequeñas):"
        },
        {
          "name": "Ingles Brasileñas",
          "price": "18 €",
          "group": "Depilación con Cera (Zonas pequeñas):"
        },
        {
          "name": "Media Piernas",
          "price": "18 €",
          "group": "Depilación con Cera (Zonas medianas):"
        },
        {
          "name": "Brazos",
          "price": "18 €",
          "group": "Depilación con Cera (Zonas medianas):"
        },
        {
          "name": "Ingles Pubis Completo",
          "price": "25 €",
          "group": "Depilación con Cera (Zonas medianas):"
        },
        {
          "name": "Espalda o Pecho",
          "price": "28 €",
          "group": "Depilación con Cera (Zonas medianas):"
        },
        {
          "name": "Piernas Completas",
          "price": "32 €",
          "group": "Depilación con Cera (Zonas Grandes)"
        },
        {
          "name": "Pack: Medias Piernas + Ingles + Axilas",
          "price": "35 €",
          "group": "Depilación con Cera (Zonas Grandes)"
        },
        {
          "name": "Pack: Piernas Completas + Ingles + Axilas",
          "price": "50 €",
          "group": "Depilación con Cera (Zonas Grandes)"
        },
        {
          "name": "Pack: Piernas Completas + Torso + Zona Íntima",
          "price": "75 €",
          "group": "Depilación con Cera (Zonas Grandes)"
        },
        {
          "name": "Depilación Cuerpo Completo (Mujer)",
          "price": "100 €",
          "group": "Depilación con Cera (Zonas Grandes)"
        },
        {
          "name": "Depilación Cuerpo Completo (Hombre)",
          "price": "125 €",
          "group": "Depilación con Cera (Zonas Grandes)"
        }
      ]
    },
    {
      "id": "depilacion-laser",
      "title": "Depilación Láser",
      "description": "Zona facial de mantenimiento.",
      "options": [
        {
          "name": "Labio superior / mentón",
          "price": "28 €",
          "group": "Depilación Láser (Zonas Pequeñas)"
        },
        {
          "name": "Patillas / mano / pie",
          "price": "30 €",
          "group": "Depilación Láser (Zonas Pequeñas)"
        },
        {
          "name": "Areolas / línea alba",
          "price": "30 €",
          "group": "Depilación Láser (Zonas Pequeñas)"
        },
        {
          "name": "Axilas",
          "price": "32 €",
          "group": "Depilación Láser (Zonas Pequeñas)"
        },
        {
          "name": "Zona bikini / ingles",
          "price": "38 €",
          "group": "Depilación Láser (Zonas Medianas)"
        },
        {
          "name": "Medias piernas / hombros",
          "price": "55 €",
          "group": "Depilación Láser (Zonas Medianas)"
        },
        {
          "name": "Espalda completa",
          "price": "75 €",
          "group": "Depilación Láser (Zonas Medianas)"
        },
        {
          "name": "Brazos completos",
          "price": "65 €",
          "group": "Depilación Láser (Zonas Grandes)"
        },
        {
          "name": "Cuerpo completo mujer",
          "price": "99 €",
          "group": "Depilación Láser (Zonas Grandes)"
        },
        {
          "name": "Piernas completas",
          "price": "130 €",
          "group": "Depilación Láser (Zonas Grandes)"
        },
        {
          "name": "Cuerpo completo hombre",
          "price": "165 €",
          "group": "Depilación Láser (Zonas Grandes)"
        }
      ],
      "bonus": "BONOS: Bono Pack Esencial (3 Sesiones) : 180 € Bono Anual Multipack (6 Sesiones) : 450 €"
    },
    {
      "id": "depilacion-ipl",
      "title": "Depilación IPL",
      "description": "Consulta las opciones disponibles para Depilación IPL.",
      "options": [
        {
          "name": "Labio superior / Mentón",
          "price": "Primera Sesión: 35 € Sesión Individual: 45 € Bono de 6 Sesiones: 210 € (35 €/sesión)",
          "group": "Depilación IPL (Zonas Pequeñas)"
        },
        {
          "name": "Patillas / Manos / Pies",
          "price": "Primera Sesión: 25 € Sesión Individual: 40 € Bono de 6 Sesiones: 180 € (30 €/sesión)",
          "group": "Depilación IPL (Zonas Pequeñas)"
        },
        {
          "name": "Areola / Línea alba",
          "price": "Primera Sesión: 10 € Sesión Individual: 18 € Bono de 6 Sesiones: 84 € (14 €/sesión)",
          "group": "Depilación IPL (Zonas Pequeñas)"
        },
        {
          "name": "Axilas",
          "price": "Primera Sesión: 9 € Sesión Individual: 19 € Bono de 6 Sesiones: 90 € (15 €/sesión)",
          "group": "Depilación IPL (Zonas Pequeñas)"
        },
        {
          "name": "Bikini / Ingles",
          "price": "Primera Sesión: 9 € Sesión Individual: 21 € Bono de 6 Sesiones: 96 € (16 €/sesión)",
          "group": "Depilación IPL (Zonas Pequeñas)"
        },
        {
          "name": "Interglúteo",
          "price": "Primera Sesión: 15 € Sesión Individual: 25 € Bono de 6 Sesiones: 120 € (20 €/sesión)",
          "group": "Depilación IPL (Zonas Pequeñas)"
        },
        {
          "name": "Nuca",
          "price": "Primera Sesión: 12 € Sesión Individual: 19 € Bono de 6 Sesiones: 90 € (15 €/sesión)",
          "group": "Depilación IPL (Zonas Pequeñas)"
        },
        {
          "name": "Orejas",
          "price": "Primera Sesión: 8 € Sesión Individual: 15 € Bono de 6 Sesiones: 72 € (12 €/sesión)",
          "group": "Depilación IPL (Zonas Pequeñas)"
        },
        {
          "name": "Brazos completos",
          "price": "Primera Sesión: 35 € Sesión Individual: 45 € Bono de 6 Sesiones: 210 € (35 €/sesión)",
          "group": "Depilación IPL (Zonas Medianas)"
        },
        {
          "name": "Medias piernas",
          "price": "Primera Sesión: 25 € Sesión Individual: 40 € Bono de 6 Sesiones: 180 € (30 €/sesión)",
          "group": "Depilación IPL (Zonas Medianas)"
        },
        {
          "name": "Glúteos",
          "price": "Primera Sesión: 30 € Sesión Individual: 42 € Bono de 6 Sesiones: 198 € (33 €/sesión)",
          "group": "Depilación IPL (Zonas Medianas)"
        },
        {
          "name": "Abdomen / Pubis",
          "price": "Primera Sesión: 22 € Sesión Individual: 38 € Bono de 6 Sesiones: 168 € (28 €/sesión)",
          "group": "Depilación IPL (Zonas Medianas)"
        },
        {
          "name": "Ingles brasileña",
          "price": "Primera Sesión: 15 € Sesión Individual: 28 € Bono de 6 Sesiones: 120 € (20 €/sesión)",
          "group": "Depilación IPL (Zonas Medianas)"
        },
        {
          "name": "Ingles Hollywood",
          "price": "Primera Sesión: 24 € Sesión Individual: 35 € Bono de 6 Sesiones: 162 € (27 €/sesión)",
          "group": "Depilación IPL (Zonas Medianas)"
        },
        {
          "name": "Facial completo",
          "price": "Primera Sesión: 22 € Sesión Individual: 35 € Bono de 6 Sesiones: 168 € (28 €/sesión)",
          "group": "Depilación IPL (Zonas Medianas)"
        },
        {
          "name": "Piernas completas",
          "price": "Primera Sesión: 35 € Sesión Individual: 65 € Bono de 6 Sesiones:240 € (40 €/sesión)",
          "group": "Depilación IPL (Zonas Grandes)"
        },
        {
          "name": "Espalda completa",
          "price": "Primera Sesión: 35 € Sesión Individual: 60 € Bono de 6 Sesiones: 228 € (38 €/sesión)",
          "group": "Depilación IPL (Zonas Grandes)"
        },
        {
          "name": "Pecho completo (hombre)",
          "price": "Primera Sesión: 30 € Sesión Individual: 50 € Bono de 6 Sesiones: 192 € (32 €/sesión)",
          "group": "Depilación IPL (Zonas Grandes)"
        },
        {
          "name": "Ingles/bikini + Axilas",
          "price": "Primera Sesión: 12 € Sesión Individual: 35 € Bono de 6 Sesiones: 168 € (28 €/sesión)",
          "group": "Depilación IPL Packs"
        },
        {
          "name": "Ingles brasileña + Axilas + Piernas completas",
          "price": "Primera Sesión: 35 € Sesión Individual: 85 € Bono de 6 Sesiones: 420 € (70 €/sesión)",
          "group": "Depilación IPL Packs"
        },
        {
          "name": "Cuerpo Completo / Pack Integral (Piernas + Axilas + Brasileñas + Abdomen + Brazos)",
          "price": "Primera Sesión: 75 € Sesión Individual: 150 € Bono de 6 Sesiones: 780 € (130 €/sesión)",
          "group": "Depilación IPL Packs"
        }
      ]
    },
    {
      "id": "depilacion-de-cejas-con-cera",
      "title": "Depilación de Cejas con Cera",
      "description": "Diseño previo adaptado a la morfometría del rostro, depilación técnica con cera templada y acabado de definición con pinza.",
      "options": [
        {
          "name": "Depilación de Cejas con Cera",
          "price": "12 €"
        },
        {
          "name": "Diseño y Depilación con Cera",
          "price": "18 €"
        }
      ]
    },
    {
      "id": "depilacion-de-cejas-con-henna",
      "title": "Depilación de Cejas con Henna",
      "description": "Servicio enfocado en la coloración y definición rápida. Incluye limpieza básica y aplicación de pigmento de henna para dar color, rellenar pequeños espacios y lograr un efecto de ceja más poblada de forma natural.",
      "options": [
        {
          "name": "Depilación de Cejas con Henna",
          "price": "12 €"
        },
        {
          "name": "Diseño y Depilación con Henna",
          "price": "18 €"
        }
      ]
    },
    {
      "id": "laminado-de-cejas",
      "title": "Laminado de Cejas",
      "description": "Incluye limpieza profunda, mapeo de diseño, proceso de laminado, neutralización e hidratación final con keratina.",
      "options": [
        {
          "name": "Laminado de Cejas",
          "price": "40 €"
        },
        {
          "name": "Pack de Mantenimiento de Laminado",
          "price": "50 €"
        }
      ]
    },
    {
      "id": "micropigmentacion-de-cejas",
      "title": "Micropigmentación de Cejas",
      "description": "Simulación de vellos naturales mediante trazos finos. Incluye visagismo avanzado y pautas iniciales de cuidado post-procedimiento (tarifa base de entrada).",
      "options": [
        {
          "name": "Micropigmentación: Pelo a Pelo",
          "price": "150 €"
        },
        {
          "name": "Micropigmentación: Powder Brows",
          "price": "170 €"
        },
        {
          "name": "Micropigmentación: Técnica Mixta",
          "price": "190 €"
        }
      ]
    },
    {
      "id": "eliminacion-de-micropigmentacion-en-cejas",
      "title": "Eliminación de Micropigmentación en Cejas",
      "description": "Incluye diagnóstico de viabilidad dérmica, evaluación, higienización profunda, protocolo de confort dérmico, disparo tecnológico de precisión ajustado al viraje de color (azul, rojo, gris) y emulsión molecular regeneradora con pauta domiciliaria.",
      "options": [
        {
          "name": "Eliminación de micropigmentación de Cejas",
          "price": "110 €"
        }
      ]
    },
    {
      "id": "microblading-de-cejas",
      "title": "Microblading de Cejas",
      "description": "Incluye diagnóstico clínico visual, anamnesis estética, estudio de escala cromática, diseño de visagismo avanzado (brow mapping), protocolo de confort dérmico, implantación artesanal con inductor manual estéril, bálsamo molecular protector y kit inicial de cuidado post-procedimiento.",
      "options": [
        {
          "name": "Microblading Completo",
          "price": "150 €"
        },
        {
          "name": "Retoque de Microblading",
          "price": "95 €"
        }
      ]
    },
    {
      "id": "extensiones-de-pestanas-clasicas",
      "title": "Extensiones de Pestañas Clásicas",
      "description": "Aplicación 1:1 estricta con grosores de 0.12 a 0.15 mm siguiendo la curvatura y longitud original.",
      "options": [
        {
          "name": "Clásicas - Efecto Natural",
          "price": "40 €"
        },
        {
          "name": "Clásicas - Efecto Ojo de Muñeca (Doll Eye)",
          "price": "42 €"
        },
        {
          "name": "Clásicas - Efecto Ardilla (Squirrel)",
          "price": "42 €"
        }
      ]
    },
    {
      "id": "extensiones-efecto-ojo-de-gato",
      "title": "Extensiones Efecto Ojo de Gato",
      "description": "Mapeo con longitudes de 8 mm en el lagrimal, ascendiendo progresivamente hasta 12-14 mm en la zona previa al extremo externo, reduciéndose ligeramente al final.",
      "options": [
        {
          "name": "Extensiones de Pestañas (Ojo de Gato)",
          "price": "40 €"
        }
      ]
    },
    {
      "id": "extensiones-efecto-volumen-ruso",
      "title": "Extensiones Efecto Volumen Ruso",
      "description": "Uso de peso matemático donde un abanico 3D de grosor 0.07 mm ejerce menor peso que una clásica de 0.15 mm, aportando máxima densidad en pestañas escasas sin daño folicular.",
      "options": [
        {
          "name": "Extensiones Efecto Volumen Ruso",
          "price": "55 €"
        }
      ]
    },
    {
      "id": "extensiones-de-pestanas-efecto-wispy",
      "title": "Extensiones de Pestañas Efecto Wispy",
      "description": "Trabajo por capas.",
      "options": [
        {
          "name": "Extensiones de Pestañas Efecto Wispy",
          "price": "55 €"
        }
      ]
    },
    {
      "id": "lifting-de-pestanas",
      "title": "Lifting de Pestañas",
      "description": "Con tinte y queratina",
      "options": [
        {
          "name": "Lifting de Pestañas",
          "price": "35 €"
        }
      ]
    }
  ],
  "brote": [
    {
      "id": "bolsa-de-regalo",
      "title": "Bolsa de Regalo",
      "description": "Extensión de la experiencia FIESTA",
      "options": [
        {
          "name": "SERVICIO COMPLEMENTARIO",
          "price": "6 € por niño/a"
        }
      ]
    },
    {
      "id": "tina-magica-infantil",
      "title": "Tina Mágica Infantil",
      "description": "Sesión de spa grupal diseñada especialmente para niños y niñas, enfocada en la relajación, el juego sensorial y la diversión en un ambiente adaptado y seguro.",
      "options": [
        {
          "name": "Tina Mágica Infantil",
          "price": "58 €"
        }
      ]
    },
    {
      "id": "envoltura-corporal",
      "title": "Envoltura Corporal",
      "description": "Envoltura con manteca de cacao puro o con pulpa de frutas",
      "options": [
        {
          "name": "Envoltura Corporal",
          "price": "90 €"
        }
      ]
    },
    {
      "id": "mini-spa-party",
      "title": "Mini Spa Party",
      "description": "Experiencia Spa temática diseñada exclusivamente para niños y niñas.",
      "options": [
        {
          "name": "Mini Spa Party",
          "price": "180 €"
        }
      ]
    },
    {
      "id": "manicura-y-pedicura-infantil",
      "title": "Manicura y Pedicura Infantil",
      "description": "Tratamiento de cuidado y embellecimiento de manos y pies diseñado especialmente para niños y niñas, utilizando productos seguros, suaves y adaptados para su piel.",
      "options": [
        {
          "name": "Manicura y Pedicura Infantil",
          "price": "20 €"
        }
      ]
    },
    {
      "id": "masaje-corporal-infantil",
      "title": "Masaje Corporal Infantil",
      "description": "Masaje relajante y adaptado específicamente para niños y niñas en, enfocado en liberar tensiones, fomentar el bienestar y estimular la relajación mediante maniobras suaves y productos hipoalergénicos.",
      "options": [
        {
          "name": "Masaje Corporal Infantil",
          "price": "20 €"
        }
      ]
    },
    {
      "id": "merienda-saludable-infantil",
      "title": "Merienda Saludable Infantil",
      "description": "Una experiencia gastronómica lúdica y de alta gama diseñada para reponer energía mediante frutas frescas, zumos naturales y snacks saludables presentados de forma festiva en vajilla temática de caricaturas.",
      "options": [
        {
          "name": "Merienda Saludable Infantil",
          "price": "10 €"
        }
      ]
    },
    {
      "id": "mini-hair-spa-infantil",
      "title": "Mini Hair Spa Infantil",
      "description": "Sesión individual diseñada para el cuidado capilar de los niños y niñas, que incluye un protocolo completo de agua, aplicación de mascarilla orgánica nutritiva y un peinado express final.",
      "options": [
        {
          "name": "Mini Hair Spa Infantil",
          "price": "25 €"
        }
      ]
    },
    {
      "id": "mini-spa-facial-infantil",
      "title": "Mini Spa Facial Infantil",
      "description": "Tratamiento facial suave y adaptado a la piel delicada de los niños y niñas, utilizando productos orgánicos e hipoalergénicos para una experiencia de limpieza, hidratación y relajación profunda.",
      "options": [
        {
          "name": "Mini Spa Facial Infantil",
          "price": "25 €"
        }
      ]
    },
    {
      "id": "peinados-infantil",
      "title": "Peinados Infantil",
      "description": "Servicio de peluquería y estilismo adaptado para niños y niñas, utilizando productos suaves y respetuosos con el cabello infantil para lograr peinados temáticos, elegantes o divertidos para ocasiones especiales.",
      "options": [
        {
          "name": "Peinados Infantil",
          "price": "25 €"
        }
      ]
    }
  ],
  "hebra": [
    {
      "id": "cepillado-profesional",
      "title": "Cepillado Profesional",
      "description": "Enfoque en definición y volumen en raíz.",
      "options": [
        {
          "name": "Cepillado Profesional Cabello Corto",
          "price": "20 €"
        },
        {
          "name": "Cepillado Profesional Cabello Medio",
          "price": "30 €"
        },
        {
          "name": "Cepillado Profesional Cabello Largo",
          "price": "50 €"
        }
      ]
    },
    {
      "id": "coctel-anticaida-capilar",
      "title": "Cóctel Anticaída Capilar",
      "description": "Incluye diagnóstico capilar, aplicación del cóctel purificado y masaje de activación.",
      "options": [
        {
          "name": "Cóctel Anticaída Capilar",
          "price": "70 € por sesión",
          "bonus": "BONO: Bono Intensivo Anticaída (5 Sesiones): 315 € (Ahorro del 10% frente a la tarifa individual)"
        },
        {
          "name": "Cóctel Anticaída Capilar (Mantenimiento)",
          "price": "30 € por sesión"
        }
      ]
    },
    {
      "id": "corte-de-cabello-caballero",
      "title": "Corte de Cabello Caballero",
      "description": "Incluye diagnóstico morfológico, corte técnico personalizado, perfilado milimétrico de contornos y peinado final con producto de fijación",
      "options": [
        {
          "name": "UNICO SERVICIO",
          "price": "22 €"
        }
      ]
    },
    {
      "id": "corte-de-dama",
      "title": "Corte de Dama",
      "description": "Incluye lavado protector, corte estructural y secado ligero de presentación.",
      "options": [
        {
          "name": "UNICO SERVICIO",
          "price": "22 €"
        }
      ]
    },
    {
      "id": "extensiones-de-cabello",
      "title": "Extensiones de Cabello",
      "description": "Aporte estratégico de densidad para melenas finas. Incluye diagnóstico previo, colocación experta y corte de fusión del cabello.",
      "options": [
        {
          "name": "Extensiones de Volumen",
          "price": "150 € (+ coste de cabello)"
        },
        {
          "name": "Extensiones de Melena Completa",
          "price": "350 € (+ coste de cabello)"
        }
      ]
    },
    {
      "id": "spa-capilar-asiatico",
      "title": "Spa Capilar Asiático",
      "description": "Diagnóstico capilar, aromaterapia, purificación botánica y masaje craneal.",
      "options": [
        {
          "name": "Spa Capilar Express",
          "price": "68 €",
          "bonus": "BONOS: Bono Capilar Completo: (3 Sesiones): Pack de 3 sesiones: 240 € Bono Capilar Plus (5 Sesiones): Pack de 5 sesiones combinables entre Spa Capilar Completo e Intensivo: 525 €"
        },
        {
          "name": "Spa Capilar Completo",
          "price": "90 €"
        },
        {
          "name": "Spa Capilar Intensivo",
          "price": "125 €"
        }
      ]
    },
    {
      "id": "iluminaciones-de-cabello",
      "title": "Iluminaciones de Cabello",
      "description": "Incluye lavado técnico, diseño sutil de luz en zonas estratégicas y peinado básico.",
      "options": [
        {
          "name": "Iluminación Express",
          "price": "55 €"
        },
        {
          "name": "Iluminación Midi",
          "price": "75 €"
        },
        {
          "name": "Iluminación XXL",
          "price": "98 €"
        }
      ]
    },
    {
      "id": "keratina",
      "title": "Keratina",
      "description": "Tratamiento alisador y anti-frescar adaptado a longitudes cortas para un acabado sellado y brillante.",
      "options": [
        {
          "name": "Keratina Pixie",
          "price": "75 €"
        },
        {
          "name": "Keratina Midi",
          "price": "110 €"
        },
        {
          "name": "Keratina XXL",
          "price": "150 €"
        }
      ]
    },
    {
      "id": "mechas",
      "title": "Mechas",
      "description": "Se cotiza según la técnica, el largo y el color actual del cabello.",
      "options": [
        {
          "name": "UNICO SERVICIO",
          "price": "Desde 80 € (precio orientativo)"
        }
      ]
    },
    {
      "id": "planchado-profesional",
      "title": "Planchado Profesional",
      "description": "Servicio de pulido y alisado térmico de acabado rápido.",
      "options": [
        {
          "name": "Planchado Pixie",
          "price": "15 €"
        },
        {
          "name": "Planchado Midi",
          "price": "20 €"
        },
        {
          "name": "Planchado XXL",
          "price": "26 €"
        }
      ]
    },
    {
      "id": "aplicacion-de-tinte",
      "title": "Aplicación de Tinte",
      "description": "Aplicación de tinte global para cabello corto.",
      "options": [
        {
          "name": "Coloración Pixie",
          "price": "38 €"
        },
        {
          "name": "Coloración Midi",
          "price": "52 €"
        },
        {
          "name": "Coloración XXL",
          "price": "68 €"
        }
      ]
    }
  ],
  "tacto": [
    {
      "id": "unas-acrilicas",
      "title": "Uñas Acrílicas",
      "description": "Cuadrada, Ovalada, Almendra",
      "options": [
        {
          "name": "Acrílicas Clásicas",
          "price": "70 €"
        },
        {
          "name": "Acrílicas Vanguardia",
          "price": "90 €"
        },
        {
          "name": "Nail Art Adicional",
          "price": "5 € por uña o 20 € por set"
        }
      ]
    },
    {
      "id": "corte-y-limado-de-unas",
      "title": "Corte y Limado de Uñas",
      "description": "Higienización, corte morfológico, limado y emulsión hidratante",
      "options": [
        {
          "name": "Corte y Limado de Manos",
          "price": "18 €"
        },
        {
          "name": "Corte y Limado de Pies",
          "price": "24 €"
        },
        {
          "name": "Pack Manos y Pies",
          "price": "38 €"
        }
      ]
    },
    {
      "id": "laser-antihongos-en-unas",
      "title": "Láser Antihongos en Uñas",
      "description": "Higienización, láser térmico y sellado antiséptico",
      "options": [
        {
          "name": "Láser Antihongos (1 Uña)",
          "price": "65 €",
          "bonus": "Bono Antihongos Láser (5 sesiones): Aplica un 15% de descuento sobre la tarifa individual."
        },
        {
          "name": "Láser Antihongos (Mano o Pie)",
          "price": "120 €"
        },
        {
          "name": "Pack Láser Antihongos (Manos y Pies)",
          "price": "215 €"
        }
      ]
    },
    {
      "id": "mantenimiento-de-unas",
      "title": "Mantenimiento de Uñas",
      "description": "Incluye manicura rusa, relleno de estructura, limado de simetría y cambio de color (hasta 3 semanas y media).",
      "options": [
        {
          "name": "Mantenimiento Acrílico Estándar",
          "price": "48 €"
        },
        {
          "name": "Mantenimiento Acrílico Avanzado",
          "price": "58 €"
        }
      ]
    },
    {
      "id": "pedicura-permanente",
      "title": "Pedicura Permanente",
      "description": "Evaluación, retirada de durezas, exfoliación, corte, pedicura, esmaltado permanente y masaje hidratante.",
      "options": [
        {
          "name": "Pedicura Permanente Básica",
          "price": "35 €"
        },
        {
          "name": "Pedicura Permanente Premium",
          "price": "48 €"
        }
      ]
    },
    {
      "id": "press-on",
      "title": "Press On",
      "description": "Colores lisos o efectos básicos. Incluye preparación exprés de cutícula, medición, adaptación, colocación y sellado.",
      "options": [
        {
          "name": "Press On Básico",
          "price": "38 €"
        },
        {
          "name": "Press On Nail Art",
          "price": "55 €"
        }
      ]
    },
    {
      "id": "reparacion-de-unas",
      "title": "Reparación de Uñas",
      "description": "Duración de 15 minutos por uña. Incluye limpieza de la zona, aplicación de material de refuerzo, limado de precisión y sellado.",
      "options": [
        {
          "name": "Reparación de Uña Rota",
          "price": "5 € (por uña)"
        },
        {
          "name": "Re-Esmaltado",
          "price": "3 €"
        }
      ]
    },
    {
      "id": "retiro-de-acrilico",
      "title": "Retiro de Acrílico",
      "description": "Retirada segura de material aplicado en nuestro estudio.",
      "options": [
        {
          "name": "Retirada de Uñas (Trabajo Propio)",
          "price": "18 €"
        },
        {
          "name": "Retirada de Uñas (Trabajo Externo)",
          "price": "25 €"
        }
      ]
    },
    {
      "id": "retiro-de-esmalte-tradicional",
      "title": "Retiro de Esmalte Tradicional",
      "description": "Duración de 5 a 10 minutos. Eliminación limpia y suave del esmalte convencional en todas las manos o pies.",
      "options": [
        {
          "name": "ÚNICO SERVICIO",
          "price": "3 €"
        }
      ]
    }
  ],
  "raiz": [
    {
      "id": "criopolosis",
      "title": "Criopolósis",
      "description": "(Ej. Papada, Axilas) Para grasa muy localizada en áreas reducidas que desdibujan el contorno",
      "options": [
        {
          "name": "CoolSculpting Zona Pequeña",
          "price": "120 €",
          "bonus": "BONO 3 Sesiones: Pequeña: 310€"
        },
        {
          "name": "CoolSculpting Zona Mediana",
          "price": "160 €",
          "bonus": "BONO 3 Sesiones: Mediana: 380€"
        },
        {
          "name": "CoolSculpting Zona Grande",
          "price": "210 €",
          "bonus": "BONO 3 Sesiones: Grande: 550€"
        },
        {
          "name": "CoolSculpting Zona Extra Grande",
          "price": "280 €",
          "bonus": "BONO 3 Sesiones: Extra Grande: 700€"
        }
      ]
    },
    {
      "id": "dermapen",
      "title": "Dermapen",
      "description": "Toma de Contacto / Renovación. Ideal para un cambio visible en luminosidad, hidratación profunda y líneas de expresión finas",
      "options": [
        {
          "name": "Dermapen Facial Básico",
          "price": "150 €",
          "bonus": "BONO 3 Sesiones: Extra Grande: 700€"
        },
        {
          "name": "Dermapen Facial Efecto Makeup",
          "price": "180 €"
        },
        {
          "name": "Dermapen Despigmentante",
          "price": "200 €"
        }
      ]
    },
    {
      "id": "presoterapia",
      "title": "Presoterapia",
      "description": "45 min",
      "options": [
        {
          "name": "Sesión Individual de Referencia",
          "price": "40 €"
        },
        {
          "name": "Bono 5 Sesiones (Alivio inicial)",
          "price": "140 €"
        },
        {
          "name": "Bono 10 Sesiones (Cambios visibles)",
          "price": "280 €"
        },
        {
          "name": "Bono 15 Sesiones (Renovación profunda)",
          "price": "350 €"
        },
        {
          "name": "Pack Drenante Básico (Presoterapia + Masaje Manual)",
          "price": "45 €"
        }
      ]
    },
    {
      "id": "cavitacion",
      "title": "Cavitación",
      "description": "Deslizamiento del cabezal de ultrasonido avanzado en la zona elegida (abdomen, brazos, cartucheras o muslos). Masaje manual corto para activar la eliminación de líquidos.",
      "options": [
        {
          "name": "Sesión Individual",
          "price": "90 €"
        },
        {
          "name": "Bono de 10 Sesiones",
          "price": "380 €"
        }
      ]
    },
    {
      "id": "asiatica",
      "title": "Asiática",
      "description": "Masaje de inspiración asiática enfocado en liberar tensiones profundas, equilibrar la energía vital y relajar cuerpo y mente mediante técnicas tradicionales.",
      "options": [
        {
          "name": "Sesión Individual",
          "price": "90 €"
        },
        {
          "name": "Bono de 10 Sesiones",
          "price": "750 €"
        }
      ]
    },
    {
      "id": "multifuncional",
      "title": "Multifuncional",
      "description": "Aplicación personalizada de la plataforma lumínica 4 en 1 (Jxy-ttmy005) en la zona seleccionada, adaptando los filtros ópticos según las necesidades específicas de la piel o el vello.",
      "options": [
        {
          "name": "Sesión Individual",
          "price": "120 €"
        },
        {
          "name": "Bono de 10 Sesiones",
          "price": "600 €"
        }
      ]
    },
    {
      "id": "radiofrecuencia-normal",
      "title": "Radiofrecuencia Normal",
      "description": "Tratamiento reafirmante integral para rostro completo, estimulando la producción de colágeno y mejorando la elasticidad.",
      "options": [
        {
          "name": "Facial Completo",
          "price": "90 €"
        },
        {
          "name": "Mitad de Rostro",
          "price": "55 €"
        },
        {
          "name": "Ojos (Periocular)",
          "price": "50 €"
        },
        {
          "name": "Cuello",
          "price": "80 €"
        },
        {
          "name": "Escote",
          "price": "80 €"
        },
        {
          "name": "Abdomen",
          "price": "110 €"
        },
        {
          "name": "Flancos (Laterales)",
          "price": "80 €"
        },
        {
          "name": "Glúteos",
          "price": "110 €"
        },
        {
          "name": "Piernas (Muslos)",
          "price": "110 €"
        },
        {
          "name": "Brazos",
          "price": "110 €"
        }
      ]
    },
    {
      "id": "radiofrecuencia-fracionada",
      "title": "Radiofrecuencia Fracionada",
      "description": "Microlesiones térmicas controladas en todo el rostro para una renovación profunda de la piel, cicatrices y arrugas.",
      "options": [
        {
          "name": "Facial Completo",
          "price": "90 €"
        },
        {
          "name": "Mitad de Rostro",
          "price": "55 €"
        },
        {
          "name": "Ojos (Periocular)",
          "price": "50 €"
        },
        {
          "name": "Cuello",
          "price": "80 €"
        },
        {
          "name": "Escote",
          "price": "80 €"
        },
        {
          "name": "Abdomen",
          "price": "110 €"
        },
        {
          "name": "Flancos (Laterales)",
          "price": "80 €"
        },
        {
          "name": "Glúteos",
          "price": "110 €"
        },
        {
          "name": "Piernas (Muslos)",
          "price": "110 €"
        },
        {
          "name": "Brazos",
          "price": "110 €"
        }
      ]
    },
    {
      "id": "vacuum",
      "title": "Vacuum",
      "description": "Masaje de succión y rodillos mecánicos para movilizar la grasa localizada, activar el sistema circulatorio y combatir la celulitis en la zona deseada.",
      "options": [
        {
          "name": "Sesión Individual",
          "price": "75 €"
        },
        {
          "name": "Bono de 10 Sesiones",
          "price": "600 €"
        }
      ]
    },
    {
      "id": "laser-luminage",
      "title": "Láser Luminage",
      "description": "Aplicación personalizada de la plataforma Láser Luminage en la zona seleccionada para tratamientos de fotodepilación o fotorrejuvenecimiento avanzado.",
      "options": [
        {
          "name": "Sesión Individual",
          "price": "75 €"
        },
        {
          "name": "Bono de 5 Sesiones",
          "price": "320 €"
        },
        {
          "name": "Bono de 10 Sesiones",
          "price": "580 €"
        }
      ]
    },
    {
      "id": "hollywood-pelling",
      "title": "Hollywood Pelling",
      "description": "El tratamiento estrella para eventos, piel apagada, poros abiertos o exceso de grasa. Resultados visibles inmediatos.",
      "options": [
        {
          "name": "Rostro Completo (Efecto Glow Flash)",
          "price": "70 €",
          "bonus": "BONO: 336 € (Ahorro 84 €) 6 Sesiones"
        },
        {
          "name": "Rostro y Cuello (Unificación Integral)",
          "price": "105 €",
          "bonus": "BONO: 504 € (Ahorro 126 €) 6 Sesiones"
        },
        {
          "name": "Zonas Grandes - Espalda / Glúteos (Anti-Acné/Foliculitis)",
          "price": "140 €",
          "bonus": "BONO: 672 € (Ahorro 168 €) 6 Sesiones"
        }
      ]
    }
  ]
} as const satisfies Record<PricingCategory, readonly ServicePricing[]>

export function getCategoryPricing(category: PricingCategory): readonly ServicePricing[] {
  return servicePricingByCategory[category]
}

export function getServicePricing(
  category: PricingCategory,
  serviceId: string,
): ServicePricing | undefined {
  return getCategoryPricing(category).find((service) => service.id === serviceId)
}

export function getServiceCardPrice(service: ServicePricing) {
  const availableOptions = service.options.filter((option) => option.price !== 'Consultar')

  if (availableOptions.length === 0) {
    return 'Consultar'
  }

  const firstPrice = availableOptions[0].price

  if (availableOptions.length === 1 && firstPrice.length <= 26) {
    return firstPrice
  }

  const amounts = availableOptions.flatMap((option) => {
    const amount = option.price.match(/(?:Desde\s*)?([\d.]+(?:,\d+)?)\s*€/i)?.[1]

    if (!amount) {
      return []
    }

    const normalizedAmount = amount.includes('.') && amount.split('.').at(-1)?.length === 3
      ? amount.replace(/\./g, '')
      : amount.replace(',', '.')

    return [{ label: amount, value: Number(normalizedAmount) }]
  })
  const lowestAmount = amounts.reduce<(typeof amounts)[number] | undefined>(
    (lowest, amount) => !lowest || amount.value < lowest.value ? amount : lowest,
    undefined,
  )

  return lowestAmount ? 'Desde ' + lowestAmount.label + ' €' : 'Ver tarifas'
}

export function buildCategoryServiceItems<const TImage extends string>(
  category: PricingCategory,
  images: readonly TImage[],
) {
  return getCategoryPricing(category).map((service, index) => ({
    description: getServiceCardDescription(category, service.id, service.description),
    duration: 'Según opción',
    id: service.id,
    image: images[index % images.length],
    price: getServiceCardPrice(service),
    title: service.title,
  }))
}

export function buildMappedCategoryServiceItems<const TImage extends string>(
  category: PricingCategory,
  imagesByServiceId: Readonly<Record<string, TImage>>,
) {
  return getCategoryPricing(category).map((service) => {
    const image = imagesByServiceId[service.id]

    if (!image) {
      throw new Error(`No hay una imagen asignada al servicio ${category}:${service.id}`)
    }

    return {
      description: getServiceCardDescription(category, service.id, service.description),
      duration: 'Según opción',
      id: service.id,
      image,
      price: getServiceCardPrice(service),
      title: service.title,
    }
  })
}
