import React from 'react';
import { motion } from 'framer-motion';
import { imageUrls } from '../constants/imageUrls';

const milestones = [
  {
    year: 2018,
    title: "公司成立",
    description: "智创科技在北京成立，开始为企业提供软件开发服务"
  },
  {
    year: 2019,
    title: "技术突破",
    description: "成功开发多个大型企业级应用，获得客户高度认可"
  },
  {
    year: 2020,
    title: "规模扩张",
    description: "团队扩展到50人，成功服务超过100家企业客户"
  },
  {
    year: 2023,
    title: "创新领航",
    description: "获得高新技术企业认证，成为行业领先的解决方案提供商"
  }
];

const coreValues = [
  {
    title: "创新驱动",
    description: "持续创新，推动技术进步",
    icon: "💡"
  },
  {
    title: "质量至上",
    description: "严格把控项目质量，确保交付卓越",
    icon: "✨"
  },
  {
    title: "客户导向",
    description: "以客户需求为中心，提供最优解决方案",
    icon: "🎯"
  },
  {
    title: "团队协作",
    description: "强调团队精神，共同创造价值",
    icon: "🤝"
  }
];

const teamMembers = [
  {
    name: "张志远",
    position: "首席执行官",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
    description: "拥有15年软件行业经验，曾任职多家知名科技公司"
  },
  {
    name: "李明",
    position: "技术总监",
    avatar: "https://images.unsplash.com/photo-1519345182560-3f2917c472ef?w=150&h=150&fit=crop",
    description: "专注于企业级应用架构设计，微服务专家"
  },
  {
    name: "王悦",
    position: "产品总监",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
    description: "10年产品设计经验，擅长用户体验优化"
  },
  {
    name: "刘海",
    position: "研发经理",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
    description: "全栈开发专家，区块链技术研究者"
  }
];

const certificates = [
  {
    id: 1,
    title: "ISO9001质量管理体系认证",
    image: imageUrls.about.certificates.iso9001,
    year: "2023"
  },
  {
    id: 2,
    title: "高新技术企业认证",
    image: imageUrls.about.certificates.highTech,
    year: "2022"
  },
  {
    id: 3,
    title: "年度最佳服务商",
    image: imageUrls.about.certificates.award2023,
    year: "2023"
  },
  {
    id: 4,
    title: "技术创新奖",
    image: imageUrls.about.certificates.techAward,
    year: "2023"
  }
];

const About = () => {
  return (
    <div className="pt-16 min-h-screen">
      {/* 头部Banner */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center mb-6"
          >
            关于我们
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-center max-w-3xl mx-auto"
          >
            用科技创新推动企业数字化转型
          </motion.p>
        </div>
      </div>

      {/* 公司简介 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl font-bold mb-6">公司简介</h2>
            <p className="text-gray-600 leading-relaxed">
              智创科技成立于2018年，是一家专注于企业数字化转型的技术公司。
              我们拥有一支经验丰富的研发团队，致力于为客户提供专业的软件开发服务和创新的技术解决方案。
              经过多年发展，我们已成功服务hundreds of企业客户，树立了良好的行业口碑。
            </p>
          </motion.div>
        </div>
      </section>

      {/* 核心团队 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">核心团队</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl shadow-lg p-6 text-center group hover:shadow-xl transition-shadow"
              >
                <div className="relative mb-6 inline-block">
                  <div className="w-32 h-32 mx-auto">
                    <img
                      src={member.avatar}
                      alt={member.name}
                      className="w-full h-full rounded-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="absolute inset-0 rounded-full bg-blue-600 opacity-0 group-hover:opacity-20 transition-opacity" />
                </div>
                <h3 className="text-xl font-bold mb-2">{member.name}</h3>
                <p className="text-blue-600 mb-3">{member.position}</p>
                <p className="text-gray-600 text-sm">{member.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 企业文化 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">企业文化</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-lg p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4">愿景</h3>
              <p className="text-gray-600">
                成为企业数字化转型的首选合作伙伴，推动技术创新与产业升级
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-lg p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4">使命</h3>
              <p className="text-gray-600">
                用科技创新为客户创造价值，助力企业实现智能化升级
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-lg p-8 shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-4">价值观</h3>
              <p className="text-gray-600">
                诚信、创新、专业、共赢
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 核心价值观 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">核心价值观</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (  // 添加 index 参数
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg text-center"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 发展历程 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">发展历程</h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.2 }}
                className="flex items-center gap-8"
              >
                <div className="w-24 text-2xl font-bold text-blue-600">
                  {milestone.year}
                </div>
                <div className="flex-1 bg-gray-50 p-6 rounded-lg shadow">
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 荣誉资质 */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">荣誉资质</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-gray-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
                  <div className="relative">
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-48 object-cover transform group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-2 right-2 bg-blue-600 text-white px-2 py-1 text-sm rounded">
                      {cert.year}
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-center">{cert.title}</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 max-w-2xl mx-auto">
              我们始终坚持高标准的质量管理和技术创新，为客户提供最优质的服务
            </p>
          </motion.div>
        </div>
      </section>

      {/* 联系我们 */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h2 className="text-3xl font-bold mb-4">加入我们的创新征程</h2>
            <p className="text-gray-600 mb-8">让我们一起开创数字化未来</p>
            <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition">
              联系我们
            </button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
