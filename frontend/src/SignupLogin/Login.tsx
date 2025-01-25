import { Anchor, Button, Checkbox, PasswordInput, rem, TextInput } from "@mantine/core";
import { IconAt, IconLock } from "@tabler/icons-react";
import { Link } from "react-router-dom";

const Login=()=>{
   return(
  <div className="w-1/2 px-20 flex flex-col justify-center gap-3">
      <div className="text-2xl font-semibold">Create Account</div>
    
      <TextInput
        withAsterisk
        leftSectionPointerEvents="none"
        leftSection={ <IconAt style={{width:rem(16), height:rem(16)}} />}
        label="Email"
        placeholder="Your email"
      />
        <PasswordInput label="Password" placeholder="Enter password" withAsterisk leftSection={<IconLock size={18} stroke={1.5} />} />
          <Button autoContrast variant="filled">Login</Button>
           <div className="mx-auto">Don't Have an account? <Link to='/signup' className="text-bright-sun-400 hover:underline">Login </Link>
        
           </div>
    </div>
   )
}
export default Login;
