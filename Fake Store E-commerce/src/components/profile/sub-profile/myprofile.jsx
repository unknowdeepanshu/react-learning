function Myprofile() {
  return (
    <>
      <div className="flex flex-1 flex-col gap-3">
        <h1 className="text-3xl text-white">My Profile</h1>
        <div className="bg-primary flex flex-1 flex-col justify-between rounded-3xl p-6">
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl text-white">Your details</h1>
            <input
              class="w-[280px] rounded-lg border-2 border-solid border-[#2D403F] bg-[#2D403F] px-4 py-3 text-white transition-colors duration-100 outline-none focus:border-[#2D403F]"
              placeholder="username"
              type="text"
              readOnly="true"
            />
            <input
              class="w-[280px] rounded-lg border-2 border-solid border-[#2D403F] bg-[#2D403F] px-4 py-3 text-white transition-colors duration-100 outline-none focus:border-[#2D403F]"
              placeholder="password"
              type="text"
              readOnly="true"
            />
          </div>
          <button className="bg-cardbtn hover:bg-bgprimary w-44 cursor-pointer self-end rounded-md p-3 text-white">
            Delete account
          </button>
        </div>
      </div>
    </>
  );
}

export default Myprofile;
