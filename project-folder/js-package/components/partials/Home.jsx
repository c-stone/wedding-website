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
      <div className="flex flex-col items-center pb-24">
        <a
          href="/rsvp"
          className="bg-amber-700 hover:bg-amber-900 text-white py-4 px-8 rounded tracking-widest"
        >
          RSVP
        </a>
      </div>
      <RelationshipInfo />
      <Footer />
    </>
  );
}

export default Home;
