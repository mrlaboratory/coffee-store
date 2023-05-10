import React from 'react';
import Swal from 'sweetalert2'


const AddCoffe = () => {

    const handleAddCoffe = e => {
        e.preventDefault()
        const form = e.target 
        const name = form.name.value 
        const quantity = form.quantity.value 
        const supplier = form.supplier.value 
        const taste = form.taste.value 
        const category = form.category.value 
        const details = form.details.value 
        const photo = form.photo.value 

        const coffeInfo = {name,quantity,supplier,taste,category,details,photo}
        console.log(coffeInfo)
        fetch('http://localhost:3000/coffes', {
            method : 'POST',
            headers : {
                'content-type': 'application/json'
            },
            body : JSON.stringify(coffeInfo)
        })
        .then(res => res.json())
        .then(d => {
            if(d.acknowledged){
                Swal.fire(
                    'Good job!',
                    'Coffes Added !',
                    'success'
                  )
            }

        })
        .catch(e => console.log(e))



    }
    return (
        <div>
            <h2 className='text-center font-bold'>Add Coffe</h2>
            <div className='flex justify-center mt-3 '>
                <form onSubmit={handleAddCoffe}>
                    <div className='flex flex-col md:flex-row mt-2'>
                        <input type="text" name='name' placeholder="Name " className="input w-full max-w-xs border border-gray-600" />
                        <input type="text" name='quantity' placeholder="Quantity" className="input w-full max-w-xs border border-gray-600" />
                    </div>

                    <div className='flex flex-col md:flex-row mt-2'>
                        <input type="text" name='supplier' placeholder="Supplier " className="input w-full max-w-xs border border-gray-600" />
                        <input type="text" name='taste' placeholder="Taste" className="input w-full max-w-xs border border-gray-600" />
                    </div>

                    <div className='flex flex-col md:flex-row mt-2'>
                        <input type="text" name='category' placeholder="Category " className="input w-full max-w-xs border border-gray-600" />
                        <input type="text" name='details' placeholder="Details" className="input w-full max-w-xs border border-gray-600" />
                    </div>

                    <div className='mt-2'>
                    <input name='photo' type="text" placeholder="Photo url " className="input w-full max-w-xs border border-gray-600 w-full" />
                    </div>
                    <button type='submit' className='btn w-full mt-3'>Add coffe</button>
                </form>

            </div>
        </div>
    );
};

export default AddCoffe;