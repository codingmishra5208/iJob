import { IconAnchor, IconBellRinging, IconSettings } from "@tabler/icons-react";
import Navlinks from "./Navlinks";


const Header = () => {
  return (
    <div className="w-full bg-mine-shaft-950 text-white flex justify-between px-6 items-center h-20">
      <div className="flex gap-2 items-center text-bright-sun-400">
        <IconAnchor stroke={2.5} className="h-10 w-8" />
        <div className="text-3xl font-semibold">iJobs</div>
      </div>
           {Navlinks()}
      <div className="flex gap-3 items-center">
        <div className="flex items-center gap-3 rounded-full">
          <div>Mishra</div>
          <img src='avatar.png' alt="" className="h-10 w-10 rounded-full" />
        </div>
         <div className="bg-mine-shaft-900 p-1 rounded-full">
        <IconSettings className="" stroke={1.5} />
        </div>
        <div className="bg-mine-shaft-900 p-1 rounded-full relative">
        <div className="absolute top-1 right-1 bg-pink-600 rounded-full h-2 w-2" />
        <IconBellRinging stroke={1.5} />
        </div>
      </div> 
    </div>
  );
};

export default Header;

