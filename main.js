const products = [
  {
    name: 'HP Essentials 255 G8 AMD',
    price: 289,
    stars: 4,
    reviews: 250,
    seller: 'PcComponentes',
    image:
      'https://thumb.pccomponentes.com/w-300-300/articles/1005/10057282/1639-hp-essential-255-g8-amd-3020e-8gb-256gb-ssd-156.jpg'
  },
  {
    name: 'Portátil Apple Macbook Air Apple M4 ',
    price: 859,
    stars: 4.8,
    reviews: 366,
    seller: 'PcComponentes',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1087/10872308/2775-apple-macbook-air-apple-m4-10-nucleos-16-gb-256gb-ssd-gpu-8-nucleos-136-plata-comprar.jpg'
  },
  {
    name: 'Portátil Alurin Go Start Intel Celeron N4020 ',
    price: 165,
    stars: 3.8,
    reviews: 526,
    seller: 'PcComponentes',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1066/10663368/6684-alurin-go-start-intel-pentium-n4020-8gb-256gb-ssd-156-review.jpg'
  },
  {
    name: 'Portátil PcCom Revolt 5050 AMD Ryzen 7 260 ',
    price: 1049.99,
    stars: 4.5,
    reviews: 5,
    seller: 'PcComponentes',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1091/10916699/113-pccom-revolt-5050-amd-ryzen-7-260-16gb-1tb-ssd-rtx-5050-156-windows-11.jpg'
  },
  {
    name: 'Portátil MSI Katana 15 HX B14WGK ',
    price: 1349,
    stars: 4.5,
    reviews: 351,
    seller: 'PcComponentes',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1089/10897454/1854-portatil-msi-katana-15-hx-b14wgk-086xes-156-intel-core-i7-14650hx-32gb-1tb-ssd-rtx-5070-be351f40-bd27-4160-a283-33162a10c9e0.jpg'
  },
  {
    name: 'Portátil MSI Katana 15 HX B14WGK ',
    price: 949,
    stars: 4.6,
    reviews: 1247,
    seller: 'PcComponentes',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1095/10956435/2852-portatil-msi-cyborg-15-b13wfkg-687xes-156-intel-core-i7-13620h-16gb-1tb-rtx-5060-8gb-freedos.jpg'
  },
  {
    name: 'Portátil Lenovo LOQ 17IRX10 17.3" ',
    price: 1399,
    stars: 4.5,
    reviews: 256,
    seller: 'PcComponentes',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1094/10940513/1686-portatil-lenovo-loq-17irx10-173-intel-core-i7-14700hx-32gb-1tb-ssd-rtx-5070-8gb-rgb.jpg'
  },
  {
    name: 'Portátil Dell Inspiron 3530 Intel Core i7-1355U',
    price: 599,
    stars: 4.5,
    reviews: 16,
    seller: 'PcComponentes',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1086/10866715/3358-dell-inspiron-3530-intel-core-i7-1355u-16gb-512gb-ssd-156-mejor-precio.jpg'
  },
  {
    name: 'Portátil HP 15-fd0020ns Intel Core i7-1355U',
    price: 579,
    stars: 4.6,
    reviews: 1667,
    seller: 'PcComponentes',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1079/10796164/4475-hp-15-fd0020ns-intel-core-i7-1355u-16gb-1tb-ssd-156-especificaciones.jpg'
  },
  {
    name: 'Portátil ASUS Vivobook 15 F1504VA-BQ150 15.6" Intel Core i3-1315U',
    price: 319,
    stars: 4.9,
    reviews: 12,
    seller: 'PcComponentes',
    image:
      'https://thumb.pccomponentes.com/w-530-530/articles/1094/10942546/1596-portatil-asus-vivobook-15-f1504va-bq150-156-intel-core-i3-1315u-8gb-512gb-ssd-azul.jpg'
  }

  // Añade aquí al menos 9 productos más para tener un total de 10 productos
  // puedes cambiar los campos de cada objeto si es necesario para tu diseño...
]

// recorremos el array products con bucle for...of para introducir los productos en un contenedor con clase class="container_Two" usando etiqueta <section>.
let containerTwo = document.createElement('section')
containerTwo.classList.add('container_two')
for (const i of products) {
  // creamos el nodo del contenedor(div) que contendrá el card de cada artículo
  let cards = document.createElement('div')
  cards.classList.add('cardclass')
  // creamos una lista que será un <ul> con toda la info de cada artículo, cada info será un <li>
  let cardList = document.createElement('ul')
  // creamos el nodo para las imágenes
  let image = document.createElement('img')
  // Recorremos con un bucle for...in cada objeto del array para vincular los <li> exceptuando las imágenes de los artículos.
  for (const j in i) {
    if (j !== 'image') {
      let liElement = document.createElement('li')
      liElement.innerText = j + ':  ' + i[j]
      cardList.appendChild(liElement)
    }
  }
  image.src = i.image
  cards.appendChild(cardList)
  cards.appendChild(image)
  containerTwo.appendChild(cards)
  document.body.appendChild(containerTwo)
}
const marcas = [
  'Acer',
  'Alurin',
  'Apple',
  'Asus',
  'Dell',
  'Gigabyte',
  'HP',
  'Lenovo',
  'Medion',
  'Microsoft',
  'MSI',
  'PcCom'
]
// Introducimos en un section clase container_one todas las marcas a través de etiquetas label e imputs.
let myFilters = document.createElement('section')
myFilters.classList.add('container_one')

for (const i of marcas) {
  let myMarks = document.createElement('div')
  myMarks.classList.add('marks')
  let myLabels = document.createElement('label')
  myLabels.innerText = i
  let myImputs = document.createElement('input')
  myImputs.setAttribute('type', 'checkbox')
  myMarks.appendChild(myLabels)
  myMarks.appendChild(myImputs)
  myFilters.appendChild(myMarks)
}
document.body.appendChild(myFilters) //FUNCIONA CORRECTAMENTE INSERTANDO AL FINAL.
//Queremos insertarlo al principio del body, así que haremos:
let reference = document.querySelector('section')
let parent = reference.parentNode
parent.insertBefore(myFilters, reference)
