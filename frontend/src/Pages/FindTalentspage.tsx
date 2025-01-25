import { Divider } from "@mantine/core";
import Searchbar from "../FindTalent/Searchbar";
import Talents from "../FindTalent/Talents";

const FindTalentspage=()=>{
  return(
    <div className="min-h-[90vh] bg-mine-shaft-950 font-[poppins]">
     <Divider size="xs" mx="md" />
       <Searchbar/>
       <Divider size="xs" mx="md" /> 
         <Talents/>
    </div>
  )

}

export default FindTalentspage;