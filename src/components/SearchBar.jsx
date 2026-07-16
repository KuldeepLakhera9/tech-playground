import { HiOutlineSearch } from "react-icons/hi";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-full sm:max-w-sm">
      <HiOutlineSearch className="absolute left-3.5 top-1/2 -translate-y-1/2 h-5 w-5 text-ink-soft" />
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search for courses..."
        className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-slate-200 bg-white text-sm text-ink placeholder:text-ink-soft/70 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-shadow"
      />
    </div>
  );
}
