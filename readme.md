# Mi eCommerce

## Descripción
Este proyecto es una tienda en línea sencilla diseñada para proporcionar una experiencia básica de e-commerce. Permite a los usuarios explorar productos, agregarlos a un carrito de compras, gestionar la cantidad de productos y realizar operaciones como eliminar productos del carrito o vaciarlo completamente. Todo esto está implementado utilizando HTML, CSS y JavaScript, con énfasis en el aprendizaje y la práctica de conceptos fundamentales del desarrollo web los cuales vimos en clases durante toda la cursada.

## Funcionalidades
- **Carga dinámica de productos:** Los datos de los productos se obtienen de un archivo JSON simulado que actúa como una API REST.
- **Carrito de compras:**
  - Agregar productos al carrito.
  - Totalizar el precio y la cantidad de productos.
  - Eliminar productos individualmente o vaciar el carrito.
- **Interfaz responsive:** Adaptable a diferentes tamaños de pantalla.
- **Visualización de productos**: Muestra una lista de productos con imágenes, descripciones y precios.
- **Carrito de compras**:
  - Agregar productos al carrito.
  - Totalizar la cantidad de productos y el precio total de la compra.
  - Eliminar una unidad de un producto del carrito.
  - Eliminar todos los productos de un tipo del carrito.
  - Vaciar completamente el carrito.

- **Formulario de contacto**: Permite a los usuarios enviar mensajes a través de un servicio como Formspree.
- **Persistencia de datos**: El carrito utiliza `localStorage` para mantener los productos almacenados entre sesiones del navegador.

## Tecnologías utilizadas
- **HTML5**: Para la estructura de la página.
- **CSS3**: Para el diseño visual y el menú hamburguesa.
- **JavaScript**: Para las funcionalidades dinámicas del carrito y la interacción del usuario.

## Estructura de archivos
```
/
├── index.html       # Página principal del proyecto.
├── styles.css       # Archivo de estilos CSS.
├── script.js        # Lógica del carrito y funcionalidades dinámicas.
├── README.md        # Documentación del proyecto.
└── /imagenes        # Carpeta para las imágenes de los productos.
```

## Cómo utilizar el proyecto
1. Clonar el repositorio o descargar los archivos.
2. Abrir `index.html` en cualquier navegador web moderno.
3. Explorar los productos y usar el carrito de compras para probar las funcionalidades.

## Objetivo del proyecto
El objetivo principal de esta página es servir como un ejemplo práctico para aprender y practicar desarrollo web, incluyendo:
- Creación de interfaces de usuario atractivas y funcionales.
- Implementación de lógica básica para un carrito de compras.
- Uso de `localStorage` para persistir datos entre sesiones.
- Diseño responsive con un menú hamburguesa implementado en CSS puro.

## Próximos pasos
Algunas posibles mejoras futuras incluyen:
- Integrar un backend para manejar pedidos y usuarios.
- Añadir autenticación de usuarios.
- Incluir una base de datos para almacenar productos y gestionar inventarios.
- Optimizar el diseño para una mejor experiencia de usuario.

---

## Autor
Proyecto desarrollado por K. Armando Donado como un ejemplo educativo para el desarrollo web.
