import {useState} from 'react';

function ToggleHook({initialvalue}) {
    const [toggle, setToggle] = useState(initialvalue);
    const setToggleFunc = () => {
        setToggle(prev => !prev);
    };
    return [toggle, setToggleFunc];
}

export default ToggleHook;
