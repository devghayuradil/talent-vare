import React from "react";
import { Separator } from "../../components/ui/separator";
import { JobListingsSection } from "./sections/JobListingsSection/JobListingsSection";
import { NavigationBarSection } from "./sections/NavigationBarSection/NavigationBarSection";
import { UserProfileSection } from "./sections/UserProfileSection";

export const FindJobs = (): JSX.Element => {
  return (
    <>
      {/* Navigation Bar */}
      <NavigationBarSection />

      {/* Main Content */}
      <main className="bg-[#f4f4f4] py-6">
        
          <div className="flex flex-wrap lg:justify-center px-[50px]">
            {/* Left Sidebar - User Profile */}
            <UserProfileSection />

            {/* Main Content - Job Listings */}
            <div className="flex-1 py-3 lg:px-6 max-lg:w-full max-md:py-5">
              <JobListingsSection />
              <Separator className="my-6" />
            </div>
          </div>
      </main>
    </>
  );
};
