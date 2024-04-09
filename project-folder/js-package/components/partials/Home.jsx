import '../../styles/fonts.css';
import '../../styles/tailwind.css';
import glowBg from '../../assets/glow-bg.jpg';
import Header from '../Header';
import Hero from '../Hero';
import InviteInfo from '../InviteInfo';
import RelationshipInfo from '../RelationshipInfo';
import Footer from '../Footer';

function Home() {
  return (
    <>
      <Header />
      <Hero bgImage={glowBg} />
      <InviteInfo />
      <div className="flex flex-col items-center pb-24"></div>
      <RelationshipInfo />
      <Footer />
    </>
  );
}

export default Home;
