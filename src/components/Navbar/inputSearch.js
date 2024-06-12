"use client";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { IoIosSearch } from "react-icons/io";

const InputSearch = () => {
  const searchRef = useRef(null);
  const router = useRouter();

  const handleSearch = (event) => {
    if (event.key === "Enter" || event.type === "click") {
      event.preventDefault();
      const keyword = searchRef.current.value;
      router.push(`/search/${keyword}`);
    }
  };

  return (
    <div className="relative">
      <input
        placeholder="cari anime..."
        className="w-full p-2 rounded"
        ref={searchRef}
        onKeyDown={handleSearch}
      />
      <button className="absolute top-2 end-2" onClick={handleSearch}>
        <IoIosSearch size={24} />
      </button>
    </div>
  );
};

export default InputSearch;
