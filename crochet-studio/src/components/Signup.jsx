import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';
import { FaUser, FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'

function Signup() {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate();

    // function for handling the signup after submit is clicked
    const handleSignup = async (e) => {
        try {
            e.preventDefault();
            await axios.post('https://carrecovery-credentials.onrender.com/register', { name, email, password });
            alert('You have successfully Registered Login now');
            navigate('/login')

        } catch (error) {
            console.error(error)
            alert('Error has occurred during sign up')
        }
    }

    return (
        <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-amber-100 to-cyan-50">
            <div className="w-full max-w-md mx-auto p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
                <form onSubmit={handleSignup}>
                    <h1 className="text-slate-700 font-bold text-center text-3xl mb-2">Join Us</h1>
                    <p className="text-gray-500 text-center mb-8">Create your account to get started</p>
                    
                    <div className="space-y-5">
                        {/* Username Input */}
                        <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl bg-gray-50 hover:bg-white transition-all duration-200 focus-within:border-emerald-400 focus-within:bg-white focus-within:ring-2 focus-within:ring-emerald-100">
                            <FaUser className="text-lg text-amber-300" />
                            <input 
                                type="text" 
                                placeholder="Enter your full name" 
                                value={name} 
                                onChange={(e) => setName(e.target.value)} 
                                className="outline-none bg-transparent w-full text-gray-700 placeholder-gray-400"
                                required 
                            />
                        </div>

                        {/* Email Input */}
                        <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl bg-gray-50 hover:bg-white transition-all duration-200 focus-within:border-emerald-400 focus-within:bg-white focus-within:ring-2 focus-within:ring-emerald-100">
                            <MdEmail className="text-lg text-amber-300" />
                            <input 
                                type="email" 
                                placeholder="Enter your email address" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                className="outline-none bg-transparent w-full text-gray-700 placeholder-gray-400"
                                required 
                            />
                        </div>

                        {/* Password Input */}
                        <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl bg-gray-50 hover:bg-white transition-all duration-200 focus-within:border-emerald-400 focus-within:bg-white focus-within:ring-2 focus-within:ring-emerald-100">
                            <FaLock className="text-lg text-amber-300" />
                            <input 
                                type="password" 
                                placeholder="Create a secure password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                className="outline-none bg-transparent w-full text-gray-700 placeholder-gray-400"
                                required 
                            />
                        </div>

                        {/* Terms Checkbox */}
                        <div className="flex items-center gap-3 p-2">
                            <input 
                                type="checkbox" 
                                className="h-4 w-4 text-emerald-500 focus:ring-emerald-400 border-gray-300 rounded"
                                required
                            />
                            <label className="text-sm text-gray-600">
                                I agree to the <span className="text-emerald-500 hover:text-emerald-600 cursor-pointer">Terms</span> and <span className="text-emerald-500 hover:text-emerald-600 cursor-pointer">Privacy Policy</span>
                            </label>
                        </div>

                        {/* Sign Up Button */}
                        <button 
                            type="submit" 
                            className="w-full py-3.5 bg-linear-to-r from-amber-300 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 focus:ring-2 focus:ring-emerald-300 focus:ring-offset-2"
                        >
                            Create Account
                        </button>
                    </div>
                </form>
                
                <div className="mt-8 pt-6 border-t border-gray-200">
                    <p className="text-center text-gray-600">
                        Already have an account?{" "}
                        <Link to="/login" className="text-amber-700 hover:text-amber-700 font-semibold hover:underline transition-colors duration-200">
                            Login here
                        </Link>
                    </p>
                </div>
            </div>
        </section>
    )
}

export default Signup;