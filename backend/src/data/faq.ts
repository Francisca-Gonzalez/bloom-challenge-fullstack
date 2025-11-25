export default [
  {
    id: 1,
    question: "¿Cómo puedo publicar un producto para la venta?",
    defaultAnswer: "¡Publicar tu producto es muy fácil! Simplemente haz clic en Vender, crea una cuenta y sigue el proceso de publicación. Una vez que completes el formulario de venta, la publicación será revisada por nuestro equipo y en un plazo máximo de 24 horas, te avisaremos si está aprobada o rechazada. Después de ser revisada y aprobada, se hará pública. Si hay algún problema, recibirás un correo electrónico pidiendo hacer cambios antes de que pueda ser aceptada."
  },
  {
    id: 2,
    question: "¿Cómo envío mi artículo después de que alguien lo compra?",
  },
  {
    id: 3,
    question: "¿Cómo y cuándo recibo el pago?",
  },
  {
    id: 4,
    question: "¿Hay cobros adicionales por vender mi producto por acá?",
  },
  {
    id: 5,
    question: "Política de uso de cupones",
    defaultAnswer: [
      {
        type: "text",
        value: "Los cupones que recibas por la venta de tus productos tienen las siguientes restricciones:"
      },
      {
        type: "text",
        value: "a. Se pueden utilizar únicamente para compras en el sitio web "
      },
      {
        type: "link",
        label: "Sitio oficial",
        url: ""
      },
      {
        type: "text",
        value: "b. Tiene un tiempo máximo para ser utilizado de 6 meses."
      },
      {
        type: "text",
        value:
            "c. Está restringido a un monto mínimo de pedido para que pueda utilizarse en el ecommerce. El monto mínimo está definido por el monto del cupón + $1.000 CLP."
      }
    ]
  }
];