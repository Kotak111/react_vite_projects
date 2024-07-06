import axios from "axios";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


function HookFomr (){

const {register , handleSubmit ,  formState: { errors },}  = useForm()
    

  const onSubmit = async (data)=>{
    // event.preventDefault();
    await axios.post('https://65dec3bcff5e305f32a06859.mockapi.io/api/user',data)
    .then(()=>{
      toast("data are insert")
    }).catch((error)=>{
      console.log(error);
    })


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
  minLength:{
    value:3,
    message:"atleast  min 3 char"
  },
  maxLength:{
    value:5,
    message:"max value 5"
  },
  pattern:{
    value:/^[A-Za-z]{3}$/,
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
<ToastContainer/>
</div>

</form>
</div>
    </>
  )
 
}
export default HookFomr;