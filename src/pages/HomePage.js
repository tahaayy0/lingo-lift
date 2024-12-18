import React from 'react';
import featureImage from '../assets/featureImg.PNG';

const HomePage = () => {
  
  return (
    <div className="max-w-6xl mx-auto p-8">
      {/* Hero Section */}
      <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
    
        <div className="w-full md:w-1/2">
          <img 
            src={featureImage}
            alt="Language Learning" 
            className="rounded-lg shadow-lg w-full h-auto object-cover"
          />
        </div>

    
        <div className="w-full md:w-1/2 space-y-4">
          <h1 className="text-4xl font-bold text-gray-800">
            Lingo Liftle Kalın Sağlıcakla Kalın
          </h1>
          <p className="text-xl text-gray-600">
            Practice and improve your English skills!
          </p>
          <p className="text-gray-700">
            Start your language learning journey today with our interactive platform. 
            Learn new words, practice pronunciation, and track your progress.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;