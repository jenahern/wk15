import React, {useState} from 'react';

export const NewRoomForm = (props) => {
     //use hooks
    const [name, setName] = useState ('');
    const [area, setArea] = useState (undefined);

    const handleAreaInput = (e) => {
        //using parse to make sure it's an interger and round to 10
        const int = parseInt(e.target.value, 10);
        //if Area greater or = to 0 (? means true), then pass in. If not (:), then empty string
        setArea(int >= 0 ? int : '');
    }
    
    const onSubmit = (e) => {
        e.preventDefault ();

         //if name and area are true, have values
        if (name && area) {
            props.addNewRoom({name, area});
            setName('');
            setArea('');
        } else {
            console.log('invalid input');
        }
    };

    return (
        <div>
            <h4>Add New Room</h4>
            <form onSubmit={onSubmit}>
                <input
                type='text'
                placeholder='Room Name'
                onChange={(e) => setName(e.target.value)}
                value={name}
                />
            

                <input
                type='text'
                placeholder='Area in square feet'
                onChange={handleAreaInput}
                value={area}
                className='mx-3'
                 />

                <button className='addRoom' type='submit'>Add Room</button>

            </form>
        </div>
    )
};