import type { ServiceCategory } from './serviceCatalog'

type ServiceModalKey = `${ServiceCategory}:${string}`

const serviceModalDescriptions: Partial<Record<ServiceModalKey, string>> = {
  'oasis:rituales-en-tina':
    'Hidroterapia inmersiva con elementos terapéuticos como sales minerales, botánica ancestral o aromaterapia para promover una relajación física profunda y una desconexión emocional total. Esta experiencia convierte el agua en un ritual sensorial que ayuda a liberar tensión, renovar energía y reconectar con el cuerpo desde la calma.',
  'oasis:exfoliacion':
    'Combate la sequedad de tu piel con frutas. Este tratamiento de estética profesional aprovecha el poder de las enzimas naturales y los ácidos frutales suaves para transformar la textura de tu piel. A través de un cóctel de activos como la bromelina de la piña o la papaína de la papaya, infundimos vitaminas A y C, disolviendo las células muertas de forma eficaz pero delicada, dejando la piel preparada para una hidratación profunda o un bronceado perfecto.',
  'oasis:drenaje-linfatico':
    'Masaje especializado indispensable para la recuperación de cirugías estéticas como liposucción, abdominoplastia o BBL. Mediante maniobras suaves y rítmicas, reduce la inflamación, moviliza líquidos retenidos y facilita la eliminación de hematomas. El protocolo evoluciona según tu recuperación, incluyendo masajes específicos anti-fibrosis, técnicas de moldeo post-lipo y presoterapia para maximizar tus resultados.',
  'oasis:masaje-relajante':
    'Libérate de la pesadez por tensiones físicas acumuladas. A través de un masaje trabajamos de forma rítmica sobre la musculatura de tu espalda, cervicales, hombros y piernas, induciendo un estado que despeja tu mente y cuerpo de preocupaciones que te impiden alcanzar el bienestar general.',
  'oasis:presoterapia':
    'Reactiva el sistema de eliminación de toxinas de tu cuerpo con un método de bombeo mecánico. Nos ayudamos de un traje neumático de 4 vías para aplicar un masaje ascendente que imita tu retorno venoso natural. Es ideal para desinflamar piernas cansadas, combatir la celulitis edematosa, vaciar canales de desecho tras sesiones reductoras o eliminar el ácido láctico después de entrenar.',
  'oasis:ventosas':
    'Reduce la apariencia de la celulitis mediante el poder del vacío. Con recipientes de silicona o vidrio, aplicamos una succión terapéutica que estimula la circulación en muslos, glúteos, espalda, cuello y hombros. Este proceso relaja los tejidos profundos, facilita el drenaje de líquidos y mejora el riego sanguíneo local para moldear tu figura.',
  'oasis:descontracturante':
    'Libérate de la pesadez por tensiones físicas acumuladas. A través de un masaje profundo trabajamos de forma rítmica sobre la musculatura de espalda, cervicales, hombros y piernas, ayudando a soltar contracturas, mejorar la movilidad y devolver al cuerpo una sensación de descanso real.',

  'tacto:esmalte-tradicional':
    'Disfruta de un ritual clásico transformado en un momento de puro descanso para tus manos o pies. Empezamos preparando la zona con una limpieza detallada, el limado de las uñas y el cuidado de las cutículas. Después, aplicamos una exfoliación suave que elimina las células muertas y renueva la piel, dejándola lista para una hidratación profunda. Continuamos con un masaje manual que alivia tensiones y activa la circulación de forma inmediata. Para terminar, colocamos una base protectora, el esmalte tradicional de alta gama que elijas y un sellado de brillo, logrando unas uñas impecables y una piel suave como la seda.',
  'tacto:semipermanente':
    'Disfruta de la durabilidad de un esmaltado semipermanente sin preocuparte por el desgaste de tus uñas. El servicio comienza preparando la zona con la retirada de cutículas y el limado de forma. Luego, aplicamos una fina capa de polímero acrílico que nivela la superficie y fortalece la base, creando un escudo protector que cuida tu queratina natural. Seguido de esto, esmaltamos tus uñas con dos capas de color de alta definición y un sellado de máximo brillo. Para terminar, aplicamos un masaje hidratante con aceite nutritivo, asegurando una manicura impecable que dura hasta tres semanas.',
  'tacto:permanente':
    'Regala a tus pies el descanso y el cuidado que merecen con un tratamiento que combina bienestar, higiene y estética en una sola sesión. Empezamos limpiando y limando las uñas, atendiendo las cutículas y eliminando las durezas superficiales para dejar la piel impecable. Después, aplicamos una exfoliación suave que aporta frescura y ligereza, preparando la zona para un esmaltado permanente que se mantendrá perfecto durante semanas. Para terminar, hidratamos tus pies con un masaje que activa la circulación, dejándote la piel suave y un acabado elegante listo para lucir en cualquier ocasión.',
  'tacto:cortar-limar':
    'Cuida tus uñas de forma rápida y profesional. Empezamos desinfectando la zona y realizando un corte técnico que respeta la forma natural de tus manos o pies para que te sientas totalmente cómoda en tu día a día. Después, hacemos un limado experto con herramientas profesionales esterilizadas; una técnica que no solo da la forma que más te gusta, sino que sella la uña para evitar que se debilite, se astille o se encarne. Para terminar, aplicamos un aceite nutritivo que hidrata la piel.',
  'tacto:acrilicas':
    'Transforma tus manos en una declaración de elegancia y alta resistencia. El proceso comienza liberando el área de la cutícula para aplicar el producto mucho más cerca de la raíz, retrasar visualmente el crecimiento y garantizar que el acrílico no se levante. Con el lienzo perfecto, esculpimos la estructura utilizando materiales de alta gama sobre moldes personalizados, diseñando la longitud y la forma que mejor armonicen con tus dedos. El protocolo culmina con un esmaltado de alta definición y un baño de aceite botánico.',
  'tacto:press-on':
    'Consigue unas uñas largas, diseñadas y perfectas en tiempo récord con un sistema que prioriza la versatilidad y la salud de tus manos. El proceso comienza limpiando la zona de la cutícula para despejar la base de la uña y garantizar una adherencia máxima del producto. Después, medimos y adaptamos de forma personalizada cada tip para que encaje con la anatomía de tus dedos, fijándolos con adhesivos especiales que evitan burbujas de aire y aseguran su estabilidad.',
  'tacto:spa-manos-pies':
    'Regala a tus pies y manos el descanso y el cuidado que merecen con un tratamiento integral de bienestar, higiene y estética. Limpiamos, limamos, atendemos cutículas y suavizamos la piel con exfoliación e hidratación profunda. El protocolo termina con un masaje que activa la circulación y deja una sensación de ligereza, suavidad y cuidado completo.',
  'tacto:reparaciones':
    'Restaura la estructura de tu uña dañada, fisurada o rota sin que nadie note alguna imperfección. Empezamos desinfectando y preparando la zona afectada para aplicar un refuerzo de seda, fibra o acrílico que frena el daño de inmediato y te permite conservar el largo de la uña. Después, realizamos un limado manual para igualar el grosor y la forma con las uñas de al lado, dejando la superficie completamente lisa.',
  'tacto:retiros':
    'Protege la salud de tus uñas con un retiro seguro para mantener tus manos fuertes y sanas. Un mal retirado casero arranca capas de queratina y debilita la base durante meses; por eso, utilizamos productos específicos y tiempos de exposición medidos para cada material, eliminando los residuos de forma suave y manual sin traumas mecánicos.',
  'tacto:mantenimiento-acrilico':
    'Mantén tus uñas acrílicas impecables y resistentes con un mantenimiento técnico que recupera la estructura, rellena el crecimiento natural y reequilibra la arquitectura de cada uña. Trabajamos con precisión la zona de cutícula, nivelamos el producto y renovamos el acabado para que tus manos conserven fuerza, brillo y proporción hasta tu siguiente cita.',

  'filo:depilacion-hilo':
    'Eliminamos tus vellitos desde la raíz con un método limpio, rápido e hipoalergénico que define la línea de tus cejas sin estirar ni irritar la piel delicada del párpado. Es una técnica precisa para conseguir una mirada más limpia, armónica y naturalmente definida.',
  'filo:laminado-cejas':
    'Peinamos y fijamos tus vellos de forma semipermanente. Ideal para cejas rebeldes, despeinadas o delgadas que buscan un efecto visual de mayor grosor, orden y un acabado pulido estilo pasarela.',
  'filo:cejas-henna':
    'Intensifica y rellena tus cejas con un pigmento botánico y natural. La henna tiñe el vello y genera un sombreado sutil sobre la piel de fondo, creando un efecto de maquillaje semipermanente que aporta densidad y definición inmediata.',
  'filo:extensiones-pestanas':
    'Libérate del rímel diario con la precisión de estos servicios. Analizamos la forma de tus ojos, la fuerza de tu pestaña natural y tus hábitos diarios para crear un diseño que potencie tu magnetismo sin comprometer la salud de tu mirada, utilizando materiales de seda y fibra sintética de alta gama.',
  'filo:lifting-pestanas':
    'Potencia tu propia base de pestañas sin usar extensiones. Moldeamos, elevamos y alargamos tus pestañas naturales desde la raíz, abriendo la mirada de forma inmediata con un efecto que resiste agua, piscina y sudor.',
  'filo:laser-diodo':
    'Elimina el vello de forma progresiva y definitiva con un tratamiento de alta tecnología que cuida la salud y la textura de tu dermis. El proceso comienza con una valoración personalizada de tu tipo de piel y vello para ajustar los parámetros del equipo con total seguridad. A continuación, aplicamos pulsos de alta potencia sobre la zona elegida utilizando un sistema de protección térmica avanzada que enfría la piel y minimiza el calor.',
  'filo:depilacion-cera':
    'Consigue una suavidad inmediata y duradera con un servicio de depilación que cuida y respeta la sensibilidad de tu piel. El servicio comienza preparando la zona para aplicar nuestra cera premium a una temperatura totalmente controlada, lo que reduce las molestias y protege el tejido. Mediante una técnica manual precisa y rápida, eliminamos el vello de raíz a la vez que realizamos una suave exfoliación.',
  'filo:depilacion-ipl':
    'Elimina el vello de forma inteligente y progresiva con un tratamiento lumínico avanzado. Para que el precio sea claro: la primera sesión funciona como precio promocional de entrada, desde la segunda sesión aplica el precio regular de la zona y el pack de 6 sesiones ofrece una tarifa total más conveniente. El servicio comienza con diagnóstico personalizado para ajustar los filtros de luz según tu piel, vello y zona a tratar.',

  'hebra:corte-dama':
    'Nuestro servicio de Corte de Dama comienza con un diagnóstico personalizado donde analizamos la morfología de tu rostro, la caída natural de tu cabello y tu estilo de vida. Diseñamos la estructura ideal para tu melena, ya sea que busques sanear y aportar un volumen estratégico, definir capas con movimiento orgánico o apostar por un cambio de look drástico e impecable. Eliminamos con precisión la fibra dañada y las puntas abiertas, devolviéndole la ligereza y el vigor al cabello.',
  'hebra:corte-caballero':
    'La definición perfecta de una imagen impecable y actual. Nuestro servicio de Corte de Caballero fusiona las técnicas de tijera y barbería más precisas con un estudio previo de tu morfología facial y tipo de cabello. Ya sea que busques un estilo clásico, ejecutivo, un degradado pulido o una propuesta de tendencia, estructuramos el corte para que sea favorecedor y sumamente fácil de peinar.',
  'hebra:coctel-anticaida':
    'Disfruta de un Cóctel Anticaída que va directo a la raíz, allí donde los champús comunes no logran llegar. Gracias a una combinación personalizada de vitaminas, minerales y nutrientes esenciales, despertamos el cuero cabelludo y aceleramos el crecimiento capilar. Es la solución ideal para combatir la pérdida de cabello causada por el estrés, los cambios hormonales o el posparto.',
  'hebra:spa-hair-asiatico':
    'La toma de contacto ideal con el bienestar capilar. Comenzamos con un diagnóstico express de tu cuero cabelludo para seleccionar los activos botánicos adecuados. Incluye una fase de oxigenación y limpieza profunda, seguida de un masaje craneal rítmico para activar la microcirculación y liberar la fatiga acumulada en el día a día.',
  'hebra:keratina':
    'Ideal para los cabellos más rebeldes y difíciles de manejar. Este tratamiento de keratina le devuelve a tu cabello la proteína que ha perdido por el uso de planchas, tintes o el sol. No se trata solo de alisar, sino de reparar el cabello desde el interior, sellar las puntas y eliminar por completo el encrespamiento. El resultado es inmediato: tu pelo recupera su fuerza, se vuelve brillante y reduce el tiempo de secado en casa.',
  'hebra:extensiones':
    'El secreto para conseguir la melena de tus sueños en una sola sesión. Antes de la aplicación de extensiones, realizamos un diagnóstico del estado de tu cabello, seleccionando el tono exacto, la textura y la longitud ideal, garantizando una fusión perfecta con tu cabello base. Trabajamos con extensiones naturales de alta calidad para asegurar movimiento orgánico, brillo sedoso y libertad para peinar.',
  'hebra:tintes':
    'Lleva el color que siempre has querido, respetando al máximo tu fibra capilar. Comenzamos analizando tu tipo de cabello y tu tono de piel para recomendarte el matiz exacto que más te favorece. Utilizamos tintes de alta gama que aseguran una cobertura total de canas y un color uniforme desde la raíz hasta las puntas. Para terminar, aplicamos un lavado especial que sella la cutícula y ayuda a fijar el pigmento por más tiempo.',
  'hebra:mechas':
    'Olvídate de los retoques mensuales con un diseño de mechas inteligente y de larga duración. Este servicio incluye técnica de aclarado personalizada, blindaje capilar para proteger la fibra, matiz personalizado para un brillo espectacular, lavado sensorial y peinado profesional. Trabajamos la luz de medios a puntas respetando tu raíz natural, garantizando un crecimiento difuminado e impecable.',
  'hebra:iluminaciones':
    'Consigue una melena con más dimensión, frescura y luz en tu rostro, sin la necesidad de ser esclava del tinte cada mes. Mediante técnicas de degradado de precisión y barrido artesanal, aclaramos sutilmente tus mechones respetando siempre tu raíz natural. El protocolo incluye un blindaje capilar durante la aclaración para proteger la salud de tu hebra y un matiz personalizado.',
  'hebra:cepillado':
    'Prácticas avanzadas de estilismo que redefinen el secado tradicional transformándolo en un ritual de pulido capilar. Antes de esculpir tu melena, preparamos la hebra con un cóctel de activos termo-protectores de alta gama que blindan la fibra frente al calor, sellan la cutícula y potencian su brillo reflectante natural. El resultado es un cabello dócil, sedoso al tacto y con un acabado sofisticado.',
  'hebra:planchado':
    'La solución rápida para llevar una melena impecable, suave y bajo control. En nuestro servicio de Planchado Profesional, el alisado va de la mano con el cuidado de tu salud capilar. Antes de usar las planchas de última generación, aplicamos protectores térmicos de alta calidad que retienen la hidratación y evitan el daño por calor. Alineamos cada mechón para cerrar la cutícula y lograr máximo brillo.',

  'brote:ritual-tina-magica':
    'Tina compartida para niños y niñas con bomba efervescente de color, espuma aromática, cromoterapia, música y albornoces. Un ritual colectivo pensado para convertir el spa en un juego sensorial seguro, cuidado y memorable.',
  'brote:envoltura-corporal':
    'Exfoliación y envoltura corporal con manteca de cacao o pulpa de frutas. Es un tratamiento hidratante y antioxidante de 80 minutos por persona, pensado para cuidar la piel mientras la experiencia se mantiene lúdica, aromática y segura.',
  'brote:chocolaterapia-express':
    'Tratamiento express con crema de cacao, aplicación lúdica y masaje suave de manos. Una experiencia breve para introducir a los niños en el autocuidado desde una sensación dulce, divertida y relajante.',
  'brote:masaje-corporal':
    'Mini masaje relajante en camilla con técnica seca suave en espalda y piernas. Está diseñado para liberar tensión, crear una pausa tranquila y acercar a los peques al bienestar corporal de forma amable.',
  'brote:manicura-pedicura':
    'Manicura y pedicura express para niñas con esmalte de color, purpurina y base coat. Es un servicio de 20 minutos para cuidar manos y pies con un acabado divertido, delicado y fácil de disfrutar.',
  'brote:mini-hair-spa':
    'Mascarilla capilar nutritiva, masaje de cuero cabelludo, aclarado y secado suave. Una experiencia de 20 minutos que cuida el cabello y convierte el lavado en un pequeño ritual de descanso.',
  'brote:mini-spa-facial':
    'Limpieza facial, mascarilla hidratante y masaje facial. Un protocolo suave de 20 minutos para que la piel se sienta luminosa, fresca y descansada sin dejar de ser una experiencia divertida.',

  'tez:hydrafacial-rs':
    'Devuélvele la claridad y la frescura a tu piel sin pasar por el trauma de las limpiezas tradicionales. Este tratamiento abraza tu rostro con un cóctel de antioxidantes y ácido hialurónico de alta gama. Nuestra tecnología de succión vacuum purifica cada poro de forma delicada, previniendo brotes y asegurando un proceso placentero. El resultado es una piel impecable, jugosa y llena de luz propia.',
  'tez:limpieza-facial':
    'Renueva la textura y la vitalidad de tu rostro unificando la limpieza profunda con la regeneración celular en un solo protocolo. Mediante el sistema de succión regulada eliminamos células muertas e impurezas acumuladas en los poros sin agredir el tejido. Posteriormente, la radiofrecuencia genera un calentamiento local y controlado en las capas profundas de la dermis para devolver elasticidad y compactar la piel.',
  'tez:tratamiento-varices':
    'Devuelve el alivio y la ligereza a tus piernas, dejando atrás los problemas circulatorios. A través de la tecnología de radiofrecuencia, una alternativa eficaz, segura y mucho menos invasiva que la cirugía clásica, cerramos la vena desde el interior. Complementamos la sesión con drenaje linfático, presoterapia y vendas frías para reducir calambres e hinchazón.',
  'tez:radiofrecuencia-fraccionada-lifting':
    'Rejuvenece la estructura de tu piel desde el interior mediante calor fraccionado. Emitimos impulsos térmicos en un ángulo de 180 grados para contraer las fibras de colágeno envejecidas, dejando zonas de tejido sano alrededor para que la piel se repare a velocidad récord. Durante las siguientes semanas, tu rostro produce colágeno nuevo, cerrando poros y redefiniendo mandíbula y cuello.',
  'tez:radiofrecuencia-general':
    'Frena la flacidez y recupera la densidad de tu piel reduciendo los poros dilatados. Aplicamos radiofrecuencia que calienta las capas de la dermis de forma controlada para activar la producción de colágeno y elastina. Un efecto tensor que redefine tu óvalo facial sin dejar marcas.',
  'tez:rejuvenecimiento-vaginal':
    'Recupera tu confort, seguridad y plenitud íntima. Este tratamiento avanzado y no invasivo utiliza tecnología térmica para bioestimular el colágeno y la elastina de la zona íntima, devolviendo firmeza al tejido, combatiendo la sequedad y fortaleciendo el suelo pélvico. Una alternativa científica, sin cirugía y diseñada para restaurar tu bienestar funcional.',
  'tez:pack-lipo':
    'Remodelación corporal completa para acelerar la quema de grasa. Este tratamiento intensivo combina cavitación, radiofrecuencia, vacuumterapia y drenaje manual en una sola sesión premium. Es un protocolo personalizado a la medida de tu silueta para acelerar los resultados de una figura firme y esculpida.',
  'tez:criolipolisis':
    'Olvídate de esos depósitos de grasa resistentes mediante la aplicación de frío controlado. Basado en el principio de la apoptosis, este procedimiento cristaliza las células grasas para su eliminación gradual y natural a través del sistema linfático, sin dañar los tejidos circundantes. La alternativa perfecta a la liposucción para abdomen, flancos o muslos.',
  'tez:cavitacion':
    'Tratamiento no invasivo diseñado para eliminar la grasa localizada y moldear la figura. Utiliza tecnología de ultrasonido de baja frecuencia que actúa directamente sobre los depósitos grasos, facilitando su eliminación natural a través del sistema linfático. Ideal para zonas resistentes como abdomen, cintura, piernas y brazos.',
  'tez:presoterapia':
    'Reactiva el sistema de eliminación de toxinas de tu cuerpo con un método de bombeo mecánico. Nos ayudamos de un traje neumático de 4 vías para aplicar un masaje ascendente que imita tu retorno venoso natural. Es ideal para desinflamar piernas cansadas, combatir la celulitis edematosa, vaciar canales de desecho tras sesiones reductoras o eliminar ácido láctico después de entrenar.',
  'tez:maderoterapia':
    'El arte de esculpir tu silueta de forma completamente natural y profundamente placentera. Utilizando instrumentos de madera noble con diseños anatómicos exclusivos, esta técnica manual intensiva estimula la microcirculación, remueve cúmulos grasos localizados y drena toxinas del organismo.',
  'tez:radiofrecuencia-corporal':
    'Recupera la firmeza absoluta de tu piel tras pérdidas de peso o posparto. Esta tecnología genera un estímulo térmico controlado en las capas más profundas de la dermis, contrayendo fibras elásticas caídas y activando la producción masiva de colágeno nuevo, difuminando estrías y restaurando el tejido.',
  'tez:gimnasia-pasiva':
    'El sistema definitivo que fusiona tecnología avanzada y activación física profunda. A través de impulsos eléctricos controlados de baja frecuencia, genera contracciones musculares intensas en glúteos, abdomen y piernas, alcanzando fibras imposibles de activar con el ejercicio convencional. Ideal para tonificar y definir la silueta de forma rápida sin sobrecargar articulaciones.',
  'tez:radiofrecuencia-general-corporal':
    'Reduce centímetros de contorno y moldea tus curvas sin marcas. La radiofrecuencia calienta la dermis para estirar las fibras de la piel, logrando combatir el descolgamiento y mejorar la textura corporal con un efecto de firmeza progresiva.',
  'tez:drenaje-linfatico':
    'Masaje especializado indispensable para recuperación estética y corporal. Mediante maniobras suaves y rítmicas, reduce inflamación, moviliza líquidos retenidos y facilita la eliminación de toxinas. El protocolo puede acompañar procesos postquirúrgicos o tratamientos reductores para maximizar resultados.',
  'tez:metaloterapia':
    'Redefine tus curvas mediante el poder del vacío controlado y herramientas de precisión. Este protocolo realiza un masaje profundo que ayuda a despegar nódulos de grasa, eliminar retención de líquidos y mejorar el riego sanguíneo local, favoreciendo un efecto moldeador visible.',
  'tez:vendas-frias':
    'Tratamiento de crioterapia que produce una contracción muscular y vascular inmediata, excelente para reafirmar, activar la circulación y acompañar protocolos reductores. Las vendas frías ayudan a tonificar y aportar una sensación de ligereza en zonas con retención o flacidez.',
  'tez:multifuncional':
    'Sinergia tecnológica que combina láser lipolítico con calor profundo para potenciar resultados corporales. Este protocolo permite personalizar la sesión según el objetivo: reducir grasa localizada, mejorar firmeza, activar drenaje y trabajar textura corporal de forma no invasiva.',
}

export function getServiceModalDescription(category: ServiceCategory, serviceId: string) {
  return serviceModalDescriptions[`${category}:${serviceId}`]
}
