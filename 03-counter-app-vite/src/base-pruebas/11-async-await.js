
export const getImagen = async() => {

    try {

        const apiKey = 'ubUB92ZtRXB9NcSH2b6NJvGTkETWMNoY';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;

        // const img = document.createElement('img');
        // img.src = url;
        // document.body.append( img );
        return url;

    } catch (error) {
        // manejo del error
        // console.log(error);
        return 'No se encontro la imagen';
    }
    
}
