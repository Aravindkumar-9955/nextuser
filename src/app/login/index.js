import React, { useState } from "react";
import { useRouter } from 'next/router';
import { useDispatch } from "react-redux";
import { StoreuserDataApi } from "../../../store/userpage/actions";

const UserPage = () => {
    const router = useRouter();
    const dispatch = useDispatch();

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
        <div style={styles.container}>
            <label style={styles.label}>Email</label>
            <input
                style={styles.input}
                value={userData.email}
                onChange={(e) => handchange(e, 'email')}
                type="email"
            />
            <label style={styles.label}>Password</label>
            <input
                style={styles.input}
                value={userData.password}
                onChange={(e) => handchange(e, "password")}
                type="password"
            />
            <label style={styles.label}>Company</label>
            <input
                style={styles.input}
                value={userData.compan_code}
                onChange={(e) => handchange(e, "compan_code")}
            />
            <button style={styles.button} onClick={handleSumbit}>Sign in</button>
        </div>
    );
};

// Inline styles
const styles = {
    container: {
        width: '100%',
        maxWidth: '400px',
        margin: 'auto',
        padding: '20px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
        boxSizing: 'border-box',
    },
    label: {
        marginBottom: '5px',
        display: 'block',
    },
    input: {
        width: '100%',
        marginBottom: '10px',
        padding: '8px',
        fontSize: '16px',
        border: '1px solid #ccc',
        borderRadius: '5px',
        boxSizing: 'border-box',
    },
    button: {
        backgroundColor: '#007bff',
        color: '#fff',
        border: 'none',
        padding: '10px 20px',
        fontSize: '16px',
        borderRadius: '5px',
        cursor: 'pointer',
    }
};

export default UserPage;
