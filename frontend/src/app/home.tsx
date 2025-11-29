import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const res = await fetch("http://localhost:8000/brands", {
    cache: "no-store"
  });
  const brands = await res.json();

  return (
  <div className="flex h-full w-full flex-col p-8">
    <div>
      <h1 className="!normal-case text-4xl font-800 text-center mt-2">Desafío Dev</h1>
    </div>

    <div className="grid grid-cols-2 gap-y-16 place-items-center p-8 mx-50">
      {brands.map((brand: any) => (
        <Link
          key={brand.id}
          href={`/${brand.id}`}
          className="flex group relative w-[300px] h-[200px] cursor-pointer items-center justify-center"
        >
          <Image
            src={brand.logo}
            alt={brand.name}
            width={240}
            height={160}
            className="object-contain transition-opacity duration-300 group-hover:opacity-20"
          />

          <div className="
            absolute inset-0 flex items-center justify-center
            opacity-0 group-hover:opacity-100
            bg-gray-600 dg-opacity-70 transition-opacity duration-300
          ">
            <span className="text-white text-xl uppercase tracking-widest">
              {brand.name}
            </span>
          </div>
        </Link>
      ))}
    </div>
  </div>
)};
