
import React, { useState } from "react";
import { useRouter } from 'next/router';

const UserPage = () => {
    const router = useRouter();

    const [userData, setUserData] = useState({
        email: "",
        password: "",
        compan_code: ''
    })
    console.log({ userData })
    const handchange = (e, getpropty) => {
        // setUserData((prev) => ({ ...prev,[getpropty]: e.target.value }))
        setUserData((prev) => {
            return { ...prev, [getpropty]: e.target.value }
        })
    }

    const handleSumbit = async () => {

        try {
            let res = await fetch('http://localhost:3000/login', {
                method: "post",
                headers: {
                    Authorization: 'bearer 120938y4u02%$%^*(&&^$%^^&',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            })
            if (res.status === 200) {
                alert("sucessfull loged in ")
                router.push('/userdetails')
            }
        } catch (error) {

        }
    }

    return <div>
        <label>Email</label>
        <input value={userData.email} onChange={(e) => handchange(e, 'email')} />
        <label>Password</label>
        <input value={userData.password} onChange={(e) => handchange(e, "password")} />
        <label>Company</label>
        <input value={userData.compan_code} onChange={(e) => handchange(e, "compan_code")} />
        <button onClick={handleSumbit}> Sign in </button>

    </div>
}

export default UserPage