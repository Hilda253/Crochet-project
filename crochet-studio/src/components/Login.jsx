import { Link } from 'react-router-dom';
import { FaLock } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();


    // function for handling the login 
    const handleLogin = async (e) => {
        try {
            e.preventDefault()
            const res = await axios.post('https://carrecovery-credentials.onrender.com/login', { email, password });
            // storing the generated token in the local storage for easy accessibility
            localStorage.setItem('token', res.data.token);
            alert('You have successfully logged in');
            navigate('/home')
        }
        catch (error) {
            console.error(error);
            alert('Invalid Credentials')

        }
    }


    return (
        <section className="min-h-screen flex items-center justify-center bg-linear-to-br from-slate-50 to-blue-50">
    <div className="w-full max-w-md mx-auto p-8 bg-white rounded-2xl shadow-lg border border-gray-100">
        <form onSubmit={handleLogin}>
            <h1 className="text-slate-700 font-bold text-center text-3xl mb-8">Welcome Back</h1>
            
            <div className="space-y-6">
                {/* Email Input */}
                <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl bg-gray-50 hover:bg-white transition-colors duration-200 focus-within:border-blue-400 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100">
                    <MdEmail className="text-lg text-blue-500" />
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="Enter your email" 
                        className="outline-none bg-transparent w-full text-gray-700 placeholder-gray-400"
                        required 
                    />
                </div>

                {/* Password Input */}
                <div className="flex items-center gap-3 p-3 border border-gray-200 rounded-xl bg-gray-50 hover:bg-white transition-colors duration-200 focus-within:border-blue-400 focus-within:bg-white focus-within:ring-2 focus-within:ring-blue-100">
                    <FaLock className="text-lg text-blue-500" />
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Enter your password" 
                        className="outline-none bg-transparent w-full text-gray-700 placeholder-gray-400"
                        required 
                    />
                </div>

                {/* Login Button */}
                <button 
                    type="submit" 
                    className="w-full py-3 bg-linear-to-r from-amber-200 to-amber-100 hover:from-amber-300 hover:to-amber-400 text-white font-semibold rounded-xl shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-200 focus:ring-2 focus:ring-blue-300 focus:ring-offset-2"
                >
                    Sign In
                </button>
            </div>
        </form>
        
        <p className="text-center text-gray-600 mt-6">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:text-blue-600 font-semibold hover:underline transition-colors duration-200">
                Create account
            </Link>
        </p>
    </div>
</section>



    );
}
export default Login;

