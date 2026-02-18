import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ProblemSolution from './components/ProblemSolution';
import Services from './components/Services';
import BeforeAfter from './components/BeforeAfter';
import Gallery from './components/Gallery';
import Process from './components/Process';
import Guarantee from './components/Guarantee';
import Testimonials from './components/Testimonials';
import Partners from './components/Partners';
import LeadForm from './components/LeadForm';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import StickyCTA from './components/StickyCTA';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col w-full overflow-x-hidden">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <TrustBar />
        <div id="services">
          <Services />
        </div>
        <ProblemSolution />
        <BeforeAfter />
        <Gallery />
        <Partners />
        <div id="process">
          <Process />
        </div>
        <Guarantee />
        <Testimonials />
        <LeadForm />
        <div id="faq">
          <FAQ />
        </div>
      </main>
      <Footer />
      <StickyCTA />
    </div>
  );
};

export default App;