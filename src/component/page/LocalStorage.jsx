
import React, { useEffect, useState } from "react"
function LocalStorage(){
    const [user,setUser]=useState("")
    const [newData,setData]=useState({})
    useEffect(()=>{
    localStorage.setItem("user","xyz")

    const user=localStorage.getItem("user")
    setUser(user);
    const newUser={
        name:"harsh",
        mobile:9824292374
    }
    localStorage.setItem('newUser',JSON.stringify(newUser));
    const data=JSON.parse(localStorage.getItem("newUser"));
    setData(data)
    },[])
return(
    <>
            <h3 className="text-center bg-primary h-50 display-6">LocalStorage</h3>
            <p>{user}</p>
            <ul>
                <li>{newData.name}</li>
                <li>{newData.mobile}</li>
            </ul>
    </>
)
}
export default LocalStorage;