import { IconBookmark, IconClockHour3 } from "@tabler/icons-react";
import { Divider, Text } from "@mantine/core";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Job interface define karna
interface Job {
  image: string;
  name: string;
  desc:string;
  application:string;
  price:string;
  company:string;
}

const img =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiEndPkpxU-FDOQK0acJ6iuFECTI914xOelQ&s";

const JobCard = () => {
  const [job, Setjob] = useState<Job[]>([]);

  useEffect(() => {
    const fetchJob = async () => {
      try {
        const response = await fetch("http://localhost:3000/findjob");
        if (!response.ok) {
          throw new Error("Network response was not Ok");
        }
        const data = (await response.json()) as Job[]; // Type assertion
        console.log(data);
        Setjob(data);
      } catch (error) {
        console.log("Error fetching job :", error);
      }
    };

    fetchJob();
  }, []);

  return (
    <Link to="/jobs" className="mt-10 flex flex-wrap gap-5">
      {job.map((item, index) => (
        <div key={index}>
          <div
            className="bg-mine-shaft-900 p-4 w-72 flex flex-col gap-3 rounded-xl 
             hover:shadow-[0_0_5px_1px_yellow] !shadow-bright-sun-400"
          >
            <div className="flex justify-between">
              <div className="flex gap-2 items-center">
                <div className="p-2 bg-mine-shaft-800 rounded-md">
                  <img className="h-7" src={item.image} alt="" />
                </div>
                <div>
                  <div className="font-semibold">{item.name}</div>
                  <div className="text-xs text-mine-shaft-300">
                    Meta &#x2022; {item.application} Applicant
                  </div>
                </div>
              </div>
              <IconBookmark className="text-mine-shaft-300 cursor-pointer" />
            </div>
            <div
              className="flex gap-2 [&>div]:py-1 [&>div]:px-2 [&>div]:bg-mine-shaft-800
        [&>div]:text-bright-sun-400 [&>div]:rounded-lg text-xs "
            >
              <div>Entry Level</div>
              <div>Full Time</div>
              <div>Remote</div>
            </div>
            <Text
              className="!text-xs text-justify text-mine-shaft-300"
              lineClamp={3}
            >
             {item.desc}
            </Text>
            <Divider size="xs" color="mineShaft.7" />
            <div className="flex justify-between">
              <div className="font-semibold text-mine-shaft-200 uppercase">₹{item.price} </div>
              <div className="flex gap-2 text-xs items-center text-mine-shaft-400">
                <IconClockHour3 className="h-5 w-5" stroke={1.5} /> days ago
              </div>
            </div>
          </div>
        </div>
      ))}
    </Link>
  );
};

export default JobCard;
