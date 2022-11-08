import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SignInImg from '../../assets/images/Login/login.png';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Login = () => {
    const { signInUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();

    const from = location.state?.from?.pathname || "/";

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
                </div>
            </div>
        </div>
    );
};

export default Login;