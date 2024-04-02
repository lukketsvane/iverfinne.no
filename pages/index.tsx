// pages/index.tsx
import { Expandable } from '../components/Expandable';
import IndexContent from './about-me.mdx';

import FooterContent from './about-footer.mdx';

const Home: React.FC = () => {
  return (
    <div>
      <IndexContent />
      <Expandable title="Past Work">
        Prior to Untapped Capital and subsequent work listed above, Yohei has worked closely with
        startups as a community builder and investor. He started his career in 2009 contributing to
        the growth of the Los Angeles startup community as a community leader in various roles,
        organizing educational events and communities for local startup founders. He started his
        investment career at Techstars in 2014, helping spin up The Disney Accelerator, then as their
        first Director of Pipeline, supporting sourcing of startups across 50+ accelerator programs.
        He then joined Scrum Ventures in 2018 as a venture partner on the investment team and SVP
        of Scrum Studio, their corporate innovation unit, working closely with top global
        corporations such as Nintendo, where he led the engagement as managing director of
        Nintendo Switch+Tech.
      </Expandable>
      <FooterContent />
    </div>
  );
};

export default Home;