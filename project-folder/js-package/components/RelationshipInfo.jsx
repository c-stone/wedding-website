function RelationshipInfo() {
  return (
    <div className="pb-[150px] container mx-auto flex flex-col gap-24">
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex flex-col items-center justify-center">
          <span className="text-3xl font-display font-bold tracking-widest uppercase pb-10 text-nowrap">
            How we met
          </span>
          <span className=" text-xl font-serif font-thin tracking-widest pb-10">
            April 2019
          </span>
        </div>
        <div className="px-10 md:w-1/2 flex flex-col items-center md:border-l-2 md:border-l-black">
          <span className="text-sm font-light font-serif leading-8 text-center items-center tracking-wider py-5 md:max-w-[350px]">
            In the winter of 2019, Charlotte and Chris moved to Portland,
            Oregon, seeking personal growth. They connected through an app,
            drawn to each other&apos;s interests in travel and blueberries.
            Their first meeting at a Princess Bride-themed bar revealed shared
            passions for dogs, food, and exploration. They quickly realized they
            wanted to spend every minute together, and in a few short weeks,
            they were in love.
          </span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex flex-col items-center justify-center">
          <span className="text-3xl font-display font-bold tracking-widest uppercase pb-10 text-nowrap">
            The Proposal
          </span>
          <span className=" text-xl font-serif font-thin tracking-widest pb-10">
            March 2023
          </span>
        </div>
        <div className="px-10 md:w-1/2 flex flex-col items-center md:border-l-2 md:border-l-black">
          <span className="text-sm font-light font-serif leading-8 text-center items-center tracking-wider py-5 md:max-w-[350px]">
            When Charlotte agreed to move East with Chris, they were ready for a
            new chapter. Just before packing, Chris, under the guise of running
            errands, drove to Overlook Park, where they had their third date
            four years earlier. There, reminiscing about their journey together,
            Chris proposed under the tree where they&apos;d shared many meals.
            Charlotte&apos;s &quot;yes&quot; was immediate, and they joyfully
            celebrated, eager for their future together.
          </span>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 flex flex-col items-center justify-center">
          <span className="text-3xl font-display font-bold tracking-widest uppercase pb-10 text-nowrap">
            The Wedding
          </span>
          <span className=" text-xl font-serif font-thin tracking-widest pb-10">
            May 11th, 2023
          </span>
        </div>
        <div className="px-10 md:w-1/2 flex flex-col items-center md:border-l-2 md:border-l-black">
          <span className="text-sm font-light font-serif leading-8 text-center items-center tracking-wider py-5 md:max-w-[350px]">
            We are excited to invite you to our wedding ceremony at Laconia
            Plaza, Biddeford, Maine. Following the ceremony, join us for a
            reception at{' '}
            <a
              href="https://sacredprofane.com/"
              className="hover:underline text-amber-700"
            >
              Sacred Profane
            </a>
            .
          </span>
        </div>
      </div>
    </div>
  );
}

export default RelationshipInfo;
