import { Divider } from "@mantine/core";
import Searchbox from "../FindJobs/Searchbox";
import Jobs from "../FindJobs/Jobs";


const FindJobs=()=>{
 return(
   <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']]">
      <Divider size="xs"  mx="md" />
     <Searchbox/>
     <Divider size="xs"  mx="md" />
      <Jobs/>
      
   </div>

 )


}
export default FindJobs;