import React, { useState } from 'react';
import { housesApi } from '../rest/HousesApi2';


export const NewHouse = () => {
    //use hooks
    const [name, setName] = useState('');    


    const onSubmit = (e) => {
        e.preventDefault();
        //if name and area are true, have values
        console.log(name)
        housesApi.post(name);
        setName('');
        
    }

    return (
        <div className='newhouse container shadow'>
            <h2> Add a new House</h2>
  
            <form
            className=''
             onSubmit={onSubmit}>
           
                <input
                    type='text'
                    placeholder='Name of your new house'
                    onChange={(e) => setName(e.target.value)}
                    value={name}
                    name={name}
                    className='mx-3'
                />
                <button className='addRoom' type='submit'>Add House</button>
            </form>
        </div>
    )
};