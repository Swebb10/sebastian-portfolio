# Portafolio Web — Sebastián Webb Vargas

Portafolio personal construido con **Vite + React**, diseñado como una SPA estática para desplegarse en **GitHub Pages**.

## Enfoque visual

El diseño sigue una línea:

- elegante
- minimalista
- mobile-first
- responsive
- dark/light mode
- tipografías: **Playfair Display**, **DM Sans**, **DM Mono**
- sistema de variables CSS por tema
- acento azul refinado, sobrio y profesional

## Estructura del proyecto

```bash
sebastian-portfolio/
├── public/
│   ├── cv-sebastian-webb.pdf
│   └── profile-placeholder.svg
├── src/
│   ├── App.jsx
│   ├── data.js
│   ├── hooks.js
│   ├── main.jsx
│   └── styles.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```

## Qué incluye

- navegación por anclas
- scroll suave
- animaciones reveal al hacer scroll
- modo dark/light persistido en `localStorage`
- hero con CTA de contacto y CV
- sección sobre mí
- experiencia en formato visual elegante
- proyectos en cards
- habilidades visuales
- educación
- contacto
- preparado para GitHub Pages

## Plan de implementación aplicado

### 1. Arquitectura

Se usa una SPA ligera con React y componentes funcionales. No existe backend ni base de datos. Todo el contenido vive en `src/data.js`, lo que permite editar el portafolio sin tocar la estructura general.

### 2. Sistema visual

Toda la identidad visual está gobernada por variables CSS en `styles.css`.

Hay dos temas:

- **dark** con azul refinado `#4A90D9`
- **light** con un azul más profundo y sobrio

Las variables controlan:

- fondos
- superficies
- bordes
- texto
- texto secundario
- acento
- radios
- sombras

### 3. Responsive y mobile-first

La interfaz parte desde celular y escala hacia tablet y desktop con `@media queries`.

### 4. Animaciones

Las animaciones de entrada usan `IntersectionObserver`, implementado en `src/hooks.js`, para aplicar un reveal suave cuando cada bloque entra en viewport.

### 5. Contenido editable

Toda la información del portafolio está centralizada en `src/data.js`.

Ahí puedes cambiar fácilmente:

- nombre
- título
- perfil
- experiencia
- proyectos
- links
- habilidades
- educación

## Personalizaciones que debes hacer

Antes de publicar, edita `src/data.js` y reemplaza esto si ya lo tienes:

- `github`
- `linkedin`
- `link` de cada proyecto

También reemplaza este archivo:

- `public/cv-sebastian-webb.pdf`

por tu CV real manteniendo el mismo nombre.

Si ya tienes una foto formal, reemplaza:

- `public/profile-placeholder.svg`

por tu imagen real, y ajusta en `App.jsx` si cambias el nombre del archivo.

## Instalación local

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
```

## Vista previa del build

```bash
npm run preview
```

## Despliegue en GitHub Pages

Este proyecto ya trae el paquete `gh-pages` configurado.

### Paso 1: crear el repositorio

Crea un repositorio en GitHub, por ejemplo:

```bash
sebastian-portfolio
```

### Paso 2: subir el proyecto

```bash
git init
git add .
git commit -m "Primer commit del portafolio"
git branch -M main
git remote add origin TU_URL_DEL_REPO
git push -u origin main
```

### Paso 3: instalar dependencias

```bash
npm install
```

### Paso 4: desplegar

```bash
npm run deploy
```

Eso publicará la carpeta `dist` en la rama `gh-pages`.

### Paso 5: activar GitHub Pages

En GitHub:

- entra al repositorio
- ve a **Settings**
- luego **Pages**
- en **Source**, selecciona **Deploy from a branch**
- elige la rama **gh-pages**
- carpeta **/ (root)**
- guarda

## Nota sobre Vite y GitHub Pages

En `vite.config.js` está configurado:

```js
base: './'
```

Eso hace que el build funcione bien en despliegues estáticos simples, incluyendo GitHub Pages en muchos casos.

Si luego deseas una configuración más estricta para un repositorio específico, podrías cambiarlo por:

```js
base: '/nombre-del-repo/'
```

Ejemplo:

```js
base: '/sebastian-portfolio/'
```

## Recomendaciones finales

1. Cambia los links placeholders de GitHub y LinkedIn.
2. Sustituye el CV placeholder por el archivo real.
3. Sustituye la foto placeholder por una imagen profesional.
4. Agrega links públicos a Netlify o GitHub si quieres mostrar proyectos en vivo.
5. Personaliza el texto del hero si deseas un tono más corporativo o más técnico.

## Stack

- React
- Vite
- CSS puro
- GitHub Pages

## Licencia

Uso personal.
