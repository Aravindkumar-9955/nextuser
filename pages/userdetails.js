import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useSession } from "../utiltls/useSession";

const data = [
    {
        "id": 1,
        "name": "John Doe",
        "email": "john.doe@example.com"
    },
    {
        "id": 2,
        "name": "Jane Smith",
        "email": "jane.smith@example.com"
    },
    {
        "id": 3,
        "name": "Michael Johnson",
        "email": "michael.johnson@example.com"
    }
]

const UserDataDeatils = () => {
    const { sessionstart, timer } = useSession();
    const userdata = useSelector((state) => state?.usercomp);
    const [image, setImage] = useState(null);
    const [search, setSearch] = useState('');

    const formatedData = data.filter((item) => {
        if (search === "") {
            return item;
        } else {
            if (item.name.toLowerCase().includes(search.toLowerCase())) {
                return item;
            }
        }
    });

    const handleFile = (e) => {
        let file = e.target.files[0];
        let objectUrl = URL.createObjectURL(file);
        setImage(objectUrl);
    };

    useEffect(() => {
        sessionstart();
        return () => {
            clearTimeout(timer); // Clear the timeout when component unmounts
        };
    }, []);
    let coun=0
    const handleUserActivity = () => {
        console.log("check mouse",coun++);
        clearTimeout(timer);
        sessionstart();
    };

    useEffect(() => {
        document.addEventListener('mousemove', handleUserActivity);
        return () => {
            document.removeEventListener('mousemove', handleUserActivity);
        };
    }, []);

    return (
        <div>
            <h3>User Details</h3>
            <input value={search} onChange={(e) => setSearch(e.target.value)} />
            <input type='file' onChange={handleFile} />
            <div>
                {image && <img src={image} alt="Selected Image" style={{ maxWidth: '100%', maxHeight: '400px' }} />}
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '20px' }}>
                <thead>
                    <tr>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Name</th>
                        <th style={{ border: '1px solid #ddd', padding: '8px', textAlign: 'left' }}>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {formatedData.map((item) => (
                        <tr key={item.id}>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.name}</td>
                            <td style={{ border: '1px solid #ddd', padding: '8px' }}>{item.email}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <p>Name: {userdata?.usersingle?.name}</p>
                <p>Email: {userdata?.usersingle?.email}</p>
            </div>
        </div>
    );
}

export default UserDataDeatils;
