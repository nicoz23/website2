$(document).ready(function(){

   // Slider

   if(window.location.href.indexOf('index') > -1){
    $('.galeria').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1300,
        responsive: true,
        pager: false
      });
    }

    // Posts
    if(window.location.href.indexOf('index') > -1){
    var posts = [
      {
        title: "Prueba de titulo 1",
        date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At assumenda quas accusantium fugit esse laboriosam, aliquid laudantium voluptates, asperiores obcaecati dolore. Temporibus a facilis reiciendis ducimus cum deserunt dolore autem ad modi voluptates itaque vitae officiis ut iusto hic maxime ea, doloremque dignissimos. Cum neque quae est nesciunt iste.'
      },
      {
        title: "Prueba de titulo 2",
        date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At assumenda quas accusantium fugit esse laboriosam, aliquid laudantium voluptates, asperiores obcaecati dolore. Temporibus a facilis reiciendis ducimus cum deserunt dolore autem ad modi voluptates itaque vitae officiis ut iusto hic maxime ea, doloremque dignissimos. Cum neque quae est nesciunt iste.'
      },
      {
        title: "Prueba de titulo 3",
        date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At assumenda quas accusantium fugit esse laboriosam, aliquid laudantium voluptates, asperiores obcaecati dolore. Temporibus a facilis reiciendis ducimus cum deserunt dolore autem ad modi voluptates itaque vitae officiis ut iusto hic maxime ea, doloremque dignissimos. Cum neque quae est nesciunt iste.'
      },
      {
        title: "Prueba de titulo 4",
        date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At assumenda quas accusantium fugit esse laboriosam, aliquid laudantium voluptates, asperiores obcaecati dolore. Temporibus a facilis reiciendis ducimus cum deserunt dolore autem ad modi voluptates itaque vitae officiis ut iusto hic maxime ea, doloremque dignissimos. Cum neque quae est nesciunt iste.'
      },
      {
        title: "Prueba de titulo 5",
        date: 'Publicado el dia ' + moment().date() + ' de ' + moment().format("MMMM") + ' del ' + moment().format("YYYY"),
        content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At assumenda quas accusantium fugit esse laboriosam, aliquid laudantium voluptates, asperiores obcaecati dolore. Temporibus a facilis reiciendis ducimus cum deserunt dolore autem ad modi voluptates itaque vitae officiis ut iusto hic maxime ea, doloremque dignissimos. Cum neque quae est nesciunt iste.'
      }
    ]
    
    posts.forEach((item, index) => {
      var post = `
      <article class="post">
      <h2>${item.title}</h2>
      <span class="date">${item.date}</span>
      <p>
        ${item.content}
      </p>
      <a href="#" class="button-more">Leer más</a>
      </article> 
      `
      $("#posts").append(post)
    })}

    // selector de tema
    var theme = $('#theme')

    $('#to-green').click(function(){
      theme.attr("href", "css/green.css")
    })

    $('#to-red').click(function(){
      theme.attr("href", "css/red.css")
    })

    $('#to-blue').click(function(){
      theme.attr("href", "css/blue.css")
    })

    //scroll arriba de la web

    $('.subir').click(function(e){
      e.preventDefault()

      $('html, body').animate({
        scrollTop: 0
      }, 500)

      return false
    })

    //login falso

    $('#login form').submit(function(){
      var form_name = $('#formname').val()

      localStorage.setItem("form_name", form_name)
    })

    var form_name = localStorage.getItem("form_name")
    
    if(form_name != null && form_name != "undefined"){
      var about_p = $('#about p')

      about_p.html("<br><strong>Bienvenido, "+form_name+"</strong>")
      about_p.append("<br><a href='#' id='logout'>Cerrar sesión</a>")
     
      $('#login').hide()

      $('#logout').click(function(){
        localStorage.clear()
        location.reload()
      })

  }
 
  // acordeon
  if(window.location.href.indexOf('aboutme') > -1){
    $('#acordeon').accordion()
  }

  // reloj

  if(window.location.href.indexOf('reloj') > -1){
   setInterval(function(){

     var reloj = moment().format("hh:mm:ss")
     $('#clock').html(reloj)
   },1000)
   
  }

  // validación

  if(window.location.href.indexOf('contact') > -1){
    
    $("form input[name='date']").datepicker({
      dateFormat: 'dd-mm-yy'
    })

    $.validate({
      lang: 'es',
      errorMessagePosition: 'top',
      scrollToTopOnError: true
    })

  }
  


})