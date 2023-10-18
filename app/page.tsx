import Services from './components/Services';
import Skills from './components/Skills';
import About from './components/About';
import Contact from './components/Contact';

export default function Home() {
  return (
    <main>
      <div
        className="hero min-h-[50vh]"
        style={{
          backgroundImage:
            "url(https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-lg">
            <h1 className="mb-8 text-5xl font-bold">Coder Shubham here!</h1>
            <p className="mb-8">
              We build next js projects for you. With love and all the skillset required to make a fully functional nextjs project using various supporting technologies. Check out my youtube channel for more.
            </p>
            <button className="btn btn-primary">Coder Shubham</button>
          </div>
        </div>
      </div>

      <Services />
      
      <Skills />
      
      <About />
      
      <Contact />
      
    </main>
  );
}
