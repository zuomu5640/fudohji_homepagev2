import { HelpCircle } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    {
      question: 'サービス内容について',
      answer: '僧侶派遣、法事、供養など様々な目的に対応しています。'
    },
    {
      question: '対応エリアはどこですか？',
      answer: '全国対応可能です。詳細なエリアについてはお問い合わせください。'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">よくある質問</h2>
        
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="flex items-center text-xl font-semibold mb-3">
                <HelpCircle className="w-6 h-6 text-amber-500 mr-2" />
                {faq.question}
              </h3>
              <p className="text-gray-600 ml-8">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}