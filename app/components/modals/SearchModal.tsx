'use client';

import useSearchModal from "@/app/hooks/useSearchModal";
import Modal from "./Modal";
import React, { useEffect, useState } from 'react';
import Heading from "../Heading";
import getListings from "@/app/actions/getListings";
import { 
  FieldValues, 
  SubmitHandler,
  useForm
} from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import prisma from "@/app/libs/prismadb"

const SearchModal = () => {
    const searchModal = useSearchModal();
 
      
      const bodyContent = (
        <div className="flex flex-col gap-4">
         
        </div>
      )

    return ( 
      
        <Modal
            isOpen={searchModal.isOpen}
            onClose={searchModal.onClose}
            onSubmit={()=>{}}
            title="Search"
            actionLabel="Search"
           

        />
        
    );
}
 
export default SearchModal;