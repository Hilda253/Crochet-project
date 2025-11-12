import { useState } from 'react';

function Header() {
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showSignUpModal, setShowSignUpModal] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        firstName: '',
        lastName: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState({});

    // Function to handle login button click
    const handleLogin = () => {
        setShowLoginModal(true);
        setShowSignUpModal(false);
        setErrors({});
    };

    // Function to handle sign up button click
    const handleSignUp = () => {
        setShowSignUpModal(true);
        setShowLoginModal(false);
        setErrors({});
    };

    // Function to handle form input changes
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({
                ...prev,
                [name]: ''
            }));
        }
    };

    // Validation functions
    const validateLogin = () => {
        const newErrors = {};
        if (!formData.email) newErrors.email = 'Email is required';
        if (!formData.password) newErrors.password = 'Password is required';
        return newErrors;
    };

    const validateSignUp = () => {
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = 'First name is required';
        if (!formData.lastName) newErrors.lastName = 'Last name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Email is invalid';
        if (!formData.password) newErrors.password = 'Password is required';
        else if (formData.password.length < 6) newErrors.password = 'Password must be at least 6 characters';
        if (!formData.confirmPassword) newErrors.confirmPassword = 'Please confirm your password';
        else if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'Passwords do not match';
        return newErrors;
    };

    // Function to handle login form submission
    const handleLoginSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateLogin();
        
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        console.log('Login data:', {
            email: formData.email,
            password: formData.password
        });
        
        // Here you would typically send data to your backend
        // For demo purposes, we'll simulate an API call
        simulateAPICall('login')
            .then(() => {
                alert('Login successful!');
                closeModals();
            })
            .catch(error => {
                setErrors({ submit: error.message });
            });
    };

    // Function to handle sign up form submission
    const handleSignUpSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateSignUp();
        
        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors);
            return;
        }

        console.log('Sign up data:', {
            firstName: formData.firstName,
            lastName: formData.lastName,
            email: formData.email,
            password: formData.password
        });
        
        // Here you would typically send data to your backend
        // For demo purposes, we'll simulate an API call
        simulateAPICall('signup')
            .then(() => {
                alert('Account created successfully!');
                closeModals();
            })
            .catch(error => {
                setErrors({ submit: error.message });
            });
    };

    // Simulate API call
    const simulateAPICall = (type) => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                // Simulate random success (90% success rate for demo)
                if (Math.random() > 0.1) {
                    resolve({ success: true });
                } else {
                    reject(new Error(type === 'login' ? 'Invalid credentials' : 'Email already exists'));
                }
            }, 1000);
        });
    };

    // Function to close modals
    const closeModals = () => {
        setShowLoginModal(false);
        setShowSignUpModal(false);
        setFormData({ 
            email: '', 
            password: '', 
            firstName: '', 
            lastName: '', 
            confirmPassword: '' 
        });
        setErrors({});
    };

    // Close modal when clicking outside
    const handleBackdropClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModals();
        }
    };

    return (
        <>
            <header className="sticky top-0 z-50 bg-amber-200 shadow-md">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <div className="flex items-center">
                        <h1 className="text-2xl font-serif font-bold text-orange-950">WOOL & THREAD</h1>
                        <span className="text-LG font-serif text-amber-800 ml-1">CROCHET</span>
                    </div>

                    <div className="flex items-center space-x-4">
                        <button 
                            onClick={handleSignUp}
                            className="bg-white hover:bg-amber-600 text-black hover:text-white px-4 py-2 rounded-full transition duration-300 border border-amber-600"
                        >
                            Sign Up
                        </button>
                        
                        <button 
                            onClick={handleLogin}
                            className="bg-white hover:bg-amber-600 text-black hover:text-white px-4 py-2 rounded-full transition duration-300 border border-amber-600"
                        >
                            Log in
                        </button>
                    </div>
                </div>
            </header>

            {/* Login Modal */}
            {showLoginModal && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-50"
                    onClick={handleBackdropClick}
                >
                    <div className="bg-white p-8 rounded-lg shadow-lg w-96 max-w-full mx-4">
                        <h2 className="text-2xl font-bold text-amber-900 mb-6">Login to Your Account</h2>
                        
                        {errors.submit && (
                            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                                {errors.submit}
                            </div>
                        )}
                        
                        <form onSubmit={handleLoginSubmit}>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="login-email">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="login-email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                                        errors.email ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                    required
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                                )}
                            </div>
                            
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="login-password">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="login-password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                                        errors.password ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                    required
                                />
                                {errors.password && (
                                    <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                                )}
                            </div>
                            
                            <div className="flex justify-between space-x-4">
                                <button
                                    type="button"
                                    onClick={closeModals}
                                    className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded transition duration-300"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded transition duration-300"
                                >
                                    Login
                                </button>
                            </div>
                        </form>
                        
                        <p className="text-center mt-4 text-sm text-gray-600">
                            Don't have an account?{' '}
                            <button
                                onClick={() => { setShowLoginModal(false); setShowSignUpModal(true); }}
                                className="text-amber-600 hover:text-amber-700 font-medium"
                            >
                                Sign up here
                            </button>
                        </p>
                    </div>
                </div>
            )}

            {/* Sign Up Modal */}
            {showSignUpModal && (
                <div 
                    className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-50"
                    onClick={handleBackdropClick}
                >
                    <div className="bg-white p-8 rounded-lg shadow-lg w-96 max-w-full mx-4">
                        <h2 className="text-2xl font-bold text-amber-900 mb-6">Create Your Account</h2>
                        
                        {errors.submit && (
                            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
                                {errors.submit}
                            </div>
                        )}
                        
                        <form onSubmit={handleSignUpSubmit}>
                            <div className="grid grid-cols-2 gap-4 mb-4">
                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="firstName">
                                        First Name
                                    </label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        name="firstName"
                                        value={formData.firstName}
                                        onChange={handleInputChange}
                                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                                            errors.firstName ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                        required
                                    />
                                    {errors.firstName && (
                                        <p className="text-red-500 text-xs mt-1">{errors.firstName}</p>
                                    )}
                                </div>
                                <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastName">
                                        Last Name
                                    </label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        name="lastName"
                                        value={formData.lastName}
                                        onChange={handleInputChange}
                                        className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                                            errors.lastName ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                        required
                                    />
                                    {errors.lastName && (
                                        <p className="text-red-500 text-xs mt-1">{errors.lastName}</p>
                                    )}
                                </div>
                            </div>
                            
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="signup-email">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="signup-email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                                        errors.email ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                    required
                                />
                                {errors.email && (
                                    <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                                )}
                            </div>
                            
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="signup-password">
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="signup-password"
                                    name="password"
                                    value={formData.password}
                                    onChange={handleInputChange}
                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                                        errors.password ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                    required
                                />
                                {errors.password && (
                                    <p className="text-red-500 text-xs mt-1">{errors.password}</p>
                                )}
                            </div>
                            
                            <div className="mb-6">
                                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="confirmPassword">
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    name="confirmPassword"
                                    value={formData.confirmPassword}
                                    onChange={handleInputChange}
                                    className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-amber-500 ${
                                        errors.confirmPassword ? 'border-red-500' : 'border-gray-300'
                                    }`}
                                    required
                                />
                                {errors.confirmPassword && (
                                    <p className="text-red-500 text-xs mt-1">{errors.confirmPassword}</p>
                                )}
                            </div>
                            
                            <div className="flex justify-between space-x-4">
                                <button
                                    type="button"
                                    onClick={closeModals}
                                    className="flex-1 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded transition duration-300"
                                >
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="flex-1 bg-amber-600 hover:bg-amber-700 text-white py-2 px-4 rounded transition duration-300"
                                >
                                    Sign Up
                                </button>
                            </div>
                        </form>
                        
                        <p className="text-center mt-4 text-sm text-gray-600">
                            Already have an account?{' '}
                            <button
                                onClick={() => { setShowSignUpModal(false); setShowLoginModal(true); }}
                                className="text-amber-600 hover:text-amber-700 font-medium"
                            >
                                Login here
                            </button>
                        </p>
                    </div>
                </div>
            )}
        </>
    );
}

export default Header;  




