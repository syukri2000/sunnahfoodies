'use client'

import { AiOutlineMenu } from 'react-icons/ai'
import Avatar from '../Avatar';
import { useCallback, useState } from 'react';
import MenuItem from './MenuItem';
import useRegisterModal from '@/app/hooks/useRegisterModal';
import useLoginModal from '@/app/hooks/useLoginModal';
import useRecipeModal from '@/app/hooks/useRecipe';

import { signOut } from 'next-auth/react';
import { SafeUser } from '@/app/types';

import { useRouter } from 'next/navigation';


interface UserMenuProps {
    currentUser?: SafeUser | null; 
}

const UserMenu: React.FC<UserMenuProps> = ({
    currentUser
}) => {
    const router = useRouter();
    const registerModal = useRegisterModal();
    const loginModal = useLoginModal();
    const recipeModal = useRecipeModal();

    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = useCallback(() => {
        setIsOpen((value) => !value);
    },[]);

    const onRecipe = useCallback(() => {
        if (!currentUser) {
           return loginModal.onOpen();
        }

        // open Recipe Modal
        recipeModal.onOpen();

    },[currentUser, loginModal, recipeModal])

    return ( 
        <div className="relative ">
            <div 
            className="
            flex
            flex-row
            items-center
            gap-3
            ">
                <div onClick={onRecipe} className="
                hidden
                md:block
                text:sm
                font-semibold
                py-3
                px-4
                rounded-full
                hover:bg-neutral-100
                transition
                cursor-pointer
                ">
                    Publish your creation
                </div>

                <div
                    onClick={toggleOpen}
                    className="
                    p-4
                    md:py-1
                    md:px-2
                    border-[1px]
                    border-neutral-200
                    flex
                    flex-row
                    items-center
                    gap-3
                    rounded-full
                    cursor-pointer
                    hover:shadow-md
                    transition
                    "
                >
                    <AiOutlineMenu/>
                    <div className="hidden md:block">
                        <Avatar src={currentUser?.image}/>
                    </div>

                </div>

            </div>
        {isOpen && (
            <div
            className="
            absolute 
            rounded-xl 
            shadow-md
            w-[40vw]
            md:w-3/4 
            bg-white 
            overflow-hidden 
            right-0 
            top-12 
            text-sm
            "
            >
                <div className="flex flex-col cursor-pointer">
                    {currentUser ?( 
                     <> 
                         <MenuItem
                            onClick={() => {}} 
                            label={currentUser.email }
                        />
                        <hr/>
                        <MenuItem
                            onClick={() => router.push("/recipes")}
                            label="My Recipes & Products"
                        />
                        <MenuItem
                            onClick={() => router.push("/favorites")}
                            label="Favourited"
                        />
                        <MenuItem
                            onClick={recipeModal.onOpen}
                            label="Create Recipes or Products"
                        />
                        <hr/>
                        <MenuItem
                            onClick={() => router.push("/guideline")}
                            label="Guidelines"
                        />
                        <MenuItem
                            onClick={() => router.push("/Terms")}
                            label="Term&Conditions"
                        />
                        <hr/>
                        <MenuItem
                            onClick={signOut}
                            label="Logout"
                        />
                     </>   
                    ):(
                    <>
                        <MenuItem
                            onClick={loginModal.onOpen}
                            label="Login"
                    />
                        <MenuItem
                            onClick={registerModal.onOpen}
                            label="Sign Up"
                    />
                    
                        <MenuItem
                            onClick={() => router.push("/guideline")}
                            label="Guidelines"
                        />
                        <MenuItem
                            onClick={() => router.push("/Terms")}
                            label="Term&Conditions"
                        />
                       
                        
                      
                    </>
                    )}
                </div>

            </div>
        )}

        </div>
     );
}
 
export default UserMenu;