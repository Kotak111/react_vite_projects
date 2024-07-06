import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function NextLocal() {

  const { register, handleSubmit, formState: { errors }, } = useForm()
  const [user, setUser] = useState([])
  const [singleUser , setSingleUser] = useState({})

  //submit data
  const onSubmit = async (data) => {

    const dataGet = localStorage.getItem('userList')
    const user = dataGet == null ? [] : JSON.parse(dataGet);
    user.push(data)
    localStorage.setItem("userList", JSON.stringify(user))
    window.location.href = window.location.href;
    show();
  }
  //show data
  function show() {
    const dataGet = JSON.parse(localStorage.getItem('userList'));
    setUser(dataGet);
    console.log(dataGet);
  }
    //delete data
  function trash(id){
    // const dataGet = JSON.parse(localStorage.getItem('userList'))
    if(confirm("do you want to delete this items ?")){
      user.splice(id,1);
      localStorage.setItem("userList", JSON.stringify(user))
      show();

    }
  }

  //edit data
  function edit(id){
    document.querySelector("#submit").style.display= " none" 
    document.querySelector("#update").style.display="block"
    // const dataGet = JSON.parse(localStorage.getItem('userList'))
    setSingleUser(user[id]);

  }
  useEffect(() => {
    show();
  }, [])

  return (
    <>
      <div className="col-6 mx-auto my-5 shadow p-5">

        <h2 className="text-center">SignUp</h2>
        <form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-4">
            <input {...register("username", {
              required: "true"
            })} 
            defaultValue={singleUser.username}
            className="form-control" placeholder="Username" />
            {errors.username && <p>{errors.username.message}</p>}
          </div>
          <div className="mt-4">
            <input {...register("email", {
              required: {
                value: true,
                message: "plese enter email address"
              }

            }

            )} defaultValue={singleUser.email} 
            className="form-control" placeholder="Email" />
            {errors.email && <p>{errors.email.message}</p>}
          </div>
          <div className="mt-4">
            <input {...register("mobile", {
              required: "alert('plese enter mobile number')"
            })}
            defaultValue={singleUser.mobile}
              className="form-control" placeholder="Mobile" />
            {errors.mobile && <p>{errors.mobile.message}</p>}
          </div>
          <div className="mt-4">
            <button className="btn btn-primary" id="submit">Submit</button>
            <button className="btn btn-warning" style={{display:"none"}} id="update">update</button>
           
            <ToastContainer />
          </div>

        </form>
      </div>

      <table className="table table-bordered table-dark text-center table-hover">
        <thead>
          <tr>
            <th>Index</th>
            <th>name</th>
            <th>email</th>
            <th>mobile</th>
            <th>Action</th>
          </tr></thead>
        <tbody>
          {
            user?.length > 0 ? (
              user.map((items, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{items.username}</td>
                  <td>{items.email}</td>
                  <td>{items.mobile}</td>
                  <td><button className="btn btn-danger" onClick={()=> trash(index)}>delete</button>
                    <button className="btn btn-success ms-5" onClick={()=> edit(index)}>Edit</button>
                  </td>
                  

                </tr>
              ))
            ) : (
              <th colSpan={4} className="text-center bg-primary">no data</th>
            )
          }
        </tbody>
      </table>
    </>
  )

}
export default NextLocal;