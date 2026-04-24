import { useNavigate } from "react-router-dom";

export default function AdminLogin() {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#151b2d] font-sans p-4">
      <div className="w-full max-w-md overflow-hidden rounded-[2.5rem] bg-transparent shadow-2xl">
        <div className="rounded-t-[2.5rem] bg-[#212c4f] px-10 pt-10 pb-8 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-[#f1c40f] text-2xl">★</span>
              <h1 className="text-2xl font-bold tracking-tight">Vetess</h1>
            </div>
            <button className="text-gray-400 hover:text-white text-2xl leading-none">
              ✕
            </button>
          </div>
          <p className="mt-2 text-sm font-medium text-gray-400">
            Admin Portal Access
          </p>
        </div>

        <div className="bg-white p-10 rounded-b-[2.5rem]">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              navigate("/admin");
            }}
          >
            <div className="mb-6">
              <label className="mb-3 block text-sm font-bold text-gray-800">
                Email Address
              </label>
              <input
                type="email"
                placeholder="admin@vetess.org"
                className="w-full rounded-2xl border-[1.5px] border-[#ECC94B] bg-white px-5 py-4 text-gray-400 focus:border-[#D4A91E] focus:outline-none"
              />
            </div>

            <div className="mb-10">
              <label className="mb-3 block text-sm font-bold text-gray-800">
                Password
              </label>
              <input
                type="password"
                defaultValue="password"
                className="w-full rounded-2xl border-[1.5px] border-[#ECC94B] bg-white px-5 py-4 text-gray-400 focus:border-[#D4A91E] focus:outline-none"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-[1.25rem] bg-[#911b1d] py-5 text-lg font-bold text-white transition-opacity hover:opacity-90"
            >
              Sign In to Admin Portal
            </button>
          </form>

          <p className="mt-6 text-center text-xs font-medium text-gray-400">
            Demo mode: Click sign in with any credentials
          </p>
        </div>
      </div>
    </div>
  );
}
