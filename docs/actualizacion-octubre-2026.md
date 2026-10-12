# Actualización de servicios y material multimedia — octubre de 2026

## Fuentes

- Carpeta del cliente: https://drive.google.com/drive/folders/1cOaW7S7MfQObLl0MMjOcXDBX3yo_XApT
- Galería Eco: subcarpeta «Para la galeria Eco».
- Criolipólisis: captura enviada por Santiago el 12 de octubre de 2026.
- Presoterapia: `PRECIOS SERVICIOS MONTENEGRO (1).xlsx`, filas 225–229. Las descripciones breves se redactaron para presentar el servicio.
- `material-drive-octubre-2026.json` conserva el nombre, identificador y destino de cada archivo utilizado. Los videos se optimizaron a MP4 H.264 y tienen imágenes de portada.

## Cambios

- Criolipólisis: cuatro opciones con zonas corporales, tarifas de una y dos zonas, bonos de tres y cinco sesiones y duración.
- Presoterapia: incorporada al catálogo de Tez con cinco tarifas del Excel y fotografía proporcionada.
- Fotografías del catálogo: asociadas por servicio y, cuando corresponde, por opción de cejas, pestañas y rituales de agua.
- Portadas en video de Tacto y Lazo, con alternativa estática para movimiento reducido.
- Eco: galerías de Tez, Oasis, Hebra y Filo con 14 imágenes y videos reales. Se retiró la reseña de manicura. Los dos archivos de Tacto encontrados en la subcarpeta se excluyeron de Eco porque el mensaje limita expresamente sus categorías.

| Opción de criolipólisis | Una zona | Dos zonas | Bono 3 sesiones | Bono 5 sesiones | Duración |
| --- | --- | --- | --- | --- | --- |
| Zonas pequeñas | 150 € | 280 € | 390 € | 600 € | 45 min |
| Zonas medianas | 170 € | 320 € | 450 € | 700 € | 60 min |
| Abdomen parcial | 180 € | 340 € | 480 € | 750 € | 1 h 15 min |
| Abdomen completo | 250 € | 480 € | 690 € | 1.050 € | 1 h 30 min |

## Validación

- Compilación TypeScript y Vite, ESLint y revisión de espacios de Git.
- Comprobación de todas las tarifas y duraciones de criolipólisis, tarifas de presoterapia, correspondencia de imágenes con servicios y opciones, y categorías y archivos de Eco.
- Decodificación de imágenes y videos, comprobando H.264 para los videos.
- La prueba visual e interactiva en navegador queda pendiente: este entorno no tiene Chromium y la descarga del navegador devuelve un archivo inválido. Revisar en móvil y escritorio antes de integrar.

## Pendientes de contenido

Los cambios adicionales de precios y el documento mencionado en el mensaje del cliente requieren su entrega. No se incorporaron precios nuevos que no estuvieran en la captura o en el Excel existente.
