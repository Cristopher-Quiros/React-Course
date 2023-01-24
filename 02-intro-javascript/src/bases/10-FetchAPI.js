
const apiKey = 'BZ6slTgO9AbOOKFVjzimAb4mOGmfmxIR'

const peticionHTTP = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`)

//peticionHTTP.then( resp => {
//    resp.json().then (data => {
//        console.log(data)
//    })
// })

// Promesas encadenadas
peticionHTTP
    .then(resp => resp.json())
    .then( ({data}) => {
        const { url } = data.images.original
       // console.log(data.images.downsized.url)

        const img = document.createElement('img')
        img.src = url

        document.body.append( img )
    })
.catch(console.warn)