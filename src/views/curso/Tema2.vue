<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(:subTitulo="'2. Problemas de transporte y asignación'")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden
  
      
      .row.mb-5
        .col-lg-4.d-none.d-sm-block
          figure
            img(src="@/assets/curso/tema2/1.png", data-aos="zoom-in").mb-4.mb-lg-0
        .col-lg-8
          .bg-color-2.px-4.py-4(data-aos="fade-left").mb-4
            p.mb-0 Los problemas de transporte y asignación, son una categoría fundamental dentro de la programación lineal y la investigación de operaciones. Estos modelos permiten optimizar la distribución de recursos desde múltiples orígenes hacia múltiples destinos, minimizando costos o maximizando beneficios. Se aplican en diversos sectores, como logística, manufactura, distribución de bienes y asignación de tareas (Taha, 2012).
      
          p En cualquier organización que maneje recursos limitados, la eficiencia en la asignación y distribución, es clave para reducir costos y mejorar la productividad. Los modelos de transporte y asignación permiten:


      div.row.justify-content-center.align-items-stretch.mb-5
        .col-lg-3.mb-4(data-aos="zoom-in-up")
          div.bg-color-white.box-shadow.px-4.py-5.h-100
            img.mx-auto.d-block.mb-4(
              src="@/assets/curso/tema2/2.svg"
              alt=""
              style="width: 90px"
            )
            h4.text-center Primero
            p.mb-0.text-center Optimizar rutas y costos en logística y distribución.
      
        .col-lg-3.mb-4(data-aos="zoom-in-up")
          div.bg-color-white.box-shadow.px-4.py-5.h-100
            img.mx-auto.d-block.mb-4(
              src="@/assets/curso/tema2/3.svg"
              alt=""
              style="width: 90px"
            )
            h4.text-center Segundo
            p.mb-0.text-center Mejorar la planificación de producción y abastecimiento.
      
        .col-lg-3.mb-4(data-aos="zoom-in-up")
          div.bg-color-white.box-shadow.px-4.py-5.h-100
            img.mx-auto.d-block.mb-4(
              src="@/assets/curso/tema2/4.svg"
              alt=""
              style="width: 90px"
            )
            h4.text-center Tercero
            p.mb-0.text-center Asignar tareas o recursos de manera eficiente en una organización.
      
        .col-lg-3.mb-4(data-aos="zoom-in-up")
          div.bg-color-white.box-shadow.px-4.py-5.h-100
            img.mx-auto.d-block.mb-4(
              src="@/assets/curso/tema2/5.svg"
              alt=""
              style="width: 90px"
            )
            h4.text-center Cuarto
            p.mb-0.text-center Reducir desperdicios y aumentar la rentabilidad de los procesos (Hillier & Lieberman, 2010).
      


      h2.mb-5 Análisis de sensibilidad en la programación lineal

      .row.mb-5
        .col-lg-8
          .bg-color-2.px-4.py-4(data-aos="fade-left").mb-4
            p.mb-0 El problema de transporte busca determinar la manera más eficiente de trasladar productos desde múltiples fuentes (fábricas, almacenes) hasta múltiples destinos (centros de distribución, clientes), minimizando costos de transporte (Puente Riofrío & Gavilánez Álvarez, 2018).
          
          p(data-aos="fade-left") #[b Ejemplo.] Una empresa de alimentos debe enviar productos desde tres fábricas hacia cinco tiendas, asegurando que la cantidad enviada cumpla con la demanda, minimizando los costos de transporte.

          p Los modelos de transporte responden preguntas claves como:

        .col-lg-4.d-none.d-sm-block
          figure
            img(src="@/assets/curso/tema2/6.png", data-aos="zoom-in").mb-4.mb-lg-0


      .row.justify-content-center.align-items-stretch.mb-5
        .col-lg-4
          .bg-color-2.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/7.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 ¿Cuánto producto enviar desde cada origen hacia cada destino, para minimizar costos?
      
        .col-lg-4
          .bg-color-2.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/7.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 ¿Cómo ajustar la distribución si se reduce la capacidad de producción en una fábrica?
      
        .col-lg-4
          .bg-color-2.p-4(data-aos="fade-left").h-100
            .row.align-items-center
              .col-lg-auto
                img(src="@/assets/curso/tema2/7.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 ¿Qué impacto tiene en los costos agregar un nuevo centro de distribución?
      

      .bg-full-width.bg-color-5.mb-5
        .p-4.p-md-5
          p.mb-0.text-white Estos modelos se resuelven mediante métodos matemáticos específicos, como el método de aproximación, el método de distribución modificada (MODI) y el método de los costos mínimos (Suñé et al., 2016).


      h2.mb-5 Problema de asignación: optimización de recursos y tareas


      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/8.png", data-aos="zoom-in")
        .col-lg-8
          .bg-color-6.p-4(data-aos="fade-left").mb-4
            p.mb-0 El problema de asignación es un caso particular de la programación lineal, donde se busca asignar eficientemente un conjunto de recursos a un conjunto de tareas, asegurando que cada recurso se asigne a una sola tarea de manera óptima (Kong, 2013).


          p #[b Ejemplo.] Una aerolínea necesita asignar pilotos a vuelos, considerando restricciones como disponibilidad, horarios y costos operativos.

          p Estos problemas suelen abordarse con el método húngaro y la programación lineal, para encontrar la mejor combinación posible de recursos y tareas sin generar costos innecesarios (Hillier & Lieberman, 2010).
      

      #t_2_1.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.1] Modelos de programación lineal aplicados a la distribución de recursos
      
      .row.mb-5
        .col-lg-8
          .bg-color-3.p-4.mb-4(data-aos="fade-left")
            .row.align-items-start
              .col-lg-auto
                img(src="@/assets/curso/tema2/9.svg", style="max-width: 90px").mx-auto
              .col-lg
                p.mb-0 Los modelos de programación lineal (PL), son herramientas matemáticas utilizadas para optimizar la distribución de recursos escasos. En los problemas de transporte y asignación, se emplean estos modelos para minimizar costos, maximizar beneficios y asignar recursos de manera eficiente (Hillier & Lieberman, 2010).
      
          p(data-aos="fade-left") Estos modelos tienen múltiples aplicaciones en la gestión logística, manufactura, planificación de producción y asignación de tareas, entre otros (Taha, 2012).
      
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/10.png", data-aos="zoom-in")


      h2.mb-5 Fundamentos de la Programación Lineal en la distribución de recursos

      p Un modelo de Programación Lineal en distribución de recursos, debe cumplir con tres componentes fundamentales:

      TabsC.color-acento-contenido.mb-5
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Función objetivo" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Función objetivo
              p Define lo que se desea optimizar (minimizar costos de transporte, maximizar la eficiencia).
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/11.png', alt='')
      
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Restricciones" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Restricciones
              p Condiciones que limitan la solución, como la capacidad de los recursos o la demanda a satisfacer.
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/12.png', alt='')
      
        .tabs-content.border.px-4.p-md-5.py-3(titulo="Variables de decisión" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
          .row
            .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
              h4 Variables de decisión
              p Representan las cantidades a determinar (cuántos productos enviar desde un almacén a una tienda).
            .col-md-6.col-lg-5.col-xl-4.order-1
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/13.png', alt='')
      

      p El problema de transporte es un caso fundamental en la investigación de operaciones, ya que permite optimizar la distribución de recursos minimizando costos y cumpliendo con restricciones de oferta y demanda.

      .bg-full-width.bg-color-2.mb-lg-5
        .px-4.p-md-5
          .row.justify-content-center.align-items-center
            .col-lg-8
              h2.mb-4(data-aos="flip-up") Ejemplo Problema de transporte
              p.mb-4(data-aos="fade-right") En el PDF Ejemplo Problema de transporte , se analiza cómo aplicar modelos matemáticos de programación lineal para resolver un escenario de distribución eficiente entre almacenes y tiendas. A través del método de costos mínimos, se ejemplifica cómo asignar los envíos de manera óptima, reduciendo gastos y garantizando un equilibrio en la cadena de suministro.
      
              a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
                .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p <strong>Anexo. </strong> Ejemplo Problema de transporte
      
            .col-lg-4
              figure(data-aos="zoom-in")
                img(src='@/assets/curso/tema2/14.png', alt='')
      

      #t_2_2.titulo-segundo(data-aos="flip-up")
        h2 #[span 2.2] Métodos de solución como el Método de Aproximación y el Método Simplex Mejorado

      
      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/15.png", data-aos="zoom-in")
        .col-lg-8
          .bg-color-1.p-4(data-aos="fade-left").mb-4
            p.mb-0 Para resolver problemas de transporte y asignación de recursos de manera eficiente, se utilizan diferentes métodos de solución dentro de la programación lineal. Entre los más utilizados están:
      
          p(data-aos="fade-left").mb-4 Estos modelos tienen múltiples aplicaciones en la gestión logística, manufactura, planificación de producción y asignación de tareas, entre otros (Taha, 2012).



      .row.justify-content-center.align-items-stretch.mb-5
        .col-lg-6.mb-4(data-aos="zoom-in-up")
          .custom-image-card-2.h-100
            img.custom-image-card__image(src="@/assets/curso/tema2/16.png" alt="")
            .custom-image-card__text.p-4
              h5.mb-2.text-center El Método de Aproximación
              p.mb-0 Proporciona soluciones iniciales rápidas y factibles, reduciendo el tiempo de cómputo.
        .col-lg-6.mb-4(data-aos="zoom-in-down")
          .custom-image-card-2.h-100
            img.custom-image-card__image(src="@/assets/curso/tema2/17.png" alt="")
            .custom-image-card__text.p-4
              h5.mb-2.text-center El Método Simplex Mejorado
              p.mb-0 Un enfoque más avanzado que garantiza la obtención de la solución óptima utilizando técnicas iterativas refinadas (Hillier & Lieberman, 2010).

      
      h2.mb-5 Método de Aproximación: soluciones iniciales para problemas de transporte

      .row.mb-5
        .col-lg-8
          p El método de aproximación es un enfoque heurístico que ayuda a encontrar una solución inicial rápida y factible, en problemas de transporte, minimizando los costos iniciales antes de aplicar un método de optimización más avanzado (Taha, 2012).

          p #[b Los tres métodos más comunes dentro de esta categoría son:]


            
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/18.svg", alt="")

      
      .row.align-items-center.mb-5
        .col-lg-8.order-2.order-lg-1
      
          LineaTiempoD.color-primario.large(data-aos="fade-right")
            div(numero="1" titulo="Evaluar cambios en los coeficientes de la función objetivo")
              ul.lista-ul--color.color-dark.mb-4
                li.mb-1
                  i.fas.fa-arrow-circle-right
                  | Se inicia la asignación desde la celda superior izquierda (esquina noroeste) de la tabla de costos y se distribuyen unidades hasta agotar oferta o demanda.
                li.mb-0
                  i.fas.fa-arrow-circle-right
                  | Se avanza de izquierda a derecha y luego hacia abajo, sin considerar los costos.

              p.mb-0 #[b Ventaja.] Es simple y fácil de aplicar.
              p.mb-0 #[b Desventaja.] No necesariamente produce la solución más eficiente.
              

            div(numero="2" titulo="Método del Costo Mínimo (MCM)")
              p Contenido paso 2
            div(numero="3" titulo="Método de Aproximación de Vogel (MVAM)")
              p Contenido paso 3
          
        .col-lg-4.order-1.order-lg-2
          figure
            img(src="@/assets/curso/tema2/19.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      


      h2.mb-5 Método Simplex Mejorado: optimización para transporte y asignación

      .row.mb-5
        .col-lg-4
          figure
            img(src="@/assets/curso/tema2/20.png", data-aos="zoom-in")
        .col-lg-8
          .bg-color-1.p-4(data-aos="fade-left").mb-4
            p.mb-0 El Método Simplex Mejorado es una variante optimizada del método Simplex Clásico. Se usa para refinar soluciones en problemas de transporte y asignación, asegurando que la solución sea óptima (Kong, 2013).
      
          p(data-aos="fade-left").mb-4 Las características del Método Simplex Mejorado, son:


      div.row.justify-content-center.align-items-stretch.mb-5
        div.col-lg-4.mb-4(data-aos="zoom-in-up")
          div.bg-color-white.box-shadow.px-4.py-5.h-100
            img.mx-auto.d-block.mb-4(
              src="@/assets/curso/tema2/21.svg"
              alt=""
              style="width: 90px"
            )
            h4.text-center Reducción de iteraciones innecesarias
            p.mb-0.text-center Se prioriza trabajar solo con las variables básicas relevantes.
      
        div.col-lg-4.mb-4(data-aos="zoom-in-up")
          div.bg-color-white.box-shadow.px-4.py-5.h-100
            img.mx-auto.d-block.mb-4(
              src="@/assets/curso/tema2/22.svg"
              alt=""
              style="width: 90px"
            )
            h4.text-center Optimización más rápida
            p.mb-0.text-center Se elimina la necesidad de realizar cálculos complejos en cada iteración.
      
        div.col-lg-4.mb-4(data-aos="zoom-in-up")
          div.bg-color-white.box-shadow.px-4.py-5.h-100
            img.mx-auto.d-block.mb-4(
              src="@/assets/curso/tema2/23.svg"
              alt=""
              style="width: 90px"
            )
            h4.text-center Se aplica en programación lineal de gran escala
            p.mb-0.text-center Útil para problemas de distribución de recursos en empresas con múltiples ubicaciones.


      .bg-full-width.bg-color-5
        .px-4.px-md-5.py-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema2/24.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0.text-white Ejemplo de aplicación. Una empresa de transporte quiere reducir costos de distribución en una red con más de 100 puntos de entrega. El Método Simplex Mejorado permite encontrar la mejor solución sin probar todas las combinaciones posibles (Hillier & Lieberman, 2010).
      
      
      

      .bg-full-width.border-top.color-primario
        .p-4.p-md-5
          h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
          .row.material-complementario
            .col-12.col-md-6.col-lg-7
              p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
                a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/274611" target="_blank" rel="noopener noreferrer") De Castro Emilio Cerdá, F. J. A. L. M. (s/f). Las energías renovables en el ámbito internacional. Revistasice.com. 
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
                span De Janeiro, R. (1992). La declaración del Río sobre el Medio Ambiente y el Desarrollo. Río de Janeiro República Federativa del Brasil., aprobada en Estocolmo el, 16.
  
              p.d-flex.my-4
                img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
                a(href="https://youtu.be/QKLjwCMyv3M?si=uAWhO9tnyghljaJg" target="_blank" rel="noopener noreferrer") Innovación y sostenibilidad.
  
            .col-12.col-md-6.col-lg-3.offset-lg-1
              figure
                img(src='@/assets/componentes/material-complementario.svg', alt='')
  
  </template>

<script>
export default {
  name: 'Tema2',
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
