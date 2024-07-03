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
    //

    const {sessionstart,timer}=useSession()
    const userdata = useSelector((state) => state?.usercomp
    )
    const [image,setimage]=useState(null)
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

    const handleFile=(e)=>{
        let file=e.target.files[0]
        let objecturl=URL.createObjectURL(file)
        setimage(objecturl)
    }
    // let timeout= 60 * 1000
    // let timer;

    // const sessionlogout=()=>{
    //    // console.log("logout",33);
    //    clearTimeout(timer); // Clear any existing timer
    //    timer = setTimeout(logout, timeout);

    // }

   
    // function logout(){
    //     console.log("logout",33);
    //     window.location.href='/login'

    // }
    useEffect(()=>{
        // logout()
        sessionstart()
        return () => {
            clearTimeout(timer); // Clear the timeout when component unmounts
        };
    },[])

    const handleUserActivity = () => {
        clearTimeout(timer); // Clear previous timer
        sessionstart(); // Set a new timer
    };
    useEffect(()=>{
        document.addEventListener('mousemove', handleUserActivity);
            return()=>{
                document.addEventListener('mousemove', handleUserActivity);

            }
    },[])
    return <div>

        <h3>user deatails</h3>
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
        <input type='file' onChange={handleFile} />
            <div>
                {image && <img src={image} alt="Selected Image" style={{ maxWidth: '100%', maxHeight: '400px' }} />}
            </div>
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