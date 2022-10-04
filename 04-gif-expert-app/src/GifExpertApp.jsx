import { useState } from "react";
import { AddCategory } from "./components/AddCategory";
import { GifGrid } from "./components/GifGrid";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategorie = (newCategory) => {
        if ( categories.includes(newCategory) ) return;
        setCategories([ newCategory, ...categories]);
    }

    return (
        <>
            {/* Title */}
            <h1>GifExpertApp</h1>
            {/* Input */}
            <AddCategory 
                // setCategories={setCategories} 
                onNewCategorie={ (value) => onAddCategorie(value)}
            />
            {/* List of items(gifs) */}
            {/* GifItem */}
            {
                categories.map( category => (
                        <GifGrid 
                            key={category} 
                            category={category}
                        />
                    )
                ) 
            }
        </>
    )
}
