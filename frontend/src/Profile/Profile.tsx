import { ActionIcon, Button, Divider } from "@mantine/core";
import { IconBriefcase, IconMapPin, IconPencil } from "@tabler/icons-react";


const Profile=()=>{
  
  return(
     
    <div className="w-4/5 mx-auto">
        <div className="">
            <div className="relative">
              <div className="bg-red-100 h-40 rounded-xl"></div>
              <img src="/avatar.png" alt="" className="w-48 h-48 border-mine-shaft-950 border-8
              absolute -bottom-1/3 left-3 rounded-full" />
            </div>
            <div className="px-3 mt-16">
                <div className="text-3xl font-semibold flex justify-between">Jarred Wood
                  <ActionIcon size='lg' color="brightSun.4" variant="subtle">
                    <IconPencil className="h-4/5 w-4/5" stroke={1.5} />
                  </ActionIcon>
                </div>
              <div className="text-xl flex gap-1 items-center">
                <IconBriefcase className="h-5 w-5" stroke={.5}/>Software Enginner &bull; 
                Google</div>
             <div className="text-lg flex gap-1 items-center text-mine-shaft-300">
             <IconMapPin className="h-5 w-5" stroke={1.5} />New York, United States
             </div>
            </div>
             
       </div>
      
    </div>
  )

}
export default Profile;