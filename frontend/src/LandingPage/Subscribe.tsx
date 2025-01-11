import { Button, TextInput } from "@mantine/core";

const Subscribe=()=>{
  return( 
    <div className="mt-20 flex items-center bg-mine-shaft-900 mx-20 py-3 rounded-xl justify-around">
        <div className="text-4xl text-center font-semibold mb-3 text-mine-shaft-100 w-2/5">
            Never Wants to miss Any <span className="text-bright-sun-400"> Job News?</span>
         </div>
          <div className="flex gap-4 bg-mine-shaft-700 px-3 py-2 items-center rounded-xl">
          <TextInput
      variant="unstyled"
       className="[&_input]:text-mine-shaft-100 font-semibold"
      placeholder="Your@email.com"
      size="xl"

    />
     <Button className="!rounded-lg" size="lg" color="brightSun.4" variant="filled">
        Subscribe
     </Button>
          </div>
    </div>
  )

}
export default Subscribe;