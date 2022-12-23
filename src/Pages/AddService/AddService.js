import React from 'react';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet';

const AddService = () => {

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const price = form.price.value;
        const photoURL = form.photoURL.value;
        const ratings = form.ratings.value;
        const description = form.description.value;

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
                }
            })
    }

    return (
        <div className='container mx-auto'>
            <Helmet>
                <title>Viva-visa - addService</title>
            </Helmet>
            <h2 className='text-4xl text-center my-5 font-semibold'>New service is coming..</h2>
            <form onSubmit={handleSubmit} className='grid grid-cols-1 lg:grid-cols-2 gap-8 my-10'>
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
                <div className='lg:mt-16'>
                    <input type="submit" value="Add Service" className="btn btn-primary" />
                </div>
            </form>
        </div>
    );
};

export default AddService;