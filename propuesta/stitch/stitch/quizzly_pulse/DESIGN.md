# Especificacion del Sistema de Diseno: El Polimata Cinetico

## 1. Vision General y Norte Creativo
Este sistema de diseno se aleja de la naturaleza estatica y cuadrada de las aplicaciones de trivia tradicionales para adoptar una filosofia que llamamos **"El Polimata Cinetico".**

Nuestro Norte es una experiencia editorial de alto nivel que se sienta tan rapida como una ronda relampago, pero tan sofisticada como una revista premium. Logramos esto rechazando grillas rigidas "tipo plantilla" en favor de **asimetria intencional, superficies superpuestas y escalas tipograficas agresivas.** El objetivo es crear una interfaz "viva" donde la profundidad se perciba por cambios tonales en lugar de simularse con lineas duras.

Al usar "Plus Jakarta Sans" para momentos de alto impacto e "Inter" para claridad funcional, equilibramos la emocion del juego con la precision de una herramienta de aprendizaje profesional.

---

## 2. Colores y Alma Visual
La paleta esta construida sobre tokens de alta vibracion que capturan la atencion, equilibrados por una estructura de superficies sofisticada tipo "Off-Ink".

### Regla "Sin Lineas"
**Instruccion Explicita:** Esta prohibido usar bordes solidos de 1px para definir secciones o contenedores. La separacion debe lograrse exclusivamente mediante cambios de color de fondo o mediante el respaldo de "Ghost Border".
- Usa `surface-container-low` (#f2efff) para separar contenido que se apoya sobre un fondo `surface` (#f8f5ff).
- Para crear un punto focal, usa `surface-container-highest` (#dbd9ff).

### Jerarquia y Anidamiento de Superficies
Piensa la UI como una serie de laminas fisicas apiladas de material semitranslucido.
- **Capa Base:** `surface` (#f8f5ff)
- **Bloques de Contenido:** `surface-container` (#e8e6ff)
- **Tarjetas Elevadas:** `surface-container-lowest` (#ffffff) - Esto genera un "pop" frente a contenedores mas oscuros.

### Regla de Vidrio y Gradiente
Para asegurar que la app se sienta "Custom" y no "Stock", usa las siguientes texturas distintivas:
- **Gradiente Distintivo:** Para CTAs primarios y encabezados Hero, haz una transicion de `primary` (#004be2) a `primary-container` (#809bff) en un angulo de 135 grados.
- **Glassmorphism:** Para navegacion flotante o superposiciones modales, usa `surface` con 80% de opacidad y un `24px` backdrop-blur.

---

## 3. Tipografia
Usamos un sistema dual de tipografias para crear un ritmo editorial.

*   **Display y Titulares (Plus Jakarta Sans):** Estas son tus capas de "vibe". Usa `display-lg` (3.5rem) para revelar puntuaciones y `headline-md` (1.75rem) para preguntas de trivia. La naturaleza geometrica de Plus Jakarta Sans aporta energia "Playful".
*   **Cuerpo y Etiquetas (Inter):** Inter es nuestra tipografia de trabajo. Usa `body-lg` (1rem) para opciones de respuesta y `label-md` (0.75rem) para metadatos (por ejemplo, "Categoria: Ciencia").

**Tip Editorial:** Usa `display-sm` para numeros y estadisticas, pero combinalo con `label-sm` en mayusculas y con 5% de espaciado entre letras para crear una estetica premium de visualizacion de datos.

---

## 4. Elevacion y Profundidad
La profundidad en este sistema es resultado del **Layering Tonal**, no de sombras estructurales.

*   **Principio de Capas:** Coloca una tarjeta `surface-container-lowest` (#ffffff) sobre un area `surface-container-low` (#f2efff). El contraste crea una elevacion natural.
*   **Sombras Ambientales:** Si una tarjeta debe flotar (por ejemplo, un toast de "Correct Answer"), usa una sombra con blur de `32px` al 6% de opacidad usando el color `on-surface` (#2a2b51). Nunca uses negro puro para sombras.
*   **Respaldo "Ghost Border":** Si la accesibilidad exige definir un contenedor, usa `outline-variant` (#a9a9d7) al **15% de opacidad**. Debe sentirse, no verse.

---

## 5. Componentes

### Botones
*   **Primary:** Gradiente de `primary` a `primary-container`. `Rounded-md` (1.5rem). Texto: `on-primary` (#f2f1ff), semi-bold.
*   **Secondary:** `secondary` (#9720ab) solido. Usar para acciones de alta energia como "Power-Ups".
*   **Tertiary:** Fondo transparente con texto `on-surface`. Sin borde.

### Chips de Respuesta de Trivia
*   **Estado - Neutral:** `surface-container-high` (#e1e0ff) con texto `on-surface`.
*   **Estado - Selected:** `primary` (#004be2) con texto `on-primary`.
*   **Estado - Success:** Fondo `tertiary` (#006a33) con texto `on-tertiary` (#cdffd3).
*   **Estado - Error:** Fondo `error` (#b41340) con texto `on-error` (#ffefef).

### Tarjetas y Listas
*   **Layout:** Prohibido usar lineas divisorias. Separa items de lista usando `spacing-4` (1rem) y cambios de fondo sutiles.
*   **Trivia Cards:** Usa `rounded-lg` (2rem) para contenedores principales de preguntas. Alinea el texto de forma asimetrica: arriba-izquierda para preguntas y abajo-derecha para elementos de temporizador, para crear un flujo visual dinamico.

### Barras de Progreso (Tracker de "Streak")
*   **Track:** `surface-container-highest` (#dbd9ff).
*   **Indicator:** Un gradiente de `secondary` (#9720ab) a `secondary-fixed-dim` (#f9a7ff). Esto refuerza el requerimiento "Playful/Vibrant".

---

## 6. Recomendaciones y Prohibiciones

### Haz:
*   **Haz** uso de `rounded-full` (9999px) para etiquetas de categoria en forma de pill, para contrastar con tarjetas `rounded-lg`.
*   **Haz** espacio en blanco. Usa `spacing-12` (3rem) entre grupos de contenido principales para que los colores vibrantes respiren.
*   **Haz** uso de elementos superpuestos. Un chip flotante de "Points" debe superponerse parcialmente al borde de una tarjeta de pregunta para crear un efecto de capas 3D.

### No Hagas:
*   **No hagas** uso de negro al 100% (#000000) para texto. Usa `on-surface` (#2a2b51) para mantener la sensacion sofisticada "off-ink".
*   **No hagas** uso de esquinas pronunciadas. Todo debe sentirse "friendly" y "motivating", lo que implica un radio minimo de `sm` (0.5rem) incluso para los elementos mas pequenos.
*   **No hagas** uso de divisores. Si dos piezas de contenido se sienten demasiado cercanas, incrementa el token de espaciado o cambia el nivel de surface-container.