import { ShopHero } from '@/components/shop/ShopHero';
import { ShopSidebar } from '@/components/shop/ShopSidebar';
import { ShopToolbar } from '@/components/shop/ShopToolbar';
import { ShopProductGrid } from '@/components/shop/ShopProductGrid';
import Newsletter from '@/components/home/Newsletter';

export const metadata = {
  title: 'Shop | VisioCreate',
  description: 'Explore our collection of premium furniture and home decor.',
};

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Shop Hero Section */}
      <ShopHero />
      
      {/* Main Content Section */}
      <div className="max-w-7xl mx-auto px-5 md:px-10 lg:px-0 mt-10 mb-20 flex gap-10">
        {/* Sidebar (Desktop Only) */}
        <ShopSidebar />

        {/* Product Area */}
        <div className="flex-1 relative">
          <ShopToolbar />
          
          <div className="flex gap-4">
            {/* Products Grid */}
            <div className="flex-1">
              <ShopProductGrid />
            </div>

            {/* Vertical Scroll Indicator (Desktop Only) */}
            <div className="hidden lg:block w-[2px] bg-gray-100 relative mt-20 h-[500px]">
              <div className="absolute top-0 left-0 w-full h-32 bg-black rounded-full" />
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <Newsletter />
    </main>
  );
}
