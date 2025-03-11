
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Episodes = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main className="pt-28 pb-16">
        <div className="app-container">
          <h1 className="text-4xl font-bold mb-6">Episodes</h1>
          <p className="text-lg text-gray-600 mb-12">
            Discover our latest podcast episodes. Coming soon.
          </p>
          <div className="h-96 bg-purple-50 rounded-2xl flex items-center justify-center">
            <p className="text-xl text-purple-600 font-medium">Episodes content coming soon</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Episodes;
