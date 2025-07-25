import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Intro from '@/components/Intro';
import Skills from '@/components/Skills';
import Proyects from '@/components/Proyects';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Intro />
      <Skills />
      <Proyects />
      <Contact />
      <Footer />
    </main>
  );
}
