import React from 'react';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useTitle from '../../hooks/useTitle';

const AddService = () => {
    useTitle('Add Service');
    const navigate = useNavigate();

    const handleAddService = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const img = form.img.value;
        const description = form.description.value;
        const price = form.price.value;
        const rating = form.rating.value;

        const service = {
            name,
            img,
            description,
            price,
            rating
        }

        console.log(service);

        fetch('https://ahsan-photography-server.vercel.app/services', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(service)
        })
        .then( res => res.json())
        .then( data => {
            if(data.acknowledged){
                Swal.fire(
                    'Good job!',
                    'Succesfully added service!',
                    'success'
                  )
                form.reset();
                navigate('/');
            }
        })
        .catch( error => console.error(error))
    }

    return (
        <div className="p-6 dark:text-gray-100 my-10">
            <form onSubmit={handleAddService} novalidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow border ng-untouched ng-pristine ng-valid text-gray-700">
                <h2 className="w-full text-3xl font-semibold leading-tight">Please Add service</h2>
                <div>
                    <label htmlFor="name" className="block mb-1 ml-1">Name</label>
                    <input id="name" type="text" name='name' placeholder="Service Name" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-100 text-gray-700 border-gray-500" required />
                </div>
                <div>
                    <label for="img" className="block mb-1 ml-1">ImageURL</label>
                    <input id="img" type="text" name='img' placeholder="ImageURL" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-100 text-gray-700" required />
                </div>
                <div>
                    <label for="description" className="block mb-1 ml-1">Description</label>
                    <textarea id="description" type="text" name='description' placeholder="Description..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-100 text-gray-700" required></textarea>
                </div>
                <div>
                    <label for="price" className="block mb-1 ml-1">Price</label>
                    <input id="price" type="number" name='price' placeholder="Price" required className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-100 text-gray-700" />
                </div>
                <div>
                    <label for="rating" className="block mb-1 ml-1">Rating</label>
                    <input id="rating" type="number" name='rating' placeholder="Rating" required className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-100 text-gray-700" />
                </div>
                <div>
                    <button type="submit" className="w-full px-4 py-2 font-semibold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-orange-500 focus:ring-orange-400 hover:ring-orange-300 text-white">Add Service</button>
                </div>
            </form>
        </div>
    );
};

export default AddService;