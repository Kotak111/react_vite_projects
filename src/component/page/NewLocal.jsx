import { useState } from "react";
import { useForm } from "react-hook-form";

function NewLocal(){
    const [newUser,setUser] = useState({})

    const {register , handleSubmit ,  formState: { errors },}  = useForm()


    function onSubmit(data){
          localStorage.setItem("newUser",JSON.stringify(data))
          const login=JSON.parse(localStorage.getItem("newUser"))
          setUser(login)
    }
            return(
                <>
                <div className="col-6 mx-auto my-5 shadow p-5">

<h2 className="text-center">SignUp</h2>
<form action="" method="post" onSubmit={handleSubmit(onSubmit)}>
<div className="mt-4">
<input {...register("username",{
  required:"true"
})} className="form-control" placeholder="Username"/>
{errors.username && <p>{errors.username.message}</p>}
</div>
<div className="mt-4">
<input {...register("email",{
  required:{
    value:true,
    message:"plese enter email address"
  },
  pattern:{
    value:/^[a-z0-9.-_]+@([a-z0-9.-_])+\.([a-z]{2,3})$/,
    message:"enter valid format"
  }

}

)} className="form-control" placeholder="Email" />
{errors.email && <p>{errors.email.message}</p>}
</div>
<div className="mt-4">
<input {...register("mobile",{
required:"alert('plese enter mobile number')"})} 
className="form-control" placeholder="Mobile"/>
{errors.mobile && <p>{errors.mobile.message}</p>}
</div>
<div className="mt-4">
<button className="btn btn-primary">Submit</button>

</div>

</form>
</div>
<p>{newUser.username}</p>
<p>{newUser.email}</p>
<p>{newUser.mobile}</p>
                </>
            )
}
export default NewLocal;