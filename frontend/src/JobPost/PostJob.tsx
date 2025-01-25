import { Button, TagsInput } from "@mantine/core";
import SelectInput from "./SelectInput";
import RichTextEditior from "./RichTextEditior";

const fields=[
    {
        label:"Job Title",
        placeholder:"Enter Job Title",
        options:["Designer","Developer","Product Manager","Marketing Specialist","Data Anylst","Sales Executive"]
    },
    {
        label:"Company",
        placeholder:"Enter Company Name",
        options:["Designer","Developer","Product Manager","Marketing Specialist","Data Anylst","Sales Executive"],
    },
    {
       label:"Experience",
       placeholder:"Enter Experience Level",
       options:["Entry Level","Intermediate","Expert"]
    },
    {
        label:"Location",
        placeholder:"Enter Job Location",
        options:["Delhi","New York","San Francisco","London","Berlin","Tokoyo","Sydney","Toranto"]
    },
    {
        label:"Job Type",
        placeholder:"Enter Job Type",
        options:["Full Time","Part Time","Contract","Freelance","Internship"]
    },
    {
        label:"Salary",
        placeholder:"Enter Salary",
        options:["10LPA","15LPA","20LPA","25LPA","35LPA","40LPA","45LPA"]
    }
]

const PostJob=()=>{
 const select = fields;
  return(
    <div className="w-4/5 mx-auto mt-5">
       <div className="text-2xl font-semibold mb-5">
        Post Job
       </div>
       <div className="flex flex-col gap-5">
          <div className="flex gap-10 [&>*]:w-1/2">
            <SelectInput {...select[0]} />
            <SelectInput {...select[1]} />
          </div>
          <div className="flex gap-10 [&>*]:w-1/2">
            <SelectInput {...select[2]} />
            <SelectInput {...select[3]} />
          </div>
          <div className="flex gap-10 [&>*]:w-1/2">
            <SelectInput {...select[4]} />
            <SelectInput {...select[5]} />
          </div>
          <TagsInput label="Press Enter to submit a tag" placeholder="Enter skill"
           clearable acceptValueOnBlur splitChars={[',', ' ', '|']} />
            <div className="flex gap-4">
               <Button color="brightSun.4" variant="light">Publish Job</Button>
               <Button color="brightSun.4" variant="outline">Save as Draft</Button>   
            </div>
       </div>
    </div>
  )

}
export default PostJob;