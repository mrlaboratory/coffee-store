import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

const Coffe = ({ _id, name, quantity, supplier, taste, category, details, photo }) => {

    const handleDelete = id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:3000/coffe/${id}`, {
                    method: "DELETE",
                    headers: {
                        'content-type': 'application/json'
                    },
                })
                    .then(res => res.json())
                    .then(d => {
                        if(d.acknowledged){
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                              )
                        }
                    }
                    
                    )
                    .catch(e => console.log(e))

            
            }
          })

   


    }

    return (
        <div className='rounded-lg p-3 bg-gray-100 flex justify-between mt-5' >
            <img src={photo} alt="" />
            <div className='flex flex-col items-center justify-center gap-2'>
                <h2 className='text-xl font-bold text-center'>{name} </h2>
                <div className='flex gap-1 flex-wrap flex-col'>
                    <button className='btn'>View</button>
                   <Link to={`/edit/${_id}`}> <button  className='btn'>Edit</button> </Link>
                    <button onClick={() => handleDelete(_id)} className='btn'>X</button>
                </div>

            </div>

        </div>
    );
};

export default Coffe;