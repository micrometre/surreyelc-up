import Image from "next/image";

export default function Heading() {
  return (

    <div className="relative overflow-hidden   bg-white rounded-lg dark:bg-black mt-14 transition duration-300">
      <div className="mx-auto max-w-7xl">
        <div className="relative z-10 pb-6 sm:pb-16 md:pb-20 lg:w-full lg:max-w-2xl lg:pb-28 xl:pb-32 ">
          <div className="flex justify-center items-center flex-col">
            <div className="  transition duration-300">
              <main className="mx-auto mt-24 max-w-7xl px-6 sm:mt-14 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white  sm:text-6xl md:text-4xl">
                    <span className="block xl:inline">
                      Electrical specialists <br />serving surrey and surrounding areas.
                    </span>{' '}
                  </h1>
                </div>

              </main>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:absolute lg:inset-y-20 lg:right-0 lg:w-1/2
      flex w-full itaems-center justify-center  drop-shadow-lg
          md:text-lg
            ">
        <Image
          src="/logo.webp"
          alt="logo"
          width={477}
          height={168}
          priority
        />
      </div>
    </div>
  )
}