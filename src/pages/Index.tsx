
import { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import TopPodcastSection from '@/components/TopPodcastSection';
import Footer from '@/components/Footer';

const Index = () => {
  useEffect(() => {
    // Scroll reveal animation
    const revealElements = document.querySelectorAll('.reveal-animation');
    
    const revealScroll = () => {
      for (let i = 0; i < revealElements.length; i++) {
        const element = revealElements[i];
        const revealPoint = 150;
        const windowHeight = window.innerHeight;
        const elementTop = element.getBoundingClientRect().top;
        
        if (elementTop < windowHeight - revealPoint) {
          element.classList.add('revealed');
        }
      }
    };
    
    window.addEventListener('scroll', revealScroll);
    revealScroll(); // Initial check on load
    
    return () => window.removeEventListener('scroll', revealScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-hidden">
      <Navbar />
      <main>
        <Hero />
        <TopPodcastSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
