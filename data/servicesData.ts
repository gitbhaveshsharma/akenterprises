import { StaticImageData } from 'next/image';

export interface Service {
  title: string;
  image: string;
  description: string;
}

export const gradientColors = [
  'from-blue-50 via-white to-blue-100',
  'from-green-50 via-white to-green-100', 
  'from-purple-50 via-white to-purple-100',
  'from-pink-50 via-white to-pink-100',
  'from-yellow-50 via-white to-yellow-100',
  'from-indigo-50 via-white to-indigo-100',
  'from-red-50 via-white to-red-100',
  'from-teal-50 via-white to-teal-100',
  'from-orange-50 via-white to-orange-100',
  'from-cyan-50 via-white to-cyan-100',
  'from-lime-50 via-white to-lime-100',
  'from-emerald-50 via-white to-emerald-100',
  'from-rose-50 via-white to-rose-100',
  'from-sky-50 via-white to-sky-100',
  'from-amber-50 via-white to-amber-100'
];

export const filters = [
  { id: 'all', label: 'All Services' },
  { id: 'scrap', label: 'Scrap Services' },
  { id: 'testing', label: 'Testing Services' },
  { id: 'professional', label: 'Professional Services' },
  { id: 'trading', label: 'Trading Services' }
];

export const services: Service[] = [
  {
    title: "Aluminium Scrap",
    image: "/image/services/aluminium.jpg",
    description: "High-quality aluminium scrap materials sourced responsibly."
  },
  {
    title: "Copper Scrap", 
    image: "/image/services/copper.jpg",
    description: "Premium copper scrap for recycling and reuse."
  },
  {
    title: "Transformer Scrap",
    image: "/image/services/transformer.jpg", 
    description: "Specialized handling of transformer scrap materials."
  },
  {
    title: "Batteries Scrap",
    image: "/image/services/batteries.jpg",
    description: "Safe disposal and recycling of battery materials."
  },
  {
    title: "Iron Scrap",
    image: "/image/services/iron.jpg",
    description: "Quality iron scrap processing services."
  },
  {
    title: "Gun Metal Scrap",
    image: "/image/services/gunmetal.jpg",
    description: "Specialized gun metal recycling solutions."
  },
  {
    title: "Steel Scrap",
    image: "/image/services/steel.jpg",
    description: "Professional steel scrap handling and processing."
  },
  {
    title: "Lead Metal Scrap",
    image: "/image/services/lead.jpg",
    description: "Safe lead metal recycling services."
  },
  {
    title: "Titanium Scrap",
    image: "/image/services/titanium.jpg",
    description: "High-value titanium scrap processing."
  },
  {
    title: "Factory Scrap",
    image: "/image/services/factory.jpg",
    description: "Comprehensive factory waste management."
  },
  {
    title: "Oil Scrap",
    image: "/image/services/oil.jpg",
    description: "Environmental oil waste processing."
  },
  {
    title: "Electronic Scrap",
    image: "/image/services/electronic.jpg",
    description: "Secure electronic waste recycling."
  },
  {
    title: "Aircraft Scrap",
    image: "/image/services/aircraft.jpg",
    description: "Specialized aircraft parts recycling."
  },
  {
    title: "Ship Scrap",
    image: "/image/services/ship.jpg",
    description: "Professional ship breaking and recycling."
  },
  {
    title: "Government Contract",
    image: "/image/services/government.jpg",
    description: "Trusted government contract services."
  },
  {
    title: "Gems & Stones",
    image: "/image/services/gems.jpg",
    description: "Premium gemstone trading services."
  },
  {
    title: "Gems & Stones Testing",
    image: "/image/services/testing.jpg",
    description: "Professional gemstone authentication."
  },
  {
    title: "Metal Testing",
    image: "/image/services/metal-testing.jpg",
    description: "Accurate metal quality testing services."
  },
  {
    title: "Precious Metals",
    image: "/image/services/precious.jpg",
    description: "Secure precious metals trading."
  },
  {
    title: "Plantation",
    image: "/image/services/plantation.jpg",
    description: "Sustainable plantation management."
  },
  {
    title: "International Collaboration",
    image: "/image/services/international.jpg",
    description: "Global business partnerships."
  },
  {
    title: "Stock Exchange",
    image: "/image/services/stock.jpg",
    description: "Professional stock trading services."
  },
  {
    title: "Education",
    image: "/image/services/education.jpg",
    description: "Quality educational services."
  },
  {
    title: "Career Counselling",
    image: "/image/services/career.jpg",
    description: "Expert career guidance services."
  },
  {
    title: "Agricultural Engineering",
    image: "/image/services/agriculture.jpg",
    description: "Modern agricultural solutions."
  },
  {
    title: "Legal Services",
    image: "/image/services/legal.jpg",
    description: "Professional legal consultation."
  },
  {
    title: "Commodities",
    image: "/image/services/commodities.jpg",
    description: "Comprehensive commodities trading."
  },
  {
    title: "Antique",
    image: "/image/services/antique.jpg",
    description: "Valuable antique trading services."
  },
  {
    title: "Astrology",
    image: "/image/services/astrology.jpg",
    description: "Professional astrological guidance."
  },
  {
    title: "Energy",
    image: "/image/services/energy.jpg",
    description: "Sustainable energy solutions."
  },
  {
    title: "Financial Services",
    image: "/image/services/financial.jpg",
    description: "Comprehensive financial planning."
  },
  {
    title: "Job Placement",
    image: "/image/services/job.jpg",
    description: "Professional recruitment services."
  },
  {
    title: "Medical",
    image: "/image/services/medical.jpg",
    description: "Quality healthcare services."
  },
  {
    title: "Health & Food",
    image: "/image/services/health.jpg",
    description: "Nutritional consulting services."
  },
  {
    title: "Beauty & Herbal Products",
    image: "/image/services/beauty.jpg",
    description: "Natural beauty solutions."
  },
  {
    title: "Fashion House",
    image: "/image/services/fashion.jpg",
    description: "Trendy fashion services."
  }
];
