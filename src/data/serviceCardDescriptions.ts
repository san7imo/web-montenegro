import type { PricingCategory } from './servicePricing'

type ServiceCardDescriptionKey = `${PricingCategory}:${string}`

/**
 * Resúmenes editoriales exclusivos para las tarjetas.
 * Las descripciones completas del tarifario permanecen disponibles en los modales.
 */
const serviceCardDescriptions: Partial<Record<ServiceCardDescriptionKey, string>> = {
  'oasis:masaje-relajante':
    'Masaje pausado que trabaja espalda, cuello, hombros y cráneo para liberar la tensión acumulada y favorecer un descanso profundo. Sus maniobras rítmicas ayudan a calmar la mente, relajar la musculatura y recuperar ligereza.',
  'oasis:ventosas':
    'Terapia focalizada con ventosas para aliviar la sobrecarga de la zona lumbar o cervical mediante una succión controlada. Ayuda a relajar tejidos profundos, estimular la circulación local y devolver movilidad y bienestar al cuerpo.',
  'oasis:ritual-dos-almas':
    'Experiencia de bienestar para compartir en pareja, con inmersión hidrotérmica, infusión de 21 hierbas y una consulta alquímica inicial. Un encuentro íntimo que invita a desconectar, armonizar la energía y disfrutar la calma juntos.',

  'tez:eliminacion-de-tatuajes':
    'Tratamiento láser focalizado para aclarar progresivamente tatuajes pequeños de hasta 5 x 5 cm con parámetros adaptados a la piel y al pigmento. Incluye higiene profunda, emulsión regeneradora y protección final de la zona tratada.',
  'tez:eliminacion-de-manchas':
    'Protocolo despigmentante que combina preparación cutánea, exfoliación biológica y tecnología focalizada para mejorar el aspecto de manchas visibles. Finaliza con mascarilla antioxidante y protección solar de alta oclusión.',
  'tez:curacion-de-varices':
    'Sesión de toma de contacto orientada a aliviar la sensación de pesadez y favorecer el bienestar circulatorio de las piernas. Permite conocer la respuesta del cuerpo al protocolo antes de elegir un bono y planificar su continuidad.',
  'tez:gym-pasiva':
    'Activación muscular mediante impulsos EMS personalizados en abdomen, glúteos o piernas, según los objetivos definidos en el diagnóstico. Favorece la tonificación, estimula fibras profundas y complementa los hábitos de cuidado corporal.',
  'tez:limpieza-facial':
    'Limpieza facial profunda pensada para renovar la piel, retirar impurezas y devolver frescura al rostro sin una intervención agresiva. Es ideal como cuidado mensual, para pieles jóvenes o como primer acercamiento a la tecnología Hydro.',
  'tez:lipo-sin-cirugia':
    'Consulta diagnóstica personalizada con Olga Lucía para analizar objetivos, hábitos y zonas prioritarias antes de iniciar un protocolo corporal. A partir de esta valoración se diseña un Mapa Corporal Maestro seguro, realista y medible.',
  'tez:masajes-reductores':
    'Masaje focalizado para trabajar acumulaciones localizadas y favorecer una silueta más definida en áreas como abdomen, cintura o muslos. Combina maniobras reductoras y drenantes adaptadas a cada cuerpo para potenciar resultados.',
  'tez:maderoterapia':
    'Sesión corporal que combina valoración, masaje reductor manual, crema anticelulítica y drenaje linfático básico. Las maniobras y herramientas se adaptan a la zona elegida para movilizar tejidos, reducir pesadez y mejorar el contorno.',
  'tez:micropigmentacion-de-labios':
    'Sesión tecnológica especializada para retirar progresivamente pigmentos no deseados en toda la superficie de los labios. El protocolo prioriza la precisión, el cuidado de la piel y una recuperación acompañada con pautas posteriores.',
  'tez:rejuvenecimiento-360-incluye-zona-corporal-combinado-con-rostro':
    'Protocolo integral que combina el cuidado del rostro con una zona corporal para estimular la renovación y mejorar la firmeza. Ayuda a redefinir el óvalo facial, suavizar líneas de expresión y recuperar una apariencia más luminosa.',
  'tez:rejuvenecimiento-facial':
    'Tratamiento facial que integra diagnóstico, preparación cutánea, renovación celular y estimulación tecnológica profunda. Se completa con activos concentrados, mascarilla biológica y masaje para mejorar luminosidad, textura y firmeza.',
  'tez:rejuvenecimiento-intimo':
    'Cuidado estético externo orientado a recuperar hidratación, tonicidad y elasticidad en la zona vulvar de manera respetuosa. El protocolo se adapta a las necesidades personales para mejorar el confort y favorecer una piel más cuidada.',
  'tez:manicura-y-pedicura-semipermanente':
    'Servicio combinado para cuidar manos y pies en una misma sesión, con preparación precisa de uñas y cutículas, hidratación y esmaltado semipermanente. Ofrece un acabado uniforme, brillante y resistente para lucirlo durante más tiempo.',
  'tez:manicura-tradicional':
    'Ritual de 45 minutos para embellecer las manos mediante diagnóstico, limado preciso, limpieza de cutículas e hidratación. Finaliza con esmaltado tradicional y una capa de brillo que deja las uñas cuidadas, pulidas y elegantes.',

  'filo:depilacion-con-cera':
    'Depilación facial de mantenimiento con cera templada y técnica precisa para retirar el vello desde la raíz respetando la sensibilidad de la piel. Ayuda a conservar el rostro limpio, suave y definido con un acabado uniforme y duradero.',
  'filo:depilacion-laser':
    'Depilación láser facial de mantenimiento con parámetros personalizados según el tipo de piel, vello y zona seleccionada. Sus pulsos actúan de forma progresiva sobre el folículo para reducir el crecimiento y mantener una piel más suave.',
  'filo:depilacion-ipl':
    'Depilación con luz pulsada intensa para reducir progresivamente el vello en zonas faciales y corporales. El equipo se ajusta a las características de cada piel y cada área, ofreciendo sesiones individuales y paquetes bien organizados.',
  'filo:depilacion-de-cejas-con-cera':
    'Diseño de cejas adaptado a la morfología del rostro, seguido de depilación técnica con cera templada y definición final con pinza. Permite limpiar el contorno, equilibrar proporciones y realzar la expresión natural de la mirada.',
  'filo:depilacion-de-cejas-con-henna':
    'Diseño y coloración de cejas con henna para definir la forma, aportar densidad visual y rellenar pequeños espacios. Incluye limpieza y aplicación controlada del pigmento para lograr un acabado natural, equilibrado y favorecedor.',
  'filo:laminado-de-cejas':
    'Tratamiento que ordena, eleva y fija los vellos de las cejas para conseguir una forma más definida y un efecto visual de mayor densidad. Incluye limpieza, mapeo, laminado, neutralización e hidratación final con queratina.',
  'filo:micropigmentacion-de-cejas':
    'Técnica de definición semipermanente que simula vellos naturales mediante trazos finos y precisos. Incluye visagismo personalizado para equilibrar la forma de las cejas y recomendaciones iniciales para cuidar correctamente la piel.',
  'filo:extensiones-de-pestanas-clasicas':
    'Aplicación individual de extensiones sobre cada pestaña natural, respetando su curvatura, longitud y resistencia. Esta técnica aporta definición y elegancia a la mirada con un resultado ligero, equilibrado y cómodo para el uso diario.',
  'filo:extensiones-efecto-ojo-de-gato':
    'Diseño de extensiones que aumenta gradualmente la longitud hacia el extremo externo para alargar visualmente el ojo. El mapeo se adapta a la forma de la mirada y mantiene un acabado definido, armónico, favorecedor y elegante.',
  'filo:extensiones-efecto-volumen-ruso':
    'Técnica de volumen con abanicos ultraligeros que aporta mayor densidad sin sobrecargar la pestaña natural. La distribución se personaliza para rellenar zonas escasas y crear una mirada intensa, uniforme y visualmente equilibrada.',
  'filo:extensiones-de-pestanas-efecto-wispy':
    'Diseño de extensiones trabajado por capas y con longitudes alternadas para crear un acabado ligero, texturizado y moderno. Se adapta a la forma del ojo para aportar dimensión y una mirada definida sin perder naturalidad.',
  'filo:lifting-de-pestanas':
    'Tratamiento que eleva y curva las pestañas naturales desde la raíz para abrir la mirada sin necesidad de extensiones. Incluye tinte y queratina para intensificar el color, nutrir la fibra y conseguir un efecto definido y duradero.',

  'brote:bolsa-de-regalo':
    'Complemento especial para prolongar la experiencia de fiesta con una selección de pequeños detalles preparados para cada participante. La bolsa convierte el cierre del encuentro en un recuerdo alegre, cuidado y fácil de llevar a casa.',
  'brote:tina-magica-infantil':
    'Sesión de spa grupal para niños y niñas que combina agua, espuma, color y estímulos sensoriales en un entorno adaptado. La experiencia promueve la relajación, el juego compartido y momentos memorables con acompañamiento cuidadoso.',
  'brote:envoltura-corporal':
    'Ritual corporal infantil con manteca de cacao puro o pulpa de frutas, seleccionada para cuidar la piel con suavidad. Su textura y aroma convierten la hidratación en una experiencia divertida, tranquila y adecuada para los peques.',
  'brote:mini-spa-party':
    'Experiencia temática de spa creada para celebrar entre niños y niñas con actividades de cuidado, juego sensorial y relajación. Cada momento se desarrolla en un ambiente seguro y alegre para compartir una ocasión muy especial.',
  'brote:manicura-y-pedicura-infantil':
    'Cuidado suave de manos y pies diseñado para niños y niñas con productos seguros y adaptados a su piel. Incluye preparación delicada, hidratación y detalles de color para convertir el autocuidado en un momento creativo y divertido.',
  'brote:masaje-corporal-infantil':
    'Masaje corporal infantil con maniobras lentas y suaves para liberar pequeñas tensiones y favorecer una sensación de calma. Se realiza con productos hipoalergénicos y un ritmo adaptado para ofrecer una experiencia segura y relajante.',
  'brote:merienda-saludable-infantil':
    'Merienda infantil alegre y nutritiva con frutas frescas, zumos naturales y snacks saludables presentados de forma temática. Está pensada para reponer energía después del spa y convertir la pausa gastronómica en parte de la celebración.',
  'brote:mini-hair-spa-infantil':
    'Ritual capilar infantil con agua, mascarilla orgánica nutritiva, masaje suave del cuero cabelludo y peinado final. Cuida el cabello de los niños y niñas mientras transforma el lavado en una experiencia sensorial agradable y relajante.',
  'brote:mini-spa-facial-infantil':
    'Tratamiento facial suave para la piel delicada de niños y niñas con productos orgánicos e hipoalergénicos. Combina limpieza, hidratación y relajación para aportar frescura al rostro dentro de una experiencia segura y divertida.',
  'brote:peinados-infantil':
    'Servicio de peluquería infantil con productos suaves y técnicas respetuosas con el cabello de niños y niñas. Permite crear peinados temáticos, elegantes o divertidos para celebraciones, fotografías y otras ocasiones especiales.',

  'hebra:cepillado-profesional':
    'Cepillado profesional que moldea la melena, aporta definición y eleva el volumen desde la raíz con técnica controlada. El cabello queda pulido, ligero y con movimiento, listo para acompañar el estilo diario o una ocasión especial.',
  'hebra:coctel-anticaida-capilar':
    'Protocolo capilar orientado a fortalecer la raíz y acompañar procesos de caída mediante un cóctel purificado de activos. Incluye diagnóstico, aplicación y masaje de activación para estimular el cuero cabelludo y su vitalidad.',
  'hebra:corte-de-cabello-caballero':
    'Corte masculino personalizado según la morfología del rostro, la textura del cabello y el estilo deseado. Incluye perfilado preciso de contornos y peinado final con producto de fijación para obtener una imagen limpia y equilibrada.',
  'hebra:corte-de-dama':
    'Corte femenino diseñado según el rostro, la caída natural del cabello y el estilo personal. Incluye lavado protector, estructura técnica y secado ligero para renovar la forma, sanear las puntas y aportar movimiento a la melena.',
  'hebra:extensiones-de-cabello':
    'Servicio de extensiones para aportar longitud o densidad a melenas finas mediante una colocación adaptada al cabello natural. Incluye diagnóstico previo, selección y corte de fusión para lograr un resultado armónico y discreto.',
  'hebra:spa-capilar-asiatico':
    'Ritual capilar de inspiración asiática que combina diagnóstico, aromaterapia, purificación botánica y masaje craneal. Ayuda a limpiar el cuero cabelludo, liberar tensión y devolver una sensación de frescura, equilibrio y descanso.',
  'hebra:iluminaciones-de-cabello':
    'Diseño sutil de luz en puntos estratégicos de la melena para aportar dimensión, frescura y brillo sin transformar por completo el color base. Incluye lavado técnico y peinado básico para apreciar un acabado natural y favorecedor.',
  'hebra:keratina':
    'Tratamiento de queratina que alisa, disciplina y reduce el encrespamiento mientras ayuda a sellar la fibra capilar. Se adapta a la longitud y al estado del cabello para conseguir un acabado más suave, manejable, brillante y uniforme.',
  'hebra:mechas':
    'Servicio de coloración personalizado según la técnica, el largo, la base actual y el resultado deseado. Permite crear contrastes, profundidad o puntos de luz cuidando la fibra capilar y construyendo un acabado coherente con el estilo.',
  'hebra:planchado-profesional':
    'Alisado térmico profesional para pulir la melena y conseguir un acabado uniforme en menos tiempo. Se trabaja por secciones con control de temperatura y protección adecuada para aportar suavidad, brillo y movimiento sin rigidez.',
  'hebra:aplicacion-de-tinte':
    'Aplicación global de tinte para cabello corto, realizada con atención a la base, el tono elegido y la cobertura necesaria. El servicio busca un color uniforme y bien integrado, respetando el estado y las necesidades de la fibra.',

  'tacto:unas-acrilicas':
    'Extensión y estructuración de uñas con acrílico, personalizada en forma cuadrada, ovalada o almendra según el estilo de cada persona. Aporta longitud, resistencia y una base equilibrada para lucir un acabado elegante y duradero.',
  'tacto:corte-y-limado-de-unas':
    'Servicio esencial para mantener las uñas limpias, cómodas y con una forma armónica. Incluye higienización, corte morfológico, limado preciso y emulsión hidratante para proteger los bordes y mejorar el aspecto de manos o pies.',
  'tacto:laser-antihongos-en-unas':
    'Protocolo tecnológico para el cuidado de uñas afectadas por hongos, con higiene previa, aplicación de láser térmico y sellado antiséptico. La sesión se realiza de forma focalizada para acompañar una apariencia más sana y cuidada.',
  'tacto:mantenimiento-de-unas':
    'Mantenimiento técnico para renovar el crecimiento y conservar la estructura de las uñas en equilibrio. Incluye manicura rusa, relleno, limado de simetría y cambio de color para prolongar un acabado resistente, uniforme y cuidado.',
  'tacto:pedicura-permanente':
    'Pedicura completa con valoración, retirada de durezas, exfoliación, corte y cuidado preciso de las uñas. Finaliza con esmaltado permanente y masaje hidratante para conseguir pies suaves, descansados y con un acabado duradero.',
  'tacto:press-on':
    'Sistema de uñas Press On personalizado para lograr longitud y diseño con una aplicación cuidada. Incluye preparación de cutícula, medición, adaptación, colocación y sellado en colores lisos o efectos básicos de acabado uniforme.',
  'tacto:reparacion-de-unas':
    'Reparación localizada para recuperar una uña fisurada, rota o debilitada sin alterar el aspecto del conjunto. Incluye limpieza, material de refuerzo, limado preciso y sellado para devolver estabilidad, forma y un acabado discreto.',
  'tacto:retiro-de-acrilico':
    'Retirada profesional del material acrílico aplicado en el estudio, realizada con técnica controlada para respetar la superficie natural de la uña. El proceso elimina residuos con suavidad y prepara las manos para su siguiente cuidado.',
  'tacto:retiro-de-esmalte-tradicional':
    'Retiro rápido y cuidadoso del esmalte convencional en manos o pies, con una duración aproximada de cinco a diez minutos. La técnica limpia el color sin fricción innecesaria y deja las uñas preparadas para descansar o renovarse.',

  'raiz:criopolosis':
    'Tratamiento con frío controlado para trabajar depósitos de grasa muy localizados en áreas pequeñas como papada o axilas. Actúa de forma no invasiva sobre el tejido seleccionado para ayudar a definir zonas que desdibujan el contorno.',
  'raiz:dermapen':
    'Sesión de renovación cutánea con Dermapen para estimular la piel y mejorar luminosidad, hidratación y líneas de expresión finas. Es una toma de contacto que permite valorar la respuesta antes de avanzar a un plan intensivo.',
  'raiz:presoterapia':
    'Sesión de 45 minutos con compresión neumática secuencial para estimular el retorno venoso y el drenaje natural. Ayuda a aliviar piernas cansadas, reducir la sensación de pesadez y acompañar protocolos corporales o hábitos deportivos.',
  'raiz:cavitacion':
    'Tecnología de ultrasonido aplicada en abdomen, brazos, cartucheras o muslos para trabajar grasa localizada de forma no invasiva. La sesión finaliza con masaje manual que favorece el movimiento de líquidos y el modelado corporal.',
  'raiz:asiatica':
    'Masaje de inspiración asiática que combina maniobras tradicionales para liberar tensiones y favorecer el equilibrio corporal. Su ritmo envolvente ayuda a calmar la mente, movilizar la energía y recuperar una sensación de bienestar.',
  'raiz:multifuncional':
    'Plataforma lumínica multifuncional 4 en 1 adaptada a la zona y a las necesidades específicas de la piel o del vello. Sus filtros ópticos permiten personalizar cada sesión para abordar distintos objetivos estéticos con precisión.',
  'raiz:radiofrecuencia-normal':
    'Radiofrecuencia facial integral que genera calor controlado para estimular la producción natural de colágeno y mejorar la elasticidad. Ayuda a reafirmar, suavizar la textura y recuperar un aspecto más compacto sin cirugía.',
  'raiz:radiofrecuencia-fracionada':
    'Tratamiento facial con microlesiones térmicas controladas que impulsan la renovación profunda de la piel. Está orientado a mejorar arrugas, cicatrices, poros y textura, favoreciendo una apariencia más uniforme y revitalizada.',
  'raiz:vacuum':
    'Masaje tecnológico con succión y rodillos mecánicos para movilizar grasa localizada y activar la circulación en la zona seleccionada. Ayuda a trabajar celulitis, retención y textura mientras favorece un contorno más uniforme.',
  'raiz:laser-luminage':
    'Aplicación personalizada de Láser Luminage para trabajar fotodepilación o fotorrejuvenecimiento según la zona y el objetivo. Los parámetros se ajustan cuidadosamente para ofrecer una sesión focalizada, progresiva y adaptada a la piel.',
  'raiz:hollywood-pelling':
    'Tratamiento facial de efecto inmediato pensado para eventos, piel apagada, poros visibles o exceso de grasa. Renueva suavemente la superficie, mejora la luminosidad y deja el rostro con una textura más limpia, uniforme y radiante.',
}

function normalizeCardDescription(description: string) {
  return description
    .replace(/\s*[•·]\s*/g, '. ')
    .replace(/\s+\+\s+/g, ', ')
    .replace(/\s*—\s*/g, '. ')
    .replace(/:\s*\.\s*/g, ': ')
    .replace(/^\.\s*/, '')
    .replace(/([.!?])\s*\.\s*/g, '$1 ')
    .replace(/\.{2,}/g, '.')
    .replace(/\s{2,}/g, ' ')
    .trim()
}

export function getServiceCardDescription(
  category: PricingCategory,
  serviceId: string,
  originalDescription: string,
) {
  const key: ServiceCardDescriptionKey = `${category}:${serviceId}`

  return normalizeCardDescription(serviceCardDescriptions[key] ?? originalDescription)
}
