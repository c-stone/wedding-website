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
            Charlotte and Chris both moved to Portland, Oregon in the Winter of
            2019 with the goal of settling into who they wanted to be. With the
            help of an app, they matched. Charlotte liked Chris’s travel photos
            and Chris was interested in Charlotte’s love of blueberries. They
            met at their local Princess Bride-themed bar, bonding over a love of
            dogs, food, and exploring the world. They quickly realized they
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
            Once Charlotte chose to move with Chris to the East coast, they knew
            it was time to make the next step in their relationship. The weekend
            before they began to pack for the move, under the guise of running
            errands, Chris turned the car toward Overlook Park. As they walked
            through the area they had their third date almost 4 years before,
            Chris lovingly explained everything about each other and their
            relationship that had brought them to that point. Getting down on
            one knee under the tree they had shared many meals, Chris asked
            Charlotte to be his life partner. The “yes” from Charlotte was
            instantaneous and they immediately went off to celebrate, excited to
            think about what the future would hold.
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
