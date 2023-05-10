import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Coffe from './Coffe';

const Home = () => {
    const coffes = useLoaderData()

    return (
        <div>
            <h2 className='text-center font-bold text-3xl mt-5'>Total coffes : {coffes.length}</h2>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-2'>

               {
                coffes.map(c => <Coffe key={c._id} {...c}></Coffe> )
               }

            </div>
        </div>
    );
};

export default Home;