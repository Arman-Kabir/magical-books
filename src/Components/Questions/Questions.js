import React from 'react';
import './Questions.css'
const Questions = () => {
    return (
        <div>
            <h1 className='text-center'>Questions and answers</h1>
            <div className='questions'>
                <div className="question-1">
                    <h2>How react works</h2>
                    <p>React creates a virtual dom that basically is a  DOM tree reprersentation in Javascript.Virtual dom is faster than browser DOM so when react needs to read or write to the dom, it uses virtual dom. React keeps track of what changes has occurred and compare both real Dom and virtual dom using diff algorithm and changes only what has changed in real DOM.</p>
                </div>
                <div className="question-2">
                    <h2>Props vs state</h2>
                    <p>We pass data into the components using props and state in react .

                        Props(short of properties) are immutable,read-only and can't be modified when it is set. It is used to pass data from parent component to child component . Parent component sends data in a attribute like object and child component receives data as arguments.

                        The state represents data that changes over time.It is local data storage means data is passed within the component only and can not be passed to other components. It's mutable ,can be modified and it is both read and write only.</p>
                </div>
            </div>

        </div>
    );
};

export default Questions;