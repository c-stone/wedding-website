function Header() {
  return (
    <header>
      <nav>
        <ul className="flex">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/rsvp">RSVP</a>
          </li>
          <li>
            <a href="/travel">Travel</a>
          </li>
          <li>
            <a href="/schedule">Schedule</a>
          </li>
          <li>
            <a href="/gallery">Gallery</a>
          </li>
          <li>
            <a href="/registry">Registry</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
