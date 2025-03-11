
import { ArrowUpRight } from 'lucide-react';
import { cn } from '@/lib/utils';

type TopItem = {
  id: string;
  title: string;
  description: string;
  icon: string;
  color: string;
};

type TopSectionProps = {
  title: string;
  description: string;
  items: TopItem[];
  className?: string;
};

const TopSection = ({ title, description, items, className }: TopSectionProps) => {
  return (
    <div className={cn("flex flex-col space-y-6", className)}>
      <div className="flex items-center space-x-6">
        <div className="flex-shrink-0 w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center">
          <div className="w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">🎙️</span>
          </div>
        </div>
        <div>
          <h3 className="text-xl font-bold">{title}</h3>
          <p className="text-gray-500 text-sm">{description}</p>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="group inline-flex items-center space-x-1.5 text-sm font-medium text-purple-600 hover:text-purple-800 transition-colors">
          <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
      </div>
    </div>
  );
};

const FeatureCard = () => {
  return (
    <div className="bg-pink-50 rounded-3xl p-6 md:p-8 relative overflow-hidden animate-fade-in">
      <div className="max-w-md">
        <h3 className="text-2xl md:text-3xl font-bold mb-4">
          World Suicide Prevention Day: Unsent letters
        </h3>
        <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white font-medium py-2 px-6 rounded-full transition-colors">
          Listen Now
        </button>
      </div>
      <div className="absolute top-0 right-0 w-full h-full pointer-events-none">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-full max-w-[200px] opacity-10">
          <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g opacity="0.7">
              <path d="M196 100C196 153.019 153.019 196 100 196C46.981 196 4 153.019 4 100C4 46.981 46.981 4 100 4C153.019 4 196 46.981 196 100Z" stroke="#FF5757" strokeWidth="8"/>
              <path d="M138 100C138 120.987 120.987 138 100 138C79.0132 138 62 120.987 62 100C62 79.0132 79.0132 62 100 62C120.987 62 138 79.0132 138 100Z" stroke="#FF5757" strokeWidth="8"/>
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

const TopPodcastSection = () => {
  const topPodcasts = [
    {
      id: "1",
      title: "Top Podcast",
      description: "World top charts podcast list",
      icon: "🎙️",
      color: "bg-purple-100"
    },
    {
      id: "2",
      title: "Top Episodes",
      description: "World top charts episodes list",
      icon: "🎧",
      color: "bg-blue-100"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-podcast-secondary">
      <div className="app-container">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
            {topPodcasts.map((item) => (
              <TopSection 
                key={item.id}
                title={item.title}
                description={item.description}
                items={[]}
                className="bg-white rounded-3xl shadow-soft p-6 md:p-8 h-full"
              />
            ))}
          </div>
          <div className="lg:col-span-1">
            <FeatureCard />
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopPodcastSection;
