function HomePage() {
  return (
    <div className="flex flex-col gap-16">
      <h1 className="font-bebas text-lg sm:text-2xl 2xl:text-4xl dark:text-primary-dark transition-all duration-200 2xl:p-4 tracking-wide text-center p-2 sm:w-2/3 bg-primary-light mx-auto rounded-lg mt-4">
        Welcome! Create your room and chat privately
      </h1>
      <div className="flex justify-center items-center gap-6">
        <div className="flex flex-col items-center gap-16">
          <div className="w-[150px] h-[150px] sm:w-[225px] sm:h-[200px] 2xl:w-[325px] 2xl:h-[300px]">
            <img
              src="../src/resources/illustration1.png"
              className="h-full w-full  rounded-lg"
            />
          </div>
          <button className="bg-neutral-light-gray  px-4  py-2 sm:px-8 2xl:py-4 2xl:px-16 2xl:text-2xl font-inter text-primary-dark rounded font-semibold">
            Create Room
          </button>
        </div>
        <div className="flex flex-col items-center gap-16">
          <div className="w-[150px] h-[150px] sm:w-[225px] sm:h-[200px] 2xl:w-[325px] 2xl:h-[300px]">
            <img
              src="../src/resources/illustration2.png"
              className="h-full w-full  rounded-lg"
            />
          </div>
          <button className="bg-neutral-light-pink font-inter text-primary-dark  px-4 py-2 sm:px-8 2xl:py-4 2xl:px-16 2xl:text-2xl rounded font-semibold">
            Join Room
          </button>
        </div>
      </div>
      <p className="font-chewy  dark:text-accent-red-medium transition-all duration-200 text-lg sm:text-2xl 2xl:text-4xl text-center text-accent-red-dark sm:w-1/3 w-2/3 mx-auto mt-6">
        we don&apos;t store any chat history everything get lost when you exit.
      </p>
    </div>
  );
}

export default HomePage;
