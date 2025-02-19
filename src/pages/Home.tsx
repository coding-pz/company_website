import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { imageUrls } from '../constants/imageUrls';

const statistics = [
  { number: "100+", label: "企业客户" },
  { number: "50+", label: "技术专家" },
  { number: "200+", label: "成功项目" },
  { number: "5年+", label: "行业经验" }
];

const partners = [
  { name: "阿里云", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop" },
  { name: "腾讯云", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop" },
  { name: "华为云", logo: "https://images.unsplash.com/photo-1560179707-f14e90ef3623?w=100&h=100&fit=crop" }
];

const solutions = [
  {
    title: "企业数字化转型",
    description: "帮助传统企业实现数字化升级，提升运营效率",
    image: imageUrls.home.solutions.digital,
    link: "/solutions/digital-transformation"
  },
  {
    title: "智能制造解决方案",
    description: "运用物联网技术，实现生产过程智能化管理",
    image: imageUrls.home.solutions.manufacturing,
    link: "/solutions/smart-manufacturing"
  }
];

const services = [
  {
    icon: "💻",
    title: "定制软件开发",
    description: "量身定制的软件解决方案，满足您的独特需求",
    image: imageUrls.services.software
  },
  {
    icon: "📱",
    title: "移动应用开发",
    description: "iOS与Android平台的专业应用开发服务",
    image: imageUrls.services.mobile
  },
  {
    icon: "☁️",
    title: "云服务解决方案",
    description: "安全可靠的云计算服务，助力数字化转型",
    image: imageUrls.services.cloud
  }
];

// 添加图片加载失败处理
const handleImageError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
  e.currentTarget.src = 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?w=800&h=400&fit=crop';
};

const Home = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center bg-gradient-to-r from-blue-600 to-indigo-800">
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              引领数字创新，驱动技术革新
            </h1>
            <p className="text-xl md:text-2xl mb-8">
              专业的软件开发团队，为您提供一站式解决方案
            </p>
            <div className="mt-8 flex gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold hover:bg-blue-50 transition-colors"
              >
                了解更多
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white/10 transition-colors"
              >
                联系我们
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 数据统计 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {statistics.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <h3 className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 服务介绍 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">我们的服务</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50">
                    <div className="absolute bottom-4 left-4 text-4xl">
                      {service.icon}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 解决方案展示 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">解决方案</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-xl transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={solution.image}
                    alt={solution.title} 
                    onError={handleImageError}
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-4">{solution.title}</h3>
                  <p className="text-gray-600 mb-4">{solution.description}</p>
                  <Link 
                    to={solution.link} 
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-semibold transition-colors"
                  >
                    了解更多 
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 合作伙伴 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">合作伙伴</h2>
          <div className="flex flex-wrap justify-center gap-12">
            {partners.map((partner, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="w-32 h-32 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-800">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8 text-white">准备好开始您的数字化转型了吗？</h2>
          <p className="text-xl mb-8 text-white/90">让我们一起打造属于您的完美解决方案</p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-blue-600 px-8 py-3 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
          >
            立即咨询
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Home;
