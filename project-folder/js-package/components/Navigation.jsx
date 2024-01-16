function Navigation() {
  return (
    <nav className="w-full flex flex-col items-center">
      <ul className="w-full flex flex-row flex-wrap justify-center gap-2">
        <li className="font-serif">
          <a
            className="p-3 tracking-widest font-thin text-base hover:underline"
            href="/"
          >
            Home
          </a>
        </li>
        <li className="font-serif">
          <a
            className="p-3 tracking-widest font-thin text-base hover:underline"
            href="/rsvp"
          >
            RSVP
          </a>
        </li>
        <li className="font-serif">
          <a
            className="p-3 tracking-widest font-thin text-base hover:underline"
            href="/travel"
          >
            Travel
          </a>
        </li>
        <li className="font-serif">
          <a
            className="p-3 tracking-widest font-thin text-base hover:underline"
            href="/schedule"
          >
            Schedule
          </a>
        </li>
        <li className="font-serif">
          <a
            className="p-3 tracking-widest font-thin text-base hover:underline"
            href="/gallery"
          >
            Gallery
          </a>
        </li>
        <li className="font-serif">
          <a
            className="p-3 tracking-widest font-thin text-base hover:underline"
            href="/registry"
          >
            Registry
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
