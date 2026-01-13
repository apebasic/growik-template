import { useEffect } from 'react';
import { initGSAP } from './components/animations/gsapUtils';
import CubicText3D from './components/ui/CubicText3D';
import MarqueeText from './components/ui/MarqueeText';
import VideoShape from './components/ui/VideoShape';
import './App.css';

function App() {
  useEffect(() => {
    initGSAP();
  }, []);

  return (
    <div className="app">
      <section className="hero-demo">
        <div className="container">
          <h1 className="demo-title">Growik Template - Core Components Demo</h1>
          
          <div className="component-showcase">
            <h3>3D Cubic Text (Auto-Rotating)</h3>
            <CubicText3D 
              words={['MARKETING', 'STRATEGY', 'CONSULTING', 'BRANDING']}
              size="hero"
              autoRotate={true}
            />
          </div>
          
          <div className="component-showcase">
            <h3>Infinite Marquee Text</h3>
            <MarqueeText duration={20}>
              <span className="marquee-item">MADE SIMPLE</span>
              <VideoShape 
                src="/68f0dccd7b73932b134cae91_690c901876e40dd190b13f07_video-shape-2-transcode.mp4"
                size="small"
              />
              <span className="marquee-item">THAT WORKS</span>
              <VideoShape 
                src="/68f0dccd7b73932b134cae91_690c91bf2c1fc5732e9d0171_video-shape-3-transcode.mp4"
                size="small"
              />
            </MarqueeText>
          </div>
          
          <div className="component-showcase">
            <h3>Video Shapes</h3>
            <div className="video-grid">
              <VideoShape 
                src="/68f0dccd7b73932b134cae91_690c8d1baaa5b860bd73bf00_video-shape-02-transcode.mp4"
                size="medium"
              />
              <VideoShape 
                src="/68f0dccd7b73932b134cae91_690c901876e40dd190b13f07_video-shape-2-transcode.mp4"
                size="medium"
              />
              <VideoShape 
                src="/68f0dccd7b73932b134cae91_690c91bf2c1fc5732e9d0171_video-shape-3-transcode.mp4"
                size="medium"
              />
            </div>
          </div>
        </div>
      </section>
      
      <section className="scroll-demo">
        <div className="container">
          <h2>Scroll Down to See Scroll-Triggered 3D Text</h2>
          <div className="spacer"></div>
          
          <div className="component-showcase">
            <h3>3D Cubic Text (Scroll-Triggered)</h3>
            <CubicText3D 
              words={['SERVICES', 'PROJECTS', 'REVIEWS', 'PACKAGES']}
              size="section"
              autoRotate={false}
            />
          </div>
          
          <div className="spacer"></div>
        </div>
      </section>
      
      <section className="info-section">
        <div className="container">
          <h2>✅ Components Ready</h2>
          <ul className="component-list">
            <li>✅ CubicText3D - 3D rotating text cube</li>
            <li>✅ MarqueeText - Infinite scrolling text</li>
            <li>✅ VideoShape - Background video player</li>
            <li>✅ GSAP Animation Utilities</li>
          </ul>
          
          <h2>📋 Next Steps</h2>
          <p>Continue building by adding Header, Footer, and all page sections.</p>
        </div>
      </section>
    </div>
  );
}

export default App;
