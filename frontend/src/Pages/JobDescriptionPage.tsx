import { Button, Divider } from "@mantine/core";
import { IconArrowLeft, IconBookmark } from "@tabler/icons-react";
import { Link } from "react-router-dom";
import JobDesc from "../JobDesc/JobDesc";
import RecommendedJobs from "../JobDesc/RecommendedJobs";


const img="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/768px-Google_%22G%22_logo.svg.png";

   const JobDescriptionPage=()=>{
    return(
       <div className="min-h-[90vh] bg-mine-shaft-950 font-['poppins] p-4">
        <Link className="my-5 inline-block" to='/find-jobs'>
           <Button color="brightSun.4" leftSection={<IconArrowLeft size={20} />} variant="light">
            Back
           </Button>
        </Link>
         <div className="flex gap-5 justify-around">
          <JobDesc/>
           <RecommendedJobs />
         </div>

       </div>
    )

  }
  export default JobDescriptionPage;