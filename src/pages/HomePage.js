import React from 'react';
import featureImage from '../assets/featureImg.PNG';
import { useNavigate } from "react-router-dom";
import features from "../data/Features";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-indigo-50">
      <div className="max-w-6xl mx-auto p-8 pt-24">
        <div className="flex flex-col items-center gap-8 mb-16">
          <div className="text-center max-w-2xl">
            <h1 className="text-5xl font-bold text-indigo-600 mb-6">
              Lingo Lift ile İngilizce Öğrenin
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              İnteraktif oyunlar ve araçlarla dil öğrenmeyi keyifli hale getirin
            </p>
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

        <div className="py-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Özelliklerimiz
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((featuresData, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
                onClick={() => navigate(featuresData.page)} 
              >
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
