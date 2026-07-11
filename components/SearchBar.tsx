type SearchBarProps = {
    search: string;
    setSearch: (value: string) => void;
  };
  
  export default function SearchBar({
    search,
    setSearch,
  }: SearchBarProps) {
    return (
      <div className="mt-6">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search roles or companies..."
          className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-base text-[#191919] placeholder:text-gray-500 shadow-sm outline-none transition focus:border-[#0A66C2] focus:ring-2 focus:ring-[#0A66C2]/20"
        />
      </div>
    );
  }