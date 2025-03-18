import { ChevronDownIcon } from "lucide-react";
import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "../../../../components/ui/collapsible";
import { Separator } from "../../../../components/ui/separator";

export const UserProfileSection = (): JSX.Element => {
  // User profile data
  const profileData = {
    name: "Albert Flores",
    title:
      "Senior Product Designer  |  UI/UX Designer  |  Graphic Designer  |  Web...",
    location: "Clinton, Maryland",
    avatar: "public/oval.png",
    coverImage: "public/rectangle-18369.png",
  };

  // Stats data
  const statsData = [
    { label: "Profile Visitors", value: "140" },
    { label: "Resume Viewers", value: "20" },
    { label: "My Jobs", value: "88" },
  ];

  return (
    <div className="flex max-lg:flex-wrap lg:flex-col w-full lg:max-w-[346px] items-start gap-2.5">
      {/* Profile Card */}
      <Card className="w-full overflow-hidden border border-solid">
        <CardContent className="p-0">
          <div className="flex flex-col items-center gap-3 w-full">
            <div className="relative w-full h-[248px]">
              <img
                className="w-full h-[100px] absolute top-0 left-0 object-cover"
                alt="Cover"
                src={profileData.coverImage}
              />

              <div className="flex flex-col items-center gap-2 absolute top-[50px] left-1/2 transform -translate-x-1/2 w-[236px]">
                <img
                  className="w-[86px] h-[86px] rounded-full object-cover"
                  alt="Profile"
                  src={profileData.avatar}
                />

                <div className="flex flex-col items-center justify-center gap-[5px] w-full">
                  <div className="flex flex-col items-center gap-0.5 w-full">
                    <div className="w-full mt-[-1.00px] font-semibold text-text-1 text-lg text-center leading-normal">
                      {profileData.name}
                    </div>

                    <div className="w-full font-normal text-text-1 text-sm text-center leading-normal">
                      {profileData.title}
                    </div>
                  </div>

                  <div className="w-full font-normal text-text-2 text-xs text-center leading-normal">
                    {profileData.location}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Stats Card */}
      <Card className="w-full overflow-hidden border border-solid">
        <CardContent className="p-5">
          <div className="flex flex-col w-full gap-2.5">
            {statsData.map((stat, index) => (
              <React.Fragment key={index}>
                <div className="flex items-center justify-between w-full">
                  <div className="font-normal text-[#333333] text-sm leading-normal">
                    {stat.label}
                  </div>
                  <div className="font-normal text-[#0154aa] text-base text-right leading-normal whitespace-nowrap">
                    {stat.value}
                  </div>
                </div>
                {index < statsData.length - 1 && (
                  <Separator className="w-full h-px" />
                )}
              </React.Fragment>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Calendar Card */}
      <Card className="w-full overflow-hidden border border-solid">
        <CardContent className="p-2.5">
          <Collapsible className="w-full">
            <CollapsibleTrigger className="flex items-center justify-between w-full">
              <div className="flex flex-col items-start">
                <div className="font-semibold text-[#333333] text-base leading-4">
                  My calendar
                </div>
                <div className="font-normal text-[#737a91] text-sm leading-4">
                  Upcoming Interviews
                </div>
              </div>
              <ChevronDownIcon className="w-4 h-4" />
            </CollapsibleTrigger>
            <CollapsibleContent>
              {/* Calendar content would go here */}
            </CollapsibleContent>
          </Collapsible>
        </CardContent>
      </Card>
    </div>
  );
};
