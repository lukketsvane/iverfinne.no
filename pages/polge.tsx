// pages/polge.tsx
import { useEffect } from 'react';
import Layout from '../components/Layout';
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
          <button className="Hotspot" slot="hotspot-1" data-position="0.20224736591332104m 0.4323479749571223m 0.3647403278944923m" data-normal="0.8588368325207915m 0.33696497326740116m 0.3858158911923585m" data-visibility-attribute="visible">
            <div className="HotspotAnnotation">Pøbelpølge</div>
          </button>
          <button className="Hotspot" slot="hotspot-2" data-position="-0.5641152805780563m 0.5962629611607801m 0.373158039107515m" data-normal="-0.8627435790114588m 0.04561406906184359m 0.5035800567716318m" data-visibility-attribute="visible">
            <div className="HotspotAnnotation">Pyntepølge</div>
          </button>
          <button className="Hotspot" slot="hotspot-3" data-position="-0.0873609400787203m 0.5217595515167601m -0.3018671842072307m" data-normal="0.9631912269150061m 0.1905704188746901m 0.18959318511985124m" data-visibility-attribute="visible">
            <div className="HotspotAnnotation">Rettutta dusjen pølge</div>
          </button>
          <button className="Hotspot" slot="hotspot-4" data-position="-0.06955537725458627m 0.3691717142367001m -0.09050702114499942m" data-normal="0.6645287206902761m 0.21700771255417733m 0.7150589011191656m" data-visibility-attribute="visible">
            <div className="HotspotAnnotation">anatomisk korrekt pølge</div>
          </button>
        </model-viewer>
      </div>
    </Layout>
  );
};

export default PolgePage;
