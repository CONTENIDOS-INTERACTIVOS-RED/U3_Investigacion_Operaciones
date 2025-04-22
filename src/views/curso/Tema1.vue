<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Conceptos básicos y aplicaciones en la administración'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden


    .row.mb-5
      .col-lg-8
        .bg-color-2.p-4.mb-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/1.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La teoría de la dualidad en programación lineal, establece que a cada problema de optimización lineal (primal) le corresponde un problema dual asociado. Ambos están interconectados y permiten analizar la solución óptima desde diferentes perspectivas. Su aplicación es clave en la optimización de recursos en la toma de decisiones empresariales, dado que proporciona información valiosa sobre la asignación eficiente de recursos y las implicaciones económicas de las restricciones del modelo (Taha, 2012).

        p  Por otro lado, el análisis de sensibilidad permite evaluar cómo los cambios en los coeficientes del modelo afectan la solución óptima. Esta técnica es útil en contextos donde los datos pueden cambiar debido a factores externos, como variaciones en la disponibilidad de insumos o modificaciones en costos de producción (Hillier & Lieberman, 2010).

        p Ejemplo:
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/2.png").mx-auto


    .row.align-items-center.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/3.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
      .col-lg-8

            LineaTiempoD.color-primario.large(data-aos="fade-right")
              div(numero="1" titulo='Panadería "El Buen Sabor" y la optimización de producción')
                p La panadería "El Buen Sabor" produce pan integral y pan dulce y busca maximizar sus ganancias. Actualmente, cuenta con:

                ul.lista-ul--color.color-dark.mb-4
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | #[strong Harina disponible:] 100 kg por día.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | #[strong Horas de trabajo:] 40 horas diarias.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | #[strong Ganancia por unidad:] $ 5 para pan integral y $ 4 para pan dulce.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | #[strong Demanda diaria estimada:] 30 unidades de pan integral y 40 de pan dulce.
                
              div(numero="2" titulo="Requerimientos de producción")
                .tabla-a.color-acento-contenido              
                  table
                    thead
                      tr
                        th.bg-color-tabla.text-white #[small Producto]
                        th.bg-color-tabla.text-white #[small Harina requerida (kg)]
                        th.bg-color-tabla.text-white #[small Horas de trabajo (h)]
                    tbody
                      tr.bg-color-white
                        td #[small Pan integral]
                        td.text-center #[small 2]
                        td.text-center #[small 1]
                      tr.bg-color-white
                        td #[small Pan dulce]
                        td.text-center #[small 1]
                        td.text-center #[small 2]

              div(numero="3" titulo="Análisis de optimización")
                p.mb-3 ¿Cuántas unidades de cada pan debe producir la panadería para maximizar su ganancia sin exceder sus recursos?

                p.mb-2 #[strong a) Aplicación de la dualidad:]
                ul.lista-ul--color.color-dark.mb-3
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | El problema primal busca maximizar la ganancia total cumpliendo con las restricciones de harina y las horas de trabajo.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | El problema dual ayuda a determinar el valor real de los recursos escasos. Si el precio sombra de la harina es alto, significa que comprar más harina podría ser rentable.

                p.mb-2 #[strong b) Aplicación del análisis de sensibilidad:]
                ul.lista-ul--color.color-dark.mb-3
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Si el proveedor ofrece 20 kg adicionales de harina por $10, ¿es rentable comprarlo?
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | ¿Cómo cambia la solución si aumenta el costo de producción del pan dulce?
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | ¿Cuánto puede aumentar el precio de venta antes que convenga hacer más pan integral que pan dulce?
        
    
    .bg-color-2.mb-5
      .row.justify-content-center.align-items-center
        .col-lg
          .p-4
            p.mb-4 #[strong Reflexión]

            p Este análisis permite a la panadería tomar decisiones estratégicas, optimizando no solo la producción, sino también su rentabilidad y expansión. Al comprender el precio sombra de sus insumos, la empresa puede decidir si le conviene comprar más recursos, ajustar precios o modificar su estrategia de producción. 
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema1/imagen.png', alt='')
    

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1] Relación entre modelos primal y dual


    p La teoría de la dualidad en programación lineal, establece que a cada problema de optimización (PRIMAL), le corresponde un problema DUAL asociado. Ambos modelos están interconectados y permiten analizar la solución óptima desde diferentes perspectivas, proporcionando información valiosa sobre la asignación eficiente de recursos y la interpretación económica de los coeficientes del modelo (Hillier & Lieberman, 2010).


    h2 Formulación matemática del primal y dual 
    
    .row.mb-5
      .col-lg-8
        .bg-color-3.px-4.py-4(data-aos="fade-left").mb-4
          p.mb-0 Dado un problema PRIMAL de maximización en su forma estándar:
          p.mb-0 MAXIMIZAR Z = c1x1+c2x2+...+cnxn
          p.mb-2 Sujeto a restricciones:

          p.text-center.mb-0 a11x1+a12x2+...+a1nxn ≤ b1
          p.text-center.mb-0 a21x1+a22x2+...+a2nxn ≤ b2
          p.text-center.mb-0 ⋮
          p.text-center.mb-0 am1x1+am2x2+...+amnxn ≤ bm
          p.text-center.mb-0 x1,x2,...,xn ≥ 0
          p El problema DUAL asociado será:
          p.text-center.mb-0 MINIMIZAR W = b1y1 + b2y2 +...+ bmym
          p.text-center.mb-0 Sujeto a:
          p.text-center.mb-0 a11y1+a21y2+...+am1ym ≥ c1
          p.text-center.mb-0 a12y1+a22y2+...+am2ym ≥ c1
          p.text-center.mb-0 ⋮
          p.text-center.mb-0 a1ny1+a2ny2+...+amnym ≥ cn
          p.text-center.mb-0 y1,y2,...,ym ≥ 0
          p Donde:
          ul.lista-ul--color.color-dark.mb-4
            li.mb-0
              i.fas.fa-arrow-circle-right
              | xi son las variables de decisión del problema PRIMAL.
            li.mb-0
              i.fas.fa-arrow-circle-right
              | yi son las variables del problema DUAL, también conocidas como precios sombra, que indican cuánto aumentaría la función objetivo si se incrementa en una unidad el recurso correspondiente (Kong, 2013). 
        p(data-aos="fade-left") Las propiedades de la relación primal-dual, son:
      .col-lg-4.d-none.d-sm-block
        figure
          img(src="@/assets/curso/tema1/4.png", data-aos="zoom-in").mb-4.mb-lg-0

    .bg-full-width-2.bg-fondo-1
      .px-4.px-md-5
        TabsC.color-secundario.mb-5
          .tabs-content.border.px-4.p-md-5.py-3(titulo="Dualidad débil" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
            .row
              .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
                h4 Dualidad débil
                p La solución del problema dual nunca será menor que la solución del problema primal, en un problema de maximización.
              .col-md-6.col-lg-5.col-xl-4.order-1
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/tema1/6.png', alt='')
        
          .tabs-content.border.px-4.p-md-5.py-3(titulo="Dualidad fuerte" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
            .row
              .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
                h4 Dualidad fuerte
                p Si ambos problemas tienen solución, entonces los valores óptimos de la función objetivo en el primal y el dual, son iguales.
              .col-md-6.col-lg-5.col-xl-4.order-1
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/tema1/7.png', alt='')
        
          .tabs-content.border.px-4.p-md-5.py-3(titulo="Condiciones de complementariedad" :icon="require('@/assets/bullets/icon-tab-c-1.svg')" )
            .row
              .col-md-6.col-lg-7.col-xl-8.mb-4.mb-md-0.order-2
                h4 Condiciones de complementariedad 
                p #[strong 1.] Si una restricción en el PRIMAL no es activa (no se usa todo el recurso disponible), su correspondiente variable DUAL será cero.

                p #[strong 2.] Esto significa que dicho recurso no tiene impacto en la optimización y su precio sombra es nulo.
              .col-md-6.col-lg-5.col-xl-4.order-1
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/tema1/8.png', alt='')
        
        h2 #[span] Interpretación económica
        p El análisis de dualidad es clave en la toma de decisiones estratégicas en empresas y en la optimización de procesos, puesto que permite:

        div.row.justify-content-center.align-items-stretch.mb-4
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/9.svg"
                alt=""
                style="width: 90px"
              )
              h4.text-center Primero
              p.mb-0.text-center Determinar el valor económico de los recursos escasos mediante los precios sombra.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/10.svg"
                alt=""
                style="width: 90px"
              )
              h4.text-center Segundo
              p.mb-0.text-center Evaluar la rentabilidad de adquirir más recursos, según los coeficientes del problema dual.
        
          div.col-lg-4.mb-4(data-aos="zoom-in-up")
            div.bg-color-white.box-shadow.px-4.py-5.h-100
              img.mx-auto.d-block.mb-4(
                src="@/assets/curso/tema1/11.svg"
                alt=""
                style="width: 90px"
              )
              h4.text-center Tercero
              p.mb-0.text-center Analizar la sensibilidad del modelo ante cambios en las restricciones, permitiendo ajustes estratégicos sin necesidad de reformular completamente el problema.

      
    .bg-full-width.bg-color-5.mb-5
      .px-4.px-md-5.py-4
        p.mb-0.text-white Por ejemplo, si en un problema de producción la harina es un recurso limitado y su precio sombra es alto, significa que agregar más harina incrementará significativamente la ganancia. Por el contrario, si el precio sombra de un recurso es cero, significa que dicho recurso no está limitando la producción y aumentar su disponibilidad no generará beneficios adicionales.

    h2(data-aos="fade-left") Optimización y toma de decisiones con modelos primal y dual
    p.mb-4 Los modelos primal y dual en programación lineal son herramientas clave para optimizar la asignación de recursos en diversos sectores. Su aplicación permite minimizar costos, maximizar beneficios y mejorar la eficiencia operativa en diferentes ámbitos.

    .bg-full-width.bg-color-2.info.mb-5
      .p-4.p-md-5
        .row.justify-content-center.align-items-center.mb-5
          .col-lg-10
            ImagenInfografica.color-secundario
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/info.png', alt='', style="max-width: 1106px;").mx-auto
    
              .bg-color-white.box-shadow.p-3(x="0%" y="65%" numero="+")
                h5 01. Logística y transporte
                ul.lista-ul--color.color-dark.mb-4
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Optimización de rutas: reducción de costos de transporte al encontrar las rutas más eficientes.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Distribución de recursos: mejor planificación en el envío de mercancías con restricciones de tiempo y costos.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Gestión de inventarios: control óptimo de existencias para minimizar costos de almacenamiento.
                p Ejemplo: una empresa de mensajería usa programación lineal para determinar la mejor ruta de entrega minimizando el tiempo y el consumo de combustible (Kong, 2013).
    
              .bg-color-white.box-shadow.p-3(x="86%" y="25%" numero="+")
                h5 02. Gestión de producción
                ul.lista-ul--color.color-dark.mb-4
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Asignación eficiente de materias primas: distribución óptima de insumos en diferentes líneas de producción.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Optimización del tiempo de fabricación: planificación estratégica para reducir tiempos muertos y mejorar productividad.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Minimización de costos: reducción de desperdicios de material y energía.
                p Ejemplo: una fábrica de automóviles utiliza modelos primal y dual para determinar cuántas unidades de cada modelo producir maximizando ganancias y optimizando el uso de recursos.
    
              .bg-color-white.box-shadow.p-3(x="98%" y="65%" numero="+")
                h5 03. Finanzas y economía
                ul.lista-ul--color.color-dark.mb-4
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Evaluación de estrategias de inversión: asignación óptima de activos en un portafolio financiero.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Gestión de riesgos: análisis de fluctuaciones del mercado y su impacto en la rentabilidad.
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Maximización de beneficios: modelos de optimización para maximizar ingresos en inversiones.
                p Ejemplo: un banco usa programación lineal para distribuir fondos entre diferentes activos financieros maximizando la rentabilidad y reduciendo riesgos.

    
    .bg-color-3.mb-5(data-aos="fade-up")
      .row.justify-content-center.align-items-center
        .col-lg-auto
          figure
            img(src='@/assets/curso/tema1/12.png', alt='')
        .col-lg
          .p-4
            p.mb-2 #[strong Reflexión]

            p.mb-0 La relación entre los modelos PRIMAL y DUAL en programación lineal, permite comprender mejor la estructura de un problema de optimización y su impacto en la gestión de recursos. Su aplicación en áreas como logística, producción y economía, facilita la toma de decisiones basada en análisis cuantitativo, permitiendo a las organizaciones maximizar ganancias y minimizar costos de manera eficiente. 
    
    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Interpretación de resultados y análisis de sensibilidad para la toma de decisiones
    
    .row.mb-5
      .col-lg-8
        .bg-color-6.p-4.mb-4
          .row.align-items-center
            .col-lg-auto
              img(src="@/assets/curso/tema1/3.svg", style="max-width: 90px").mx-auto
            .col-lg
              p.mb-0 La interpretación de los resultados en la programación lineal y el análisis de sensibilidad, permite a los tomadores de decisiones evaluar el impacto de cambios en los parámetros del modelo sobre la solución óptima. Esto es fundamental en entornos dinámicos donde los recursos, costos y restricciones, pueden variar con el tiempo (Hillier & Lieberman, 2010).
        p Para conocer la interpretación de resultados en los modelos primal y dual, lo invitamos a escuchar el siguiente podcast.
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/13.png").mx-auto
      

            
    .row.mb-5.justify-content-center
      .col-lg-11

        .bg-color-2.p-4(data-aos="fade-up")
          .row.justify-content-center.align-items-center
            .col-lg-auto
              figure
                img(src='@/assets/curso/tema1/14.png', alt='')
            .col-lg

              TarjetaAudio.color-acento-botones.bg-color-white(
                texto="Interpretación de resultados en los modelos primal y dual"
                tiempo
                :audio="require('../../assets/curso/podcast/podcast1.mp3')"
              ) 
        
        

    h2 Análisis de sensibilidad en la programación lineal
    p El análisis de sensibilidad permite evaluar cómo afectan los cambios en los coeficientes del modelo a la solución óptima. Es útil para:

    .bg-full-width-2.bg-fondo-2
      .px-4.px-md-5
        .row.align-items-center.mb-5
          .col-lg-8.order-2.order-lg-1
        
            LineaTiempoD.color-primario.large(data-aos="fade-right")
              div(numero="1" titulo="Evaluar cambios en los coeficientes de la función objetivo")
                ul.lista-ul--color.color-dark.mb-4
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Permite conocer #[strong hasta qué punto pueden modificarse los coeficientes sin afectar la solución óptima] (Hillier & Lieberman, 2010).
                  li.mb-2
                    i.fas.fa-arrow-circle-right
                    | Se responde a preguntas como:
                    
                    ul.lista-ul.mt-3
                      li
                        | ⊕ ¿Qué pasa si el precio de venta de un producto cambia?
                      li
                        | ⊕ ¿Hasta qué punto puede aumentar el costo de producción sin afectar la rentabilidad?
                  
                  p #[strong Ejemplo.] Una empresa de alimentos puede analizar si un aumento en el precio del trigo afecta la rentabilidad de la producción de pan (Suñé et al., 2016).
              div(numero="2" titulo="Modificar los recursos disponibles (restricciones)")
                ul.lista-ul--color.color-dark.mb-4
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Determina el impacto de #[strong agregar o reducir recursos] en la solución óptima (Taha, 2012).
                  li.mb-2
                    i.fas.fa-arrow-circle-right
                    | Se pueden tomar decisiones estratégicas como comprar más materia prima, contratar más empleados o reducir costos de almacenamiento.
                
                  p #[strong Ejemplo.] Un operador logístico puede evaluar si agregar más camiones a su flota reducirá costos de transporte o si no tendrá un impacto significativo (Kong, 2013).
              div(numero="3" titulo="Incorporación de nuevas restricciones")  
                ul.lista-ul--color.color-dark.mb-4
                  li.mb-0
                    i.fas.fa-arrow-circle-right
                    | Evalúa si una nueva condición, como una limitación de producción o una regulación ambiental, afectaría la solución óptima (Puente Riofrío & Gavilánez Álvarez, 2018).
                  li.mb-2
                    i.fas.fa-arrow-circle-right
                    | Ayuda a anticipar cambios en la operación y realizar ajustes antes que ocurran problemas.
                
                p #[strong Ejemplo.] Una empresa de textiles puede evaluar el impacto de una nueva regulación ambiental que limite el uso de ciertos insumos en la producción (Hillier & Lieberman, 2010).
            
          .col-lg-4.order-1.order-lg-2
            figure
              img(src="@/assets/curso/tema1/15.png", alt="", data-aos="zoom-in").mb-4.mb-lg-0
        

        #Tarjetas2
          div.row.justify-content-center.align-items-stretch.mb-5
            div.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema1/16.svg"
                  alt=""
                  style="width: 90px"
                )
                h4.text-center Primero
                p.mb-0.text-center Facilita la toma de decisiones en entornos inciertos (Kong, 2013).
          
            div.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema1/17.svg"
                  alt=""
                  style="width: 90px"
                )
                h4.text-center Segundo
                p.mb-0.text-center Permite evaluar riesgos y oportunidades antes de hacer cambios en la operación (Hillier & Lieberman, 2010).
          
            div.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema1/18.svg"
                  alt=""
                  style="width: 90px"
                )
                h4.text-center Tercero
                p.mb-0.text-center Ayuda a optimizar costos y maximizar utilidades sin necesidad de reformular todo el modelo (Taha, 2012).
        
            div.col-lg-3.mb-4(data-aos="zoom-in-up")
              div.bg-color-white.box-shadow.px-4.py-5.h-100
                img.mx-auto.d-block.mb-4(
                  src="@/assets/curso/tema1/19.svg"
                  alt=""
                  style="width: 90px"
                )
                h4.text-center Cuarto
                p.mb-0.text-center Proporciona información clave para negociaciones con proveedores y clientes (Puente Riofrío & Gavilánez Álvarez, 2018).
        
        
        
        
    
    .row.mb-5
      .col-lg-4
        figure
          img(src="@/assets/curso/tema1/20.png").mx-auto
      .col-lg-8.mb-0
        p #[strong Ejemplo empresarial.] Una compañía de distribución analiza cómo fluctuaciones en los costos del combustible afectan la rentabilidad del negocio. Si el modelo muestra que un aumento del 10 % en el precio del combustible haría que la empresa opere con pérdidas, se pueden considerar estrategias como rutas más eficientes o negociación de tarifas con proveedores (Suñé et al., 2016).
        .bg-color-3.p-4.mb-0
          p #[strong Reflexión]
          p.mb-0 La interpretación de los resultados en los modelos primal y dual, junto con el análisis de sensibilidad, permite a las organizaciones tomar decisiones informadas en un mundo cambiante. Entender cómo afectan los cambios en los recursos, costos y restricciones ayuda a minimizar riesgos, mejorar la planificación estratégica y maximizar la eficiencia operativa. 


  

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-8.col-md-6.col-lg-7
            p La teoría de la dualidad en programación lineal, establece que a cada problema de optimización lineal (primal) le corresponde un problema dual asociado. Ambos están interconectados y permiten analizar la solución óptima desde diferentes perspectivas. Su aplicación es clave en la optimización de recursos en la toma de decisiones empresariales, dado que proporciona información valiosa sobre la asignación eficiente de recursos y las implicaciones económicas de las restricciones del modelo (Taha, 2012).

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/74048" target="_blank" rel="noopener noreferrer") Taibo, A. (2002) Investigación de operaciones para no matemáticos. Instituto politécnico Nacional. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=_B0yxxnJfIs" target="_blank" rel="noopener noreferrer") GOAL PROJECT. (2017, 7 de octubre). Goal Project Análisis de Sensibilidad 01.

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
