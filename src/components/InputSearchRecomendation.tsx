import { Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function InputSearchRecomendation() {
  const [open, setOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        inputRef.current &&
        !inputRef.current.contains(event.target as Node)
      ) {
        setOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative flex-1 max-w-[400px]">
      <div className="px-2 rounded-lg h-[42px] flex items-center gap-2 bg-white border border-gray-300">
        <Search />
        <input
          ref={inputRef}
          type="text"
          className="w-full outline-none"
          placeholder="Ask intelligence"
          onFocus={() => setOpen(true)} // Fokus ke input, buka dropdown
        />
      </div>

      {open && (
        <div className="absolute left-0 right-0 mt-1 bg-white border border-gray-300 rounded-lg shadow z-10 overflow-hidden">
          <ul className="text-sm divide-y divide-gray-200">
            <li className="p-2 hover:bg-gray-100 cursor-pointer">Suggestion 1</li>
            <li className="p-2 hover:bg-gray-100 cursor-pointer">Suggestion 2</li>
            <li className="p-2 hover:bg-gray-100 cursor-pointer">Suggestion 3</li>
          </ul>
        </div>
      )}
    </div>
  );
}
