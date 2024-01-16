import '../../styles/fonts.css';
import '../../styles/tailwind.css';
import glowBg from '../../assets/glow-bg.jpg';
import Header from './Header';
import Hero from './Hero';
import InviteInfo from '../InviteInfo';
import RelationshipInfo from '../RelationshipInfo';

function Home() {
  return (
    <>
      <Header />
      <Hero bgImage={glowBg} />
      <InviteInfo />
      <RelationshipInfo />
    </>
  );
}

export default Home;
