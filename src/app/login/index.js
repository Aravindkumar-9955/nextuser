import React, { useState } from "react";
import { useRouter } from 'next/router';
import { useDispatch } from "react-redux";
import { StoreuserDataApi } from "../../../store/userpage/actions";

const UserPage = () => {
    const router = useRouter();
    const dispatch = useDispatch(); // Corrected typo in variable name

    const [userData, setUserData] = useState({
        email: "",
        password: "",
        compan_code: ''
    });

    const handchange = (e, propertyName) => {
        setUserData(prev => ({
            ...prev,
            [propertyName]: e.target.value
        }));
    };

    const handleSumbit = async () => {
        try {
            let res = await fetch('http://localhost:3000/login', {
                method: "post",
                headers: {
                    Authorization: 'bearer 120938y4u02%$%^*(&&^$%^^&',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userData)
            });

            if (res.status === 200) {
                alert("Successfully logged in");
                router.push('/userdetails');
                dispatch(StoreuserDataApi([userData])); // Dispatching action with userData
            } else {
                // Handle other status codes if needed
            }
        } catch (error) {
            console.error("Error logging in:", error);
            // Handle error (e.g., show error message to user)
        }
    };

    return (
        <div>
            <label>Email</label>
            <input value={userData.email} onChange={(e) => handchange(e, 'email')} />
            <label>Password</label>
            <input value={userData.password} onChange={(e) => handchange(e, "password")} />
            <label>Company</label>
            <input value={userData.compan_code} onChange={(e) => handchange(e, "compan_code")} />
            <button onClick={handleSumbit}> Sign in </button>
        </div>
    );
};

export default UserPage;
