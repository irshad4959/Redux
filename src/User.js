import React from "react";

const  User=(props)=>
{
    console.warn(props.data.name)
    console.warn(props.data.age)

    const {data} =props


    return(
        <div>
        <h1>User Component</h1>
        <h3>{data.name}</h3>
        <h3>{data.age}</h3>
        </div>
    );
}

export default User;