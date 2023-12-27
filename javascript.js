import { imageSlider } from "./Data/imageSlider.js"
let imageSliderListEl = document.querySelector(".imageSliderList")
let imageSliderListHTML = ''
console.log(imageSlider)


imageSlider.forEach(el => {
    imageSliderListHTML += `
    <div class="imageSliderItem">
        <a href="${el.link}">
            <img src="${el.img}" />
        </a>
    </div>
    `
})
imageSliderListEl.innerHTML = imageSliderListHTML;

let preve_imageBtnEl = document.getElementById("preve_imageBtn")
let next_imageBtn = document.getElementById("next_imageBtn")
let start = 0;
let end = -400;

preve_imageBtnEl.addEventListener("click", handlePreveImage)
next_imageBtn.addEventListener("click", handleNextImage)

function handlePreveImage() {
    let imageallList = document.querySelectorAll(".imageSliderItem")
    console.log(imageallList)
    if (start < 0)
        start += 100
    imageallList.forEach(el => {
        el.style.transform = `translateX(${start}%)`
    })

}
function handleNextImage() {
    let imageallList = document.querySelectorAll(".imageSliderItem")
    if (start > end)
        start -= 100
    imageallList.forEach(el => {
        el.style.transform = `translateX(${start}%)`
    })
}

function renderImageSlider() {
    if (start > end) {
        handleNextImage()
    }
    else {
        start = 100
    }
}

setInterval(renderImageSlider, 5000)
// //features
// async function fetchData() {
//     let fetData = await fetch('https://dummyjson.com/products')
//     let res = await fetData.json()
//     return res
// }

// let catgContainer = document.querySelector('.categories')
// // let card = document.querySelector('.items')
// let card = document.querySelector(".productcards")

// window.onload = async function () {
//     catgContainer.innerHTML = `<div class="shimmer-catg"></div><div class="shimmer-catg"></div>
//     <div class="shimmer-catg"></div><div class="shimmer-catg"></div><div class="shimmer-catg">
//     </div><div class="shimmer-catg"></div>`
//     let data = await fetchData()
//     let products = data.products

//     uniqCatgs(products)
//     displayItems(products)
//     displayProdRatingAboveFourToPointFive(products)
//     displayProdRatingAboveFourPointFive(products)
// }

// function uniqCatgs(products) {
//     let catgs = products.map(items => {
//         return items.category
            
//     })
//     // console.log(catgs)
//     let uniqCatgs = catgs.filter((item, index) => {
//         return catgs.indexOf(item) === index
//     })
//     // console.log(uniqCatgs)

//     let elemCatgs = uniqCatgs.map((items) => {
//         let elem =  `<div onclick="dispCatg('${items}')">${items.toUpperCase()}</div>`
//         return elem
//     })
//     catgContainer.innerHTML = elemCatgs.join('')
// }
// // function uniqCatgs(products) {
// //     let catgs = products.map(items => {
// //         return items.category
// //     })
// //     // console.log(catgs)
// //     let uniqCatgs = catgs.filter((item, index) => {
// //         return catgs.indexOf(item) === index
// //     })
// //     // console.log(uniqCatgs)

// //     let elemCatgs = uniqCatgs.map((items) => {
// //         let elem = `<div onclick="dispCatg('${items}')">${items.toUpperCase()}</div>`
// //         return elem
// //     })
// //     catgContainer.innerHTML = elemCatgs.join('')
// // }

// function displayItems(products) {
//     // console.log(products[0])
//     let items = products.map((item) => {
//         console.log(item.id)
//         let elemItem = `
//         <a href="prodDetail.html?id=${item.id}">
//         <div class="cards">
//         <div class="image-product">
//         <img src="${item.thumbnail}" alt="">
//     </div>
//     <div class="description">
//         <p>Title:${item.title}</p>
    
//     <div class="discount"><h4>Rating:${item.rating}</h4>
//     <h5>Item In Stock:${item.stock}</h5>
//     <h3>Price:${item.price}</h3></div>
//     </div>
// </div>
//     </a>`
//         return elemItem
//     })
//     card.innerHTML = items.join('')
// }
// let slider=document.querySelector(".imageSliderContainer")
// let searchInput = document.querySelector('#search');
// let searchIcon= document.querySelector('#Search');  

// let searchInp = document.querySelector('#search')
// searchInp.addEventListener('keyup', async function (e) {
//     // console.log(e)

//     var inputVal = e.target.value
//     dispCatg(inputVal)
// })
// function dispCatg(id) {
//     console.log(id);
//     window.location.href = `catg.html?id=${id}`;
// }

let searchInp = document.querySelector('#search')
let searchIcon = document.querySelector('#searchicon');

searchInp.addEventListener('keyup', function (e) {
    if (e.key === 'Enter') {
        dispCatg(searchInp.value);
    }
});

searchIcon.addEventListener('click', function () {
    dispCatg(searchInp.value);
});



