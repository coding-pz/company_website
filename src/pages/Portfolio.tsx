import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { imageUrls } from '../constants/imageUrls';

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  client: string;
  duration: string;
  technologies: string[];
  results: string[];
  link?: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "智慧医疗管理系统",
    category: "企业系统",
    image: imageUrls.portfolio.medical, // 确保这里使用正确的图片URL
    description: "为大型医疗机构开发的智能化管理系统，实现医疗资源优化配置",
    client: "某三甲医院",
    duration: "2023.01 - 2023.06",
    technologies: ["React", "Node.js", "MongoDB", "Docker"],
    results: [
      "提升医疗资源利用率30%",
      "减少患者等待时间50%",
      "优化医护工作流程",
      "提高患者满意度"
    ]
  },
  {
    id: 2,
    title: "新零售商城App",
    category: "移动应用",
    image: imageUrls.portfolio.retail,
    description: "集商品浏览、社交推荐、支付功能于一体的新零售平台",
    client: "某知名零售集团",
    duration: "2023.03 - 2023.08",
    technologies: ["React Native", "Redux", "微信支付"],
    results: [
      "月活用户增长200%",
      "用户转化率提升40%",
      "客户满意度达95%"
    ]
  },
  {
    id: 3,
    title: "跨境电商平台",
    category: "电商平台",
    image: imageUrls.portfolio.ecommerce,
    description: "支持多语言、多币种的国际化电商交易平台",
    client: "某跨境贸易公司",
    duration: "2023.02 - 2023.07",
    technologies: ["Vue.js", "Spring Boot", "MySQL"],
    results: [
      "跨境订单量提升150%",
      "平台响应速度提升60%",
      "国际市场覆盖率提升"
    ]
  },
  {
    id: 4,
    title: "工业设备监控平台",
    category: "物联网",
    image: imageUrls.portfolio.iot,
    description: "实时监控工业设备运行状态，预测维护需求的物联网平台",
    client: "某制造业企业",
    duration: "2023.04 - 2023.09",
    technologies: ["Angular", "Python", "Docker"],
    results: [
      "设备故障率降低40%",
      "维护成本降低30%",
      "生产效率提升25%"
    ]
  },
  {
    id: 5,
    title: "智能物流配送系统",
    category: "企业系统",
    image: imageUrls.portfolio.logistics,
    description: "基于AI算法的智能物流路径规划和配送管理系统",
    client: "某物流公司",
    duration: "2023.05 - 2023.10",
    technologies: ["React", "Python", "TensorFlow"],
    results: [
      "配送效率提升45%",
      "燃料成本降低25%",
      "客户满意度提升35%"
    ]
  },
  {
    id: 6,
    title: "在线教育平台",
    category: "教育平台",
    image: imageUrls.portfolio.education,
    description: "提供直播课程、录播课程和在线答疑的综合性教育平台",
    client: "某教育机构",
    duration: "2023.06 - 2023.11",
    technologies: ["Next.js", "Node.js", "WebRTC"],
    results: [
      "学习效果提升40%",
      "课程完成率提升50%",
      "师生互动效率提升"
    ]
  }
];

const categories = ['全部', '企业系统', '移动应用', '电商平台', '物联网'];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('全部');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeCategory === '全部'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  return (
    <div className="pt-16 min-h-screen bg-gray-50">
      {/* 页面标题 */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-center mb-6"
          >
            成功案例
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-center max-w-3xl mx-auto"
          >
            探索我们为客户打造的优秀解决方案
          </motion.p>
        </div>
      </div>

      {/* 项目筛选和展示 */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* 分类过滤器 */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              } transition-colors`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* 项目网格 */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow cursor-pointer group"
                onClick={() => setSelectedProject(project)}
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="absolute bottom-4 left-4 text-white">
                      <p className="text-sm font-medium">{project.category}</p>
                      <h3 className="text-lg font-bold">{project.title}</h3>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-600">{project.client}</p>
                    </div>
                    <span className="text-sm text-gray-500">{project.duration}</span>
                  </div>
                  <p className="text-gray-600 mb-4 line-clamp-2">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 3).map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 bg-gray-50 text-gray-600 text-xs rounded-full">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* 项目详情弹窗 */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <img 
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-4">{selectedProject.title}</h2>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div>
                    <p className="text-gray-600">客户</p>
                    <p className="font-semibold">{selectedProject.client}</p>
                  </div>
                  <div>
                    <p className="text-gray-600">开发周期</p>
                    <p className="font-semibold">{selectedProject.duration}</p>
                  </div>
                </div>
                <div className="mb-6">
                  <h3 className="font-bold mb-2">项目描述</h3>
                  <p className="text-gray-600">{selectedProject.description}</p>
                </div>
                <div className="mb-6">
                  <h3 className="font-bold mb-2">技术栈</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="mb-6">
                  <h3 className="font-bold mb-2">项目成果</h3>
                  <ul className="space-y-2">
                    {selectedProject.results.map((result, index) => (
                      <li key={index} className="flex items-center text-gray-600">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                        </svg>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
                {selectedProject.link && (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800 font-semibold flex items-center"
                  >
                    访问项目
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                    </svg>
                  </a>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* 合作咨询 */}
      <div className="text-center py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <h2 className="text-3xl font-bold mb-4">寻找适合您的解决方案？</h2>
          <p className="text-gray-600 mb-8">我们期待与您展开合作</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-blue-700 transition">
            联系我们
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default Portfolio;
