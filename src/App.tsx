import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import CoreCompetencies from './components/CoreCompetencies'
import TechnicalSkills from './components/TechnicalSkills'
import Experience from './components/Experience'
import Education from './components/Education'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <div className="min-w-0 overflow-x-clip">
      <Navbar />
      <main className="min-w-0">
        <Hero />
        <About />
        <CoreCompetencies />
        <TechnicalSkills />
        <Experience />
        <Education />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
