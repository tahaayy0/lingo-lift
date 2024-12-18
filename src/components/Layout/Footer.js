import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-8 pb-6">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo ve Açıklama Bölümü */}
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">LingoLift</h3>
            <p className="text-gray-300">Dil öğrenmeyi kolaylaştırıyoruz</p>
          </div>

          {/* Hızlı Bağlantılar */}
          <div className="mb-6 md:mb-0">
            <h4 className="text-xl font-semibold text-blue-400 mb-4">Hızlı Bağlantılar</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors duration-300">
                  Ana Sayfa
                </Link>
              </li>
         
            </ul>
          </div>

          {/* İletişim Bilgileri */}
          <div>
            <h4 className="text-xl font-semibold text-blue-400 mb-4">İletişim</h4>
            <div className="space-y-2 text-gray-300">
              <p>Email: info@lingolift.com</p>
              <p>Tel: +90 123 456 7890</p>
            </div>
          </div>
        </div>

        {/* Alt Kısım - Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} LingoLift. Tüm hakları saklıdır.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
