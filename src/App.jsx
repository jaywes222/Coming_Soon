import Logo from '../src/assets/Logo.svg';
import Monkey from '../src/assets/Monkey.jpeg';

const App = () => {
  return (
    <section className="relative flex w-full h-screen flex-col overflow-visible bg-[radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]">
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
      <main className="container mx-auto flex flex-col lg:flex-row px-5 py-8 lg:py-0">
        {/* Left Content */}
        <div className="flex-1 flex flex-col justify-center items-start text-center lg:text-left">
          <h1 className="my-4 mt-36 text-gray-800 text-3xl xl:text-4xl font-extrabold mb-8">
            Elevate Your Ideas with{' '}
            <span className="text-secondary">SkeptiKrafts</span>
          </h1>
          <p className="leading-normal mb-12 text-gray-600 xl:text-lg">
            Transform your digital vision into sleek, intuitive, and purposeful
            experiences. Stay ahead of the curve with the latest in tech, design, and storytelling.
          </p>

          {/* Email Signup Form */}
          <form
            className="flex flex-col sm:flex-row w-full px-0 mb-4"
            action="https://chansd.us11.list-manage.com/subscribe/post?u=4ed755a74d6fe3e5327388f18&amp;id=1d016e9b66&amp;f_id=003992e0f0"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            target="_blank"
          >
            <input
              className="bg-white border-2 border-gray-300 rounded py-2 px-4 block w-full sm:w-2/3 focus:outline-none focus:border-primary text-black mb-4 sm:mb-0"
              id="email"
              type="email"
              name="EMAIL"
              placeholder="you@example.com"
              autoFocus
            />
            <button
              type="submit"
              className="hover:bg-tertiary text-white sm:ml-4 py-2 px-6 rounded bg-primary font-bold w-full sm:w-1/3"
            >
              Stay Updated
            </button>
          </form>

          {/* Call to Action */}
          <div className="mt-8 mb-1 flex flex-col sm:flex-row items-center text-sm border bg-gray-100 border-gray-400 rounded-full p-4 sm:p-2 text-gray-700 mx-auto lg:mx-0">
            <span className="bg-secondary text-white rounded-full px-4 py-2 mb-3 sm:mb-0 sm:mr-3">
              Join Now
            </span>
            <span className="px-4 sm:px-2 flex items-center text-center sm:text-left">
              Gain Exclusive Insights and Get Early Access to our Innovations!
            </span>
          </div>
        </div>

        {/* Right Content */}
        <div className="flex-1 flex justify-center items-center px-5 lg:px-10">
          <img
            src={Monkey}
            className="w-full max-h-[100vh] object-contain hidden lg:block"
            alt="SkeptiKrafts Hero Image"
          />
        </div>

      </main>

      {/* Features Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-5">
          <h2 className="text-2xl sm:text-4xl font-bold text-left text-primary uppercase mb-4">
            Our Features
          </h2>
          <p className="text-xl text-gray-500 mb-8">
            Find out how we are different than the rest
          </p>

          {/* Feature 1 */}
          <div className="block md:flex flex-wrap mb-16 bg-white rounded shadow overflow-hidden">
            <div className="w-full md:w-1/2">
              <img src="./stripe.png" alt="Integrate payments" className="w-full" />
            </div>
            <div className="w-full md:w-1/2 py-12 md:py-0 flex flex-col justify-center px-8 sm:px-16">
              <h3 className="text-xl lg:text-3xl font-bold leading-none mb-3 mt-16 text-gray-700">
                Integrate your own payments
              </h3>
              <p className="text-gray-600 text-xs">
                You can integrate your Stripe or Braintree payment system right into
                your course. This means when someone pays for your course, the money
                will be deposited directly into your account!
              </p>
            </div>
          </div>

          {/* Feature 2 */}
          <div className="block md:flex flex-wrap mb-16 bg-white rounded shadow overflow-hidden">
            <div className="w-full md:w-1/2 py-12 md:py-0 flex flex-col justify-center px-8 sm:px-16">
              <h3 className="text-xl lg:text-3xl font-bold leading-none mb-3 mt-16 text-gray-700">
                Developer focused courses
              </h3>
              <p className="text-gray-600 text-xs">
                Display code examples and allow users to download files. WeTeach is
                focused on developers teaching other people to become developers.
              </p>
            </div>
            <div className="w-full md:w-1/2">
              <img src="./screenshot.png" alt="Developer focused courses" className="w-full" />
            </div>
          </div>
        </div>
      </section>

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
