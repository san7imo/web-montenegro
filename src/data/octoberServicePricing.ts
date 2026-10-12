// October client update: cryolipolysis image; presotherapy from the repository workbook.
import type { ServicePricing } from "./servicePricing"

export const octoberTezPricing: ServicePricing[] = [
  {
    "id": "criolipolisis",
    "title": "Criolipólisis",
    "description": "Criolipólisis mediante enfriamiento controlado para grasa localizada. Elige entre zonas pequeñas, zonas medianas, abdomen parcial y abdomen completo.",
    "options": [
      {
        "name": "Zonas Pequeñas (Brazos, papada, rodillas internas)",
        "price": "1 Zona: 150 € · 2 Zonas: 280 €",
        "description": "Tratamiento no invasivo de grasa localizada mediante enfriamiento térmico controlado, diseñado para depósitos grasos pequeños como brazos, papada o cara interna de rodillas.",
        "duration": "45 min",
        "bonus": "Bono 3 Sesiones: 390 € (130 €/sesión)\nBono 5 Sesiones: 600 € (120 €/sesión)"
      },
      {
        "name": "Zonas Medianas (Flancos, cartucheras, muslos internos, muslos externos, espalda baja, espalda alta, pliegue subglúteo)",
        "price": "1 Zona: 170 € · 2 Zonas: 320 €",
        "description": "Protocolo de remodelación corporal mediante enfriamiento preciso de depósitos grasos de tamaño mediano en flancos, cartucheras, muslos, espalda o pliegue subglúteo.",
        "duration": "60 min",
        "bonus": "Bono 3 Sesiones: 450 € (150 €/sesión)\nBono 5 Sesiones: 700 € (140 €/sesión)"
      },
      {
        "name": "Abdomen (Zonas Parciales: abdomen superior, abdomen inferior)",
        "price": "1 Zona: 180 € · 2 Zonas: 340 €",
        "description": "Tratamiento focalizado para acumulaciones adiposas en el abdomen superior o inferior mediante la aplicación de frío constante y controlado.",
        "duration": "1 h 15 min",
        "bonus": "Bono 3 Sesiones: 480 € (160 €/sesión)\nBono 5 Sesiones: 750 € (150 €/sesión)"
      },
      {
        "name": "Abdomen Completo (Gran Zona)",
        "price": "1 Zona: 250 € · 2 Zonas: 480 €",
        "description": "Sesión intensiva diseñada para abordar el abdomen completo, comprendiendo las zonas superior e inferior en una misma planificación, con una combinación estratégica de aplicadores.",
        "duration": "1 h 30 min",
        "bonus": "Bono 3 Sesiones: 690 € (230 €/sesión)\nBono 5 Sesiones: 1.050 € (210 €/sesión)"
      }
    ]
  },
  {
    "id": "presoterapia",
    "title": "Presoterapia",
    "description": "Presoterapia mediante un traje neumático que aplica un masaje ascendente para favorecer el drenaje y aliviar la sensación de piernas cansadas.",
    "options": [
      {
        "name": "Sesión Individual de Referencia",
        "price": "40 €",
        "duration": "45 min",
        "sourceSheet": "PRECIOS SERVICIOS MONTENEGRO",
        "sourceRow": 225,
        "description": "Presoterapia mediante un traje neumático que aplica un masaje ascendente para favorecer el drenaje y aliviar la sensación de piernas cansadas."
      },
      {
        "name": "Bono 5 Sesiones (Alivio inicial)",
        "price": "140 €",
        "duration": "5 sesiones de 45 min",
        "sourceSheet": "PRECIOS SERVICIOS MONTENEGRO",
        "sourceRow": 226,
        "description": "Presoterapia mediante un traje neumático que aplica un masaje ascendente para favorecer el drenaje y aliviar la sensación de piernas cansadas."
      },
      {
        "name": "Bono 10 Sesiones (Cambios visibles)",
        "price": "280 €",
        "duration": "10 sesiones de 45 min",
        "sourceSheet": "PRECIOS SERVICIOS MONTENEGRO",
        "sourceRow": 227,
        "description": "Presoterapia mediante un traje neumático que aplica un masaje ascendente para favorecer el drenaje y aliviar la sensación de piernas cansadas."
      },
      {
        "name": "Bono 15 Sesiones (Renovación profunda)",
        "price": "350 €",
        "duration": "15 sesiones de 45 min",
        "sourceSheet": "PRECIOS SERVICIOS MONTENEGRO",
        "sourceRow": 228,
        "description": "Presoterapia mediante un traje neumático que aplica un masaje ascendente para favorecer el drenaje y aliviar la sensación de piernas cansadas."
      },
      {
        "name": "Pack Drenante Básico (Presoterapia + Masaje Manual)",
        "price": "45 €",
        "duration": "Por sesión",
        "sourceSheet": "PRECIOS SERVICIOS MONTENEGRO",
        "sourceRow": 229,
        "description": "Presoterapia mediante un traje neumático que aplica un masaje ascendente para favorecer el drenaje y aliviar la sensación de piernas cansadas."
      }
    ]
  }
]
