import React from 'react'
const Goal = () =>{
    return alert("Its Goal");
}
const NotGoal = ()=>{
    return alert("It is not a Goal");
}
const Res =(props)=>{
    return Res = props.Res;
}
const Condition = () => {
    
    if(Res == true){
        return <Goal />
    }
    else{
        return <NotGoal />
    }
//   return (
//     <div>
     
//     </div>
//   )
}

export default Condition
