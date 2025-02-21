import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { imageUrls } from '../constants/imageUrls';

interface NewsArticle {
  id: number;
  title: string;
  category: string;
  date: string;
  image: string;
  summary: string;
  content: string;
  author: string;
  readTime: string;
  tags: string[];
  relatedArticles?: number[];
}

const fullNewsList: NewsArticle[] = [
  {
    id: 1,
    title: "易准软件完成新一轮融资",
    category: "公司动态",
    date: "2023-11-01",
    image: imageUrls.news.funding,
    summary: "易准软件宣布完成A轮融资，将进一步加大研发投入，提升产品竞争力。",
    content: `易准软件于近日宣布完成新一轮融资。本轮融资由某知名投资机构领投，
    将主要用于产品研发和市场拓展。公司CEO表示，此次融资将助力公司在人工智能和
    云计算领域的技术创新，进一步提升产品竞争力...`,
    author: "徐犇",
    readTime: "3分钟",
    tags: ["融资", "发展", "AI", "云计算"],
    relatedArticles: [2, 4]
  },
  // ... 添加更多新闻文章
];

const newsCategories = ['全部', '公司动态', '技术博客', '行业资讯'];

const NewsPage = () => {
  const [selectedArticle, setSelectedArticle] = useState<NewsArticle | null>(null);
  const [activeCategory, setActiveCategory] = useState('全部');

  // 处理文章详情的显示
  const handleArticleClick = (article: NewsArticle) => {
    setSelectedArticle(article);
    // 记录阅读历史
    const history = JSON.parse(localStorage.getItem('readHistory') || '[]');
    localStorage.setItem('readHistory', JSON.stringify([...history, article.id]));
  };

  const filteredNews = activeCategory === '全部'
    ? fullNewsList
    : fullNewsList.filter(news => news.category === activeCategory);

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
            新闻动态
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-xl text-center max-w-3xl mx-auto"
          >
             了解易准软件的最新动态和行业资讯
          </motion.p>
        </div>
      </div>

      {/* 分类过滤器 */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {newsCategories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-100'
              } transition-colors`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* 新闻列表和详情页布局 */}
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* 主要新闻列表区域 */}
            <div className="lg:col-span-2">
              <AnimatePresence mode='wait'>
                {selectedArticle ? (
                  // 文章详情视图
                  <motion.article
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    className="bg-white rounded-xl shadow-lg overflow-hidden"
                  >
                    <img 
                      src={selectedArticle.image}
                      alt={selectedArticle.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="p-8">
                      <button
                        onClick={() => setSelectedArticle(null)}
                        className="mb-6 text-blue-600 hover:text-blue-800 flex items-center"
                      >
                        <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7"/>
                        </svg>
                        返回列表
                      </button>
                      <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                        <span>{selectedArticle.category}</span>
                        <span>•</span>
                        <span>{selectedArticle.date}</span>
                        <span>•</span>
                        <span>{selectedArticle.readTime}</span>
                      </div>
                      <h1 className="text-3xl font-bold mb-6">{selectedArticle.title}</h1>
                      <div className="prose max-w-none">
                        <p className="text-gray-600 leading-relaxed whitespace-pre-line">
                          {selectedArticle.content}
                        </p>
                      </div>
                      {/* 标签 */}
                      <div className="flex flex-wrap gap-2 mt-8">
                        {selectedArticle.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      {/* 作者信息 */}
                      <div className="mt-8 pt-8 border-t">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full bg-gray-200"/>
                          <div>
                            <p className="font-semibold">{selectedArticle.author}</p>
                            <p className="text-sm text-gray-500">文章作者</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.article>
                ) : (
                  // 新闻列表视图
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-8"
                  >
                    {filteredNews.map((article) => (
                      <motion.article
                        key={article.id}
                        layoutId={`article-${article.id}`}
                        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow cursor-pointer"
                        onClick={() => handleArticleClick(article)}
                      >
                        <img 
                          src={article.image}
                          alt={article.title}
                          className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                          <div className="flex items-center gap-4 mb-4">
                            <span className="text-blue-600 text-sm">{article.category}</span>
                            <span className="text-gray-500 text-sm">{article.date}</span>
                          </div>
                          <h3 className="text-xl font-bold mb-3">{article.title}</h3>
                          <p className="text-gray-600 mb-4">{article.summary}</p>
                          <div className="flex flex-wrap gap-2">
                            {article.tags.map((tag, index) => (
                              <span
                                key={index}
                                className="bg-gray-100 text-gray-600 text-sm px-3 py-1 rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          <button className="mt-4 text-blue-600 font-semibold hover:text-blue-800 transition">
                            阅读更多 →
                          </button>
                        </div>
                      </motion.article>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* 侧边栏 */}
            <div className="lg:col-span-1 space-y-8">
              {/* 搜索框 */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <input
                  type="search"
                  placeholder="搜索文章..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* 热门标签 */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold mb-4">热门标签</h3>
                <div className="flex flex-wrap gap-2">
                  {Array.from(new Set(fullNewsList.flatMap(article => article.tags))).map((tag, index) => (
                    <button
                      key={index}
                      className="px-3 py-1 bg-gray-100 hover:bg-blue-50 text-gray-600 hover:text-blue-600 rounded-full text-sm transition-colors"
                    >
                      {tag}
                    </button>
                  ))}
                </div>
              </div>

              {/* 推荐阅读 */}
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-lg font-bold mb-4">推荐阅读</h3>
                <div className="space-y-4">
                  {fullNewsList.slice(0, 3).map((article) => (
                    <div
                      key={article.id}
                      className="flex items-start gap-4 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
                      onClick={() => handleArticleClick(article)}
                    >
                      <img
                        src={article.image}
                        alt={article.title}
                        className="w-20 h-20 object-cover rounded"
                      />
                      <div>
                        <h4 className="font-semibold line-clamp-2">{article.title}</h4>
                        <p className="text-sm text-gray-500">{article.date}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 订阅区域 */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-bold mb-4">订阅我们的更新</h2>
            <p className="text-gray-600 mb-8">
              及时获取最新的技术资讯和行业动态
            </p>
            <div className="flex gap-4 justify-center">
              <input
                type="email"
                placeholder="输入您的邮箱地址"
                className="px-4 py-2 border border-gray-300 rounded-lg w-64 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition">
                订阅
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default NewsPage;
