import React from 'react';
import Swal from 'sweetalert2';

const AddService = () => {

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

        fetch('http://localhost:5000/services', {
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
            }
        })
        .catch( error => console.error(error))
    }

    return (
        <div className="p-6 dark:text-gray-100">
            <form onSubmit={handleAddService} novalidate="" className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow dark:bg-gray-700 ng-untouched ng-pristine ng-valid">
                <h2 className="w-full text-3xl font-semibold leading-tight">Please Add service</h2>
                <div>
                    <label for="name" className="block mb-1 ml-1">Name</label>
                    <input id="name" type="text" name='name' placeholder="Service Name" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800" />
                </div>
                <div>
                    <label for="img" className="block mb-1 ml-1">ImageURL</label>
                    <input id="img" type="text" name='img' placeholder="ImageURL" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800" />
                </div>
                <div>
                    <label for="description" className="block mb-1 ml-1">Description</label>
                    <textarea id="description" type="text" name='description' placeholder="Description..." className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800"></textarea>
                </div>
                <div>
                    <label for="price" className="block mb-1 ml-1">Price</label>
                    <input id="price" type="number" name='price' placeholder="Price" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800" />
                </div>
                <div>
                    <label for="rating" className="block mb-1 ml-1">Rating</label>
                    <input id="rating" type="number" name='rating' placeholder="Rating" required="" className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 dark:bg-gray-800" />
                </div>
                <div>
                    <button type="submit" className="w-full px-4 py-2 font-semibold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 dark:bg-blue-500 focus:ring-blue-400 hover:ring-blue-600 dark:text-gray-900">Add Service</button>
                </div>
            </form>
        </div>
    );
};

export default AddService;