//     let data = await fetchData()
//     let products = data.products

//     // console.log(title)
//     let searchData = products.filter(function (e) {
//         let title = e.category.toLowerCase()
//         return title.includes(inputVal)
//     })
//     console.log(searchData)
//     displayItems(searchData)
// })
// function dispCatg(id){
//     console.log(id)
//     window.location.href = `catg.html?id=${id}`
// }
// let checkboxRating4 = document.getElementById('above4')
// let checkboxRating5 = document.getElementById('above3')
// function displayProdRatingAboveFourToPointFive(products) {
//     checkboxRating4.addEventListener('click', function () {
//         if (checkboxRating4.checked === true) {
//             checkboxRating5.checked = false
//             let sortedProducts = products.filter(product => {
//                 return product.rating >= 4 && product.rating <= 4.5
//             })
//             displayItems(sortedProducts)
//             console.log(sortedProducts)
//         } else {
//             displayItems(products)
//         }
//     })

// }

// function displayProdRatingAboveFourPointFive(products) {
//     checkboxRating5.addEventListener('click', function () {
//         if (checkboxRating5.checked === true) {
//             checkboxRating4.checked = false
//             let sortedProducts = products.filter(product => {
//                 return product.rating >= 4.5 && product.rating <= 5
//             })
//             displayItems(sortedProducts)
//             console.log(sortedProducts)
//         } else {
//             displayItems(products)
//         }
//     })

// }
// index.js

// Fetch data function
async function fetchData() {
    try {
        const response = await fetch('https://dummyjson.com/products');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        throw error;
    }
}

// DispCatg function definition
function dispCatg(id) {
    console.log(id);
    window.location.href = `catg.html?id=${id}`;
}

// Image slider data


// Display unique categories
function uniqCatgs(products) {
    const catgContainer = document.querySelector('.categories');

    const catgs = products.map(item => item.category);
    const uniqCatgs = [...new Set(catgs)];

    const elemCatgs = uniqCatgs.map(item => {
        return `<div class="category" data-category="${item}">${item.toUpperCase()}</div>`;
    });

    catgContainer.innerHTML = elemCatgs.join('');

    catgContainer.addEventListener('click', function (event) {
        if (event.target.classList.contains('category')) {
            const category = event.target.dataset.category;
            dispCatg(category);
        }
    });
}

// Display product items
function displayItems(products) {
    const card = document.querySelector(".productcards");

    const items = products.map(item => {
        return `
            <a href="prodDetail.html?id=${item.id}">
                <div class="cards">
                    <div class="image-product">
                        <img src="${item.thumbnail}" alt="">
                    </div>
                    <div class="description">
                        <p>Title: ${item.title}</p>
                        <div class="discount">
                            <h4>Rating: ${item.rating}</h4>
                            <h5>Item In Stock: ${item.stock}</h5>
                            <h3>Price: ${item.price}</h3>
                        </div>
                    </div>
                </div>
            </a>`;
    });

    card.innerHTML = items.join('');
}

// Display products with ratings between 4 and 4.5
function displayProdRatingAboveFourToPointFive(products) {
    const checkboxRating4 = document.getElementById('above4');
    const checkboxRating5 = document.getElementById('above3');

    checkboxRating4.addEventListener('click', function () {
        if (checkboxRating4.checked === true) {
            checkboxRating5.checked = false;
            const sortedProducts = products.filter(product => {
                return product.rating >= 4 && product.rating <= 4.5;
            });
            displayItems(sortedProducts);
        } else {
            displayItems(products);
        }
    });
}

// Display products with ratings above 4.5
function displayProdRatingAboveFourPointFive(products) {
    const checkboxRating5 = document.getElementById('above3');

    checkboxRating5.addEventListener('click', function () {
        if (checkboxRating5.checked === true) {
            checkboxRating4.checked = false;
            const sortedProducts = products.filter(product => {
                return product.rating >= 4.5 && product.rating <= 5;
            });
            displayItems(sortedProducts);
        } else {
            displayItems(products);
        }
    });
}
window.onload = async function () {
    const data = await fetchData();
    const products = data.products;

    uniqCatgs(products);
    displayItems(products);
    displayProdRatingAboveFourToPointFive(products);
    displayProdRatingAboveFourPointFive(products);
};
async function addToCart(){
    let data = await fetchProdDetails()
    let detailProd = data
    console.log(detailProd)

    let dataLS = JSON.parse(localStorage.getItem('dataCart')) || []
    dataLS.push(detailProd)

    localStorage.setItem("dataCart", JSON.stringify(dataLS))

    // let dataLS = JSON.parse(localStorage.getItem('dataCart')) 
    console.log(dataLS.length)
    cardCount.innerText = dataLS.length
    
}
async function fetchProdDetails() {
    let fetData = await fetch(`https://dummyjson.com/products/${idProd}`)
    let res = await fetData.json()
    return res
}
