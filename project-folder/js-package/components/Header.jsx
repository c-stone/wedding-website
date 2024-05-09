import Navigation from './Navigation';

function Header() {
  return (
    <>
      <header className="p-4 sticky top-0 z-50 bg-white">
        <div className="container mx-auto">
          <h1 className="w-full font-display text-center text-4xl font-bold tracking-wider pb-4">
            Charlotte & Chris
          </h1>
          <Navigation />
        </div>
      </header>
      <div className="relative isolate flex items-center gap-x-6 overflow-hidden bg-amber-500 px-6 py-2.5 sm:px-3.5 sm:before:flex-1">
        <div
          className="absolute left-[max(-7rem,calc(50%-52rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          aria-hidden="true"
        >
          <div className="aspect-[577/310] w-[36.0625rem] bg-amber-500 opacity-30" />
        </div>
        <div
          className="absolute left-[max(45rem,calc(50%+8rem))] top-1/2 -z-10 -translate-y-1/2 transform-gpu blur-2xl"
          aria-hidden="true"
        >
          <div className="aspect-[577/310] w-[36.0625rem] bg-amber-500 opacity-30" />
        </div>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <p className="text-sm leading-6 text-gray-900">
            Due to potential rain, we&apos;ve moved our wedding ceremony to
            Sacred Profane.
          </p>
          <a
            href="/schedule"
            className="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900"
          >
            View Schedule <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
        <div className="flex flex-1 justify-end">
          <button
            type="button"
            className="-m-3 p-3 focus-visible:outline-offset-[-4px]"
          >
            <span className="sr-only">Dismiss</span>
          </button>
        </div>
      </div>
    </>
  );
}

export default Header;
