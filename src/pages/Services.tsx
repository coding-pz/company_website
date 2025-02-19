import React from 'react';
import { motion } from 'framer-motion';

const servicesList = [
  {
    id: 1,
    title: "定制软件开发",
    description: "为企业量身打造专属软件解决方案，包括企业管理系统、工作流程自动化、数据分析平台等。",
    features: ["需求分析", "系统设计", "开发实现", "测试部署", "售后维护"],
    icon: "💻"
  },
  {
    id: 2,
    title: "移动应用开发",
    description: "专业的移动应用开发服务，覆盖iOS和Android平台，提供从设计到上线的一站式服务。",
    features: ["UI/UX设计", "原生开发", "跨平台开发", "性能优化", "应用发布"],
    icon: "📱"
  },
  {
    id: 3,
    title: "云服务解决方案",
    description: "提供安全可靠的云计算服务，帮助企业实现数字化转型，提升运营效率。",
    features: ["云迁移", "架构设计", "安全防护", "性能监控", "技术支持"],
    icon: "☁️"
  },
  {
    id: 4,
    title: "物联网解决方案",
    description: "针对工业物联网场景，提供完整的物联网解决方案，助力企业实现智能化升级。",
    features: ["传感器接入", "数据采集", "实时监控", "智能分析", "远程控制"],
    icon: "🔗"
  }
];

const technologies = {
  frontend: ["React", "Vue", "Angular", "TypeScript", "NextJS", "TailwindCSS"],
  backend: ["Node.js", "Java", "Python", "Go", "Spring Boot", "Express"],
  mobile: ["React Native", "Flutter", "iOS", "Android", "Kotlin", "Swift"],
  database: ["MySQL", "MongoDB", "PostgreSQL", "Redis", "ElasticSearch"],
  cloud: ["AWS", "阿里云", "腾讯云", "Docker", "Kubernetes"]
};

const serviceProcess = [
  {
    step: 1,
    title: "需求分析",
    description: "深入了解客户需求，制定详细的解决方案",
    icon: "📋"
  },
  {
    step: 2,
    title: "方案设计",
    description: "技术架构设计，制定开发计划和里程碑",
    icon: "✏️"
  },
  {
    step: 3,
    title: "开发实现",
    description: "高质量代码开发，严格遵循开发规范",
    icon: "💻"
  },
  {
    step: 4,
    title: "测试部署",
    description: "全面测试，稳定可靠的部署方案",
    icon: "🚀"
  },
  {
    step: 5,
    title: "运维支持",
    description: "7x24小时技术支持，定期系统维护",
    icon: "🛠️"
  }
];

const industries = [
  {
    title: "金融科技",
    description: "为银行、保险、证券等金融机构提供数字化解决方案",
    icon: "🏦"
  },
  {
    title: "智能制造",
    description: "工业互联网解决方案，助力制造业转型升级",
    icon: "🏭"
  },
  {
    title: "医疗健康",
    description: "智慧医疗解决方案，提升医疗服务效率",
    icon: "🏥"
  },
  {
    title: "零售电商",
    description: "全渠道零售解决方案，提升用户购物体验",
    icon: "🛍️"
  }
];

const Services = () => {
  return (
    <div className="pt-16 min-h-screen">
      {/* 页面标题 */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center mb-6"
          >
            我们的服务
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-center max-w-3xl mx-auto"
          >
            提供全方位的软件开发服务，助力企业数字化转型
          </motion.p>
        </div>
      </div>

      {/* 服务流程 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">服务流程</h2>
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-1 bg-blue-200 transform -translate-y-1/2 hidden md:block" />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {serviceProcess.map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 }}
                  className="relative bg-white p-6 rounded-lg shadow-lg text-center z-10"
                >
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center text-3xl text-white mx-auto mb-4">
                    {process.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 技术栈展示 */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">技术栈</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {Object.entries(technologies).map(([category, techs], index) => (
              <motion.div
                key={category}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="bg-white p-6 rounded-lg shadow-lg"
              >
                <h3 className="text-lg font-bold mb-4 text-blue-600 capitalize">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {techs.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 服务内容 */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {servicesList.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <div className="space-y-2">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center text-gray-700">
                      <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 行业解决方案 */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-800 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-16">行业解决方案</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {industries.map((industry, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-white/10 backdrop-blur-sm p-6 rounded-lg border border-white/20"
              >
                <div className="text-4xl mb-4">{industry.icon}</div>
                <h3 className="text-xl font-bold mb-2">{industry.title}</h3>
                <p className="text-white/80 text-sm">{industry.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 咨询按钮 */}
      <div className="text-center pb-16">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition"
        >
          立即咨询
        </motion.button>
      </div>
    </div>
  );
};

export default Services;
