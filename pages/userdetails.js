import React from "react";
import { useSelector } from "react-redux";

const UserDataDeatils =()=>{

    const userdata=useSelector((state)=>state)
    console.log({userdata});
    return <div>

        <h3>user deatails</h3>

        <div>
            <p>name</p>
            <p>email</p>
        </div>
    </div>
}

export default UserDataDeatils