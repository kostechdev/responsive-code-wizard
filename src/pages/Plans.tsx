
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Plans = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-28 pb-16">
        <div className="app-container">
          <h1 className="text-4xl font-bold mb-6">Plans</h1>
          <p className="text-lg text-gray-600 mb-12">
            Choose the perfect subscription plan for your podcast needs. Coming soon.
          </p>
          <div className="h-96 bg-purple-50 rounded-2xl flex items-center justify-center">
            <p className="text-xl text-purple-600 font-medium">Plans content coming soon</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Plans;
