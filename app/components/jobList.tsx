import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import { JobItem } from "~/types/job";

type JobListProps = {
  jobs: JobItem[];
  className?: string;
};

export function JobList({ jobs, className }: JobListProps) {
  console.log("JobList received jobs:", jobs);

  const placeholderJobs: JobItem[] = Array(5).fill({
    employer_name: "Company Name",
    job_title: "Job Title",
    job_description:
      "This is a placeholder job description. Search for real jobs to see more details.",
    job_city: "City",
    job_country: "Country",
  });

  const jobsToDisplay = jobs.length > 0 ? jobs : placeholderJobs;

  return (
    <div className="h-full overflow-y-auto pr-4">
      <div className="flex flex-col gap-4">
        {jobsToDisplay.map((job, index) => (
          <Card
            key={index}
            className="bg-[var(--secondaryBG)] text-white border border-[var(--secondaryBorder)]">
            <CardHeader>
              <img
                src={job.employer_logo}
                alt={job.employer_name}
                width={40}
                height={40}
              />
              <CardTitle>{job.job_title}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{job.employer_name}</p>
              <p>
                {job.job_city}, {job.job_country}
              </p>
              <p className="text-sm mt-2">
                {job.job_description.slice(0, 100)}...
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
