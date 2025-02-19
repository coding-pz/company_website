import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 公司信息 */}
          <div className="col-span-1">
            <h3 className="text-white text-lg font-bold mb-4">智创科技</h3>
            <p className="text-sm">
              专注于提供高质量的软件开发解决方案，
              致力于帮助企业实现数字化转型。
            </p>
          </div>

          {/* 快速链接 */}
          <div className="col-span-1">
            <h4 className="text-white text-md font-semibold mb-4">快速链接</h4>
            <ul className="space-y-2">
              <li><Link to="/services" className="hover:text-white transition">服务</Link></li>
              <li><Link to="/portfolio" className="hover:text-white transition">案例</Link></li>
              <li><Link to="/about" className="hover:text-white transition">关于我们</Link></li>
            </ul>
          </div>

          {/* 联系方式 */}
          <div className="col-span-1">
            <h4 className="text-white text-md font-semibold mb-4">联系我们</h4>
            <ul className="space-y-2 text-sm">
              <li>电话：400-123-4567</li>
              <li>邮箱：contact@example.com</li>
              <li>地址：北京市朝阳区科技园A座</li>
            </ul>
          </div>

          {/* 关注我们 */}
          <div className="col-span-1">
            <h4 className="text-white text-md font-semibold mb-4">关注我们</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-white transition">微信</a>
              <a href="#" className="hover:text-white transition">微博</a>
              <a href="#" className="hover:text-white transition">知乎</a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-sm text-center">
          <p>© 2023 智创科技. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
