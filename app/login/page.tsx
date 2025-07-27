"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    router.push("/dashboard")
    //api logic
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-[#F5F5F5] px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white w-full max-w-md lg:max-w-[30rem] p-8 rounded-xl shadow-md"
      >
        <div className="mb-8">
          <h2 className={`text-2xl md:text-3xl font-bold mb-1`} style={{ fontFamily: "Sora, system-ui, sans-serif" }}>
            Welcome Back!
          </h2>
          <p className="text-sm text-gray-600">Kindly provide your details to login to your dashboard.</p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit}>
          {/* Email */}
          <div>
            <label htmlFor="email" className="block font-semibold mb-1 text-sm">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Enter your email address"
              onChange={handleChange}
              className="w-full border border-[#BBBBBB] rounded-lg px-3 py-2 outline-none"
            />
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block font-semibold mb-1 text-sm">
              Password
            </label>
            <div className="relative">
              <input
                id="password"
                name="password"
                type={showPassword ? "text" : "password"}
                placeholder="Enter password"
                onChange={handleChange}
                className="w-full border border-[#BBBBBB] rounded-lg px-3 py-2 outline-none pr-10"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 cursor-pointer"
              >
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </button>
            </div>
            <div className="text-right mt-2">
              <a href="#" className="text-xs text-[#1C3FAA] font-medium hover:underline">
                Forgot Password?
              </a>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-[#1C3FAA] hover:bg-[#17389D] text-white font-semibold py-2 rounded-lg transition cursor-pointer"
          >
            Login to Dashboard
          </button>
        </form>
      </motion.div>
    </section>
  );
}


//created by Omodara Ayodele 
//github: OmodaraAyo
