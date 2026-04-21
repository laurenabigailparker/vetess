export default function ForVeterans() {
  return (
    <div className="mx-auto max-w-[1200px] px-5 py-12 md:py-20 md:px-10">
      <div className="flex flex-col items-center">
        <h1 className="font-display text-3xl md:text-5xl font-black text-navy-700 text-center leading-tight">
          Services for Veterans
        </h1>
        
        <p className="mt-4 text-base md:text-lg text-ink-body text-center max-w-2xl">
          Comprehensive support designed specifically for veterans and military
          families transitioning to civilian careers.
        </p>

        {/* CTA Button */}
        <div className="flex justify-center w-full md:w-auto">
          <a 
            href="/job-board"
            className="mt-8 md:mt-10 w-full md:w-auto text-center inline-block rounded-md bg-crimson-700 px-10 py-4 text-sm font-semibold !text-white transition-all hover:bg-crimson-500 active:scale-95 shadow-md"
          >
            View Job Board
          </a>
        </div>
      </div>
    </div>
  );
}
