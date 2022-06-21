import React, { useState } from 'react'
import { AddCategory, GifGrid } from './components';

//const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One Punch']);

    const onAddCategory = (newCategory) => {
        //categories.push(newCategory);
        // console.log(newCategory);
        // hay que validar que no exista la categoria en el array
        if (categories.includes(newCategory)) return;
        // si no existe se agrega al array
        setCategories([newCategory, ...categories]);
    }

    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory
                //setCategories={setCategories} 

                onNewCategory={(value) => onAddCategory(value)}
            />
            <hr />

            <div>
                {categories.map(category => (
                    <GifGrid
                        key={category}
                        category={category} />
                ))}
            </div>
        </>
    );
}
export default GifExpertApp;