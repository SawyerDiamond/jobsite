import { useState } from "react";
import { Input } from "~/components/ui/input";
import { Button } from "~/components/ui/button";
import { LocationSVG, SubmitSVG, JobSVG } from "~/assets/icons/";
import { getSearch } from "~/api/jSearchAPI";
type SearchBoxProps = {
  onSearch: (results: any) => void;
  className?: string;
};
export function SearchBox({ onSearch }: SearchBoxProps) {
  const [jobTitle, setJobTitle] = useState("");
  const [location, setLocation] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    console.log(jobTitle, location);
    try {
      const results = await getSearch(jobTitle, location);
      onSearch(results);
    } catch (error) {
      console.error("Error searching jobs:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex z-50">
      <div className="flex items-center gap-4 ">
        <Input
          name="Search"
          type="search"
          placeholder="Job Title"
          icon={JobSVG}
          value={jobTitle}
          className="w-96 flex-1 backdrop-blur-sm"
          onChange={(e) => setJobTitle(e.target.value)}
        />
        <Input
          name="Location"
          type="search"
          placeholder="Location"
          icon={LocationSVG}
          value={location}
          className="w-64 flex-1 backdrop-blur-sm"
          onChange={(e) => setLocation(e.target.value)}
        />
        <Button
          type="submit"
          className="rounded-xl bg-[var(--primaryBG)] aspect-square"
          disabled={isLoading}>
          {isLoading ? "Searching..." : <SubmitSVG className="h-4 w-4" />}
        </Button>
      </div>
    </form>
  );
}
