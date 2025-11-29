# Desafío Fullstack Entry / Jr 2025

- [Objetivo](#objetivo)
- [Entregable](#entregable)
- [¿Qué debe hacer tu app?](#qué-debe-hacer-tu-app)
- [Código base](#código-base)
- [Especificaciones](#especificaciones)
  - [Contexto: ¿Qué hace Bloom Reuse?](#contexto-qué-hace-bloom-reuse)
  - [Marcas a implementar](#marcas-a-implementar)
  - [Preguntas frecuentes a implementar](#preguntas-frecuentes-a-implementar)
- [¿Dudas?](#dudas)

## Objetivo

Debes crear una app que al seleccionar una marca, muestre la sección de **preguntas frecuentes para vendedores** según su configuración. Dentro del repo encontrarás el código base de frontend y backend que debes modificar.

## Entregable

1. **Código:** haz un fork, súbelo a tu GitHub y agrega a `@fvr1` y `@imant1`. Envía el link a `devs@bloomreuse.com` con tu nombre en el asunto.

2. **Explicación:** en el README agrega una explicación cortita respondiendo las siguientes preguntas:

- ¿Qué archivos/componentes creaste y qué hacen?
  - Frontend
    - Navbar.tsx : barra de navegación visible en cada página y que permite volver a la página de inicio.
    - page.tsx (id) : página dinámica que muestra las preguntas frecuentes según la marca seleccionada.
    - home.tsx : añadí logos de las marcas para que puedan ser seleccionadas junto a una pequeña animación que da más claridad de la marca a elegir (nombre).
  - Backend (data)
    - brand-settings.ts : añadí las especificaciones de cada marca.
    - brand.ts : añadí información básica de cada marca.
  - Backend (models)
    - bullet-section.ts : modelo reutilizable para aquellas secciones de preguntas frecuentes que cuenten con una descripción más un listado.
    - brand-settings.ts : modelo de brand-settings con especificaciones de cada pregunta frecuente más el identificador de la marca.
    - brand.ts : añadí logo como atributo tipo string.
- ¿Qué te gustó y qué mejorarías?
  - Me gustó lo sencillo que fue utilizar Tailwind para los estilos de cada elemento, además que pude desarrollar un concepto rápido del sitio y pude plasmar la idea en mente en el código.
  - Como mejora, trasladaría todas las preguntas frecuentes y respuestas por defecto al backend, aunque en este caso son datos estáticos, no es lo ideal tener datos crudos como esos escritos directamente en el código del frontend.
- ¿Qué harías distinto para escalar mejor?
  - Como mencioné, mover los datos estáticos, como los enunciados de las preguntas, al backend. De ese modo, se pueden incluir más preguntas de ser necesario y se puede optimizar el código en frontend para que mapee los datos que se soliciten desde el backend.

3. **Plazo:** 7 días desde que recibes esta tarea.

4. **Criterios de evaluación:** Correcta visualización de preguntas frecuentes por marca. Separación clara de responsabilidades, carpetas y archivos en tu código. Capacidad de análisis técnico: pros, contras, mejoras.

5. **Bonus:** Agrega un video o link demo mostrando la solución.

> ⚠️ Siéntete libre de modificar / refactorizar / agregar / eliminar lo que sea.

## ¿Qué debe hacer tu app?

1. Al abrir, el usuario selecciona una marca.
2. Luego, se muestran las preguntas frecuentes correspondientes a esa marca.
3. El contenido debe variar según lo definido en las siguientes [especificaciones](#marcas-a-implementar).

Se debería ver algo como esto:

<img src="./example.png" height="200" />

## Código base

Puedes modificar libremente cualquier archivo del proyecto, agregar librerías, usar tu IA favorita para programar. Lo importante es que entregues una **versión 0.1 funcional**, y luego nos expliques tu solución. El código base incluye:

#### Backend

Express + TS. Estructura del backend:

- `/data`: **simula** la base de datos.
- `/models`: define los tipos. Simula el modelo de una tabla en la base de datos.
- `/services`: contiene lógica de negocios y para leer los datos.
- `/api`: endpoints. Contiene `GET /brands` para listar de marcas y `GET /brands/:id` para obtener la configuración de una marca.

Deberás crear un modelo `BrandSetting` para configurar cada marca y completar los datos según tu modelo.

#### Frontend

Template de App Next.js con React y Tailwind. Debes:

1. Permitir selección de marca.
2. Mostrar las preguntas frecuentes según configuración.

## Especificaciones

### Contexto: ¿Qué hace Bloom Reuse?

Levantamos y administramos el recommerce (resale+ecommerce) de distintas marcas. Cada app web que creamos tiene una configuración, lógica e interfaz de usuario específica para cada marca. Pero todo esto se logra utilizando el mismo código de frontend y backend para todas las marcas.

El flujo principal para hacer una venta a través de unas de las marcas de Bloom es el siguiente:

1. El vendedor crea una cuenta y publica un producto para la venta, el cual primero debe ser aprobado por el equipo de Bloom.
1. Cuando se vende, el vendedor completa un formulario con los datos de envío y cómo quiere recibir el pago. Envía el paquete al comprador.
1. Al confirmarse la recepción del paquete por parte del comprador, se realiza el pago al vendedor.
1. En caso que el comprador quiera una devolución, se envía el producto devuelta al vendedor y no se realiza el pago.

### Marcas a implementar

1. [Karyn Coo](https://karyncoo.bloomreuse.com/help/faq?view=seller): reventa de ropa, el producto se envía directamente al comprador. El envío puede ser con retiro a domicilio o por Blue Express. El vendedor puede recibir el pago por el 100% en un cupón de descuento (créditos) o el 80% por transferencia bancaria.

2. [Andesgear](https://circular.andesgear.cl/help/faq?view=seller): reventa outdoor, el producto se envía directamente al comprador. El envío puede ser con retiro a domicilio o por Blue Express. El vendedor únicamente puede recibir el pago por transferencia bancaria.

3. [Roda](https://rodamarket.cl/help/faq?view=seller): reventa de bicicletas para niños. Solo existe la opción de retiro a domicilio como forma de envío; no se puede enviar el producto por Blue express. El vendedor puede recibir el pago por el 100% en un cupón de descuento (créditos) o el 80% por transferencia bancaria.

4. [Kokoro](https://vintage.kokoro.cl/help/faq?view=seller): reventa de ropa, el producto **siempre** debe pasar por el taller de Kokoro para su revisión. En caso que no esté limpio, el costo de la tintorería se descuenta del pago al vendedor. El envío puede ser con retiro a domicilio o por Blue Express. El vendedor puede recibir el pago por el 100% en un cupón de descuento (créditos) o el 80% por transferencia bancaria.

**Nota:** para efectos de este desafío, el texto a implementar puede ser levemente distinto a lo que aparece en producción. En ese caso, usa el criterio que aparece en el enunciado del desafío.

### Preguntas frecuentes a implementar

1. ¿Cómo puedo publicar un producto para la venta?

- Modalidad: Única para todas las marcas.
- Respuesta: ¡Publicar tu producto es muy fácil! Simplemente haz clic en "Vender", crea una cuenta y sigue el proceso de publicación. Una vez que completes el formulario de venta, la publicación será revisada por nuestro equipo y en un plazo máximo de 24 horas, te avisaremos si está aprobada o rechazada. Después de ser revisada y aprobada, se hará pública. Si hay algún problema, recibirás un correo electrónico pidiendo hacer cambios antes de que pueda ser aceptada.

2. ¿Cómo envío mi artículo después de que alguien lo compra?

- Respuesta: _Depende de logística de cada marca._

3. ¿Cómo y cuándo recibo el pago?

- Respuesta: _Depende de la opción de pago al vendedor que está habilitada._

4. ¿Hay cobros adicionales por vender mi producto por acá?

- Respuesta: _Depende de la logística de la marca ._

5. Política de uso de cupones

- Modalidad: La pregunta únicamente se muestra para las marcas que tengan habilitados los cupones como método de pago. La respuesta es igual para todas las marcas.
- Respuesta: Los cupones que recibas por la venta de tus productos tienen las siguientes restricciones:
  a. Se pueden utilizar únicamente para compras en el sitio web `[URL de la marca]`.
  b. Tiene un tiempo máximo para ser utilizado de 6 meses.
  c. Está restringido a un monto mínimo de pedido para que pueda utilizarse en el ecommerce. El monto mínimo está definido por el monto del cupón + \$1.000 CLP.

---

## ¿Dudas?

Escríbenos a [florencia@bloomreuse.com](mailto:florencia@bloomreuse.com) o por Telegram a [@fvr01](https://t.me/fvr01).
