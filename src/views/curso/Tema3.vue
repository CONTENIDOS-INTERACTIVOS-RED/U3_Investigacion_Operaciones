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
          h2.mb-4 Fundamentos de la Programación Lineal en la distribución de recursos

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
        tema: 'Herramientas colaborativas para la construcción de paz',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              'Complete los espacios en blanco con las opciones correctas: "La Programación Lineal permite optimizar _______________ en la toma de decisiones. Su aplicación principal es la resolución de problemas de _______________ y _______________ utilizando modelos matemáticos."',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Beneficios, dualidad, economía',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Recursos, maximización, minimización',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Factores, programación no lineal, restricciones',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Costos, expansión, desarrollo',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              '¿Cuál de las siguientes afirmaciones describe mejor la función del método Simplex?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Es un método gráfico para resolver problemas con dos variables.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'Es una técnica iterativa que encuentra soluciones óptimas en Programación Lineal.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Solo se utiliza en problemas de maximización.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Permite resolver ecuaciones diferenciales en entornos económicos.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'La región factible de un problema de Programación Lineal siempre contiene la solución óptima.',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Verdadero',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Falso',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              '¿Cuál de los siguientes conceptos se refiere a las cantidades que se deben determinar en un problema de Programación Lineal?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Variables de decisión',
                esCorrecta: true,
              },
              {
                id: 'b',
                texto: 'Función objetivo',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto: 'Restricciones',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Región factible',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! Las variables de decisión son las cantidades desconocidas que se deben determinar para resolver el problema de Programación Lineal.',
            mensaje_incorrecto:
              'La respuesta no es correcta. Recuerda que las variables de decisión son las cantidades que necesitamos determinar en el problema.',
          },
          {
            id: 5,
            texto:
              '¿Qué representa la función objetivo en un problema de Programación Lineal?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'El conjunto de todas las soluciones posibles',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Las limitaciones del problema',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'La expresión matemática que se busca maximizar o minimizar',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'El punto que optimiza la solución',
                esCorrecta: false,
              },
            ],
            mensaje_correcto:
              '¡Correcto! La función objetivo es la expresión matemática que queremos optimizar (maximizar o minimizar) en el problema de Programación Lineal.',
            mensaje_incorrecto:
              'La respuesta no es correcta. La función objetivo es la expresión matemática que buscamos optimizar en el problema.',
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
