import {
  Anchor,
  Button,
  Checkbox,
  PasswordInput,
  rem,
  TextInput,
} from "@mantine/core";
import { IconArrowLeft, IconAt, IconLock } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useAuth } from "../Context/AuthProvider";

type Inputs = {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
};
const Signup = () => {
  const {storeToken} = useAuth();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const userInfo = {
      name: data.fullName,
      email: data.email,
      password: data.password,
      confirmPassword: data.confirmPassword,
       
    };
 
 

    try {
      const response = await axios.post('http://localhost:3000/signup', userInfo);
          toast.success("Signup Sucessfully. ");
          const token = response.data.token;
           storeToken(token);
       reset()
       console.log(response);
     } catch (error) {
      console.error(error);
      if (axios.isAxiosError(error)) {
        if (error.response) {
          if (error.response.status === 409) {
            toast.error(error.response.data.message); 
          } else {
            toast.error('An error occurred. Please try again.'); 
          }
        } else {
          toast.error('Network error. Please check your connection.');
        }
      }
      
    }
  };

    
  return ( 
    <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
      <Link className="my-5 inline-block ml-auto" to="/">
        <Button
          color="brightSun.4"
          leftSection={<IconArrowLeft size={20} />}
          variant="light"
        >
          Back
        </Button>
      </Link>
      <div className="text-2xl font-semibold">Create Account</div>

      <form className="flex gap-3 flex-col" onSubmit={handleSubmit(onSubmit)}>
        <TextInput
          withAsterisk
          label="Full Name"
          placeholder="Your name"
          {...register("fullName", { required: true })}
        />
        {errors.fullName && <span className="text-bright-sun-300">This field is required</span>}

        <TextInput
          withAsterisk
          leftSectionPointerEvents="none"
          leftSection={<IconAt style={{ width: rem(16), height: rem(16) }} />}
          label="Email"
          placeholder="Your email"
          {...register("email", { required: true })}
        />
        {errors.email && <span className="text-bright-sun-400">This field is required</span>}

        <PasswordInput
          withAsterisk
          leftSection={<IconLock size={18} stroke={1.5} />}
          label="Password"
          placeholder="Enter password"
          {...register("password", { required: true })}
        />
        {errors.password && <span className="text-bright-sun-400">This field is required</span>}

        <PasswordInput
          withAsterisk
          leftSection={<IconLock size={18} stroke={1.5} />}
          label="Confirm Password"
          placeholder="Confirm password"
          {...register("confirmPassword", { required: true })}
        />
        {errors.confirmPassword && <span className="text-bright-sun-400">This field is required</span>}

        <Checkbox
          autoContrast
          label={
            <>
              I accept{""} <Anchor>terms & conditions</Anchor>
            </>
          }
        />
        <Button autoContrast variant="filled" type="submit">
          Sign up
        </Button>
        <div className="mx-auto">
          Have an account?{" "}
          <Link to="/login" className="text-bright-sun-400 hover:underline">
            Login{" "}
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Signup;