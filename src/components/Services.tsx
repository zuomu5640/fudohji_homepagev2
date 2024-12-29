import React from 'react';
import { MapPin } from 'lucide-react';
import ServiceCard from './ServiceCard';

const services = [
  {
    title: '通夜・葬儀',
    description: '故人様の尊厳を大切に、心を込めて執り行います。',
    price: '50,000円〜'
  },
  {
    title: '一周忌・法事',
    description: 'ご家族様の想いに寄り添い、丁寧に供養いたします。',
    price: '30,000円〜'
  },
  {
    title: '戒名作成',
    description: '故人様のお人柄や生前の功績を反映した戒名を、丁寧にお作りいたします。',
    price: '30,000円〜'
  },
  {
    title: '塔婆作成',
    description: '心を込めて、丁寧に作成させていただきます。',
    price: '10,000円〜'
  }
];

const areas = ['東京', '埼玉', '群馬', '千葉'];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">サービス内容</h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>

        <div className="bg-amber-50 p-8 rounded-xl max-w-4xl mx-auto">
          <h3 className="text-xl font-bold mb-6 flex items-center gap-3">
            <MapPin className="w-6 h-6 text-amber-600" />
            対応エリア
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {areas.map((area) => (
              <div key={area} className="bg-white p-4 rounded-lg text-center shadow-sm">
                <span className="font-medium text-gray-800">{area}</span>
              </div>
            ))}
          </div>
          <p className="text-sm text-gray-600 mt-4">
            ※ 上記エリア以外でもご相談を承ります。お気軽にお問い合わせください。
          </p>
        </div>
      </div>
    </section>
  );
}