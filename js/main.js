$(document).ready(function () {

    // slider
    if (window.location.href.indexOf('index') > -1) {
        $('.bxslider').bxSlider({
            mode: 'fade',
            captions: true,
            slideWidth: 1200
          });   
    }

    // Posts
    if (window.location.href.indexOf('index') > -1) {
        var posts = [
            {
                title: 'Prueba de titulo 1',
                date: 'Publicado el día ' + moment().date() + ' de ' + moment().format('MMMM') + ' del '+ moment().format('YYYY'),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis eros ut dolor imperdiet, sit amet mattis nisi scelerisque. Sed tellus justo, viverra at magna a, lacinia venenatis est. Suspendisse potenti. Quisque aliquam bibendum leo. Aenean sit amet placerat ligula, lacinia malesuada ligula. Aliquam ac tellus neque. Sed semper at erat ac hendrerit. Curabitur id nisi commodo, auctor orci eu, ornare nibh. Vestibulumaccumsan ante at magna facilisis venenatis. Duis pulvinar sodales tortor sed lacinia. Vivamus nulla diam, sodales a ultricies nec, tempor vel ex. Donec auctor sapien at lobortis consectetur. Vestibulum vitae nisi iaculis risus malesuada ultricies.'
            },
            { 
                title: 'Prueba de titulo 2',
                date: 'Publicado el día ' + moment().date() + ' de ' + moment().format('MMMM') + ' del '+ moment().format('YYYY'),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis eros ut dolor imperdiet, sit amet mattis nisi scelerisque. Sed tellus justo, viverra at magna a, lacinia venenatis est. Suspendisse potenti. Quisque aliquam bibendum leo. Aenean sit amet placerat ligula, lacinia malesuada ligula. Aliquam ac tellus neque. Sed semper at erat ac hendrerit. Curabitur id nisi commodo, auctor orci eu, ornare nibh. Vestibulumaccumsan ante at magna facilisis venenatis. Duis pulvinar sodales tortor sed lacinia. Vivamus nulla diam, sodales a ultricies nec, tempor vel ex. Donec auctor sapien at lobortis consectetur. Vestibulum vitae nisi iaculis risus malesuada ultricies.'
            },
            {
                title: 'Prueba de titulo 3',
                date: 'Publicado el día ' + moment().date() + ' de ' + moment().format('MMMM') + ' del '+ moment().format('YYYY'),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis eros ut dolor imperdiet, sit amet mattis nisi scelerisque. Sed tellus justo, viverra at magna a, lacinia venenatis est. Suspendisse potenti. Quisque aliquam bibendum leo. Aenean sit amet placerat ligula, lacinia malesuada ligula. Aliquam ac tellus neque. Sed semper at erat ac hendrerit. Curabitur id nisi commodo, auctor orci eu, ornare nibh. Vestibulumaccumsan ante at magna facilisis venenatis. Duis pulvinar sodales tortor sed lacinia. Vivamus nulla diam, sodales a ultricies nec, tempor vel ex. Donec auctor sapien at lobortis consectetur. Vestibulum vitae nisi iaculis risus malesuada ultricies.'
            },
            { 
                title: 'Prueba de titulo 4',
                date: 'Publicado el día ' + moment().date() + ' de ' + moment().format('MMMM') + ' del '+ moment().format('YYYY'),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis eros ut dolor imperdiet, sit amet mattis nisi scelerisque. Sed tellus justo, viverra at magna a, lacinia venenatis est. Suspendisse potenti. Quisque aliquam bibendum leo. Aenean sit amet placerat ligula, lacinia malesuada ligula. Aliquam ac tellus neque. Sed semper at erat ac hendrerit. Curabitur id nisi commodo, auctor orci eu, ornare nibh. Vestibulumaccumsan ante at magna facilisis venenatis. Duis pulvinar sodales tortor sed lacinia. Vivamus nulla diam, sodales a ultricies nec, tempor vel ex. Donec auctor sapien at lobortis consectetur. Vestibulum vitae nisi iaculis risus malesuada ultricies.'
            },
            { 
                title: 'Prueba de titulo 5',
                date: 'Publicado el día ' + moment().date() + ' de ' + moment().format('MMMM') + ' del '+ moment().format('YYYY'),
                content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse mollis eros ut dolor imperdiet, sit amet mattis nisi scelerisque. Sed tellus justo, viverra at magna a, lacinia venenatis est. Suspendisse potenti. Quisque aliquam bibendum leo. Aenean sit amet placerat ligula, lacinia malesuada ligula. Aliquam ac tellus neque. Sed semper at erat ac hendrerit. Curabitur id nisi commodo, auctor orci eu, ornare nibh. Vestibulumaccumsan ante at magna facilisis venenatis. Duis pulvinar sodales tortor sed lacinia. Vivamus nulla diam, sodales a ultricies nec, tempor vel ex. Donec auctor sapien at lobortis consectetur. Vestibulum vitae nisi iaculis risus malesuada ultricies.'
            }
        ]
        posts.forEach((item, index) => {
            var post = `
                <article class = "post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>
                        ${item.content}
                    </p>
                    <a href="#" class = "buttonMore" >Leer más</a>
                </article>
            `;
            $('#posts').append(post);
        })
    }

    // Selector de Tema
    var theme = $('#theme') 

    $('#toGreen').click(function () { 
        theme.attr('href', "../css/green.css");
    });
    $('#toRed').click(function () { 
        theme.attr('href', "../css/red.css");
    });
    $('#toBlue').click(function () { 
        theme.attr('href', "../css/blue.css");
    });

    // Scroll arriba de la web

    $('.subir').click(function (e) {
        e.preventDefault() 
        $('html, body').animate({
            scrollTop: 0
        },500)

        return false
    });

    // Login falso
    $('#login form').submit(function (e) { 
        // e.preventDefault();
        var formName = $('#formName').val();
        localStorage.setItem('formName', formName)
    });

    var formName = localStorage.getItem('formName')
    if (formName != null && formName != 'undefined') {
        var aboutParrafo = $('#about p');
        aboutParrafo.html('<strong> Bienvenido, ' + formName + '</strong>');
        aboutParrafo.append('<a href = "#" id="logout"> Cerrar sesión </a>');
        $('#login').hide();

        $('#logout').click(function () { 
            localStorage.clear()
            location.reload();
        });
    }

    // acordeon
    if (window.location.href.indexOf('about') > -1) {
        $('#acordeon').accordion();
    }

    // reloj
    if (window.location.href.indexOf('reloj') > -1) {
        setInterval(function () {
            var reloj = moment().format('hh:mm:ss')
            $('#reloj').html(reloj);
        },1000)
    }

    // validaciones
    if (window.location.href.indexOf('contact') > -1) {
        $("form input[name = 'date']").datepicker({
            dateFormat: 'dd-mm-yy'
        }); 
        $.validate({
            lang: 'es',
            errorMessagePosition: 'top',
            scrollToTopOnError: true
        })
    }
    
});
