import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-900 font-[family-name:var(--font-geist-sans)]">
      {/* Transparent Header */}
      <header className="fixed w-full bg-transparent backdrop-blur-sm z-50">
        <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Image
              src="/images/iconbmw.png"
              alt="BMW Logo"
              width={120}
              height={40}
              className=""
            />
          </div>
          <div className="flex gap-8">
            <a href="#hero" className="text-gray-300 hover:text-gray-100 transition-colors">Home</a>
            <a href="#specs" className="text-gray-300 hover:text-gray-100 transition-colors">Specs</a>
            <a href="#history" className="text-gray-300 hover:text-gray-100 transition-colors">History</a>
            <a href="#legacy" className="text-gray-300 hover:text-gray-100 transition-colors">Legacy</a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/hero/bmw1.png"
            alt="BMW M3 GTR"
            fill
            className="object-cover"
            priority
            quality={100}
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="space-y-8 max-w-4xl relative z-10">
          <h1 className="text-6xl font-bold text-gray-100">
            The Ultimate Driving Machine
          </h1>
          <p className="text-xl text-gray-300 mt-4">
            2001 BMW M3 GTR - Legend of the Streets and Track
          </p>
        </div>
      </section>

      {/* Logo Section */}
      <section className="py-16 bg-black">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-center gap-12">
            <div className="relative w-48 h-16 hover:grayscale-0 transition-all">
              <Image
                src="/images/logo/bmwlogo.png"
                alt="BMW Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-48 h-16 grayscale hover:grayscale-0 transition-all">
              <Image
                src="/images/logo/mostwantedlogo.png"
                alt="Speedhunters Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="relative w-48 h-16 grayscale hover:grayscale-0 transition-all">
              <Image
                src="/images/logo/speedhunterslogo.png"
                alt="Most Wanted Logo"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Specifications Section */}
      <section id="specs" className="py-20 bg-black">
        <div className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-96 rounded-2xl overflow-hidden ">
            <Image
              src="/images/m3-engine.jpg"
              alt="M3 GTR Engine"
              fill
              className="object-cover grayscale"
            />
          </div>
          <div className="space-y-6">
            <h2 className="text-4xl font-bold text-gray-100">Technical Specifications</h2>
            <div className="grid grid-cols-2 gap-4">
              {[
                ['4.0L V8', 'Engine'],
                ['450 HP', 'Power Output'], 
                ['3.9s', '0-100 km/h'],
                ['300+ km/h', 'Top Speed']
              ].map(([value, label], index) => (
                <div key={index} className="p-4 bg-gray-700/30 rounded-lg">
                  <h3 className="text-gray-300 text-xl font-bold">{value}</h3>
                  <p className="text-gray-400">{label}</p>
                </div>
              ))}
            </div>
            <p className="text-gray-400 leading-relaxed">
              Featuring a bespoke P60B40 4.0-liter V8 engine with 450 horsepower, 
              the M3 GTR was built for endurance racing with its lightweight 
              aluminum block and radical cylinder head design.
            </p>
          </div>
        </div>
      </section>

      {/* Racing Heritage Section */}
      <section id="history" className="py-20 bg-black">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gray-100 text-center mb-12">Racing Pedigree</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              ['2001 ALMS Champions', 'Dominant performance in the American Le Mans Series'],
              ['Street Legal Racer', 'Only 10 road-legal versions ever produced'],
              ['NFS Most Wanted Icon', 'Star of 2005\'s hit racing game']
            ].map(([title, text], index) => (
              <div key={index} className="p-8 bg-gray-800 rounded-xl">
                <h3 className="text-xl font-bold text-gray-100 mb-4">{title}</h3>
                <p className="text-gray-400">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Legacy Section */}
      <section id="legacy" className="py-20 bg-black">
        <div className="container mx-auto px-6 max-w-4xl">
          <h2 className="text-4xl font-bold text-gray-100 text-center mb-8">Cultural Impact</h2>
          <div className="space-y-6 text-gray-400 leading-relaxed">
            <p>
              The BMW M3 GTR gained legendary status through its appearance in 
              Need for Speed: Most Wanted (2005), becoming one of the most 
              iconic virtual cars in gaming history.
            </p>
            <div className="relative h-96 rounded-xl overflow-hidden">
              <Image
                src="/images/m3-nfs.jpg"
                alt="NFS Most Wanted"
                fill
                className="object-cover grayscale"
              />
            </div>
            <ul className="list-disc pl-6 space-y-2 text-gray-300">
              {[
                'Carbon fiber reinforced plastic body panels',
                'Racing-derived sequential gearbox',
                'Motorsport suspension system',
                'Aerodynamic-enhanced body kit'
              ].map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="container mx-auto px-6 text-center text-gray-500">
          <p>© {new Date().getFullYear()} BMW M3 GTR Legacy. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}