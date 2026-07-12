"use client";

import { useState } from "react";
import HiringCard from "@/components/HiringCard";
import SearchBar from "@/components/SearchBar";
import posts from "@/data/posts.json";
const sortedPosts = [...posts].sort(
  (a, b) =>
    new Date(b.postedDate).getTime() - new Date(a.postedDate).getTime()
);

import { getRelativeDate } from "@/lib/date";

export default function Home() {
  const [search, setSearch] = useState("");
  const filteredPosts = sortedPosts.filter((post) => {
    const query = search.toLowerCase();
  
    return (
      post.role.toLowerCase().includes(query) ||
      post.company.toLowerCase().includes(query) ||
      post.hiringManager.toLowerCase().includes(query) ||
      post.summary.toLowerCase().includes(query) ||
      (post.location ?? "").toLowerCase().includes(query) ||
      post.skills.some((skill) =>
        skill.toLowerCase().includes(query)
      )
    );
  });
  return (
    <main className="min-h-screen bg-[#F3F2EF]">
      <div className="mx-auto max-w-md px-4 py-6">
        <h1 className="text-3xl font-bold text-[#0A66C2]">
          LinkedIn Posts from Hiring Managers
        </h1>
        <ul className="mt-2 list-disc pl-5 text-sm leading-6 text-gray-600 space-y-2">
    <li>Hiring managers have publicly shared what they're looking for.</li>
  <li>Read the job post to understand the role and requirements.</li>
  <li>Send a personalized LinkedIn DM explaining why you're a strong fit.</li>
  <li>Increase your chances of getting an interview call.</li>
</ul>
        <SearchBar
  search={search}
  setSearch={setSearch}
/>

        <div className="mt-6 space-y-4">
          {filteredPosts.map((post) => (
            <HiringCard
            key={post.id}
            role={post.role}
            company={post.company}
            posted={getRelativeDate(post.postedDate)}
            summary={post.summary}
            skills={post.skills}
            experience={post.experience}
            location={post.location}
            linkedinUrl={post.linkedinUrl}
          />
          ))}
        </div>
      </div>
    </main>
  );
}