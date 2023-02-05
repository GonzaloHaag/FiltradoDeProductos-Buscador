






//Creamos el array de objetos con cada producto y su compania


const productos = [
  {
    id: 'rec43w3ipXvP28vog',
    title: 'high-back bench',
    company: 'ikea',
    image:
      'https://dl.airtable.com/.attachments/14ac9e946e1a02eb9ce7d632c83f742f/4fd98e64/product-1.jpeg',
    price: 9.99,
  },
  {
    id: 'rec4f2RIftFCb7aHh',
    title: 'albany table',
    company: 'marcos',
    image:
      'https://dl.airtable.com/.attachments/f3450755e165557344f7d6433242431e/93533098/product-1.jpeg',
    price: 79.99,
  },
  {
    id: 'rec8kkCmSiMkbkiko',
    title: 'accent chair',
    company: 'caressa',
    image:
      'https://dl.airtable.com/.attachments/f292eaec4fea8a791b037c759ae559c9/2d5e34d5/product-4.jpeg',
    price: 25.99,
  },
  {
    id: 'recBohCqQsot4Q4II',
    title: 'wooden table',
    company: 'caressa',
    image:
      'https://dl.airtable.com/.attachments/5b3ad76dfd6ca5e31810cb99141c7ede/69829b2f/pexels-dominika-roseclay-1139785.jpg',
    price: 45.99,
  },
  {
    id: 'recDG1JRZnbpRHpoy',
    title: 'dining table',
    company: 'caressa',
    image:
      'https://dl.airtable.com/.attachments/06bbede65bd09196b4a81a8e7b59e683/8af0aeb5/product-8.jpg',
    price: 6.99,
  },
  {
    id: 'recNWGyP7kjFhSqw3',
    title: 'sofa set',
    company: 'liddy',
    image:
      'https://dl.airtable.com/.attachments/443aa7884207dae7c3cc127262a2f993/d4f33110/product-1.jpeg',
    price: 69.99,
  },
  {
    id: 'recZEougL5bbY4AEx',
    title: 'modern bookshelf',
    company: 'marcos',
    image:
      'https://dl.airtable.com/.attachments/a889b1928b134c2ca0b5bbca32ea9abf/65c8a9a6/product-7.jpg',
    price: 8.99,
  },
  {
    id: 'recjMK1jgTb2ld7sv',
    title: 'emperor bed',
    company: 'liddy',
    image:
      'https://dl.airtable.com/.attachments/10fdf29ae17f2d1f98770ae42584d021/82b9403f/product-6.jpg',
    price: 21.99,
  },
  {
    id: 'recmg2a1ctaEJNZhu',
    title: 'utopia sofa',
    company: 'marcos',
    image:
      'https://dl.airtable.com/.attachments/6ac7f7b55d505057317534722e5a9f03/9183491e/product-3.jpg',
    price: 39.95,
  },
  {
    id: 'recvKMNR3YFw0bEt3',
    title: 'entertainment center',
    company: 'liddy',
    image:
      'https://dl.airtable.com/.attachments/da5e17fd71f50578d525dd5f596e407e/d5e88ac8/product-2.jpg',
    price: 29.98,
  },
  {
    id: 'recxaXFy5IW539sgM',
    title: 'albany sectional',
    company: 'ikea',
    image:
      'https://dl.airtable.com/.attachments/05ecddf7ac8d581ecc3f7922415e7907/a4242abc/product-1.jpeg',
    price: 10.99,
  },
  {
    id: 'recyqtRglGNGtO4Q5',
    title: 'leather sofa',
    company: 'liddy',
    image:
      'https://dl.airtable.com/.attachments/3245c726ee77d73702ba8c3310639727/f000842b/product-5.jpg',
    price: 9.99,
  },
];
const contenedorProductos = document.querySelector(".main-center");
const buttonsCompany = document.querySelectorAll(".button-company"); //Selecciono todos los que tenga esta clase y el id lo uso para que pase algo cuando se seleccione

const buscadorProductos = document.querySelector("#buscador");
const form = document.querySelector(".form");
function cargarProductos (arrayProductos) {

    contenedorProductos.innerHTML = ""; //que al principio arranque vacio

    arrayProductos.forEach(producto=>{ //Recorro el array que me pasan por parametro
        let div = document.createElement("div"); //Creo un div por cada producto
        div.classList.add("producto");
        div.innerHTML = `
        <img src="${producto.image}" alt="${producto.id}">
        <div class="producto-detalles">
        <p>${producto.title}</p>
        <span>${producto.price}</span>
        </div>
        
        `;
        contenedorProductos.append(div);

    })

}
cargarProductos(productos); //La primera vez quiero que aparezcan todos los productos, por lo que le paso el array que hice yo manualmente

buttonsCompany.forEach((boton)=>{
    boton.addEventListener("click",(e)=>{ //Por cada click al boton quiero que pase algo

        // console.log(e.currentTarget.id); Esto me arroja el id del boton que toco

        if(e.currentTarget.id != "All") { //Si es distinto de todos

            // const productosCompany = productos.find(producto=>producto.company === e.currentTarget.id); //Hago un find y que me traiga el producto que coincida el company y el id del boton que toco

            // // console.log(productosCompany); esto solo me trae el primer elemento que encuentra, debo hacer un .filter

            const productosCompanyBotton = productos.filter(product=>product.company===e.currentTarget.id);
            // console.log(productosCompanyBotton); Esto me trae todos los elementos que coincida la company con el id del boton que se toca

            cargarProductos(productosCompanyBotton); //Le paso como parametro el filtrado del array que realice antes asi me lo muestra

        }
        else{
            cargarProductos(productos); //Si toco en All que me cargue todos los productos
        }

    })

})
//3. Metodo .filter() -->Devuelve un array
// const cursos = [
//     {
//         nombre:"Javascript",precio:15000
//     },
//     {
//         nombre:"ReactJS",precio:22000
//     },
//     {
//         nombre:"AngularJS",precio:22000
//     },
//     {
//         nombre:"Desarrollo Web",precio:16000
//     }
// ]
// const resultado = cursos.filter((el) => el.nombre.includes("JS"))
// console.log(resultado); //Saldran los que en el nombre incluyen la palabra JS
// //En este caso sale reactJS y AngularJS porque la incluyen
// const resultado2 = cursos.filter((el) => el.precio <16000) //Los que tengan precio menor a 16.000
// console.log(resultado2); //saldra javascript

//  const find = productos.find(i=>i.title === "leather sofa");
//  console.log(find); //Traera el objeto que coincide con ese titulo

form.addEventListener("keyup",(e)=>{ //Le paso el evento al form, no al buscador
    // console.log(e.target.value)
    if(e.target.value!=""){
    const resultado = productos.filter((el)=>el.title.includes(e.target.value)); //Recorro el array de productos y le pregunto si alguno incluye lo que se esta escirbiendo en el input
    // console.log(resultado);
    // console.log(resultado.length) //Esto me arroja los objetos que encuentra con esa coincidencia

    cargarProductos(resultado); //Lo paso como parametro a la funcion que recorre el array y lo muestra
    }
 
    
})
