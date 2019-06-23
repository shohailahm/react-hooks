import React,{useState} from 'react';



function Button() {
    const [clicked, setButtonText] = useState(false);
    function handlePress(){
        setButtonText(!clicked);
    }
    return(
        <div style={{width:'100%',height:40}}>
            <button onClick={handlePress} style={{padding:8,margin:10}}>Click Me!</button>
            {clicked?'Clicked':'Not-Clicked'}
        </div>
    )
}

export default Button;