type HiringCardProps = {
    role: string;
    company: string;
    posted: string;
    summary: string;
    skills: string[];
    experience: string|null;
    location: string|null;
    linkedinUrl: string;
  };
  
  export default function HiringCard({
    role,
    company,
    posted,
    summary,
    skills,
    experience,
    location,
    linkedinUrl,
  }: 
  
  HiringCardProps) {
    return (
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block rounded-2xl bg-white p-5 shadow-sm transition hover:shadow-md active:scale-[0.98]"
      >
        <h2 className="text-xl font-semibold text-[#191919]">
          {role}
        </h2>
  
        <p className="mt-1 text-[#0A66C2] font-medium">
          {company}
        </p>
  
        <p className="mt-2 text-sm text-gray-500">
          {posted}
        </p>
        
        <div className="mt-2 flex flex-wrap gap-3 text-sm text-gray-600">
  {experience && <span>💼 {experience}</span>}
  {location && <span>📍 {location}</span>}
</div>

        
        <p className="mt-4 line-clamp-2 text-gray-700">
          {summary}
        </p>
  
        <div className="mt-4 flex flex-wrap gap-2">
        {skills.slice(0, 5).map((skill) => (
            <span
              key={skill}
              className="rounded-full bg-[#E8F3FF] px-3 py-1 text-sm text-[#0A66C2]"
            >
              {skill}
            </span>
          ))}
        </div>
  
        <p className="mt-5 text-right text-sm font-medium text-[#0A66C2]">
          Hiring Manager's Post ↗
        </p>
      </a>
    );
  }