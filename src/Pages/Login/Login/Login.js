import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { FaGoogle, FaGithub } from "react-icons/fa";
import { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';
import { useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider } from 'firebase/auth';
import toast from 'react-hot-toast';
import useTitle from '../../../hooks/useTitle';
import Loader from '../../Loader/Loader';

const Login = () => {
    const {signIn, providerLogin, setLoading, loading} = useContext(AuthContext);
    const [error, setError] = useState('');
    const navigate = useNavigate();
    const location = useLocation();
    useTitle('Login');

    const from = location.state?.from?.pathname || '/';

    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();

    const handleSubmit = event =>{
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password);

        signIn(email, password)
        .then( result => {
            const user = result.user;
            console.log(user);
            form.reset();
            setError('');

            const currentUser = {
                email: user.email
            }

            // get jwt token

            fetch('https://ahsan-photography-server.vercel.app/jwt', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                localStorage.setItem('token', data.token);
                navigate(from, {replace: true});
                toast.success('Successfully Login');
            })
            
        })
        .catch( error => {
            console.error(error);
            setError(error.message);
        })
    }

    const handleGoogleSignIn = () => {
        providerLogin(googleProvider)
        .then( result => {
            const user = result.user;
            console.log(user);                       

            const currentUser = {
                email: user.email
            }

            // get jwt token

            fetch('https://ahsan-photography-server.vercel.app/jwt', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                localStorage.setItem('token', data.token);
                navigate(from, {replace: true});
                toast.success('Successfully Login');
            })
            
        })
        .catch( error => {
            console.error(error);
        })
        .finally( () => {
            setLoading(false);
        })
    }

    const handleGithubSignIn = () => {
        providerLogin(githubProvider)
        .then( result => {
            const user = result.user;
            console.log(user);

            const currentUser = {
                email: user.email
            }

            // get jwt token

            fetch('https://ahsan-photography-server.vercel.app/jwt', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                localStorage.setItem('token', data.token);
                navigate(from, {replace: true});
                toast.success('Successfully Login');
            })
            
        })
        .catch( error => {
            console.error(error);
        })
    }


    return (
        <div>
            <div className="w-full max-w-md p-12 space-y-3 rounded text-gray-700 mx-auto my-10 border shadow-xl">
                <h1 className="text-3xl font-semibold text-center pb-3">Login</h1>
                <form onSubmit={handleSubmit} className="space-y-6 ng-untouched ng-pristine ng-valid">
                    <div>
                        <label className="block mb-2 text-sm">Email address</label>
                        <input type="email" name="email" placeholder="Email" className="w-full px-3 py-2 border rounded-md border-gray-300 bg-gray-100 text-gray-700" required />
                    </div>
                    <div className="space-y-1 text-sm">
                        <label className="block mb-2 text-sm">Password</label>
                        <input type="password" name="password" placeholder="Password" className="w-full px-4 py-3 rounded-md border border-gray-300 bg-gray-100 text-gray-700 focus:border-violet-400" required />
                        <div className="flex justify-end text-xs text-gray-400">
                            <Link rel="noopener noreferrer" href="#">Forgot Password?</Link>
                        </div>
                    </div>
                    <button type='submit' className="block w-full p-3 text-center text-white text-lg bg-orange-400 hover:bg-orange-500 transition duration-300 rounded font-semibold">
                        {
                            loading ? 
                            <div className="flex items-center justify-center space-x-2">
                                <div className="w-4 h-4 rounded-full animate-pulse bg-orange-100"></div>
                                <div className="w-4 h-4 rounded-full animate-pulse bg-orange-100"></div>
                                <div className="w-4 h-4 rounded-full animate-pulse bg-orange-100"></div>
                            </div>
                             : 
                            'Login'
                        }
                    </button>
                    <p className='text-red-500'>
                        {error}
                    </p>
                </form>
                <div className="flex items-center pt-4 space-x-1">
                    <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                    <p className="px-3 text-sm text-gray-400">Login with social accounts</p>
                    <div className="flex-1 h-px sm:w-16 bg-gray-700"></div>
                </div>
                <div className="space-y-4">
                    <button onClick={handleGoogleSignIn} aria-label="Login with Google" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400 focus:ring-violet-400">
                        <FaGoogle className="w-5 h-5 fill-current"></FaGoogle>
                        <p>Login with Google</p>
                    </button>
                    <button onClick={handleGithubSignIn} aria-label="Login with GitHub" type="button" className="flex items-center justify-center w-full p-4 space-x-4 border rounded-md focus:ring-2 focus:ring-offset-1 border-gray-400 focus:ring-violet-400">
                        <FaGithub className="w-5 h-5 fill-current"></FaGithub>
                        <p>Login with GitHub</p>
                    </button>
                </div>
                <p className="px-6 text-sm text-center text-gray-600">Don't have an account yet?
				<Link rel="noopener noreferrer" to="/register" className="hover:underline text-violet-600">Sign up</Link>.
			    </p>
            </div>
        </div>
    );
};

export default Login;