import {
  BookmarkIcon,
  ChevronDownIcon,
  MapPinIcon,
  SearchIcon,
} from "lucide-react";
import React from "react";
import { Badge } from "../../../../components/ui/badge";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { Input } from "../../../../components/ui/input";
import { ScrollArea } from "../../../../components/ui/scroll-area";
import { Separator } from "../../../../components/ui/separator";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

export const JobListingsSection = (): JSX.Element => {
  // Data for job cards to enable mapping
  const featuredJobs = [
    {
      id: 1,
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      time: "1 day ago",
      applicants: "22 applicants",
      image: "public/group-1321315533.png",
    },
    {
      id: 2,
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      time: "1 day ago",
      applicants: "22 applicants",
      image: "public/group-1321315533-1.png",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      time: "1 day ago",
      applicants: "22 applicants",
      image: "public/group-1321315533-2.png",
    },
    {
      id: 4,
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      time: "1 day ago",
      applicants: "22 applicants",
      image: "public/group-1321315533-3.png",
    },
    {
      id: 5,
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      time: "1 day ago",
      applicants: "22 applicants",
      image: "public/group-1321315533-4.png",
    },
  ];

  const recommendedJobs = [
    {
      id: 1,
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      time: "1 day ago",
      applicants: "22 applicants",
      image: "public/group-1321315533-5.png",
    },
    {
      id: 2,
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      time: "1 day ago",
      applicants: "22 applicants",
      image: "public/group-1321315533-6.png",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      time: "1 day ago",
      applicants: "22 applicants",
      image: "public/group-1321315533-7.png",
    },
    {
      id: 4,
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      time: "1 day ago",
      applicants: "22 applicants",
      image: "public/group-1321315533-8.png",
    },
    {
      id: 5,
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      time: "1 day ago",
      applicants: "22 applicants",
      image: "public/group-1321315533-9.png",
    },
  ];

  const recommendedJobsRow2 = [
    {
      id: 1,
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      time: "1 day ago",
      applicants: "22 applicants",
      image: "public/group-1321315533-10.png",
    },
    {
      id: 2,
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      time: "1 day ago",
      applicants: "22 applicants",
      image: "public/group-1321315533-11.png",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      time: "1 day ago",
      applicants: "22 applicants",
      image: "public/group-1321315533-12.png",
    },
    {
      id: 4,
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      time: "1 day ago",
      applicants: "22 applicants",
      image: "public/group-1321315533-13.png",
    },
    {
      id: 5,
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      time: "1 day ago",
      applicants: "22 applicants",
      image: "public/group-1321315533-14.png",
    },
  ];

  const latestJobs = [
    {
      id: 1,
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      time: "1 day ago",
      applicants: "22 applicants",
      image: "public/group-1321315533-15.png",
    },
    {
      id: 2,
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      time: "1 day ago",
      applicants: "22 applicants",
      image: "public/group-1321315533-16.png",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      time: "1 day ago",
      applicants: "22 applicants",
      image: "public/group-1321315533-17.png",
    },
    {
      id: 4,
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      time: "1 day ago",
      applicants: "22 applicants",
      image: "public/group-1321315533-18.png",
    },
    {
      id: 5,
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      time: "1 day ago",
      applicants: "22 applicants",
      image: "public/group-1321315533-19.png",
    },
  ];

  const latestJobsRow2 = [
    {
      id: 1,
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      time: "1 day ago",
      applicants: "22 applicants",
      image: "public/group-1321315533-20.png",
    },
    {
      id: 2,
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      time: "1 day ago",
      applicants: "22 applicants",
      image: "public/group-1321315533-21.png",
    },
    {
      id: 3,
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      time: "1 day ago",
      applicants: "22 applicants",
      image: "public/group-1321315533-22.png",
    },
    {
      id: 4,
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      time: "1 day ago",
      applicants: "22 applicants",
      image: "public/group-1321315533-23.png",
    },
    {
      id: 5,
      title: "UI/UX Designer",
      company: "Teams",
      location: "Seattle, USA (Remote)",
      time: "1 day ago",
      applicants: "22 applicants",
      image: "public/group-1321315533-24.png",
    },
  ];

  const similarTags = ["Frontend", "Backend", "Graphic Designer"];

  // Job card component for reuse
  const JobCard = ({ job }: { job: (typeof featuredJobs)[0] }) => (
    <Card className="flex-none border rounded-[10px] overflow-hidden">
      <CardContent className="p-5">
        <div className="flex flex-col w-[142px] items-start gap-[15px] max-md:w-full">
          <div className="flex flex-col items-start gap-[5px] w-full">
            {job.id <= 5 && (
              <div className="text-[#333333] text-[10px] [font-family:'Neue_Haas_Grotesk_Display_Pro-Mediu',Helvetica] font-normal">
                Promoted
              </div>
            )}
            <div className="flex flex-col items-start gap-[5px] w-full">
              <div className="flex items-center gap-2.5 w-full">
                <div className="flex w-10 h-10 items-center gap-2.5 px-2 py-1.5 bg-[#f9f9f9] rounded-[9.11px] border-[0.76px] border-solid border-white">
                  <img
                    className="w-[23px] h-[21.4px]"
                    alt="Company logo"
                    src={job.image}
                  />
                </div>
                <div className="flex flex-col w-[92px] items-start gap-0.5">
                  <div className="w-full  font-normal text-[#333333] text-sm">
                    {job.title}
                  </div>
                  <div className="w-full  font-normal text-[#333333] text-xs">
                    {job.company}
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2.5 w-full">
                <MapPinIcon className="w-3 text-text-2" />
                <div className="w-full  font-normal text-text-2 text-xs">
                  {job.location}
                </div>
              </div>

              <div className="w-full flex justify-between font-normal text-text-2 text-xs">
                <span className="text-[#585d6e]">{job.time}</span>
                <div>|</div>
                <span className="text-[#0154aa]">{job.applicants}</span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-5 w-full max-md:justify-between">
            <Button className="px-[30px] py-2.5 bg-[#0154aa] rounded-[6.13px]  text-xs max-md:w-full">
              Apply Now
            </Button>
            <div>
              <BookmarkIcon className="w-4 h-5 text-[#AAAAAA]" />
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className="flex flex-col w-full items-start gap-[21px]">
      <header className="flex flex-col w-full lg:max-w-[644px] items-start gap-[5px]">
        <h1 className="w-full font-neue font-semibold text-[22px]">
          <span className="text-[#333333]">Find your Dream Job, </span>
          <span className="text-[#0154aa]">Albert!</span>
        </h1>
        <p className="w-full text-text-2 font-neue font-medium text-sm">
          Explore the latest job openings and apply for the best opportunities
          available today!
        </p>
      </header>

      <div className="p-5 w-full bg-white rounded-[10px] border border-solid">
        <div className="flex max-lg:flex-col max-lg:gap-4 items-center justify-between w-full">
          <Input
            className="outline-none border-none shadow-none w-full text-sm text-text-2 focus-visible:outline-none focus-visible:border-none focus-visible:shadow-none"
            placeholder="Job Title, Company, or Keywords"
          />
          <div className="flex w-full items-center gap-7 max-md:flex-wrap">
            <div className="text-[#01274E] opacity-50 max-lg:hidden">|</div>
            <Menu>
              <MenuButton className="inline-flex items-center gap-2 py-1.5 px-3 text-sm/6 text-text-2 shadow-inner shadow-white/10 focus:outline-none text-nowrap">
                Select Location
                <ChevronDownIcon className="size-4 fill-white/60" />
              </MenuButton>

              <MenuItems
                transition
                anchor="bottom end"
                className="w-52 origin-top-right rounded-xl border border-white/5 bg-[#0154aa] p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
              >
                <MenuItem>
                  <button className="group flex w-full items-center gap-2 py-1.5 px-3">
                    Location 1
                    <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                      ⌘E
                    </kbd>
                  </button>
                </MenuItem>
                <MenuItem>
                  <button className="group flex w-full items-center gap-2 py-1.5 px-3">
                    Location 2
                    <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                      ⌘D
                    </kbd>
                  </button>
                </MenuItem>
                <MenuItem>
                  <button className="group flex w-full items-center gap-2 py-1.5 px-3">
                    Location 3
                    <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                      ⌘A
                    </kbd>
                  </button>
                </MenuItem>
                <MenuItem>
                  <button className="group flex w-full items-center gap-2 py-1.5 px-3">
                    Location 4
                    <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                      ⌘D
                    </kbd>
                  </button>
                </MenuItem>
              </MenuItems>
            </Menu>
            <div className="text-[#01274E] opacity-50 max-lg:hidden">|</div>
            <Menu>
              <MenuButton className="inline-flex items-center gap-2 py-1.5 px-3 text-sm/6 text-text-2 shadow-inner shadow-white/10 focus:outline-none text-nowrap">
                Job Type
                <ChevronDownIcon className="size-4 fill-white/60" />
              </MenuButton>

              <MenuItems
                transition
                anchor="bottom end"
                className="w-52 origin-top-right rounded-xl border border-white/5 bg-[#0154aa] p-1 text-sm/6 text-white transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
              >
                <MenuItem>
                  <button className="group flex w-full items-center gap-2 py-1.5 px-3">
                    Job 1
                    <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                      ⌘E
                    </kbd>
                  </button>
                </MenuItem>
                <MenuItem>
                  <button className="group flex w-full items-center gap-2 py-1.5 px-3">
                    Job 2
                    <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                      ⌘D
                    </kbd>
                  </button>
                </MenuItem>
                <MenuItem>
                  <button className="group flex w-full items-center gap-2 py-1.5 px-3">
                    Job 3
                    <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                      ⌘A
                    </kbd>
                  </button>
                </MenuItem>
                <MenuItem>
                  <button className="group flex w-full items-center gap-2 py-1.5 px-3">
                    Job 4
                    <kbd className="ml-auto hidden font-sans text-xs text-white/50 group-data-[focus]:inline">
                      ⌘D
                    </kbd>
                  </button>
                </MenuItem>
              </MenuItems>
            </Menu>
            <Button className="w-[140px] h-[37px] bg-[#0154aa] rounded-lg flex items-center justify-center gap-2.5 max-lg:w-full">
              <SearchIcon className="w-[15.5px] h-[15.52px]" />
              <span className=" font-normal text-white text-sm">Search</span>
            </Button>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-[15px]">
        <span className="text-[#737a91]  font-normal text-sm">Similar:</span>
        <div className="flex items-center gap-3 max-md:flex-wrap">
          {similarTags.map((tag, index) => (
            <Badge
              key={index}
              variant="outline"
              className="px-[15px] py-2 rounded-[5px] border-[#737a91]  font-normal text-[#737a91] text-xs"
            >
              {tag}
            </Badge>
          ))}
        </div>
      </div>

      <div className="flex flex-col w-full items-start gap-[15px]">
        <div className="flex items-center gap-[15px]">
          <h2 className=" font-normal text-text-1 text-lg">Featured Jobs</h2>
          <a href="#" className=" font-normal text-[#0154aa] text-sm underline">
            See Featured Jobs
          </a>
        </div>

        <div className="flex gap-4 w-full items-center max-lg:flex-wrap">
          {featuredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>

        <Separator className="w-full my-4" />

        <div className="flex flex-col items-start gap-[15px] w-full">
          <div className="flex items-center gap-[15px]">
            <h2 className=" font-normal text-text-1 text-lg">
              Recommended Jobs
            </h2>
            <a
              href="#"
              className=" font-normal text-[#0154aa] text-sm underline"
            >
              See Recommended Jobs
            </a>
          </div>

          <div className="flex gap-4 w-full items-center max-md:flex-wrap">
            {recommendedJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>

          <div className="flex gap-4 w-full items-center max-md:flex-wrap">
            {recommendedJobsRow2.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>

        <Separator className="w-full my-4" />

        <div className="flex flex-col items-start gap-[15px] w-full">
          <div className="flex items-center gap-[15px]">
            <h2 className=" font-normal text-text-1 text-lg">Latest Jobs</h2>
            <a
              href="#"
              className=" font-normal text-[#0154aa] text-sm underline"
            >
              See Latest Jobs
            </a>
          </div>

          <div className="flex gap-4 w-full items-center max-md:flex-wrap">
            {latestJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>

          <div className="flex gap-4 w-full items-center max-md:flex-wrap">
            {latestJobsRow2.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
