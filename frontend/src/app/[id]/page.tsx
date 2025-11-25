'use client';
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';

export default function BrandPage() {
  const params = useParams();
  const [data, setData] = useState<any>(null);
  const [faqData, setFaqData] = useState<any[]>([]);

  useEffect(() => {
    if (!params?.id) return;

    fetch(`http://localhost:8000/brands/${params.id}`)
      .then(res => res.json())
      .then(setData);

    fetch('http://localhost:8000/faqs')
      .then(res => res.json())
      .then(setFaqData);
  }, [params?.id]);

  return (
    !data || !faqData || faqData.length === 0 || !data.settings ? (
      <div className="flex items-center justify-center h-full w-full mt-8">
        <div className="w-12 h-12 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
      </div>
    ) : (
      <div className="flex flex-col items-center py-4 lg:px-16 lg:py-8 lg:pb-6">
        <div className="w-full lg:w-3/5">
          <div className="flex flex-col items-center">
            <Image src={data.logo} alt={data.name} width={200} height={200} />
          </div>
          <div className="my-5 border-t border-gray-200"></div>
          <h1 className="w-full text-center">preguntas frecuentes</h1>
          <div className="my-5 border-t border-gray-200"></div>
          <div className="flex w-full flex-row justify-center px-4 py-6">
            <div className="w-full text-justify">
              <h1 className="mb-6">preguntas frecuentes al vender</h1>
              {faqData.map((question: any) => (
              <div key={question.id}>
                {(() => {
                  switch (question.id) {
                    case 1:
                      return (
                        <div>
                          <h3 className="text-left font-bold my-2">{question.question}</h3>
                          <p>{question.defaultAnswer}</p>
                        </div>
                      )
                    case 2:
                      const shipping = data.settings.shippingArticle;
                      return (
                        <div>
                          <h3 className="text-left font-bold my-2">{question.question}</h3>
                          <p>{shipping.description}</p>
                          {shipping.bullets && (
                            <ul className="list-disc ml-5">
                              {shipping.bullets.map((bullet: string, index: number) => (
                                <li key={index}>{bullet}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      );
                    case 3:
                      return (  
                        <div>
                          <h3 className="text-left font-bold my-2">{question.question}</h3>
                          <p>{question.defaultAnswer}</p>
                        </div>
                      )
                    case 4:
                      const additionalCosts = data.settings.additionalCosts;
                      return (
                        <div>
                          <h3 className="text-left font-bold my-2">{question.question}</h3>
                          <p>{additionalCosts.description}</p>
                          {additionalCosts.bullets && (
                            <ul className="list-disc ml-5">
                              {additionalCosts.bullets.map((bullet: string, index: number) => (
                                <li key={index}>{bullet}</li>
                              ))}
                            </ul>
                          )}
                        </div>
                      )
                    case 5:
                      return data.settings.couponAvailability ? (
                        <div>
                          <h3 className="text-left font-bold my-2">{question.question}</h3>
                          <p>{data.settings.additionalCosts.description}</p>
                        </div>
                        ) : null;
                    default:
                      return null;
                  }
                })()}
                {data.settings.couponAvailability || question.id !== 5 ? (<div className="my-5 border-t border-gray-200"></div>):null}
              </div>
            ))}
            </div>
          </div>
        </div>
      </div>
    )
  );
}