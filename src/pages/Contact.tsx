import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BaiduMap from '../components/BaiduMap';

// 引入地图类型
declare global {
  interface Window {
    BMapGL: any;
  }
}

// 样式常量
const labelStyles = "block text-gray-700 text-sm font-semibold mb-2";
const inputStyles = "w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 bg-white/50 backdrop-blur-sm";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  // 表单验证
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = '请输入姓名';
    }

    if (!formData.email.trim()) {
      newErrors.email = '请输入邮箱';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(formData.email)) {
      newErrors.email = '请输入有效的邮箱地址';
    }

    if (formData.phone && !/^1[3-9]\d{9}$/.test(formData.phone)) {
      newErrors.phone = '请输入有效的手机号码';
    }

    if (!formData.message.trim()) {
      newErrors.message = '请输入留言内容';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // 处理表单提交
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // 模拟API请求
      await new Promise(resolve => setTimeout(resolve, 1500));
      setSubmitSuccess(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      });
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (error) {
      console.error('提交失败:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // 添加 handleChange 函数
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // 当用户输入时清除对应的错误提示
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // 加载百度地图脚本
  useEffect(() => {
    const script = document.createElement('script');
    // 替换为您的实际百度地图API密钥
    script.src = `https://api.map.baidu.com/api?type=webgl&v=1.0&ak=YOUR_ACTUAL_BAIDU_MAP_KEY`;
    script.async = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

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
            联系我们
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-center max-w-3xl mx-auto"
          >
            期待与您沟通合作，共创数字化未来
          </motion.p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {/* 联系信息 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-3xl font-bold mb-8">联系方式</h2>
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center space-x-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <span className="text-3xl">{item.icon}</span>
                  <div>
                    <h3 className="text-xl font-semibold mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.info}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 社交媒体 */}
            <div className="mt-12">
              <h3 className="text-xl font-semibold mb-6">关注我们</h3>
              <div className="flex space-x-6">
                {socialMedia.map((item, index) => (
                  <motion.a
                    key={index}
                    href={item.link}
                    whileHover={{ scale: 1.1 }}
                    className="flex flex-col items-center"
                  >
                    <span className="text-3xl mb-2">{item.icon}</span>
                    <span className="text-sm text-gray-600">{item.name}</span>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* 联系表单 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl shadow-lg p-8"
          >
            <h2 className="text-3xl font-bold mb-8">发送消息</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className={labelStyles}>
                    姓名 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={inputStyles}
                    placeholder="请输入您的姓名"
                  />
                  {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                </div>

                <div>
                  <label htmlFor="email" className={labelStyles}>
                    邮箱 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={inputStyles}
                    placeholder="请输入您的邮箱"
                  />
                  {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className={labelStyles}>
                    电话
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputStyles}
                    placeholder="请输入您的电话号码"
                  />
                  {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone}</p>}
                </div>

                <div>
                  <label htmlFor="company" className={labelStyles}>
                    公司名称
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={inputStyles}
                    placeholder="请输入您的公司名称"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="message" className={labelStyles}>
                  留言内容 <span className="text-red-500">*</span>
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`${inputStyles} resize-none`}
                  placeholder="请输入您想要咨询的内容"
                />
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>

              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full ${
                  isSubmitting 
                    ? 'bg-gray-400 cursor-not-allowed' 
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700'
                } text-white px-6 py-3 rounded-lg font-semibold transition-all duration-200 
                shadow-md hover:shadow-lg flex justify-center items-center`}
              >
                {isSubmitting ? (
                  <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                ) : '发送消息'}
              </motion.button>
            </form>

            {/* 提交成功提示 */}
            <AnimatePresence>
              {submitSuccess && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 p-4 bg-green-50 text-green-600 rounded-lg text-center"
                >
                  消息已发送，我们会尽快与您联系！
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>

      {/* 替代方案：静态地图 */}
      <div className="h-96 mt-16 bg-gray-100 flex items-center justify-center">
        <div className="text-center p-8">
          <div className="text-4xl mb-4">🗺️</div>
          <h3 className="text-xl font-semibold mb-2">公司地址</h3>
          <p className="text-gray-600">北京市朝阳区科技园A座1001室</p>
        </div>
      </div>
    </div>
  );
};

const contactInfo = [
  {
    title: "公司地址",
    info: "北京市朝阳区科技园A座1001室",
    icon: "📍"
  },
  {
    title: "联系电话",
    info: "400-123-4567",
    icon: "📞"
  },
  {
    title: "电子邮箱",
    info: "contact@example.com",
    icon: "📧"
  },
  {
    title: "工作时间",
    info: "周一至周五 9:00-18:00",
    icon: "⏰"
  }
];

const socialMedia = [
  {
    name: "微信",
    icon: "📱",
    link: "#"
  },
  {
    name: "微博",
    icon: "🌐",
    link: "#"
  },
  {
    name: "知乎",
    icon: "❓",
    link: "#"
  }
];

export default Contact;
