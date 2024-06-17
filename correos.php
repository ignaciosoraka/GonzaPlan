<?php
$mensaje_exito = "";
$mensaje_error = "";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Limpiar los datos del formulario
    $nombre = htmlspecialchars($_POST['name']);
    $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);
    $celular = htmlspecialchars($_POST['phone']);
    $mensaje = htmlspecialchars($_POST['message']);

    // Personalizar el asunto del correo electrónico
    $asuntoCorreo = "Consulta de " . $nombre;

    // Construir el mensaje de correo electrónico
    $mensajeCorreo = "Mensaje de contacto:\n\n";
    $mensajeCorreo .= "Nombre: " . $nombre . "\n";
    $mensajeCorreo .= "Correo Electrónico: " . $email . "\n";
    $mensajeCorreo .= "Celular: " . $celular . "\n";
    $mensajeCorreo .= "Mensaje: " . $mensaje;

    // Destinatario del correo electrónico
    $destinatario = '2gonlinecoaching@gmail.com';

    // Encabezados del correo electrónico
    $headers = "From: Gonzalo Goy <2gonlinecoaching@gmail.com>\r\n";
    $headers .= "Reply-To: " . $email . "\r\n";
    $headers .= "MIME-Version: 1.0\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Enviar el correo electrónico y verificar si se envió correctamente
    if (mail($destinatario, $asuntoCorreo, $mensajeCorreo, $headers)) {
        // Éxito en el envío del correo electrónico
        $mensaje_exito = "Tu mensaje ha sido enviado con éxito. ¡Gracias!";
        // Redireccionar a gracias.html
        header("Location: https://wa.me/+5491136351048?text=👋Hola%2C%20me%20comunico%20desde%20la%20p%C3%A1gina%20porque%20estoy%20interesado%20en%20el%20plan%20de%2030%20d%C3%ADas.");
 // Asegura que el script se detenga después de la redirección
    } else {
        // Error en el envío del correo electrónico
        $mensaje_error = "Ocurrió un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.";
    }
}
?>
