import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SignInImg from '../../assets/images/Login/login.png';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Login = () => {
    const { signInUser, googleSignIn } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                const currentUser = {
                    email: user.email
                }
                fetch('https://viva-visa-server-mithswas.vercel.app/jwt', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem("genius-token", data.token);
                        navigate(from, { replace: true });
                    })
            })
            .catch(err => console.error(err));
    }

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signInUser(email, password)
            .then(result => {
                const user = result.user;
                form.reset();
                console.log(user)

                const currentUser = {
                    email: user.email
                }
                fetch('https://viva-visa-server-mithswas.vercel.app/jwt', {
                    method: "POST",
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        localStorage.setItem("genius-token", data.token);
                        navigate(from, { replace: true });
                    })
            })
            .catch(err => console.error(err))
    }
    return (
        <div className="hero my-20">
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={SignInImg} className="w-full" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10">
                    <h1 className="text-5xl font-bold text-center">Log In</h1>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Log In" />
                        </div>
                    </form>
                    <p className='text-center'>New in Viva-visa? <Link className='text-orange-600 font-bold' to="/register">Sign Up</Link> </p>
                    <div className='mx-auto'>
                        <h3 className='my-3'>Or continue with</h3>
                        <button onClick={handleGoogleSignIn} className="btn btn-outline btn-ghost  ml-5">
                            <FcGoogle className='text-4xl cursor-pointer'></FcGoogle>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;