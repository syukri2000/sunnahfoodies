'use client';

import Container from "../Container";
import { MdOutlineBreakfastDining, MdOutlineLunchDining,MdOutlineEmojiFoodBeverage,MdOutlineDinnerDining, MdOutlineShoppingBag
} from "react-icons/md"
import {FaUssunnah} from "react-icons/fa"
import CategoryBox from "../CategoryBox";
import { usePathname, useSearchParams } from "next/navigation";


export const categories = [
    {
        label: 'Breakfast',
        icon: MdOutlineBreakfastDining,
        description: "This property is for breakfast food"
    },
    {
        label: 'Lunch',
        icon: MdOutlineLunchDining,
        description: "This property is for lunch food"
    },
    {
        label: 'Dinner',
        icon: MdOutlineDinnerDining,
        description: "This property is for breakfast food"
    },
    {
        label: 'Beverages',
        icon: MdOutlineEmojiFoodBeverage
        ,
        description: "This property is for beverages"
    },
    {
        label: 'Sunnah Food',
        icon: FaUssunnah
        ,
        description: "This property is for sunnah food"
    },
    {
        label: 'Recommended Brand',
        icon: MdOutlineShoppingBag
        ,
        description: "This property is for Recommended brand"
    },
]

const Categories = () => {
    const params = useSearchParams();
    const category = params?.get('category');
    const pathname = usePathname();
    const isMainPage = pathname === '/';
  
    if (!isMainPage) {
      return null;
    }
  
    return (
      <Container>
        <div
          className="
            pt-4
            flex 
            flex-row 
            items-center 
            justify-between
            overflow-x-auto
          "
        >
          {categories.map((item) => (
            <CategoryBox 
              key={item.label}
              label={item.label}
              icon={item.icon}
              selected={category === item.label}
            />
          ))}
        </div>
      </Container>
    );
  }

 
export default Categories;