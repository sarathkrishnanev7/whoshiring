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
        <p className="mt-2 text-sm leading-6 text-gray-600">
        These hiring managers have publicly shared what they're looking for. 
        Read what they're looking for, send them a DM explaining why you're a strong fit.
        Increase your chances of getting an interview call.
  </p>
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