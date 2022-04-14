
const Products = [
    {id:1, 
    nombre:"Bored Ape Yacht Club", 
    precio: 1200, 
    nft: "Bored Ape Yacht Club", 
    img: 'https://lh3.googleusercontent.com/Rn3ZpGAsWIwODp2PdC21GgROWTYlxvK7xys1amJ7Z-HIEg3l4cN0ReAg_u572Xfp05GskW913KAu5tQyYThlbJVrc5ZS297Dfykosw=w600', 
    stock: 1, 
    descripcion:'Bored Ape Yacht Club'
},
{id:2, nombre:"Bored Ape Yacht Club", precio: 1100, nft: "Bored Ape Yacht Club", img: 'https://lh3.googleusercontent.com/8pSQDqVgCuRx0eZ666DwHlQPqppiRK95_45V-L_dhZbyREo0IIX0K6vNCsnqahKBrzG7Vjt6CfsojZx86PAorcthLeki4vNuBxmTQg=w600', stock: 1, descripcion:'Bored Ape Yacht Club'},
{id:3, nombre:"Bored Ape Yacht Club", precio: 1200, nft: "Bored Ape Yacht Club", img: 'https://lh3.googleusercontent.com/oGX9KC5HSLaNBtg3pNyJvlMca_YwhR3xvSllayk86pghLCOJkvbQ8DzNuiF2ZY-HU_ZzYayTZngFnp9kJdi8J140dtErziZcfu2jUw=w600', stock: 1, descripcion:'Bored Ape Yacht Club'},
]

export const getProducts = (id) => {
    return Promise (resolve => {
        setTimeout (() => {
            resolve(Products.find(prod => prod.id === id))
        }, 2000)
    })
}

export const getProductsById = (id) => {
    return new Promise (resolve => {
        setTimeout(() => {
            resolve(Products.find(prod => prod.id === id))
        },2000)
    })
}