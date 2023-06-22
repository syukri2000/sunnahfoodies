'use client';

import useRecipeModal from "@/app/hooks/useRecipe";
import Modal from "./Modal";
import { useMemo, useState } from "react";
import Heading from "../Heading";
import { categories } from "../navbar/Categories";
import CategoryInput from "../inputs/CategoryInput";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import ImageUpload from "../inputs/ImageUpload";
import Input from "../inputs/Input";
import InputLong from "../inputs/InputLong";
import axios from "axios";
import { toast } from "react-hot-toast";
import { useRouter } from "next/navigation";

enum STEPS{
    CATEGORY = 0,
    IMAGES = 1,
    INGREDIENT = 2,
    METHODS = 3,
    DESCRIPTION = 4,
}


const RecipeModal = () => {
    const router = useRouter();
    const recipeModal = useRecipeModal();
  
    const [isLoading, setIsLoading] = useState(false);
    const [step, setStep] = useState(STEPS.CATEGORY);

    const { 
        register, 
        handleSubmit,
        setValue,
        watch,
        formState: {
          errors,
        },
        reset,
    } = useForm<FieldValues>({
        defaultValues: {
            category:'',
            imageSrc:'',
            title: '',
            description: '',
            ingredient: '',
            methods: '',
        }
    });

    const category = watch('category');
    const imageSrc = watch('imageSrc');

    const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
          shouldDirty: true,
          shouldTouch: true,
          shouldValidate: true
        })
      }

  const onBack = () => {
    setStep((value) => value - 1);
  }

  const onNext = () => {
    setStep((value) => value + 1);
  }

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    if (step !== STEPS.DESCRIPTION) {
      return onNext();
    }
    
    setIsLoading(true);
    
    axios.post('/api/listings', data)
    .then(() => {
      toast.success('Listing created!');
      router.refresh();
      reset();
      setStep(STEPS.CATEGORY)
      recipeModal.onClose();
    })
    .catch(() => {
      toast.error('Something went wrong.');
    })
    .finally(() => {
      setIsLoading(false);
    })
  }

      
      const actionLabel = useMemo(() => {
        if (step === STEPS.DESCRIPTION) {
          return 'Create'
        }
    
        return 'Next'
      }, [step]);
    
      const secondaryActionLabel = useMemo(() => {
        if (step === STEPS.CATEGORY) {
          return undefined
        }
    
        return 'Back'
      }, [step]);

      let bodyContent = (
        <div className="flex flex-col gap-8">
          <Heading
            title="Which of these best describes your place?"
            subtitle="Pick a category"
          />
          <div 
            className="
              grid 
              grid-cols-1 
              md:grid-cols-2 
              gap-3
              max-h-[50vh]
              overflow-y-auto
            "
          >
            {categories.map((item) => (
              <div key={item.label} className="col-span-1">
                <CategoryInput
                  onClick={(category) => 
                    setCustomValue('category', category)}
                  selected={category === item.label}
                  label={item.label}
                  icon={item.icon}
                />
              </div>
            ))}
          </div>
        </div>
      )

    if (step === STEPS.IMAGES){
        bodyContent=(
            <div className="flex flex-col gap-8">
                <Heading
                    title="Add an image to your recipe"
                    subtitle="show guests what your food looks like!"
                />
        <ImageUpload
          onChange={(value) => setCustomValue('imageSrc', value)}
          value={imageSrc}
        />
               
            </div>
            )
        }
    
        if (step === STEPS.INGREDIENT){

            bodyContent = (
                <div className="flex flex-col gap-8">
                    <Heading
                        title="List your ingredient for the recipe"
                        subtitle="Please make it numerical to make it easier to understand"
                    />
                    <InputLong 
                        id="ingredient"
                        label="Ingredient"
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                        required
                    />
                </div>
            )

        }

        if (step === STEPS.METHODS){

          bodyContent = (
              <div className="flex flex-col gap-8">
                  <Heading
                      title="Give some instruction for the recipe for the recipe"
                      subtitle="Please make it numerical to make it easier to understand"
                  />
                  <InputLong 
                      id="methods"
                      label="Method"
                      disabled={isLoading}
                      register={register}
                      errors={errors}
                      required
                  />
              </div>
          )

      }

        if (step === STEPS.DESCRIPTION){
            bodyContent =(
                <div className="flex flex-col gap-8">
                    <Heading
                        title="Title and Description for the recipe"
                        subtitle="Show us the stories of the recipe"
                    />
                    <Input
                        id="title"
                        label="Title"
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                        required
                    />
                    <hr />
                    <InputLong
                        id="description"
                        label="Description"
                        disabled={isLoading}
                        register={register}
                        errors={errors}
                        required
                    />

                </div>
            )
        }


    

    return ( 
        <Modal
        disabled={isLoading}
        isOpen={recipeModal.isOpen}
        title="Create a recipe"
        actionLabel={actionLabel}
        onSubmit={handleSubmit(onSubmit)}
        secondaryActionLabel={secondaryActionLabel}
        secondaryAction={step === STEPS.CATEGORY ? undefined : onBack}
        onClose={recipeModal.onClose}
        body={bodyContent}
      />
     );
}
 
export default RecipeModal;