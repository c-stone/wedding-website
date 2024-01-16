import floralArch from '../assets/floral-arch.png';

function InviteInfo() {
  return (
    <div className="py-[150px] flex flex-col gap-20">
      <div className="flex flex-col items-center container mx-auto">
        <span className="text-3xl font-display font-bold tracking-widest uppercase pb-10">
          Charlotte Skalski
        </span>
        <span className=" text-xl font-serif font-thin tracking-widest pb-10">
          and
        </span>
        <span className="text-3xl font-display font-bold tracking-widest pb-10 uppercase">
          Chris Stone
        </span>
      </div>
      <div className="flex flex-col items-center container mx-auto">
        <span className="text-3xl font-display font-bold tracking-widest uppercase pb-10">
          May 11, 2024
        </span>
        <span className="uppercase text-xl font-thin font-serif tracking-widest">
          Biddeford, ME
        </span>
        <img className="relative w-[300px]" src={floralArch}></img>
      </div>
    </div>
  );
}

export default InviteInfo;
