'use client';

import Image from 'next/image';
import CircularProgress from '@mui/material/CircularProgress';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

export default function BrandPage() {
  const { id } = useParams();
  const [brand, setBrand] = useState<any>(null);
  const [settings, setSettings] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchBrand = async () => {
      try {
        const response = await fetch(`http://localhost:8000/brands/${id}`, {
          cache: "no-store"
        });

        if (!response.ok) {
          throw new Error("No se encontró la marca");
        }

        const data = await response.json();
        setBrand(data);
        setSettings(data.settings);
      } catch (error) {
        console.error("Error fetching brand:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBrand();
  }, [id]);

  if (loading) {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <CircularProgress color="inherit" />
      </div>
    );
  }

  if (!brand) {
    return <div className="text-center mt-10">No se encontró la marca.</div>;
  }

  return (
      <div className="flex flex-col items-center py-4 lg:px-16 lg:py-8 lg:pb-6">
          <div className="w-full lg:w-3/5">
            <div className="flex flex-col items-center">
              <Image src={brand.logo} alt={brand.name} width={200} height={200} priority/>
            </div>
            <div className="my-5 border-t border-gray-200"></div>
            <h1 className="w-full text-center text-gray-600 font-semibold text-xl tracking-widest">preguntas frecuentes</h1>
            <div className="my-5 border-t border-gray-200"></div>
            <div className="flex w-full flex-row justify-center px-4 py-6">
              <div className="w-full text-justify">
                  <div>
                    <h3 className="text-left font-bold my-2">¿Cómo puedo publicar un producto para la venta?</h3>
                    <p>¡Publicar tu producto es muy fácil! Simplemente haz clic en <a href={brand.url} target="_blank" className="text-blue-600 underline">Vender</a>, crea una cuenta y sigue el proceso de publicación. Una vez que completes el formulario de venta, la publicación será revisada por nuestro equipo y en un plazo máximo de 24 horas, te avisaremos si está aprobada o rechazada. Después de ser revisada y aprobada, se hará pública. Si hay algún problema, recibirás un correo electrónico pidiendo hacer cambios antes de que pueda ser aceptada.</p>
                  </div>
                  <div className="my-5 border-t border-gray-200"></div>
                  <div>
                    <h3 className="text-left font-bold my-2">¿Cómo envío mi artículo después de que alguien lo compra?</h3>
                    <p>{settings.shippingArticle.description}</p>
                      {settings.shippingArticle.bullets && (
                        <ul className="list-disc ml-5">
                          {settings.shippingArticle.bullets.map((bullet: string, index: number) => (
                            <li key={index}>{bullet}</li>
                          ))}
                        </ul>
                      )}
                  </div>
                  <div className="my-5 border-t border-gray-200"></div>
                  <div>
                    <h3 className="text-left font-bold my-2">¿Cómo y cuándo recibo el pago?</h3>
                    <p>{settings.payment}</p>
                  </div>
                  <div className="my-5 border-t border-gray-200"></div>
                  <div>
                    <h3 className="text-left font-bold my-2">¿Hay cobros adicionales por vender mi producto por acá?</h3>
                    <p>{settings.additionalCosts.description}</p>
                      {settings.additionalCosts.bullets && (
                        <ul className="list-disc ml-5">
                          {settings.additionalCosts.bullets.map((bullet: string, index: number) => (
                            <li key={index}>{bullet}</li>
                          ))}
                        </ul>
                    )}
                  </div>
                  <div className="my-5 border-t border-gray-200"></div>
                  {settings.couponAvailability ? (
                    <>
                      <div>
                        <h3 className="text-left font-bold my-2">Política de uso de cupones</h3>
                        <p>Los cupones que recibas por la venta de tus productos tienen las siguientes restricciones:</p>
                        <ul className="list-disc ml-5">
                          <li>Se pueden utilizar únicamente para compras en el sitio web <a href={brand.url} target="_blank" className="text-blue-600 underline">{brand.name}</a></li>
                          <li>Tiene un tiempo máximo para ser utilizado de 6 meses.</li>
                          <li>Está restringido a un monto mínimo de pedido para que pueda utilizarse en el ecommerce. El monto mínimo está definido por el monto del cupón + $1.000 CLP.</li>
                        </ul>
                      </div>
                      <div className="my-5 border-t border-gray-200"></div>
                    </>
                  ) : null}
              </div>
            </div>
          </div>
        </div>
    );
}