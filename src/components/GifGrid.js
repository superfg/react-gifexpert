import { GifItem } from './GifItem';
import { useFetchGifs } from '../hooks/useFetchGifs';

export const GifGrid = ({ category }) => {
    const { images, isLoading } = useFetchGifs(category);
    // console.log({ isLoading });
    return (
        <>
            <h3>{category}</h3>
            {/* Se utiliza un Operador Ternario para Imprimir el Loading u Ocultarlo */}
            {
                isLoading
                    ? (<h2>Cargando...1</h2>) //// Si es Verdadero
                    : null //// Si es Falso
            }
            {/* Usando un IF Reducido para Imprimir el Loading u Ocultarlo */}
            {
                isLoading && (<h2>Cargando...2</h2>) //// Si es Verdadero
            }
            <div >
                {images.map(img => (
                    <GifItem
                        key={img.id}
                        {...img}
                    />
                ))}
            </div>
        </>
    )
}
