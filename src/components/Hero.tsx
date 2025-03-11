
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24 relative overflow-hidden">
      <div className="app-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 animate-fade-up">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Discover Stories <br className="hidden md:block" /> and Perspectives
            </h1>
            <p className="text-lg text-gray-600 max-w-lg">
              Your all-in-one platform for discovering and streaming your favorite shows on the go.
            </p>
            <div className="pt-4">
              <Button 
                size="lg" 
                className="bg-purple-600 hover:bg-purple-700 text-white rounded-full px-8 py-6 text-base font-medium shadow-md hover:shadow-lg transition-all"
              >
                Get the App
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-in">
            <div className="absolute -top-[5%] -right-[5%] w-[110%] h-[110%] bg-purple-100 rounded-full opacity-80 blur-3xl"></div>
            <div className="relative z-10 animate-float">
              <img 
                src="/lovable-uploads/994c1ca5-a7db-445d-928a-a70560ec8d22.png" 
                alt="Podcast app interface" 
                className="max-w-full h-auto object-contain rounded-3xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-24 bg-podcast-secondary z-[-1]"></div>
      <div 
        className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-bl from-purple-100 to-transparent rounded-bl-[100px] z-[-2]"
      ></div>
    </section>
  );
};

export default Hero;
