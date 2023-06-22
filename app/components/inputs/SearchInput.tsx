'use client';
import useDebounce from "@/app/hooks/useDebounce";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import qs from "query-string";
import Input from "./InputForSearch";


const SearchInput = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const router = useRouter();

    const onSearch = (event: React.FormEvent) =>{
        event.preventDefault();
        const encodedSearchQuery = encodeURI(searchQuery);

        router.push(`/search?q=${encodedSearchQuery}`);

    
       
    }

    return (
        <form onSubmit={onSearch} className="flex justify-center w-2/3">
          <input
            value={searchQuery || ""}
            onChange={(event) => setSearchQuery(event.target.value)}
            className="px-5 py-1 w-2/3 sm:px-5 sm:py-3 flex-1 text-zinc-200 bg-zinc-800 focus:bg-black rounded-full focus:outline-none focus:ring-[1px] focus:ring-green-700 placeholder:text-zinc-400"
            placeholder="What are you looking for?"
          />
        </form>
      );
    };

 
export default SearchInput;