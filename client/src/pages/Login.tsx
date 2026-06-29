import { useState } from "react"
import { heroSectionData } from "../assets/assets";
import { Link, useNavigate } from "react-router-dom";
import {  Loader2Icon, LockIcon, MailIcon, ShoppingBag, ShoppingBagIcon, Store, UserIcon } from "lucide-react";

const Login = () => {

    const [isLogin, setIsLogin] = useState(true);
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);  
    const navigate = useNavigate();

    const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {navigate('/')}, 1000)
  };

    return (

    <div className="min-h-screen flex">
      
      <div className="hidden lg:flex lg:w-1/2 bg-app-green relative items-center justify-center">
        <img src={heroSectionData.fruits_banner} alt="" 
        className="absolute inset-0 object-cover h-full bg-center opacity-10" />
        <div className="relative text-center px-12">
          <h2 className="text-4xl font-semibold text-white mb-4">Welcome back to GrossaryMart</h2>
          <p className="text-white/60 font-serif text-xl max-w-sm mx-auto">
            Fresh groceries and organic prooduce, delivered to your dooestep.</p>
        </div>
      </div>
      
      <div className="flex-1 flex-center px-4 py-12 bg-app-cream">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <Link to='/' className="inline-flex items-center gap-2 mb-6">
              <ShoppingBag className="size-8 text-app-green"/>
              <span className="text-2xl font-semibold text-app-green">GrossaryMart</span>
            </Link>
            <h1 className="text-2xl font-semibold text-app-green mb-2">
              { isLogin ? 'Sign in to your account' : ' Sign up for an account'}
            </h1>
            <p className="text-sm text-app-text-light"> 
              { isLogin ? "Don't have an account?" : "Already have an account" }
              <button onClick={() => setIsLogin(!isLogin)}
                className="text-orange-500 ml-1 font-semibold hover:text-orange-600 transition-colors">
                { isLogin ? 'Create one' : 'Sign in' }</button>
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

  {/* Register Only */}
  {!isLogin && (
    <label className="text-sm flex flex-col gap-1">
      Name
      <div className="relative">
        <UserIcon
          className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-app-text-light"
        />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          placeholder="Your name"
          className="w-full pl-11 pr-4 py-3 text-sm bg-white rounded-lg border border-app-border focus:border-app-green focus:outline-none transition-all"
        />
      </div>
    </label>
  )}

  {/* Email */}
  <label className="text-sm flex flex-col gap-1">
    Email
    <div className="relative">
      <MailIcon
        className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-app-text-light"
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="Enter your email"
        className="w-full pl-11 pr-4 py-3 text-sm bg-white rounded-lg border border-app-border focus:border-app-green focus:outline-none transition-all"
      />
    </div>
  </label>

  {/* Password */}
  <label className="text-sm flex flex-col gap-1">
    Password
    <div className="relative">
      <LockIcon
        className="absolute left-3.5 top-1/2 -translate-y-1/2 size-4 text-app-text-light"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        placeholder="********"
        className="w-full pl-11 pr-4 py-3 text-sm bg-white rounded-lg border border-app-border focus:border-app-green focus:outline-none transition-all"
      />
    </div>
  </label>

  {/* Forgot Password */}
  {isLogin && (
    <div className="flex justify-end">
      <button
        type="button"
        className="text-sm text-app-green hover:underline"
      >
        Forgot Password?
      </button>
    </div>
  )}

  {/* Submit Button */}
  <button
    type="submit"
    disabled={loading}
    className="flex-center w-full bg-green-800 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors 
    disabled:opacity-60 disabled:cursor-not-allowed"
  >
    {loading
      ? <Loader2Icon className='animate-spin' />
      : isLogin
      ? "Sign In"
      : "Create Account"}
  </button>
</form>





        </div>
      </div>

    
    </div>
  )
}

export default Login