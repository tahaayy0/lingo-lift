import React from 'react';
import featureImage from '../assets/featureImg.PNG';


const HomePage = () => {
  const features = [
    { icon: "🎯", title: "Quiz Oyunu", description: "Eğlenceli quizlerle kelime bilginizi test edin" },
    { icon: "🎮", title: "Sürükle & Bırak", description: "İnteraktif eşleştirme oyunuyla pratik yapın" },
    { icon: "📝", title: "Kelime Listesi", description: "Kapsamlı kelime listemizle çalışın" },
    { icon: "🔄", title: "Flashcards", description: "Hafıza kartlarıyla tekrar yapın" },
  ];
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto p-8 pt-24">
        {/* Hero Section */}
        <div className="flex flex-col items-center gap-8 mb-16">
          <div className="text-center max-w-2xl">
            <h1 className="text-5xl font-bold text-indigo-600 mb-6">
              Lingo Lift ile İngilizce Öğrenin
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              İnteraktif oyunlar ve araçlarla dil öğrenmeyi keyifli hale getirin
            </p>
            <div className="flex gap-4 justify-center">
              <button className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors">
                Hemen Başla
              </button>
              <button className="border-2 border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg hover:bg-indigo-50 transition-colors">
                Daha Fazla Bilgi
              </button>
            </div>
          </div>
          
          <div className="w-full md:w-3/4 relative">
            <div className="absolute inset-0 bg-indigo-600 rounded-2xl transform rotate-2"></div>
            <img 
              src={featureImage}
              alt="Language Learning" 
              className="relative rounded-2xl shadow-xl w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Features Section */}
        <div className="py-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Özelliklerimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((featuresData, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <div className="text-4xl mb-4">{featuresData.icon}</div>
                <h3 className="text-xl font-semibold mb-2 text-indigo-600">{featuresData.title}</h3>
                <p className="text-gray-600">{featuresData.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;