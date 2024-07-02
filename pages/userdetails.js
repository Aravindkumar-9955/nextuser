import React, { useState } from "react";
import { useSelector } from "react-redux";


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

    const userdata = useSelector((state) => state?.usercomp
    )

    const [search, setSearch] = useState('')
    console.log({ userdata });

    const formatedData = data.filter((item) => {
        if(search ===""){
            return item
        }else{
            if(item.name.toLowerCase().includes(search.toLowerCase())){
                return item
            }
        }

    })
    return <div>

        <h3>user deatails</h3>
        <input value={search} onChange={(e) => setSearch(e.target.value)} />

        <div>
            {formatedData.map((item)=>(<>
                <div>{item?.name}</div>
                <div>{item?.email}</div>
            </>))}
        </div>
        <div>
            <p>name : {userdata?.usersingle?.name}</p>
            <p>email :{userdata?.usersingle?.email}</p>
        </div>
    </div>
}

export default UserDataDeatils