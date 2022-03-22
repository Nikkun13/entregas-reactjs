const products = [

    {id: 1, name: 'Duff', price: 5, description: 'La clásica cerveza en su presentación más común. Deliciosa.', category: 'Cerveza', img: 'https://i.ibb.co/bH8tKvW/Cerveza.png', stock: 50},
    {id: 2, name: 'Llamarada Moe', price: 10, description: '¿LLamarada Homero? No se de que me hablas, siempre fueron llamaradas Moe, porque las hago yo, Moe.', category: 'Tragos', img: 'https://i.ibb.co/WxkMNnW/Llamarada.png', stock: 35},
    {id: 3, name: 'Perfume en un sombrero de hombre con una ciruela flotando', price: 50, description: 'Aunque no lo creas es muy comun, siempre tengo uno preparado.', category: 'Importados', img: 'https://i.ibb.co/Ks3Ng8n/Perfume.png', stock: 10}

]

export const getProducts = () => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve(products)
        },2000)
    })
}
