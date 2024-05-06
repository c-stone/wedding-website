import NewTabIcon from './NewTabIcon';

function Navigation() {
  return (
    <nav className="w-full flex flex-col items-center">
      <ul className="w-full flex flex-row flex-wrap justify-center gap-2">
        <li className="font-serif">
          <a
            className="p-3 tracking-widest font-thin text-base hover:underline flex flex-row"
            href="/"
          >
            Home
          </a>
        </li>
        <li className="font-serif">
          <a
            className="p-3 tracking-widest font-thin text-base hover:underline flex flex-row"
            href="/travel"
          >
            Travel
          </a>
        </li>
        <li className="font-serif">
          <a
            className="p-3 tracking-widest font-thin text-base hover:underline flex flex-row"
            href="/schedule"
          >
            Schedule
          </a>
        </li>
        <li className="font-serif">
          <a
            className="p-3 tracking-widest font-thin text-base hover:underline flex flex-row"
            href="/gallery"
          >
            Gallery
          </a>
        </li>
        <li className="font-serif">
          <a
            className="p-3 tracking-widest font-thin text-base hover:underline flex flex-row items-center gap-1"
            href="https://www.zola.com/registry/charlotteandchrismay11"
            target="_blank"
            rel="noreferrer"
          >
            Registry <NewTabIcon />
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
