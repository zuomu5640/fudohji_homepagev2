import React from 'react';
import { Phone, PiggyBank, Clock, Zap } from 'lucide-react';

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode[];
  highlight?: string;
}

function FeatureCard({ icon, title, description, highlight }: FeatureCardProps) {
  return (
    <div className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border-l-4 border-amber-500">
      <div className="flex items-start gap-4 mb-6">
        <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-4 rounded-lg">
          {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800 leading-tight">{title}</h3>
      </div>
      {highlight && (
        <div className="bg-amber-50 text-amber-800 px-4 py-2 rounded-md mb-4 font-medium">
          {highlight}
        </div>
      )}
      <ul className="space-y-3">
        {description.map((item, index) => (
          <li key={index} className="text-gray-600 flex items-start gap-2">
            <span className="text-amber-500 mt-1.5">●</span>
            <span className="flex-1">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Features() {
  const features = [
    {
      icon: <PiggyBank className="w-7 h-7 text-amber-600" />,
      title: "関東エリア最安値級！",
      highlight: "お葬式の費用をとことん抑えます",
      description: [
        "葬儀社を通さない直接依頼で、中間マージンを徹底カット",
        <span>余計な費用を省いたシンプルなプランで、お葬式費用を最小限に <a href="#pricing" className="text-amber-600 hover:underline">料金表を見る</a></span>,
        <span>明朗会計で安心！お布施の目安も事前に提示 <a href="#pricing" className="text-amber-600 hover:underline">詳細を見る</a></span>
      ]
    },
    {
      icon: <Zap className="w-7 h-7 text-amber-600" />,
      title: "お急ぎの方も安心！",
      highlight: "最短手配、関東エリアの葬儀に迅速対応",
      description: [
        "朝6時から深夜2時まで、お電話で即対応",
        "ご依頼から最短2時間でお坊さんが駆けつけます",
        <span>関東エリアを中心に、迅速な手配を実現 <a href="#areas" className="text-amber-600 hover:underline">対応エリアを確認</a></span>
      ]
    },
    {
      icon: <Clock className="w-7 h-7 text-amber-600" />,
      title: "面倒な手続きは一切不要！",
      highlight: "電話一本で簡単依頼",
      description: [
        "複雑な手続きや、面倒な打ち合わせは一切不要",
        "お電話でご要望を伺い、最適なプランをご提案",
        "すべてお任せでスムーズに進行"
      ]
    }
  ];

  return (
    <section id="features" className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            不動寺が選ばれる3つの理由
          </h2>
          <p className="text-xl text-gray-600">
            〜 安さ・早さ・簡単さを追求した、新しい供養のかたち 〜
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>

        <div className="text-center mt-16">
          <a
            href="#contact"
            className="inline-flex items-center bg-gradient-to-r from-amber-500 to-amber-600 text-white px-8 py-4 rounded-lg hover:from-amber-600 hover:to-amber-700 transition duration-300 shadow-lg hover:shadow-xl text-lg font-medium"
          >
            <Phone className="w-6 h-6 mr-3" />
            今すぐお問い合わせ
          </a>
        </div>
      </div>
    </section>
  );
}