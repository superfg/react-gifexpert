export const getGifs = async (category) => {
    // se realiza una peticion http a una API y se recobra la data e respuesta.
    const url = `https://api.giphy.com/v1/gifs/search?limit=5&api_key=DRIaDhY3WexSg0LBUIsSDZ1QHbZKmk7H&q=${category}`;
    const resp = await fetch(url);
    const { data } = await resp.json();
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    });
    console.log(gifs);
    return gifs;
}