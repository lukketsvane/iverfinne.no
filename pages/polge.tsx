// pages/polge.tsx
import { useEffect } from 'react';
import Layout from '../components/layout';
import Head from 'next/head';

const PolgePage: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js';
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <Layout>
      <Head>
        <link rel="stylesheet" href="/styles.css" />
      </Head>
      <div id="model-viewer-container">
        <model-viewer
          src="/3d/scene.glb"
          camera-controls
          tone-mapping="neutral"
          poster="/poster.webp"
          shadow-intensity="1"
        >
          <button className="Hotspot" slot="hotspot-1" data-position="-0.5557448879694129m 0.011800219002776835m 0.43415804527227114m" data-normal="-0.6430746019232203m -0.21018162844843763m 0.7363957763485982m" data-visibility-attribute="visible">
            <div className="HotspotAnnotation">Eksemplar 1</div>
          </button>
          <button className="Hotspot" slot="hotspot-2" data-position="0.16548037345355704m 0.05017223443240476m 0.4544651560404812m" data-normal="0.8316606055151807m -0.34351864671153726m 0.43627465729239556m" data-visibility-attribute="visible">
            <div className="HotspotAnnotation">Eksemplar 2</div>
          </button>
          <button className="Hotspot" slot="hotspot-3" data-position="-0.10193927298295846m 0.015961774070006353m -0.3376911126766585m" data-normal="0.792607863399423m -0.08237612531739617m -0.6041414973787965m" data-visibility-attribute="visible">
            <div className="HotspotAnnotation">Eksemplar 3</div>
          </button>
        </model-viewer>
      </div>
    </Layout>
  );
};

export default PolgePage;
