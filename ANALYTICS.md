# Estadísticas del portafolio

## Activación en Vercel

1. Abre el proyecto del portafolio en tu cuenta de Vercel.
2. En **Analytics / Web Analytics**, selecciona **Enable** si aún está desactivado.
3. Despliega estos cambios en producción mediante tu flujo habitual de Vercel.
4. Abre la web desde un navegador no excluido y consulta Analytics unos minutos después.

La integración utiliza `@vercel/analytics/react`. Solo se habilita al compilar con
`VERCEL_ENV=production`, variable proporcionada por Vercel. Los builds locales y
los despliegues Preview no envían estadísticas. No se incluyen eventos de clic
ni funciones de pago. Las estadísticas comienzan después de activar y desplegar;
no recuperan tráfico anterior.

## Excluir tus propias visitas

Abre una vez este enlace **en cada navegador de tu computadora y celular**:

https://sebastian-portfolio-iota.vercel.app/?analytics=off

La preferencia se guarda en ese navegador antes de cargar Analytics. Al pie del
portafolio aparecerá «Tus visitas no se cuentan». Después puedes entrar por el
enlace habitual y seguirás excluido. El parámetro se retira de la barra de
direcciones para evitar compartirlo accidentalmente.

Para volver a contar ese navegador, usa el enlace del aviso o abre:

https://sebastian-portfolio-iota.vercel.app/?analytics=on

La preferencia no se comparte entre navegadores, perfiles ni dominios. Si borras
los datos del sitio, usas incógnito o cambias de dominio, vuelve a abrir el enlace
de exclusión. Si el navegador bloquea el almacenamiento, no enviamos estadísticas
y el aviso explica que no fue posible guardar la preferencia.

Comparte en LinkedIn y en el CV el enlace normal, sin `analytics=off`.
Este modo solo excluye estadísticas; no es un login ni da acceso administrativo.

## Interpretación

Consulta vistas, visitantes estimados, procedencia, país y dispositivo en Vercel.
Una procedencia directa puede significar un enlace desde un PDF o una aplicación
que no transmite la procedencia; no garantiza que alguien haya escrito la URL.
Los visitantes no equivalen a personas identificadas y los bloqueadores pueden
impedir la medición. No se añaden IDs propios ni se guardan nombres o correos.
El filtro elimina los parámetros y fragmentos de la URL enviada a Analytics.

Documentación: https://vercel.com/docs/analytics/quickstart

## Verificación local

`node --test src/analytics.test.js`

`npm run build`
