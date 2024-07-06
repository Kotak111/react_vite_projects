import axios from "axios";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Form = (props) =>{


    // variable ko as a key pass karna he to []

    // ... spread operator is used to he JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.
            const [user,setUser]=useState({});


          const inoutdata = (e) =>{
                //  console.log(e);
                // console.log(e.target.value);
                // const name= e.target.name;
                // const value=e.target.value;

                const {name,value} =e.target;
                const newData = { [name]: value}

                // const obj={
                //     id:123
                // };
                // const newObj = { obj,newData}
                // console.log(newObj);

                // const newObj2= {...obj,...newData}
                // console.log(newObj2);

                const newObj={...user,...newData}
                console.log(newObj);
                setUser(newObj)
               
                 
          }
          const submitdata =async (event)=>{
            event.preventDefault();
            await axios.post('https://65dec3bcff5e305f32a06859.mockapi.io/api/user',user)
            .then(()=>{
                toast("data are inserted")
            })
            .catch((Error)=>{
                console.log(Error);
            })
          }
          const InternalCss= {color:"blue"}
        return(
            <>

                <h1>Change evenet</h1>
                <div className="col-6 mx-auto my-5 shadow p-5">

                    <h2 className="text-center">SignUp</h2>
                    <form action="" method="post" onSubmit={(e)=> submitdata(e)}>
                <div className="mt-4">
                    <input type="text" style={{color:"red",backgroundColor:"black"}} className="form-control" placeholder="Username" name="username" onChange={(e)=> inoutdata(e)}/>
                </div>
                <div className="mt-4">
                    <input type="text" className="form-control" placeholder="Email" style={InternalCss} name="email" onChange={(e)=> inoutdata(e)}/>
                </div>
                <div className="mt-4">
                    <input type="text" className="form-control" placeholder="Mobile" name="mobile" onChange={(e)=> inoutdata(e)}/>
                </div>
                <div className="mt-4">
                   <button className="btn btn-primary">Submit</button>
                   <ToastContainer/>
                </div>

                    </form>
                </div>
            </>
        )
}
export default Form;


// 