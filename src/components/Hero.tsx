import React from 'react';

export default function Hero() {
  return (
    <section className="relative h-[500px] flex items-center justify-center text-white">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1606293926075-69a00dbfde81?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>
      
      <div className="relative z-10 text-center px-4">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">とにかく安く、早く、簡単に！関東エリアのお葬式は不動寺にお任せ</h2>
        <p className="text-xl mb-4">葬儀社は不要！お坊さんの直接手配で、費用も時間も大幅に節約</p>
        <p className="text-3xl md:text-4xl font-bold text-amber-400 mb-6">50,000円〜</p>
        <a 
          href="#contact"
          className="inline-block bg-amber-500 text-white px-8 py-3 rounded-md hover:bg-amber-600 transition duration-300"
        >
          ご予約・お問合せ
        </a>
      </div>
    </section>
  );
}