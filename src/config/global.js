export default {
  global: {
    numeroUnidad: '3',
    tituloUnidad: 'Aplicaciones avanzadas de la Investigación de Operaciones',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Conceptos básicos y aplicaciones en la administración',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Relación entre modelos primal y dual',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Interpretación de resultados y análisis de sensibilidad para la toma de decisiones',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Problemas de transporte y asignación',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo:
              'Modelos de programación lineal aplicados a la distribución de recursos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo:
              'Métodos de solución como el Método de Aproximación y el Método Simplex Mejorado',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Aplicaciones empresariales',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'Casos prácticos en áreas como logística, planeación de la producción y gestión de inventarios',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo:
              'Uso de software especializado como WinQSB para resolver problemas complejos',
            hash: 't_3_2',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Kong, M. (2013). Investigación de operaciones: programación lineal. Problemas de transporte. Análisis de redes: ( ed.). Fondo Editorial de la Pontificia Universidad Católica del Perú.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/79351',
    },
    {
      referencia:
        'Puente Riofrío, M. I., & Gavilánez Álvarez, Ó. D. (2018). Programación lineal para la toma de decisiones. Escuela Superior Politécnica de Chimborazo.',
      link:
        'https://cimogsys.espoch.edu.ec/direccion-publicaciones/public/docs/books/2019-09-19-210805-58%20Libro%20Programacio%CC%81n%20Lineal%20final.pdf',
    },
    {
      referencia:
        'Kong, M. (2013). Investigación de operaciones: programación lineal. Problemas de transporte. Análisis de redes: ( ed.). Fondo Editorial de la Pontificia Universidad Católica del Perú.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/79351',
    },
    {
      referencia:
        'Suñé, A. Fonollosa, J. B. & Fernández, V. (2016). Programación lineal: métodos cuantitativos para la toma de decisiones: ( ed.). Universitat Politècnica de Catalunya.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/61485',
    },
    {
      referencia:
        'Puente Riofrío, M. I., & Gavilánez Álvarez, Ó. D. (2018). Programación lineal para la toma de decisiones. Escuela Superior Politécnica de Chimborazo.',
      link:
        'https://cimogsys.espoch.edu.ec/direccion-publicaciones/public/docs/books/2019-09-19-210805-58%20Libro%20Programacio%CC%81n%20Lineal%20final.pdf',
    },
    {
      referencia:
        'Kong, M. (2013). Investigación de operaciones: programación lineal. Problemas de transporte. Análisis de redes: ( ed.). Fondo Editorial de la Pontificia Universidad Católica del Perú.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/79351',
    },
    {
      referencia:
        'Suñé, A. Fonollosa, J. B. & Fernández, V. (2016). Programación lineal: métodos cuantitativos para la toma de decisiones: ( ed.). Universitat Politècnica de Catalunya.',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/61485',
    },
  ],
  glosario: [
    {
      termino: 'Análisis de Sensibilidad',
      significado:
        'Evalúa cómo cambios en coeficientes afectan la solución óptima en modelos de programación lineal.',
    },
    {
      termino: 'Asignación de Recursos',
      significado:
        'Distribución eficiente de recursos disponibles para maximizar beneficios o minimizar costos.',
    },
    {
      termino: 'Condiciones de Complementariedad',
      significado:
        'Indican la relación entre variables duales y restricciones activas en un modelo de optimización.',
    },
    {
      termino: 'Costo Mínimo',
      significado:
        'Método de aproximación que asigna recursos considerando los menores costos en problemas de transporte.',
    },
    {
      termino: 'Dualidad',
      significado:
        'Relación entre un problema primal y su problema dual en programación lineal.',
    },
    {
      termino: 'Función Objetivo',
      significado:
        'Expresión matemática que define la meta de un problema de optimización (maximizar beneficios o minimizar costos).',
    },
    {
      termino: 'Holguras Complementarias',
      significado:
        'Teorema que establece la relación entre restricciones no activas y valores de variables duales.',
    },
    {
      termino: 'Método de Aproximación',
      significado:
        'Técnica inicial para obtener soluciones rápidas en problemas de transporte y asignación.',
    },
    {
      termino: 'Método Simplex',
      significado:
        'Algoritmo iterativo para resolver problemas de programación lineal con múltiples restricciones y variables.',
    },
    {
      termino: 'Modelo Primal',
      significado:
        'Formulación inicial de un problema de optimización en programación lineal.',
    },
    {
      termino: 'Modelo Dual',
      significado:
        'Problema derivado del modelo primal que ofrece información sobre el valor de los recursos.',
    },
    {
      termino: 'Optimización',
      significado:
        'Proceso de maximización o minimización de una función objetivo dentro de restricciones establecidas.',
    },
    {
      termino: 'Precios Sombra',
      significado:
        'Valores duales que indican cuánto aumenta la función objetivo si se incrementa una restricción.',
    },
    {
      termino: 'Programación Lineal (PL)',
      significado:
        'Método matemático para optimizar recursos sujetos a restricciones.',
    },
    {
      termino: 'Restricción',
      significado:
        'Condición matemática que limita las soluciones posibles en un modelo de optimización.',
    },
    {
      termino: 'Simulación Computacional',
      significado:
        'Uso de software para analizar y resolver problemas de optimización.',
    },
    {
      termino: 'Teoría de la Dualidad',
      significado:
        'Principio que establece la existencia de un problema dual asociado a cada problema primal.',
    },
    {
      termino: 'Transporte y Asignación',
      significado:
        'Modelos matemáticos que optimizan la distribución de recursos minimizando costos o maximizando beneficios.',
    },
    {
      termino: 'Variables de Decisión',
      significado:
        'Elementos clave en un modelo de optimización que definen posibles soluciones.',
    },
  ],
}
