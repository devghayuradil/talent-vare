import { SearchIcon } from "lucide-react";
import React from "react";
import { Avatar, AvatarImage } from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

export const NavigationBarSection = (): JSX.Element => {
  // Navigation menu items data
  const navItems = [
    { label: "Find Jobs", active: true },
    { label: "Top Companies", active: false },
    { label: "Job Tracker", active: false },
    { label: "My Calendar", active: false },
    { label: "Documents", active: false },
    { label: "Messages", active: false },
    { label: "Notifications", active: false },
  ];

  return (
    <header className="w-full h-[70px] bg-white border-b border-gray-100 flex items-center justify-between px-[50px]">
      {/* Logo */}
      <div className="flex items-center">
        <img
          className="w-[41px] h-[38px]"
          alt="Logo"
          src="public/group-1907.png"
        />

        {/* Navigation Menu */}
        <nav className="ml-[38px]">
          <ul className="flex items-center gap-[25px]">
            {navItems.map((item, index) => (
              <li key={index}>
                <a
                  href="#"
                  className={`text-base ${
                    item.active
                      ? "text-[#0154aa] font-semibold font-neue"
                      : "text-[#737a91] font-normal font-neue"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* Right side actions */}
      <div className="flex items-center gap-[15px]">
        {/* SearchIcon box */}
        <div className="relative w-[261px]">
          <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-[#737a91]">
            <SearchIcon className="w-[15px] h-4" />
          </div>
          <Input
            className="h-[39px] pl-9 bg-[#f6f9ff] border-none text-sm text-[#737a91] "
            placeholder="Search"
          />
        </div>

        {/* Resume Builder button */}
        <Button className="bg-[#0154aa] hover:bg-[#0154aa]/90 text-white text-base ">
          Resume Builder
        </Button>

        {/* User avatar */}
        <Avatar className="w-[38px] h-[38px]">
          <AvatarImage src="public/rectangle-1516.png" alt="User profile" />
        </Avatar>
      </div>
    </header>
  );
};
