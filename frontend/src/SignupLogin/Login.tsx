import { Anchor, Button, Checkbox, PasswordInput, rem, TextInput } from "@mantine/core";
import { IconArrowLeft, IconAt, IconLock } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
   email:string,
   password:string,

};


const Login=()=>{
  const { register, handleSubmit, reset,  formState: { errors } } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = data =>{
    console.log(data);
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
