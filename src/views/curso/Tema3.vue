<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'3. Aplicaciones empresariales'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  

      .row.mb-5
        .col-lg-8
          p(data-aos="fade-left").mb-4 La programación lineal y la investigación de operaciones tienen una gran relevancia en el mundo empresarial, ya que permiten optimizar recursos, reducir costos y mejorar la eficiencia en distintos sectores. Su aplicación es fundamental en áreas como la logística, la planeación de la producción y la gestión de inventarios, entre otras.
      
          .bg-color-3.p-4(data-aos="fade-left").mb-4
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema3/1.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 La toma de decisiones basada en modelos matemáticos permite a las empresas lograr una mejor asignación de recursos, incrementar la rentabilidad y reducir costos operativos (Hillier & Lieberman, 2010).
      
          p(data-aos="fade-left").mb-4 A continuación, se presentan casos prácticos en distintas áreas empresariales, así como el uso de software especializado como WinQSB, una herramienta que facilita la resolución de problemas complejos en la optimización de procesos (Taha, 2012).
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/2.png", data-aos="zoom-in")
      

      #t_3_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.1] Casos prácticos en áreas como logística, planeación de la producción y gestión de inventarios 


      .row.mb-5
        .col-lg-5
          figure
            img(src="@/assets/curso/tema3/4.png", data-aos="zoom-in")
        .col-lg-7
          .bg-color-2.p-4(data-aos="fade-left").mb-4
            p.mb-0 Los modelos de programación lineal y optimización, tienen una amplia aplicación en la gestión empresarial. Su implementación permite a las organizaciones maximizar la eficiencia operativa, reducir costos y mejorar la asignación de recursos en sectores claves como logística, producción e inventarios (Hillier & Lieberman, 2010).
      
          p(data-aos="fade-left").mb-4 A continuación, se presentan casos prácticos que muestran cómo estos modelos pueden aplicarse en la toma de decisiones estratégicas.
      
      

      .row.align-items-center.mb-5
        .col-lg-8.order-2.order-lg-1
      
          LineaTiempoD.color-primario.large(data-aos="fade-right")
            div(numero="1" titulo="Optimización en logística y distribución de productos")
              p La logística es un área clave donde la programación lineal permite #[strong optimizar el transporte y la distribución de bienes], asegurando #[strong menores costos y mayor eficiencia en las entregas].
              p #[strong Caso práctico:]
              p Una empresa de comercio electrónico como Amazon o Mercado Libre, enfrenta el reto de distribuir paquetes desde sus almacenes hasta los clientes en diferentes ciudades. Para ello, necesita determinar la mejor manera de asignar los pedidos a los vehículos de reparto, minimizando costos y tiempos de entrega.
              p #[strong Método aplicado.] Modelo de transporte con Programación Lineal.
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Reducción de costos operativos en la distribución.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Mayor eficiencia en las rutas de transporte.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Disminución de tiempos de entrega y mejora en la satisfacción del cliente (Kong, 2013).
              
            div(numero="2" titulo="Planeación de la producción y asignación de recursos")
              p En la industria manufacturera, la optimización de la producción es esencial para #[strong garantizar un uso eficiente de la materia prima], #[strong minimizar desperdicios] y #[strong cumplir con la demanda del mercado].
              p #[strong Caso práctico:]
              p Una fábrica de #[strong automóviles] como #[strong Toyota], necesita decidir cuántos vehículos de cada modelo producir en un mes. Para ello, se deben considerar:
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | La capacidad de producción de cada planta.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | La disponibilidad de materia prima y mano de obra.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | La demanda proyectada en el mercado.
              
              p #[strong Método aplicado.] Método Simplex para la Optimización de la Producción.
              p #[strong Beneficios empresariales:]
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Reducción del costo de fabricación.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Mejor aprovechamiento de la capacidad instalada.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Ajuste dinámico de la producción según la demanda del mercado (Taha, 2012).
            div(numero="3" titulo="Gestión de inventarios y control de abastecimiento")
              p El control de inventarios es una parte fundamental de la cadena de suministro, ya que un mal manejo del stock puede generar #[strong pérdidas económicas] por #[strong exceso de productos] o #[strong desabastecimientos].
              p #[strong Caso práctico:] 
              p Un supermercado como #[strong Walmart] debe determinar #[strong cuántas unidades de cada producto almacenar en sus tiendas para garantizar disponibilidad sin generar sobrecostos.]
              p #[strong Método aplicado.] Modelos de control de inventarios con Programación Lineal.
              p #[strong Beneficios empresariales:]
              ul.lista-ul--color.color-dark.mb-4
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Optimización del almacenamiento y reducción del costo de inventarios.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Prevención de quiebres de stock y mejora en la disponibilidad de productos.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Implementación de modelos de reposición eficiente para mantener el stock óptimo (Puente Riofrío & Gavilánez Álvarez, 2018).
          
        .col-lg-4.order-1.order-lg-2
          figure
            img(src="@/assets/curso/tema3/3.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0



      #t_3_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 3.2] Uso de software especializado como WinQSB para resolver problemas complejos 


      p El uso de herramientas computacionales en la optimización de procesos empresariales ha revolucionado la toma de decisiones en diversas áreas. WinQSB es un software especializado que permite modelar y resolver problemas complejos de programación lineal, transporte, asignación y gestión de inventarios, facilitando el análisis y optimización de recursos en entornos empresariales.
      

      .bg-full-width-2.bg-fondo-5
        .px-4.px-md-5
          h2.mb-4 ¿Qué es WinQSB?

          .row.mb-2
            .col-lg-4
              figure
                img(src="@/assets/curso/tema3/5.png", data-aos="zoom-in")
            .col-lg-8
              .bg-color-3.p-4(data-aos="fade-left").mb-4
                p.mb-4 WinQSB (Quantitative Systems for Business) es una herramienta de apoyo para la toma de decisiones cuantitativas en el ámbito empresarial. Fue desarrollado para resolver problemas de #[strong investigación de operaciones] utilizando modelos matemáticos avanzados de optimización.

                p.mb-1 #[strong Características principales:] 

                ul.lista-ul--color.color-dark.mb-5
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Interfaz intuitiva que permite ingresar y analizar datos de manera sencilla.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Resolución de problemas de programación lineal, entera y no lineal.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Modelos de transporte, asignación y planificación de inventarios.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Simulación de procesos de producción y logística.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Análisis de decisiones basado en modelos matemáticos precisos.

          p WinQSB permite encontrar soluciones óptimas en problemas empresariales que involucran múltiples restricciones y variables, facilitando la toma de decisiones estratégicas y operativas (Hillier & Lieberman, 2010).

          p El software WinQSB se aplica en diversas áreas empresariales, entre las que destacan:

          div.row.justify-content-center.align-items-stretch.mb-4
            .col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema3/6.svg"
                  alt=""
                  style="width: 90px"
                )
                h4.text-center Primero
                p.mb-0.text-center Optimización de rutas y distribución en logística.
          
            .col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema3/7.svg"
                  alt=""
                  style="width: 90px"
                )
                h4.text-center Segundo
                p.mb-0.text-center Gestión eficiente de inventarios y control de abastecimiento.
          
            .col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema3/8.svg"
                  alt=""
                  style="width: 90px"
                )
                h4.text-center Tercero
                p.mb-0.text-center Planeación y programación de la producción en fábricas.
          
            .col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema3/9.svg"
                  alt=""
                  style="width: 90px"
                )
                h4.text-center Cuarto
                p.mb-0.text-center ROptimización de costos y asignación de recursos en proyectos empresariales.


      h2.mb-4 Ejemplo práctico:
      .row.mb-5
        .col-lg-8
          .bg-color-3.p-4(data-aos="fade-left").mb-4
            p.mb-4 Una empresa de distribución necesita determinar la mejor forma de asignar productos entre sus tres almacenes y cinco tiendas, asegurando la mínima inversión en transporte y el cumplimiento de la demanda.

            p.mb-4 #[strong Método aplicado.] Modelo de transporte con WinQSB.
            p #[strong Beneficios:]
            ul.lista-ul--color.color-dark.mb-4
              li.mb-2
                i.fas.fa-arrow-circle-right
                | Reducción de costos logísticos en un 15 %.
              li.mb-2
                i.fas.fa-arrow-circle-right
                | Distribución equitativa de los productos en función de la demanda.
              li.mb-2
                i.fas.fa-arrow-circle-right
                | Optimización de rutas para evitar cuellos de botella en la distribución (Suñé et al., 2016).
        
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/10.png", data-aos="zoom-in")

        
      h2.mb-4 Implementación práctica: cómo resolver un problema en WinQSB

      p A continuación, se describe el proceso para resolver un problema de optimización con WinQSB:

      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema3/11.png", data-aos="zoom-in")
        .col-lg-8
              LineaTiempoD.color-primario.large(data-aos="fade-right")
                div(numero="1" titulo="Paso 1")
                  p #[strong Ingresar el modelo de Programación Lineal.]
                  ul.lista-ul--color.color-dark.mb-4
                    li.mb-0
                      i.fas.fa-arrow-circle-right
                      | Definir la función objetivo (maximizar beneficios o minimizar costos).
                    li.mb-0
                      i.fas.fa-arrow-circle-right
                      | Ingresar las restricciones del problema.
                    li.mb-0
                      i.fas.fa-arrow-circle-right
                      | Establecer las variables de decisión.
                  
                div(numero="2" titulo="Paso 2")
                  p #[strong Ejecutar el cálculo y analizar los resultados.]
                  ul.lista-ul--color.color-dark.mb-4
                    li.mb-0
                      i.fas.fa-arrow-circle-right
                      | WinQSB aplicará métodos de optimización, como Simplex o transporte.
                    li.mb-0
                      i.fas.fa-arrow-circle-right
                      | Se generará un reporte con la solución óptima y valores de las variables.
                    li.mb-0
                      i.fas.fa-arrow-circle-right
                      | Se podrá visualizar el impacto de cada restricción en el modelo.
                div(numero="3" titulo="Paso 3")
                  p #[strong Interpretación y aplicación de resultados.]  
                  ul.lista-ul--color.color-dark.mb-4
                    li.mb-0
                      i.fas.fa-arrow-circle-right
                      | Analizar los datos generados para tomar decisiones estratégicas.
                    li.mb-0
                      i.fas.fa-arrow-circle-right
                      | Realizar simulaciones para evaluar distintos escenarios.
                    li.mb-0
                      i.fas.fa-arrow-circle-right
                      | Implementar cambios en la operación para optimizar costos y eficiencia.

      .bg-full-width.bg-color-5.mb-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema3/icon-1-12.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.text-white.mb-0 #[b Ejemplo empresarial:] 
              p.text-white Una empresa de manufactura utiliza WinQSB para optimizar su producción y logra reducir un 20 % de desperdicio de materia prima, aumentando la eficiencia en la fabricación de productos (Taha, 2012).
      

      

      .bg-full-width.border-top.actividad.bg-color-actividad
        .p-4.p-md-5
          #Actividad                
            <Actividad :cuestionario="cuestionario"/>

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/51571" target="_blank" rel="noopener noreferrer") Quesada Ibarguen, V. M. (2012). Análisis cuantitativo con Winqsb: ( ed.). B - EUMED. 

              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://www.youtube.com/watch?v=eWULmSLfu3E" target="_blank" rel="noopener noreferrer") GOAL PROJECT. (2020, 22 de marzo). Introducción a la Administración de Inventarios.

              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://www.mrpeasy.com/blog/es/ia-en-la-gestion-de-inventarios/" target="_blank" rel="noopener noreferrer") MPReasy (2023) El papel emergente de la IA en la gestión de inventarios (con ejemplos).
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Aplicaciones empresariales',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              '¿Cuál es la aplicación empresarial principal de la Dualidad en Programación Lineal?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Evaluación del impacto de restricciones en la rentabilidad.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Asignación de empleados a turnos de trabajo de manera eficiente.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Optimización de costos de distribución de productos entre fábricas y tiendas.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Determinación del valor de los recursos escasos en una empresa.',
                esCorrecta: true,
              },
            ],
            mensaje_correcto:
              '¡Correcto! La dualidad permite determinar el valor económico de los recursos escasos mediante los precios sombra.',
            mensaje_incorrecto:
              'La respuesta no es correcta. La dualidad en programación lineal se utiliza principalmente para determinar el valor de los recursos escasos en una empresa.',
          },
          {
            id: 2,
            texto:
              '¿Cuál es el primer paso en la secuencia correcta para resolver un problema de transporte con programación lineal?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Construir la tabla de costos de transporte.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Determinar la oferta de cada origen y la demanda de cada destino.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'Aplicar un método de aproximación para obtener una solución inicial.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Interpretar los resultados y tomar decisiones estratégicas.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! El primer paso es determinar la oferta de cada origen y la demanda de cada destino, ya que esta información es fundamental para construir el modelo.',
            mensaje_incorrecto:
              'La respuesta no es correcta. El primer paso es determinar la oferta de cada origen y la demanda de cada destino antes de construir la tabla de costos.',
          },
          {
            id: 3,
            texto:
              'El método Simplex permite encontrar soluciones ___________ en problemas de programación lineal con múltiples restricciones.',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Aproximadas',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Óptimas',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Subóptimas',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Heurísticas',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! El método Simplex es un algoritmo que encuentra soluciones óptimas en problemas de programación lineal.',
            mensaje_incorrecto:
              'La respuesta no es correcta. El método Simplex encuentra soluciones óptimas, no aproximadas o subóptimas.',
          },
          {
            id: 4,
            texto:
              'Una fábrica de muebles recibe una oferta de su proveedor de madera para comprar 30 unidades adicionales a un precio de $10 por unidad. El análisis de precios sombra indica que cada unidad de madera adicional genera una ganancia marginal de $12. ¿Es una decisión rentable comprar la madera adicional?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Sí, porque la ganancia marginal es mayor al costo de la unidad adicional.',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto:
                  'No, porque el precio sombra solo es relevante en la optimización inicial.',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'No, porque se debe considerar únicamente la demanda de los clientes.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Sí, pero solo si la fábrica no tiene otras restricciones operativas.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! Cuando la ganancia marginal ($12) es mayor que el costo de la unidad adicional ($10), la compra es rentable.',
            mensaje_incorrecto:
              'La respuesta no es correcta. Si la ganancia marginal ($12) es mayor que el costo ($10), la compra es rentable.',
          },
          {
            id: 5,
            texto:
              'En un problema de programación lineal, si un recurso no es utilizado completamente, su precio sombra será positivo.',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: true,
              },
            ],
            mensaje_correcto:
              '¡Correcto! El Teorema de Holguras Complementarias establece que si un recurso no es completamente utilizado, su precio sombra será cero, ya que no está afectando la función objetivo.',
            mensaje_incorrecto:
              'La respuesta no es correcta. Si un recurso no es utilizado completamente, su precio sombra será cero, no positivo.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
