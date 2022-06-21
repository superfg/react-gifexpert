import { useState, useEffect } from 'react'
import { getGifs } from './../helpers/getGifs';

export const useFetchGifs = (category) => {

    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const getImages = async () => {
        const newImages = await getGifs(category);
        setImages(newImages);
        setIsLoading(false);
    }

    useEffect(() => {
        getImages(category);
    }, [])

    return {
        /// como los nombres de las propiedades y objetos son iguales pues solo dejamos uno de cada uno
        images,
        isLoading
    }
}
