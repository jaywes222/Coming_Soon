import Logo from '../src/assets/Logo.svg';

const App = () => {
  return (
    <section className="relative flex h-screen w-screen flex-col overflow-hidden [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]">
      {/* Header with logo and call-to-action button */}
      <header className="relative z-20 mx-auto flex h-24 w-full max-w-7xl items-center justify-between px-6 text-white">
        {/* Logo */}
        <div className="flex items-center">
          <a href="#_" aria-label="Go to home page">
            <img src={Logo} alt="Company Logo" className="w-32 h-auto mt-5" />
          </a>
        </div>

        {/* Call-to-action button */}
        <div className="relative">
          <a
            href="#_"
            className="w-auto flex-shrink-0 rounded-full bg-secondary sm:px-5 px-4 py-3 text-xs sm:text-sm font-medium text-black border-2 border-primary hover:bg-quaternary transition duration-300"
          >
            Stay Ahead of the Curve
          </a>
        </div>
      </header>

      {/* Main content area with headline, description, and email signup */}
      <main className="relative py-10 z-20 px-10 md:px-6 h-full w-screen text-white">
        <div className="mx-auto flex h-full w-full max-w-4xl flex-col md:items-center justify-center space-y-6 md:text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-primary">
            Krafting Experiences.
            <span className="block text-secondary bg-clip-text">
              With Purpose.
            </span>
          </h1>
          <p className="mx-auto max-w-2xl sm:text-lg md:text-xl md:leading-8 text-gray-500">
            Get ready for sleek, intuitive, and impactful digital solutions that don’t just work—they wow. Sign up to stay ahead of the curve with SkeptiKrafts!
          </p>

          {/* Email signup */}
          <form
            className="flex w-full max-w-lg items-center rounded-full border-2 border-primary bg-white bg-opacity-60 p-1"
            method="post"
            action="https://chansd.us11.list-manage.com/subscribe/post?u=4ed755a74d6fe3e5327388f18&amp;id=1d016e9b66&amp;f_id=003992e0f0"  
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            target="_blank"
          >
            <input type="hidden" name="b_4ed755a74d6fe3e5327388f18_1d016e9b66" tabIndex="-1" value="" />
            <input
              type="text"
              className="w-full bg-transparent bg-none px-5 font-medium text-black focus:outline-none"
              placeholder="Email Address"
              autoFocus=""
              name='EMAIL'
            />
            <button
              className="w-auto flex-shrink-0 rounded-full bg-secondary px-5 py-3 text-sm font-medium text-black border-2 border-primary hover:bg-quaternary transition duration-300"
            >
              Get Notified
            </button>
          </form>
        </div>
      </main>

      {/* Footer with trusted by logos */}
      <footer className="z-20 h-auto md:h-32 w-full flex-shrink-0 pb-16 md:pb-10 text-white">
        <div className="w-full text-black text-center text-sm font-semibold md:pb-0 pb-5">
          Already Trusted by Many
        </div>
        <div className="grid h-full w-full max-w-4xl mx-auto grid-cols-3 sm:grid-cols-6 md:gap-0 gap-5 md:grid-cols-5 items-center px-6">
          <a href="#_" className="flex h-full items-center justify-center md:col-span-1 sm:col-span-2">
            <img src="https://cdn.devdojo.com/images/january2023/logo-01.png" className="w-16 h-auto" alt="Logo 01" />
          </a>
          <a href="#_" className="flex h-full items-center justify-center md:col-span-1 sm:col-span-2">
            <img src="https://cdn.devdojo.com/images/january2023/logo-02.png" className="h-8 w-auto" alt="Logo 02" />
          </a>
          <a href="#_" className="flex h-full items-center justify-center md:col-span-1 sm:col-span-2">
            <img src="https://cdn.devdojo.com/images/january2023/logo-03.png" className="h-10 w-auto" alt="Logo 03" />
          </a>
          <a href="#_" className="h-full items-center justify-center md:col-span-1 sm:col-span-3 sm:flex hidden">
            <img src="https://cdn.devdojo.com/images/january2023/logo-04.png" className="h-9 w-auto" alt="Logo 04" />
          </a>
          <a href="#_" className="h-full items-center justify-center md:col-span-1 sm:col-span-3 sm:flex hidden">
            <img src="https://cdn.devdojo.com/images/january2023/logo-05.png" className="h-11 w-auto" alt="Logo 05" />
          </a>
        </div>
      </footer>
    </section>
  );
};

export default App;
