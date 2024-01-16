import '../../styles/tailwind.css';
import Navigation from '../Navigation';

function Header() {
  return (
    <header className="p-4 sticky top-0 z-50 bg-white">
      <div className="container mx-auto">
        <h1 className="w-full font-display text-center text-4xl font-bold tracking-wider pb-4">
          Charlotte & Chris
        </h1>
        <Navigation />
      </div>
    </header>
  );
}

export default Header;
