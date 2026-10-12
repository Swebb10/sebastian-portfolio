export const personal = {
  name: 'Sebastián Webb Vargas',
  title: 'Estudiante de Ingeniería en Sistemas Computacionales',
  location: 'San José, Costa Rica',
  availability: 'Disponibilidad de traslado',
  email: 'swebb1732@gmail.com',
  phone: '8727-3417',
  english: 'C1 Avanzado (Certificado)',
  tagline: 'Construyo soluciones web claras, funcionales y seguras, con foco en experiencia, estructura y detalle técnico.',
  profile:
    'Estudiante de Ingeniería en Sistemas con experiencia técnica en desarrollo web y gestión de bases de datos. Experiencia adquirida en práctica profesional en el sector gubernamental, donde desarrollé módulos de gestión vehicular y sistemas de auditoría de usuarios. Tengo un fuerte interés en cloud computing y una rápida capacidad de adaptación a nuevos entornos tecnológicos.',
  github: 'https://github.com/',
  linkedin: 'https://linkedin.com/',
  cvPath: './cv-sebastian-webb.pdf',
}

export const experience = [
  {
    company: 'Municipalidad de Buenos Aires',
    period: 'Enero 2026 — Actualidad',
    role: 'Desarrollador de Software (Práctica)',
    description:
      'Desarrollo de aplicación de Gestión Vehicular con PHP, JavaScript y SQL, junto con sistemas de auditoría para registro de IPs, logs de seguridad e intentos de acceso.',
  },
  {
    company: 'Área Fit Buenos Aires',
    period: '2023 — Actualidad',
    role: 'Administrador de Complejo Deportivo',
    description:
      'Gestión de cobros, atención al cliente y administración de activos, fortaleciendo operación diaria, control financiero y organización interna.',
  },
]

export const projects = [
  {
    name: 'Sistema de Gestión Vehicular',
    description:
      'Sistema municipal para administrar vehículos, solicitudes de uso y mantenimientos, con acceso por roles, seguimiento de kilometraje, archivos adjuntos y reportes PDF. Incluye auditoría de seguridad para registrar IPs e intentos de acceso.',
    stack: ['PHP', 'MySQL', 'JavaScript', 'HTML5', 'CSS', 'FPDF'],
  },
  {
    name: 'LifeLevel App',
    description:
      'PWA de organización personal con metas, hábitos, rachas y un sistema de XP y niveles. Integra notas y finanzas personales para registrar cuentas, movimientos, gastos fijos y metas de ahorro, con datos guardados en el navegador y soporte sin conexión.',
    stack: ['React', 'JavaScript', 'Vite', 'CSS', 'vite-plugin-pwa', 'localStorage'],
    link: 'https://lifelevel-app.vercel.app/',
  },
  {
    name: 'FutManager',
    description:
      'Plataforma SaaS multiempresa para gestionar canchas sintéticas: reservas por horario, caja diaria, inventario, finanzas y horas de empleados. Incluye acceso por roles, administración de negocios y suscripciones, con datos sincronizados en Firestore.',
    stack: ['React', 'JavaScript', 'Vite', 'React Router', 'Firebase Auth', 'Cloud Firestore', 'Firebase Admin SDK', 'Vercel Functions'],
    link: 'https://fut-manager-bsas.vercel.app/login',
  },
  {
    name: 'Polyglot App',
    description:
      'Aplicación para aprender cinco idiomas mediante frases contextualizadas, repetición espaciada FSRS, diálogos y ejercicios de escucha y pronunciación. Incluye un tutor de IA ejecutado en el navegador, sesiones reanudables y progreso guardado localmente.',
    stack: ['React', 'TypeScript', 'Vite', 'ts-fsrs', 'Transformers.js', 'Zod', 'IndexedDB', 'localStorage'],
    link: 'https://polyglot-rose-nine.vercel.app/',
  },
  {
    name: 'Forma — Gym & Health Tracker',
    description:
      'Aplicación de entrenamiento y salud con rutinas por días, registro de sesiones, medidas corporales y bioimpedancia. Incluye gráficos de progreso y estimaciones de calorías y macronutrientes, con autenticación y datos privados sincronizados en Firebase.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'Firebase Auth', 'Cloud Firestore', 'Recharts'],
    link: 'https://forma-gym-health-tracker.vercel.app',
  },
  {
    name: 'CortexFlow',
    description:
      'Herramienta de estudio que transforma notas Markdown en mapas mentales interactivos y editables. Combina creación de conceptos, repaso activo y temporizador Pomodoro, con guardado local, deshacer y rehacer, y exportación de mapas en JSON.',
    stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS', 'React Flow', 'react-markdown', 'localStorage'],
    link: 'https://cortex-flow-ochre.vercel.app',
  },
]

export const skills = [
  { label: 'PHP', level: 'Avanzado' },
  { label: 'JavaScript', level: 'Avanzado' },
  { label: 'React', level: 'Intermedio' },
  { label: 'Vite', level: 'Intermedio' },
  { label: 'HTML5', level: 'Avanzado' },
  { label: 'CSS3', level: 'Avanzado' },
  { label: 'SQL', level: 'Intermedio' },
  { label: 'MariaDB', level: 'Intermedio' },
  { label: 'MongoDB', level: 'Básico' },
  { label: 'GitHub', level: 'Intermedio' },
  { label: 'AJAX', level: 'Intermedio' },
  { label: 'Ciberseguridad básica', level: 'Base sólida' },
  { label: 'Soporte Técnico', level: 'Operativo' },
]

export const education = [
  {
    institution: 'Universidad Latina de Costa Rica',
    degree: 'Ingeniería en Sistemas Computacionales',
    period: '2022 — 2026',
  },
  {
    institution: 'CTP Buenos Aires',
    degree: 'Técnico Medio en Refrigeración',
    period: '2018 — 2020',
  },
]
