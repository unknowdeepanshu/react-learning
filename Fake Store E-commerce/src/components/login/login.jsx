function Login() {
  const svg = [
    {
      img: "/icon/google.svg",
    },
    {
      img: "/icon/facebook.svg",
    },
    {
      img: "/icon/github.svg",
    },
  ];
  return (
    <>
      <div className="bg-60sencondary flex h-screen w-full">
        <div className="flex flex-1 items-center justify-center">
          <div className="flex flex-col gap-4">
            <h1 className="pl-20 text-5xl text-white">Welcome e-commerce</h1>
            <h2 className="pl-20 text-[32px] text-white">Log in</h2>
            <div className="flex flex-col gap-3 pl-20">
              <input
                type="text"
                placeholder="Username"
                className="peer border-Cline focus:border-10blue mt-4 w-2xs border-b bg-inherit py-1 text-white transition-colors focus:border-b-2 focus:outline-none"
              />

              <input
                type="text"
                placeholder="Password"
                className="peer border-Cline focus:border-10blue mt-4 w-2xs border-b bg-inherit py-1 text-white transition-colors focus:border-b-2 focus:outline-none"
              />
            </div>
            <div className="mt-10 flex flex-col items-center">
              <button className="bg-primary w-40 cursor-pointer rounded-3xl p-1 text-2xl text-white">
                Login
              </button>

              <span className="mt-4 text-[14px] text-white">
                or continue with
              </span>
              <div className="mt-4 flex gap-10">
                {svg.map((items) => (
                  <a
                    href="#"
                    className="flex w-24 justify-center rounded-[0.5rem] bg-white p-2"
                  >
                    <img src={items.img} className="h-10 w-10" />
                  </a>
                ))}
              </div>

              <span className="mt-4 text-[14px] text-white">
                Disclaimer: Google,github and facebook login not working because
                not use for this project
              </span>
            </div>
          </div>
        </div>
        <div className="bg-30blue flex flex-1 justify-center rounded-l-4xl">
          <img src="/man.svg" className="w-96" />
        </div>
      </div>
    </>
  );
}

export default Login;
