import { Divider } from "@mantine/core";
import { IconAnchor } from "@tabler/icons-react";
import Signup from "../SignupLogin/Signup";
import Login from "../SignupLogin/Login";
import { useLocation } from "react-router-dom";

const SignupPage=()=>{
   const location = useLocation();
  return(
     <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins'] overflow-hidden">
          
          <div className={`w-[100vw] h-[100vh] flex [&>*]:flex-shrink-0 transition-all ease-in-out duration-1000
             ${location.pathname=='/signup'?'-translate-x-1/2':'translate-x-0'}`}>
            <Login />            
             <div className={`w-1/2  flex flex-col justify-center items-center gap-5 h-full
                rounded-r-[200px] bg-mine-shaft-900`}>
             <div className="flex gap-2 items-center text-bright-sun-400">
              <IconAnchor stroke={2.5} className="h-16 w-16" />
              <div className="text-5xl font-semibold">iJobs</div>
           </div>
            <div className="text-2xl text-mine-shaft-200 font-semibold">Find the made for you</div>
             </div>
             <Signup/>
          </div>
     </div>
  )

}
export default SignupPage;
