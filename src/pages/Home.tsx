import AutoSlider from "../components/AutoSlider";
import Stadiums from "../components/Stadiums";
import Transfers from "../components/Transfers";
import { sampleStadiums, sampleTransfers } from '../globals/variables';

const Home = () => {

  const sliderWords = ['football', 'soccer', "Ballon D'or", 'hattrick', 'el clasico', 'uefa champions league', 'world cup', 'penalty', 'goal', 'assist', 'messi', 'football', 'soccer', "Ballon D'or", 'hattrick', 'el clasico', 'uefa champions league', 'world cup', 'penalty', 'goal', 'assist', 'messi'];


  return (
    <>
      <main>
        <div className="breakContainer bg-soccer bg-cover bg-center bg-no-repeat mt-[-160px] h-[600px] md:h-[700px] relative">
          <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50"> <h1 className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-6xl md:text-8xl text-center">Amazing Football With Us</h1></div>
        </div>

        <section className="mt-10">

          <h1 className="text-center font-bold text-4xl">Why <span className="text-green-500">us?</span></h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 place-items-center gap-x-4 gap-y-6 lg:gap-x-0">

            <div className="max-w-sm rounded shadow-md">
              <img width={'100px'} className="mx-auto" src="/svgs/expertise.svg" alt="Coverage SVG" />
              <div className="px-6 py-4">
                <h3 className="font-bold text-xl mb-2 text-center">Unmatched expertise</h3>
                <p className="text-base text-center">
                  Our team consists of passionate soccer experts with in-depth knowledge of the game. Trust in their expertise as they bring you accurate and insightful information, keeping you informed and engaged with the world of soccer.
                </p>
              </div>
            </div>


            <div className="max-w-sm rounded shadow-md">
              <img width={'100px'} className="mx-auto" src="/svgs/coverage.svg" alt="Coverage SVG" />

              <div className="px-6 py-4">
                <h3 className="font-bold text-xl mb-2 text-center">Extensive coverage</h3>
                <p className="text-base text-center">
                  We provide comprehensive information on global leagues, tournaments, and players. From major international competitions to local matches, we have you covered, ensuring you never miss a moment of the action.
                </p>
              </div>
            </div>

            <div className="max-w-sm rounded shadow-md">
              <img width={'100px'} className="mx-auto" src="/svgs/content.svg" alt="Coverage SVG" />
              <div className="px-6 py-4">
                <h3 className="font-bold text-xl mb-2 text-center">Engaging and captivating content</h3>
                <p className="text-base text-center">
                  Our articles and features are carefully crafted to ignite your passion for soccer. Dive into captivating narratives, inspiring player stories, and thought-provoking analysis that will keep you coming back for more.
                </p>
              </div>
            </div>

            <div className="max-w-sm rounded shadow-md">
              <img width={'100px'} className="mx-auto" src="/svgs/userFriendly.svg" alt="Coverage SVG" />
              <div className="px-6 py-4">
                <h3 className="font-bold text-xl mb-2 text-center">User-friendly experience</h3>
                <p className="text-base text-center">
                  Our platform offers easy navigation and accessibility on all devices. Enjoy a seamless browsing experience as you explore our content, whether you're on your computer, tablet, or smartphone.
                </p>
              </div>
            </div>

            <div className="max-w-sm rounded shadow-md">
              <img width={'100px'} className="mx-auto" src="/svgs/community.svg" alt="Coverage SVG" />
              <div className="px-6 py-4">
                <h3 className="font-bold text-xl mb-2 text-center">Thriving community</h3>
                <p className="text-base text-center">
                  Join our active community to connect with fellow fans and engage in discussions. Share your thoughts, celebrate victories, and debate the hottest topics in the soccer world, creating meaningful connections along the way.
                </p>
              </div>
            </div>

            <div className="max-w-sm rounded shadow-md">
              <img width={'100px'} className="mx-auto" src="/svgs/innovative.svg" alt="Coverage SVG" />
              <div className="px-6 py-4">
                <h3 className="font-bold text-xl mb-2 text-center">Innovative approach</h3>
                <p className="text-base text-center">
                  We embrace new technologies to enhance your soccer experience. Stay at the forefront of innovation with our cutting-edge features, bringing you closer to the game and amplifying your enjoyment.
                </p>
              </div>
            </div>





          </div>


        </section>

        <section className="breakContainer text-amber-300 bg-stadium bg-cover bg-bottom md:bg-center bg-no-repeat h-[300px] md:h-[400px] w-[400px] relative mt-10">
          <div className="z-0 absolute top-0 left-0 w-full h-full" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}></div>
          <h2 className="text-center text-4xl font-bold underline  relative pt-8 -mb-10">Our Services</h2>
          <div className="container mx-auto relative h-full flex flex-col items-between justify-center">
            <ul className="list-disc flex flex-col md:flex-row justify-between text-2xl font-bold text-center">
              <li className="">Live Scores</li>
              <li className="mt-4 md:mt-0">100 + International Teams</li>
              <li className="mt-4 md:mt-0">500 + Players</li>
              <li className="mt-4 md:mt-0">Up to date statistics</li>
            </ul>
          </div>
        </section>


        <div className="breakContainer mt-5">
          <AutoSlider sliderWords={sliderWords} ></AutoSlider>
        </div>

        <section className="mt-10 text-center">
          <h2 className="text-4xl font-bold text-green-400">Events</h2>

          <div className="mt-10">
            <h3 className="text-2xl font-bold">Transfers</h3>

            <Transfers transfers={sampleTransfers}></Transfers>
          </div>

          <div className="mt-10 bg-green-600 dark:bg-green-800 breakContainer p-10">
            <h3 className="text-2xl font-bold">Stadiums</h3>

            <Stadiums stadiums={sampleStadiums}></Stadiums>

          </div>

        </section>


        <section className="mt-10">

          <h2 className="text-center text-4xl font-bold">Story</h2>
          <section className="grid grid-cols-1 md:grid-cols-2 mt-0 md:mt-10">
            <div className="max-w-screen-xl px-4 py-8 mx-auto text-center lg:py-16 lg:px-6">

              <blockquote className="flex flex-row">
                <svg className="h-100 w-100 text-gray-400 dark:text-gray-600 mb-auto" viewBox="0 0 24 27" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z" fill="currentColor" />
                </svg>
                <p className="text-lg font- medium"> Football is much more than a game. It is a passion that runs through our veins and makes us feel alive. It is the stage where dreams come true and legends are forged. It is a sport that transcends barriers, bringing people from different cultures and nationalities together for a common cause. When you step onto the field, you feel an indescribable energy. It's as if the world stops and only that moment, that ball, that opportunity exist. It is a constant challenge, a battle to surpass oneself and leave a mark in history. Football teaches you valuable lessons about teamwork, sacrifice, and resilience. You learn that success doesn't come overnight but through endless hours of training and dedication. You discover that every defeat is an opportunity to grow and every victory is the result of collective effort." -<span className=" font-serif"> Ronaldinho Gaucho</span></p>
              </blockquote>
            </div>
            <div className="my-auto">
              <img className=" shadow-2xl" src="/images/normal/ronaldinhoFrase.png" alt="" />
            </div>
          </section>

        </section>
      </main>
    </>
  );
};

export default Home;
