import { useState } from "react";
import { AddCategory } from "./components/AddCategory";

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);
    // console.log(categories);

    return (
        <>
            {/* Title */}
            <h1>GifExpertApp</h1>
            {/* Input */}
            <AddCategory setCategories={setCategories} />
            {/* List of items(gifs) */}
            <ol>
                { 
                    categories.map( categorie => {
                        return <li key={ categorie }>{categorie}</li>
                    }) 
                }
            </ol>
            {/* GifItem */}
        </>
    )
}
