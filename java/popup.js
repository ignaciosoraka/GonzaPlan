$(document).ready(function () {
    function showPopup() {
        if (!localStorage.getItem('subscribed')) {
            $('.pop-up').addClass('show');
            $('.pop-up-wrap').addClass('show');
        }
    }

    $("#close").click(function(){
        $('.pop-up').removeClass('show');
        $('.pop-up-wrap').removeClass('show');
    });

    $("#subscribe-link").click(function(event){
        event.preventDefault(); // Evitar que el enlace haga scroll
        showPopup();
    }); // Asociamos el nuevo enlace a la función showPopup

    $("#subscriptionForm").submit(function(event){
        event.preventDefault();
        // Aquí iría la lógica para enviar el formulario a tu servidor
        // Ejemplo: 
        // $.post("/path/to/your/api", $(this).serialize(), function(response){
        //     // Manejar la respuesta del servidor
        // });
        
        localStorage.setItem('subscribed', 'true');
        $('.pop-up').removeClass('show');
        $('.pop-up-wrap').removeClass('show');
    });

    setTimeout(showPopup, 2000);
});