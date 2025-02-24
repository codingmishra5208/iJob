import { Anchor, Button, Checkbox, PasswordInput, rem, TextInput } from "@mantine/core";
import { IconArrowLeft, IconAt, IconLock } from "@tabler/icons-react";
import { Link} from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../Context/AuthProvider";

type Inputs = {
   email:string,
   password:string,
};

const Login=()=>{
  const {storeToken,storeUserName} = useAuth();

  const { register, handleSubmit, reset,  formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = async(data) =>{
     const  userInfo = {
       email:data.email,
       password:data.password,
     };
    try{
        const response = await axios.post('http://localhost:3000/login',userInfo);
        toast.success('Login Successfully!');
       const token = response.data.token;
       const name = response.data.user.name;
        storeUserName(name);
          storeToken(token);
           reset();
       // window.location.reload();
       console.log(response);
         console.log(name);
    }
      catch(error){
          console.log(error);
          if (axios.isAxiosError(error)) {
            if (error.response) {
              if (error.response.status === 401) {
                toast.error('Something is an error!');
              } else {
                toast.error("An error occurred. Please try again."); 
              }
            } else {
              toast.error("Network error. Please try again."); 
            }
          } else {
            alert
            toast.error("An unexpected error occurred.");
          }       
      }
      reset();
  } 


   return(
  <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
     <Link className="my-5 inline-block" to='/'>
       <Button color="brightSun.4" leftSection={<IconArrowLeft size={20} />} variant="light">
        Back
       </Button>
    </Link>
      <div className="text-2xl font-semibold">Create Account</div>

      <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      <TextInput
        withAsterisk
        leftSectionPointerEvents="none"
        leftSection={ <IconAt style={{width:rem(16), height:rem(16)}} />}
        label="Email"
        placeholder="Your email"
        {...register("email", { required: true })}
      />
       
        {errors.email && <span className="text-bright-sun-400">This field is required</span>}
        <PasswordInput label="Password" placeholder="Enter password"
         withAsterisk leftSection={<IconLock size={18} stroke={1.5} />}
         {...register("password", { required: true })}
          />
          {errors.password && <span className="text-bright-sun-400">This field is required</span>}
          <Button autoContrast variant="filled" type='submit'>Login</Button>
           <div className="mx-auto">Don't Have an account? <Link to='/signup' className="text-bright-sun-400 hover:underline">Signup </Link>
           </div>
           </form> 
    </div>
   )
}
export default Login;
function storeUserName(name: void) {
  throw new Error("Function not implemented.");
}

