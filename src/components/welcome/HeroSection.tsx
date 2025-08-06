import Link from 'next/link';

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden relative">
      {/* 背景装饰元素 */}
      <div className="absolute inset-0 overflow-hidden">
        {/* 星云效果 */}
        <div className="absolute top-10 left-10 w-96 h-96 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* 星星点缀 */}
        <div className="absolute top-20 right-1/4 w-2 h-2 bg-white rounded-full animate-twinkle"></div>
        <div className="absolute top-1/3 left-1/4 w-1 h-1 bg-blue-300 rounded-full animate-twinkle delay-300"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-purple-300 rounded-full animate-twinkle delay-700"></div>
        <div className="absolute top-1/4 right-1/2 w-1 h-1 bg-cyan-300 rounded-full animate-twinkle delay-1000"></div>
      </div>

      {/* 主要欢迎内容 */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-5xl mx-auto">
          {/* 品牌标识 */}
          <div className="mb-12 flex justify-center">
            <div className="relative">
              <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl shadow-blue-500/25 animate-float">
                <span className="text-white font-bold text-4xl">星</span>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 to-purple-600/20 rounded-full blur-xl animate-pulse"></div>
            </div>
          </div>

          {/* 主标题 */}
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent animate-gradient-x">
              星云客
            </span>
          </h1>

          {/* 副标题 */}
          <p className="text-2xl md:text-3xl text-slate-300 mb-6 font-light">
            欢迎来到未来商店
          </p>

          {/* 描述文字 */}
          <p className="text-lg md:text-xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed">
            在星云客，我们相信每一次购物都是一场探索之旅。
            <br className="hidden md:block" />
            发现精选商品，体验未来购物的无限可能。
          </p>

          {/* 特色标签 */}
          <div className="flex flex-wrap justify-center gap-4 mb-16">
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-6 py-3 text-sm text-slate-300">
              ✨ 精选好物
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-6 py-3 text-sm text-slate-300">
              🚀 极速配送
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-6 py-3 text-sm text-slate-300">
              💎 品质保证
            </div>
            <div className="bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-full px-6 py-3 text-sm text-slate-300">
              🎯 个性定制
            </div>
          </div>

          {/* 行动按钮 */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link href="/products" className="group relative bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-2xl shadow-blue-500/25 hover:shadow-blue-500/40">
              <span className="relative z-10">进入商店</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-purple-700 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </Link>
            
            <button className="group border-2 border-slate-600 hover:border-slate-500 text-slate-300 hover:text-white px-12 py-4 rounded-full font-semibold text-lg transition-all duration-300 hover:bg-slate-800/50 backdrop-blur-sm">
              了解更多
              <svg className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>

          {/* 滚动提示 */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-slate-400 animate-bounce">
            <div className="flex flex-col items-center">
              <span className="text-sm mb-2">向下滚动探索更多</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;