import Logo from '../src/assets/Logo.svg';

const App = () => {
  return (
    <section className="relative flex h-screen w-screen flex-col overflow-hidden bg-[radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]">
      {/* Top Color Bar */}
      <div className="h-2 bg-gradient-45 w-full absolute z-20"></div>

      {/* Header */}
      <header className="relative z-20 mx-auto flex h-24 w-full max-w-7xl items-center justify-between px-6">
        <a href="#_" aria-label="Go to home page">
          <img src={Logo} alt="Company Logo" className="w-32 mt-8" />
        </a>
        <a
          href="#_"
          className="rounded-full bg-secondary px-4 py-3 text-sm font-medium text-black border-2 border-primary hover:bg-quaternary transition duration-300"
        >
          Stay Ahead of the Curve
        </a>
      </header>

      {/* Main Content */}
      <div className="container mx-auto flex flex-col lg:flex-row px-5">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center items-start">
          <h1 className="my-4 mt-24 text-center lg:text-left w-full px-2 text-gray-800 text-3xl xl:text-4xl font-extrabold mb-8">
            Elevate Your Ideas with{' '}
            <span className="text-secondary">SkeptiKrafts</span>
          </h1>
          <p className="leading-relaxed mb-12 text-normal xl:text-lg text-center lg:text-left w-full px-4 lg:px-0 text-gray-600">
            Transform your digital vision into sleek, intuitive, and purposeful
            experiences. Stay ahead of the curve with the latest in tech,
            design, and storytelling.
          </p>

          {/* Email Signup Form */}
          <form
            className="block sm:flex w-full px-0"
            action="https://chansd.us11.list-manage.com/subscribe/post?u=4ed755a74d6fe3e5327388f18&amp;id=1d016e9b66&amp;f_id=003992e0f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            target="_blank"
          >
            <input
              className="bg-white border-2 border-gray-300 rounded py-2 px-4 block w-full focus:outline-none focus:border-primary text-black"
              id="email"
              type="email"
              name="EMAIL"
              placeholder="you@example.com"
              autoFocus
            />
            <input
              type="hidden"
              name="b_4ed755a74d6fe3e5327388f18_1d016e9b66"
              tabIndex="-1"
              value=""
            />
            <button
              type="submit"
              className="hover:bg-tertiary text-white ml-0 sm:ml-4 py-2 px-6 rounded bg-primary font-bold w-full sm:w-1/3 mt-4 sm:mt-0"
            >
              Stay Updated
            </button>
          </form>

          {/* Call to Action */}
          <div className="mt-8 flex text-sm border border-gray-200 rounded-full p-2 text-gray-700 mx-auto lg:mx-0">
            <span className="bg-secondary text-white rounded-full px-3 h-6 flex items-center xl:inline">
              Join Now
            </span>
            <span className="px-2 flex items-center">
              Gain Exclusive Insights and Get Early Access to our Innovations!
            </span>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 hidden lg:flex items-center justify-center relative pl-16">
          <img
            src="./skeptikrafts-hero.jpg"
            className="w-full object-cover relative bottom-0 z-10 mt-32"
            alt="SkeptiKrafts Hero Image"
          />
        </div>
      </div>

      {/* Footer */}
      <footer className="z-20 pb-10 text-center text-sm font-semibold text-black">
        <p>Already Trusted by Many</p>
        <div className="mt-4 grid grid-cols-3 sm:grid-cols-6 gap-5 items-center max-w-4xl mx-auto">
          {[...Array(5)].map((_, idx) => (
            <a
              key={idx}
              href="#_"
              className="flex items-center justify-center"
            >
              <img
                src={`https://cdn.devdojo.com/images/january2023/logo-0${idx + 1}.png`}
                alt={`Logo ${idx + 1}`}
                className="h-10 w-auto"
              />
            </a>
          ))}
        </div>
      </footer>
    </section>
  );
};

export default App;
