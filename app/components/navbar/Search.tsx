'use client';


import useSearchModal from '@/app/hooks/useSearchModal';
import { useSearchParams,useRouter } from 'next/navigation';

import { BiSearch } from 'react-icons/bi';

const Search = () => {
    const searchModal = useSearchModal();
    const params = useSearchParams();
    const router = useRouter();
    return ( 
        <div 
        onClick={() => router.push('/search')}
        className="
        border-[1px] 
        w-full 
        md:w-auto 
        py-2 
        rounded-full 
        shadow-sm 
        hover:shadow-md 
        transition 
        cursor-pointer
        ">
            <div 
                className="
                flex 
                flex-row 
                items-center 
                justify-between
                 ">
                <div 
                className="
                text-sm 
                font-semibold 
                px-6
                ">
                
                </div>

                <div 
                className="
                hidden
                sm:block
                text-sm
                font-semibold
                px-6
                border-x-[1px]
                flex-1
                text-center
                ">
                
                </div>

                <div 
                className="
                text-sm
                pl-6
                pr-2
                text-gray-600
                flex
                flex-row
                items-center
                gap-3
                ">
                    <div 
                    className="
                    hidden sm:block
                    ">
                     
                    </div>

                    <div className="
                    p-2
                    bg-yellow-500
                    rounded-full
                    text-white
                    ">
                        <BiSearch size={18}></BiSearch>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Search;