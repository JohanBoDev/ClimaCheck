  let modalBusqueda = document.getElementById('modal-busqueda');
  let boton_volver = document.getElementById('boton-volver');
  let modalResultado = document.getElementById('modal-resultado');
  let section = document.getElementById('section');
    // Asumiendo que tienes un botón con id 'searchButton'
document.getElementById('boton-busqueda').addEventListener('click', function(event) {
    // Esto previene la recarga de la página.
    event.preventDefault();
    
    section.style.height = '538px';
    // Oculta el modal de búsqueda
    modalBusqueda.classList.add('modal-hide'); 
    // Espera a que termine la transición del modal de búsqueda para mostrar el modal de resultados
    setTimeout(function() {
      // Ahora muestra el modal de resultados con la clase que le dará altura
      modalResultado.classList.remove('modal-hide');
      modalResultado.classList.add('modal-show');
      modalBusqueda.contains('modal-hide');
      modalBusqueda.style.display = 'none';   
     

    }, 300); 
   
  });
  
    boton_volver.addEventListener('click', function(event) {
    // Esto previene la recarga de la página.
    section.style.height = '180px';
    
    // Oculta el modal de resultados
    modalResultado.classList.remove('modal-show');
    modalResultado.classList.add('modal-hide');
    document.body.style.backgroundImage = "url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')";
                  document.body.style.backgroundSize = "cover";
                  document.body.style.backgroundPosition = "center center";
    
    // Espera a que termine la transición del modal de resultados para mostrar el modal de búsqueda
    setTimeout(function() {
      // Ahora muestra el modal de búsqueda con la clase que le dará altura
      modalBusqueda.classList.remove('modal-hide');
      modalBusqueda.style.translate = 'translateY(80%)';
      modalBusqueda.style.marginTop = '10px';
    }, 500); 
    });

   
    function setCityBackground() {
      const city = document.getElementById('nombre-ciudad').value;
      const apiKey = '0U6gzBsZmTKKNB62WQX_UokVSV7XqedqLaPXcvjNcrA';  // Sustituye con tu clave real de la API de Unsplash
      const url = `https://api.unsplash.com/search/photos?query=${city}&client_id=${apiKey}&orientation=landscape`;
  
      fetch(url)
          .then(response => {
              if (!response.ok) {
                  throw new Error('Network response was not ok');
              }
              return response.json();
          })
          .then(data => {
              console.log(data);  // Muestra los datos obtenidos para depuración
              if (data.results && data.results.length > 0) {
                  // Selecciona un índice aleatorio desde los resultados obtenidos
                  const randomIndex = Math.floor(Math.random() * data.results.length);
                  const imageUrl = data.results[randomIndex].urls.regular;  // Cambia 'full' por 'regular' para cargar más rápido
                  document.body.style.backgroundImage = `url('${imageUrl}')`;
                  document.body.style.backgroundSize = "cover";
                  document.body.style.backgroundPosition = "center center";
                  console.log("Imagen de fondo actualizada.");
              } else {
                  console.log("No se encontraron imágenes para esa ciudad. Se usará la imagen predeterminada.");
              }
          })  
          .catch(error => {
              console.error('Error al obtener imágenes de Unsplash:', error);
          });
  }
  
  

