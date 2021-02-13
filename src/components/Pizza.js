import React from 'react';
import Form from './Form'


function Pizza(props) {
    console.log('props from pizza', props);
    return (
        <div className='form'>
            <Form />
        </div>
    )

}

export default Pizza