import React, { useContext } from 'react';
import { FcGoogle } from "react-icons/fc";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/Login/signup.png'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import { Helmet } from 'react-helmet';
import { useState } from 'react';

const Register = () => {
    const { createUser, googleSignIn, profileAdded } = useContext(AuthContext);
    const [signUpError, setSignUpError] = useState("")
    const navigate = useNavigate()
    const location = useLocation();

    const from = location.state?.currentLocation;
    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                navigate(from, { replace: true });
                console.log(user);
            })
            .catch(err => console.error(err));
    }

    const handleSubmit = event => {
        event.preventDefault();
        setSignUpError("")
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;

        if (/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}/.test(password)) {
            createUser(email, password)
                .then(result => {
                    const user = result.user;
                    profileUpdate(name, photoURL)
                    form.reset();
                    navigate(from, { replace: true });
                    console.log(user)
                    setSignUpError("")
                })
                .catch(error => {
                    console.error(error);
                    setSignUpError(error.message);
                })
        }
        else {
            setSignUpError("Password minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character!")
        }

    }

    const profileUpdate = (name, photoURL) => {
        const profileInfo = {
            displayName: name,
            photoURL: photoURL,
        }
        profileAdded(profileInfo)
    }

    return (
        <div className="hero my-20">
            <Helmet>
                <title>Viva-visa - Register</title>
            </Helmet>
            <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
                <div className="text-center lg:text-left">
                    <img src={img} className="w-full" alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 py-5">
                    <h1 className="lg:text-4xl md:text-3xl text-2xl font-bold text-center">Sign Up</h1>
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name="name" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoURL</span>
                            </label>
                            <input type="text" name="photoURL" placeholder="photoURL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name="password" placeholder="password" className="input input-bordered" required />
                            {
                                signUpError && <p className='text-red-500'>{signUpError}</p>
                            }
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="submit" value="Sing Up" />
                        </div>
                    </form>
                    <p className='text-center'>Already have an account? <Link className='text-orange-600 font-bold' to="/login">Login</Link> </p>
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

export default Register;