import React from 'react';

export default function Home() {
  return (
    <main>
      <section
        className="relative h-[70vh] flex items-center justify-center text-center text-white"
        style={{
          backgroundImage: `url('/img/banner3.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="bg-black/40 absolute inset-0" />
        <div className="relative z-10 max-w-3xl px-6">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Zero Waste — Turn Waste Into Value
          </h1>
          <p className="text-lg md:text-xl mb-6">
            Connect donors, buyers and recyclers to reduce waste and support local communities.
          </p>
          <div className="flex justify-center gap-4">
            <a
              href="/donate"
              className="px-6 py-3 bg-emerald-600 rounded-lg text-white font-semibold hover:bg-emerald-500"
            >
              Donate Now
            </a>
            <a
              href="/products"
              className="px-6 py-3 bg-white/90 rounded-lg text-gray-800 font-semibold hover:opacity-90"
            >
              Shop Sustainable
            </a>
          </div>
        </div>
      </section>

      <section className="container-custom py-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-lg shadow-lg bg-white">
            <img
              src="/img/HappyFarmer.jpg"
              alt="impact"
              className="h-40 w-full object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Support Farmers</h3>
            <p className="text-gray-600">
              We help local farmers get compost and resources by connecting donors nearby.
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-lg bg-white">
            <img
              src="/img/compost3.jpg"
              alt="compost"
              className="h-40 w-full object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Composting Programs</h3>
            <p className="text-gray-600">
              Lower landfill usage and create nutrient-rich soil for communities.
            </p>
          </div>
          <div className="p-6 rounded-lg shadow-lg bg-white">
            <img
              src="/img/Tractor.jpg"
              alt="logistics"
              className="h-40 w-full object-cover rounded-md mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Efficient Logistics</h3>
            <p className="text-gray-600">
              We optimize pickup and delivery so resources move where they're needed most.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-emerald-50 py-12">
        <div className="container-custom grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-bold mb-4">Become a Partner</h2>
            <p className="text-gray-700 mb-6">
              Partner with Zero Waste to list products, accept donations, or provide collection
              services.
            </p>
            <div className="flex gap-4">
              <a href="/register" className="px-5 py-3 bg-emerald-600 text-white rounded-md">
                Get Started
              </a>
              <a
                href="/seller"
                className="px-5 py-3 border border-emerald-600 text-emerald-600 rounded-md"
              >
                I'm a Seller
              </a>
            </div>
          </div>
          <div>
            <img src="/img/banner2.jpg" alt="partner" className="w-full rounded-lg shadow" />
          </div>
        </div>
      </section>
    </main>
  );
}
