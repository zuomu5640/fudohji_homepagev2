import React from 'react';
import { Phone } from 'lucide-react';
import { useScrollOffset } from '../hooks/useScrollOffset';

export default function Header() {
  const handleScroll = useScrollOffset();

  return (
    <>
      <div className="h-[72px] md:h-[64px]" />
      
      <header className="fixed top-0 left-0 right-0 bg-gray-800 text-white z-50 shadow-md">
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <h1 className="text-2xl font-bold mb-4 md:mb-0">不動寺</h1>
            
            <nav className="hidden md:block">
              <ul className="flex space-x-6">
                <li><a href="#features" onClick={handleScroll} className="hover:text-amber-400 transition">特徴</a></li>
                <li><a href="#services" onClick={handleScroll} className="hover:text-amber-400 transition">サービス内容</a></li>
                <li><a href="#pricing" onClick={handleScroll} className="hover:text-amber-400 transition">料金案内</a></li>
                <li><a href="#booking" onClick={handleScroll} className="hover:text-amber-400 transition">ご予約</a></li>
                <li><a href="#areas" onClick={handleScroll} className="hover:text-amber-400 transition">対応エリア</a></li>
                <li><a href="#contact" onClick={handleScroll} className="hover:text-amber-400 transition">お問い合わせ</a></li>
              </ul>
            </nav>

            <div className="text-center md:text-right">
              <div className="flex items-center justify-center md:justify-end">
                <Phone className="w-5 h-5 mr-2" />
                <span className="text-xl font-bold">050-5578-3842</span>
              </div>
              <p className="text-sm text-gray-300">（年中無休：6:00-翌日2:00）</p>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}