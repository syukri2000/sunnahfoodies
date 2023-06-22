'use client';

import { SafeUser } from "@/app/types";
import { IconType } from "react-icons";
import Avatar from "../Avatar";
import ListingCategory from "./ListingCategory";
import { useState, useRef } from "react";
import ReactToPrint from "react-to-print";



interface ListingInfoProps{
    user: SafeUser;
    description: string;
    ingredients: string;
    methods: string;
    category: {
        icon: IconType;
        label: string;
        description: string;
    } | undefined

}



const ListingInfo: React.FC<ListingInfoProps> = ({
    user,
    ingredients,
    methods,
    description,
    category
}) => {

const componentRef = useRef(null);
const handlePrint = () =>{
  window.print();
}
    return ( 
       
        <div ref={componentRef} className="col-span-4 flex flex-col gap-8"> 
       
          <div className="flex flex-col gap-2">
            <div 
              className="
                text-xl 
                font-semibold 
                flex 
                flex-row 
                items-center
                gap-2
              "
            >
              <div>Created by {user?.username}</div>
              <Avatar src={user?.image} />
            </div>
            <div className="
                flex 
                flex-row 
                items-center 
                gap-4 
                font-light
                text-neutral-500
              "
            >
            </div>
          </div>
          <hr />
          {category && (
            <ListingCategory
              icon={category.icon} 
              label={category?.label}
              description={category?.description} 
            />
          )}
          <hr />
          <div className="
          text-lg font-semi-bold text-neutral-700">
            Description
            <div className="
          text-lg font-light text-neutral-500 whitespace-pre-wrap">
            {description}
            </div>
          </div>
        <hr />
          <div className="
          text-lg font-semi-bold text-neutral-700">
            Ingredients
            <div className="
          text-lg font-light text-neutral-500 whitespace-pre-wrap">
            {ingredients}
            </div>
          </div>
          <hr />
          <div className="
          text-lg font-semi-bold text-neutral-700">
            Methods
            <div className="
          text-lg font-light text-neutral-500 whitespace-pre-wrap">
            {methods}
            </div>
          </div>
          <hr />
          <div>
          <ReactToPrint
          trigger={() => <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Print Recipe
        </button>}
          content={() => componentRef.current}
        />
          </div>
        </div>
       );
}
 
export default ListingInfo;