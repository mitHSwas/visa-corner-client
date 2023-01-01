import React from 'react';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';

const AddService = () => {
    const navigate = useNavigate()
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const photoURL = form.photoURL.value;
        const ratings = form.ratings.value;
        const description = form.description.value;

        if (!/^[0-5](\.[0-5][0-5]?)?$/.test(ratings)) {
            return toast.error("Your service review rating should be 0 to 5.")
        }
        if (description.length < 40) {
            return toast.error("Your review minimum 40 character length.")
        }

        const serviceInfo = {
            name: name,
            price: parseInt(price),
            picture: photoURL,
            rating: parseFloat(ratings),
            description: description,
        }
        fetch("https://viva-visa-server-mithswas.vercel.app/services", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(serviceInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    form.reset();
                    toast.success("New service added successfully!");
                    navigate("/services")
                }
            })
    }

    return (
        <div className='container mx-auto px-5'>
            <Helmet>
                <title>Viva-visa - addService</title>
            </Helmet>
            <h2 className='lg:text-5xl md:text-4xl text-3xl text-center my-5 font-semibold'>Add A New Service</h2>
            <form onSubmit={handleSubmit} className='grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 lg:gap-8 md:gap-6 gap-4 my-10'>
                <div>
                    <label className="label">
                        <span className="label-text">Service Name</span>
                    </label>
                    <input type="text" name="name" placeholder="name" className="input input-bordered w-full" required />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Service Price</span>
                    </label>
                    <input type="text" name="price" placeholder="price" className="input input-bordered w-full" required />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Service photoURL</span>
                    </label>
                    <input type="text" name="photoURL" placeholder="photoURL" className="input input-bordered w-full" required />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Service ratings</span>
                    </label>
                    <input type="text" name="ratings" placeholder="ratings" className="input input-bordered w-full" required />
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Service description</span>
                    </label>
                    <textarea name="description" className="textarea textarea-bordered h-24 w-full" placeholder="Write details about your service.." required />
                </div>
                <div className='lg:mt-16 md:mt-14'>
                    <input type="submit" value="Add Service" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
};

export default AddService;