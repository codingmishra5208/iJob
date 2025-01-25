import { Divider } from "@mantine/core"
import PostJob from "../JobPost/PostJob"


const UploadJob=()=>{
return(
    <div className="min-h-[90vh] bg-mine-shaft-950 font-[poppins]">
    <Divider size="xs" mx="md" />
      <PostJob/>
   </div>
)

}
export default UploadJob