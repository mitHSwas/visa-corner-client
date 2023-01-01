import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SignInImg from '../../assets/images/Login/login.png';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { Helmet } from 'react-helmet';
import { useState } from 'react';
import { toast } from 'react-hot-toast';

const Login = () => {
    const { signInUser, googleSignIn, passwordResetEmail } = useContext(AuthContext);
    const [loginError, setLoginError] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || location.state?.currentLocation?.pathname || "/";

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user);
                navigate(from, { replace: true });
            })
            .catch(err => {
                console.error(err)
            });
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
                navigate(from, { replace: true });
                console.log(user)
                setLoginError("")
            })
            .catch(err => {
                setLoginError(err.message);
                console.error(err)
            })
    }
    const handleEmailBlur = event => {
        const email = event.target.value;
        setUserEmail(email);
    }
    const handleResetPassword = () => {
        passwordResetEmail(userEmail)
            .then(result => {
                setLoginError("");
                toast.success("Password reset email send check your index or spam folder.")
            })
            .catch(err => {
                setLoginError(err.message);
                toast.error(err.message);
            })
    }
    return (
        <div className="hero my-20">
            <Helmet>
                <title>Viva-visa - login</title>
            </Helmet>
            <div className="hero-content grid gap-10 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={SignInImg} className="w-full" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-10">
                    <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-center">Log In</h1>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="text" onBlur={handleEmailBlur} name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            <label className="label py-0">
                                <span>Forget password?<button onClick={handleResetPassword} className="btn btn-link px-1">Please reset</button></span>
                            </label>
                            {
                                loginError && <p className='text-red-500'>{loginError}</p>
                            }
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Log In" />
                        </div>
                    </form>
                    <p className='text-center'>New in Visa-corner? <Link className='text-orange-600 font-bold' state={{ currentLocation: from }} to="/register">Sign Up</Link> </p>
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