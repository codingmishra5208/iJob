import { IconAnchor, IconBellRinging, IconSettings } from "@tabler/icons-react";
import Navlinks from "./Navlinks";
import { Link, useLocation } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";

const Header = () => {
  const location = useLocation();
  return location.pathname != '/signup' && location.pathname != '/login' ? (
    <div className="w-full text-white flex justify-between px-6 items-center h-20 bg-mine-shaft-950 font-['poppins']">
      <Link to='/'>
      <div className="flex gap-2 items-center  text-bright-sun-400">
        <IconAnchor stroke={2.5} className="h-10 w-8" />
        <div className="text-3xl font-semibold">iJobs</div>
      
      </div>
      </Link>
      <Navlinks />
      <div className="flex gap-3 items-center">
    {/*profile menu ko add kiya hai componenent me   */}
         <ProfileMenu/>

        <div className="bg-mine-shaft-900 p-1 rounded-full">
          <IconSettings className="" stroke={1.5} />
        </div>
        <div className="bg-mine-shaft-900 p-1 rounded-full relative">
          <div className="absolute top-1 right-1 bg-pink-600 rounded-full h-2 w-2" />
          <IconBellRinging stroke={1.5} />
        </div>
      </div>
    </div>
  ) : null; // Agar path signup ya login hai to kuch nahi dikhana
}

export default Header;