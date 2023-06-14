// Code Keypad Component Here

function Keypad (){
    function changeFunc(){
        console.log('Entering password...')
    }
    return (
        <input type = 'password' onChange = {changeFunc}/>
   
   
        )
}

export default Keypad;