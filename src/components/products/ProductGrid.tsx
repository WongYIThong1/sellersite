import Link from 'next/link';

// 定义商品类型
interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
  color: string;
}

// 商品列表
const products: Product[] = [
  {
    id: '1',
    name: '智能手表',
    description: '全功能智能手表，支持健康监测、运动追踪',
    price: 999,
    image: 'watch',
    category: '智能设备',
    color: 'blue'
  },
  {
    id: '2',
    name: '时尚手链',
    description: '精美手工制作，彰显个人品味',
    price: 299,
    image: 'bracelet',
    category: '时尚配饰',
    color: 'green'
  },
  {
    id: '3',
    name: '香薰蜡烛',
    description: '天然精油，舒缓身心，提升生活品质',
    price: 199,
    image: 'candle',
    category: '生活用品',
    color: 'purple'
  },
  {
    id: '4',
    name: '无线耳机',
    description: '高清音质，长效续航，舒适佩戴',
    price: 599,
    image: 'headphones',
    category: '智能设备',
    color: 'blue'
  },
  {
    id: '5',
    name: '时尚墨镜',
    description: 'UV400防护，轻盈舒适',
    price: 399,
    image: 'sunglasses',
    category: '时尚配饰',
    color: 'green'
  },
  {
    id: '6',
    name: '便携保温杯',
    description: '24小时保温保冷，时尚外观',
    price: 159,
    image: 'bottle',
    category: '生活用品',
    color: 'purple'
  }
];

// 根据商品类别获取对应的样式
const getCategoryStyles = (category: string) => {
  switch (category) {
    case '智能设备':
      return {
        bgGradient: 'from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30',
        iconGradient: 'from-blue-500 to-purple-600',
        textColor: 'text-blue-600 dark:text-blue-400',
        buttonBg: 'bg-blue-600 hover:bg-blue-700'
      };
    case '时尚配饰':
      return {
        bgGradient: 'from-green-100 to-blue-100 dark:from-green-900/30 dark:to-blue-900/30',
        iconGradient: 'from-green-500 to-blue-600',
        textColor: 'text-green-600 dark:text-green-400',
        buttonBg: 'bg-green-600 hover:bg-green-700'
      };
    case '生活用品':
      return {
        bgGradient: 'from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30',
        iconGradient: 'from-purple-500 to-pink-600',
        textColor: 'text-purple-600 dark:text-purple-400',
        buttonBg: 'bg-purple-600 hover:bg-purple-700'
      };
    default:
      return {
        bgGradient: 'from-gray-100 to-gray-200 dark:from-gray-800/30 dark:to-gray-700/30',
        iconGradient: 'from-gray-500 to-gray-600',
        textColor: 'text-gray-600 dark:text-gray-400',
        buttonBg: 'bg-gray-600 hover:bg-gray-700'
      };
  }
};

// 根据商品类型获取对应的图标
const getCategoryIcon = (category: string) => {
  switch (category) {
    case '智能设备':
      return (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
      );
    case '时尚配饰':
      return (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
      );
    case '生活用品':
      return (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      );
    default:
      return (
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
      );
  }
};

interface ProductGridProps {
  title?: string;
  description?: string;
  showAll?: boolean;
}

const ProductGrid: React.FC<ProductGridProps> = ({ 
  title = "全部商品", 
  description = "每一件商品都经过我们的精心挑选，为您带来最佳的购物体验",
  showAll = true
}) => {
  // 如果showAll为false，只显示前3个商品
  const displayProducts = showAll ? products : products.slice(0, 3);

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {title}
          </h3>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            {description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProducts.map((product) => {
            const styles = getCategoryStyles(product.category);
            return (
              <div key={product.id} className="group bg-slate-800 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-slate-700/50 hover:border-blue-500/30">
                <div className={`aspect-square bg-gradient-to-br ${styles.bgGradient} flex items-center justify-center`}>
                  <div className={`w-24 h-24 bg-gradient-to-r ${styles.iconGradient} rounded-full flex items-center justify-center`}>
                    <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      {getCategoryIcon(product.category)}
                    </svg>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-xl font-semibold text-white mb-2">{product.name}</h4>
                  <p className="text-slate-400 mb-4">{product.description}</p>
                  <div className="flex items-center justify-between">
                    <span className={`text-2xl font-bold ${styles.textColor}`}>¥{product.price}</span>
                    <Link href={`/products/${product.id}`} className={`${styles.buttonBg} text-white px-4 py-2 rounded-lg transition-colors`}>
                      查看详情
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        {!showAll && (
          <div className="mt-16 text-center">
            <Link href="/products" className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white px-10 py-4 rounded-full font-semibold text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              查看全部商品
            </Link>
          </div>
        )}
      </div>
    </section>
  );
};

export default ProductGrid;