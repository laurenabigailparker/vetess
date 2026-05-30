import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../lib/supabase";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("admin@vetess.org");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMessage("");
    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setErrorMessage(error.message);
      return;
    }

    navigate("/admin");
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#151b2d] p-4 font-sans">
      <div className="w-full max-w-md overflow-hidden rounded-[2.5rem] bg-transparent shadow-2xl">
        <div className="rounded-t-[2.5rem] bg-[#212c4f] px-10 pb-8 pt-10 text-white">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-2xl text-[#f1c40f]">★</span>
              <h1 className="text-2xl font-bold tracking-tight">Vetess</h1>
            </div>

            <button
  type="button"
  onClick={() => navigate("/")}
  className="rounded-xl border border-gray-500 px-3 py-2 text-sm font-semibold text-gray-300 transition hover:bg-white/10 hover:text-white"
>
  ← Back to Website
</button>
          </div>

          <p className="mt-2 text-sm font-medium text-gray-400">
            Admin Portal Access
          </p>
        </div>

        <div className="rounded-b-[2.5rem] bg-white p-10">
          <form onSubmit={handleLogin}>
            <div className="mb-6">
              <label className="mb-3 block text-sm font-bold text-gray-800">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@vetess.org"
                className="w-full rounded-2xl border-[1.5px] border-[#ECC94B] bg-white px-5 py-4 text-gray-700 focus:border-[#D4A91E] focus:outline-none"
              />
            </div>

            <div className="mb-6">
              <label className="mb-3 block text-sm font-bold text-gray-800">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter admin password"
                className="w-full rounded-2xl border-[1.5px] border-[#ECC94B] bg-white px-5 py-4 text-gray-700 focus:border-[#D4A91E] focus:outline-none"
              />
            </div>

            {errorMessage && (
              <p className="mb-6 rounded-2xl bg-red-50 px-4 py-3 text-sm font-semibold text-red-700">
                {errorMessage}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full rounded-[1.25rem] bg-[#911b1d] py-5 text-lg font-bold text-white transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Signing In..." : "Sign In to Admin Portal"}
            </button>
          </form>

          <p className="mt-6 text-center text-xs font-medium text-gray-400">
            Protected with Supabase Auth
          </p>
        </div>
      </div>
    </div>
  );
}