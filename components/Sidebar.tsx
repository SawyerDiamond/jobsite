import { useSidebarNavigation } from "../hooks/useSidebarNavigation";

import { TooltipProvider } from "./ui/tooltip";
import { JobsiteLogo } from "../assets/JobsiteLogo";
import { Bookmarks, Filters, Home } from "@/components/sidebarComponents";

type SidebarProps = {
  className?: string;
};
export function Sidebar({ className }: SidebarProps) {
  const { isActivePage, handleNavigation } = useSidebarNavigation();

  return (
    <nav className="card-shadow flex flex-col items-center justify-between rounded-2xl bg-primary border border-primary-border backdrop-blur p-3 w-16 h-[64vh]">
      <div className="flex flex-col items-center mt-4 gap-6">
        <TooltipProvider>
          <Home
            isActive={isActivePage("Dashboard")}
            onClick={() => handleNavigation("Dashboard", "/")}
          />
          <Bookmarks
            isActive={isActivePage("Bookmarks")}
            onClick={() => handleNavigation("Bookmarks", "/bookmarks")}
          />
          <Filters />
        </TooltipProvider>
      </div>
      <div className="flex items-center justify-center">
        <JobsiteLogo className="h-9 w-9" />
        <span className="sr-only">Jobsite Logo</span>
      </div>
    </nav>
  );
}
