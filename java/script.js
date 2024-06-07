const cardImg = document.getElementById('card-img');

cardImg.addEventListener('mouseenter', function(event) {
  // Aplicar un efecto de zoom a la imagen cuando el mouse entre en ella
  cardImg.style.transform = 'scale(1.1)';
  // Escuchar los movimientos del mouse para el efecto de rotación
  cardImg.addEventListener('mousemove', handleMouseMove);
});

cardImg.addEventListener('mouseleave', function(event) {
  // Restablecer la escala a su valor normal cuando el mouse salga de la imagen
  cardImg.style.transform = 'scale(1)';
  // Detener el efecto de rotación al salir de la imagen
  cardImg.removeEventListener('mousemove', handleMouseMove);
});

function handleMouseMove(event) {
  // Aquí colocamos la lógica para el efecto de rotación que ya tenías implementado
  const rect = cardImg.getBoundingClientRect();
  const containerWidth = rect.width;
  const containerHeight = rect.height;
  const mouseX = event.clientX - rect.left;
  const mouseY = event.clientY - rect.top;

  const offsetX = mouseX - containerWidth / 2;
  const offsetY = mouseY - containerHeight / 2;
  const maxRotation = 40;

  const percentX = offsetX / (containerWidth / 2);
  const percentY = offsetY / (containerHeight / 2);

  const rotationY = maxRotation * percentX;
  const rotationX = -maxRotation * percentY;

  cardImg.style.transform = `perspective(800px) rotateY(${rotationY}deg) rotateX(${rotationX}deg)`;
}
