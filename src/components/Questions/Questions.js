import React from 'react';
import './Question.css'

const Questions = () => {
    return (
        <div className='question'>
            <h2>Question no 1: Difference Between props and state </h2>
            <p> Answer: Props use for sent data or information from the parent to child.
                state is use for variation purpase.state change or not change both depende on user.
                put props is specific it will take real data information.when need a parameter in a component then use props . If user want state will be change </p>
            <h2>Question no 2: How useState Work </h2>
            <p>Ans: useState is a react hook . useState return an array and a function. Array store data which data is change or not change. Function need to update array data. it helps to avoid multiline code. help to clear code area. when declear usestate it need a initial value. this is the example <br />
                const [cart, setCart]=useState()
            </p>
        </div>
    );
};

export default Questions;