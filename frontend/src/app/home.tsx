import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const res = await fetch("http://localhost:8000/brands", {
    cache: "no-store"
  });
  const brands = await res.json();

  return (
  <div className="flex h-full w-full flex-col p-8">
    <Image
      className="h-14 w-auto self-end"
      src="/images/Logo-Bloom.png"
      alt="Logo"
      width={400}
      height={100}
    />
    <div>
      <h1 className="text-center text-4xl">Desafío Dev</h1>
    </div>


    <div className="grid grid-cols-2 gap-y-12 gap-x-2 place-items-center p-8">
      {brands.map((brand: any) => (
        <Link
          key={brand.id}
          href={`/${brand.id}`}
          className="group relative w-[240px] h-[160px] cursor-pointer"
        >
          <Image
            src={brand.logo}
            alt={brand.name}
            fill
            className="object-contain transition-opacity duration-300 group-hover:opacity-20"
          />

          {/* Overlay negro */}
          <div className="
            absolute inset-0 flex items-center justify-center
            opacity-0 group-hover:opacity-100
            bg-black bg-opacity-70
            transition-opacity duration-300
          ">
            <span className="text-white text-xl uppercase">
              {brand.name}
            </span>
          </div>
        </Link>
      ))}
    </div>
  </div>
)};
