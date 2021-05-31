# Detalles del Proyecto: Aw.Pets


Demostracion del proyecto en formato GIF: https://drive.google.com/drive/folders/1QTDtN_4ntoGugGQdPb5aaYta8oIPgf5I?usp=sharing


Aw.Pets (Awesome Pets) es un proyecto simula un eCommerce orientado principalmente a prestaciones de servicios para mascotas, y por consiguiente, a la venta de productos para perros y gatos, desarrollado en React.

Las secciones de este eCommerce se componen del Inicio, Productos (para perros o gatos), Servicios y Veterinario (servicios que solo pueden ser ejercidos y ofrecidos por un profesional).

En la página de Inicio se muestran todos los Items que se ofrecen, y en cada sección señalada en el NavBar se muestran los Items filtrados por la sección elegida.

Los Items ofrecidos son mostrados en una Card simple, con la idea de dar una vista general. Si el usuario desea saber más, cada item cuenta con una ruta que lleva al detalle del Item. Allí, si el usuario lo desea, puede seleccionar la cantidad de articulos o items a comprar, y consecuentemente puede proceder a finalizar su compra o continuar agregando items al carrito.

En el Carrito se muestran todos los productos que el usuario seleccionó para comprar, y cada item con su respectiva cantidad seleccionada.
Para finalizar la compra, se le solicita al usuario ingresar sus datos de contacto con un modal, siendo estos requeridos por el formulario. De no completarse algun campo, no se podrá proceder a generar la orden de compra.

Una vez facilitada la información, se generará una orden de compra, y se le informa al usuario un ID correspondiente a la orden de compra generada.
