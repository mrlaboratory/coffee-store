import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2';

const Edit = () => {
    const coffee = useLoaderData()
    console.log(coffee)
    const { _id, name, quantity, supplier, taste, category, details, photo } = coffee
    const handleUpdate = e => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value
        const quantity = form.quantity.value
        const supplier = form.supplier.value
        const taste = form.taste.value
        const category = form.category.value
        const details = form.details.value
        const photo = form.photo.value
        const coffeInfo = { name, quantity, supplier, taste, category, details, photo }
        fetch(`http://localhost:3000/coffee/${_id}`,{
            method : 'PUT',
            headers : {
                'content-type':'application/json'
            },
            body : JSON.stringify(coffeInfo)
        })
        .then(res => res.json())
        .then(d => {
            if(d.modifiedCount){
                Swal.fire(
                    'Good job!',
                    'Coffee updated !',
                    'success'
                  )
            }
        })
        .catch(e => console.log(e))

    }

    return (
        <div className='flex justify-center'>

            <form onSubmit={handleUpdate}>
                <div className='flex flex-col md:flex-row mt-2'>
                    <input type="text" defaultValue={name} name='name' placeholder="Name " className="input w-full max-w-xs border border-gray-600" />
                    <input type="text" defaultValue={quantity} name='quantity' placeholder="Quantity" className="input w-full max-w-xs border border-gray-600" />
                </div>

                <div className='flex flex-col md:flex-row mt-2'>
                    <input defaultValue={supplier} type="text" name='supplier' placeholder="Supplier " className="input w-full max-w-xs border border-gray-600" />
                    <input defaultValue={taste} type="text" name='taste' placeholder="Taste" className="input w-full max-w-xs border border-gray-600" />
                </div>

                <div className='flex flex-col md:flex-row mt-2'>
                    <input defaultValue={category} type="text" name='category' placeholder="Category " className="input w-full max-w-xs border border-gray-600" />
                    <input defaultValue={details} type="text" name='details' placeholder="Details" className="input w-full max-w-xs border border-gray-600" />
                </div>

                <div className='mt-2'>
                    <input defaultValue={photo} name='photo' type="text" placeholder="Photo url " className="input  max-w-xs border border-gray-600 w-full" />
                </div>
                <button type='submit' className='btn w-full mt-3'>Update</button>
            </form>
        </div>
    );
};

export default Edit;