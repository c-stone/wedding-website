function RelationshipInfo() {
  return (
    <div className="py-[150px] container mx-auto flex flex-col sm:flex-row">
      <div className="w-1/2 flex flex-col items-center justify-center border-r-2 border-r-black">
        <span className="text-3xl font-display font-bold tracking-widest uppercase pb-10">
          How we met
        </span>
        <span className=" text-xl font-serif font-thin tracking-widest pb-10">
          April 2019
        </span>
      </div>
      <div className="w-1/2 flex flex-col items-center">
        <span className="text-base font-light font-serif leading-8 text-center tracking-wider py-3 max-w-[400px] px-5">
          Charlotte and Chris both moved to Portland, Oregon in the Winter of
          2019 with the goal of settling into who they wanted to be. With the
          help of an app, they matched. Charlotte liked Chris’s travel photos
          and Chris was interested in Charlotte’s love of blueberries. They met
          at their local Princess Bride-themed bar, bonding over a love of dogs,
          food, and exploring the world. They quickly realized they wanted to
          spend every minute together, and in a few short weeks, they were in
          love.
        </span>
      </div>
    </div>
  );
}

export default RelationshipInfo;
