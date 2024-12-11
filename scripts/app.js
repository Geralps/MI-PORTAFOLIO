// 1. Implementar la navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 1. Detectar cuando la sección de habilidades está en el viewport
window.addEventListener('scroll', function() {
    const habilidadesSection = document.getElementById('habilidades');
    const barras = document.querySelectorAll('.barra .progreso');
    
    // Verificar si la sección de habilidades es visible
    if (isInViewport(habilidadesSection)) {
        barras.forEach(bar => {
            const width = bar.getAttribute('data-width'); // Usamos el atributo 'data-width' para obtener el valor deseado
            bar.style.width = width; // Cambiar el ancho de la barra para activar la animación
        });
    }
});

// Función para verificar si un elemento está en el viewport
function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return rect.top >= 0 && rect.left >= 0 && rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && rect.right <= (window.innerWidth || document.documentElement.clientWidth);
}

// 2. Implementar la navegación suave
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


// 3. Efecto de hover en la imagen de perfil
const imgProfile = document.querySelector('.img-profile');
imgProfile.addEventListener('mouseenter', () => {
    imgProfile.style.transform = 'scale(1.1)';
    imgProfile.style.transition = 'transform 0.3s ease';
});

imgProfile.addEventListener('mouseleave', () => {
    imgProfile.style.transform = 'scale(1)';
});

// 4. Validación del formulario de solicitudes
const form = document.querySelector('form[action="enviar.php"]');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault(); // Evitar el envío del formulario si no es válido

        const nombre = document.getElementById('nombre');
        const correo = document.getElementById('correo');
        const mensaje = document.getElementById('mensaje');

        // Validación de los campos del formulario
        if (!nombre.value || !correo.value || !mensaje.value) {
            alert('Por favor, complete todos los campos.');
        } else if (!validateEmail(correo.value)) {
            alert('Por favor, ingrese un correo electrónico válido.');
        } else {
            // Aquí podrías agregar código para enviar el formulario o mostrar un mensaje de éxito
            alert('Formulario enviado correctamente.');
            form.reset(); // Resetea el formulario si todo es válido
        }
    });
}

// Función para validar el formato del correo electrónico
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return re.test(String(email).toLowerCase());
}
