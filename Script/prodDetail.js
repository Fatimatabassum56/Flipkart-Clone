// let searchUrl = new URLSearchParams(window.location.search)

let idProd = searchUrl.get('id')
console.log(idProd)

async function fetchProdDetails() {
    let fetData = await fetch(`https://dummyjson.com/products/${idProd}`)
    let res = await fetData.json()
    return res
}

fetchProdDetails()

let cardCount = document.getElementById('cardCount')

onload = async function() {
    let dataLS = JSON.parse(localStorage.getItem('dataCart')) 
    console.log(dataLS.length)
    cardCount.innerText = dataLS.length
    let data = await fetchProdDetails()
    let detailProd = data
    disImg(detailProd)
}







function disImg(detailProd){
    console.log(detailProd)
    let side2=document.querySelector('.side2')
    let subImgCont = document.querySelector('.sub-imgs')
    let mainImgCont = document.querySelector('.main-img')
    let side=document.querySelector(".side")

    let disSubImges = detailProd.images.map(i=>{
        let subImg = `<img onclick="disSubImg('${i}')" class="single-sub-img" src="${i}" alt="" srcset="">
       `
       return subImg
    })
    subImgCont.innerHTML = disSubImges.join('')

    let thumbnailImg = detailProd.thumbnail
    console.log(thumbnailImg)
    
    let mainImg = `<img class="single-Main-img" src="${thumbnailImg}" alt="" srcset=""> `
   
    mainImgCont.innerHTML = mainImg
    let Title=`<h1>${detailProd.title}<h1>`
    side2.innerHTML=Title

        // console.log(products[0])
        let items = detailProd.map((item) => {
            let elemItem = `
            <div class="item-details">
                <h2>Title:${item.title}</h2>
                <div>Rating:${item.rating}</div><br><br>
                <div class="item-desc">Description:${item.description}</div>
                <div>
                    Items In Stock:${item.stock}
                </div>
            </div>
            <div class="item-price"><h1>₹${item.price}</h1>
            <h3 class="item-desc">Discount:${item.discountPercentage}%</h3>
            </div>
            
        </div>`
            return elemItem
        })
        side.innerHTML = items.join('')
    }

   

function disSubImg(i){
    // console.log(i)
    let mainImgCont = document.querySelector('.main-img')
    let mainImg = `<img class="single-Main-img" src="${i}" alt="" srcset=""> `
   
    mainImgCont.innerHTML = mainImg

}


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
function dispCatg(id) {
    console.log(id)
    window.location.href = `catg.html?id=${id}`
}


document.addEventListener('DOMContentLoaded', function () {
    // Simulate login and store the person's name
    localStorage.setItem('name', 'fatima');
    displayReviews();
});

function addReview() {
    let newReviewText = document.getElementById('new-review').value;
    if (newReviewText.trim() === '') {
        alert('Please enter a review before submitting.');
        return;
    }

    let reviews = getReviewsFromStorage();
    const newReview = {
        id: generateUniqueId(),
        name: localStorage.getItem('name'),
        text: newReviewText,
        timestamp: new Date().toLocaleString(),
    };
    reviews.push(newReview);
    saveReviewsToStorage(reviews);

    displayReviews();
    document.getElementById('new-review').value = '';
}

function editReview(index) {
    let reviews = getReviewsFromStorage();
    let reviewText = reviews[index].text;

    // Create an input element for editing
    let editInput = document.createElement('textarea');
    editInput.value = reviewText;

    // Create a confirmation button
    let confirmButton = document.createElement('button');
    confirmButton.innerText = 'Confirm';
    confirmButton.onclick = function () {
        reviews[index].text = editInput.value;
        saveReviewsToStorage(reviews);
        displayReviews();
    };

    // Create a cancel button
    let cancelButton = document.createElement('button');
    cancelButton.innerText = 'Cancel';
    cancelButton.onclick = function () {
        displayReviews();
    };

    // Replace the review text with the input and buttons
    let reviewElement = document.getElementById('reviews-list').children[index];
    reviewElement.innerHTML = '';
    reviewElement.appendChild(editInput);
    reviewElement.appendChild(confirmButton);
    reviewElement.appendChild(cancelButton);
}

function deleteReview(index) {
    let confirmDelete = confirm('Are you sure you want to delete this review?');
    if (confirmDelete) {
        let reviews = getReviewsFromStorage();
        reviews.splice(index, 1);
        saveReviewsToStorage(reviews);
        displayReviews();
    }
}

function displayReviews() {
    let reviews = getReviewsFromStorage();
    let reviewsList = document.getElementById('reviews-list');
    reviewsList.innerHTML = '';

    for (let i = 0; i < reviews.length; i++) {
        let review = reviews[i];

        let reviewElement = document.createElement('div');
        reviewElement.classList.add('review');

        // Display reviewer's information
        let reviewerInfo = document.createElement('div');
        reviewerInfo.classList.add('reviewer-info');
        
        // Display a small photograph (placeholder)
        let reviewerPhoto = document.createElement('div');
        reviewerPhoto.classList.add('reviewer-photo');
        // let Photo = document.createElement('img');
        // photo.src = 'mini1.webp';


// Append the img element to the parent element
        // reviewerPhoto.appendChild(photo);

        reviewerInfo.appendChild(reviewerPhoto);

        // Display the reviewer's name
        let reviewerName = document.createElement('span');
        reviewerName.innerText = review.name;
        reviewerInfo.appendChild(reviewerName);

        reviewElement.appendChild(reviewerInfo);

        // Display the review text
        let reviewText = document.createElement('p');
        reviewText.innerText = review.text;
        reviewElement.appendChild(reviewText);

        // Display review actions
        let reviewActions = document.createElement('p');
        reviewActions.classList.add('review-actions');
        reviewActions.innerHTML = `
            <span>${review.timestamp}</span>
            <button class="edit"onclick="editReview(${i})">Edit</button>
            <button class="del"onclick="deleteReview(${i})">Delete</button>
        `;
        reviewElement.appendChild(reviewActions);

        reviewsList.appendChild(reviewElement);
    }
}

function getReviewsFromStorage() {
    let reviews = JSON.parse(localStorage.getItem('productReviews')) || [];
    return reviews;
}

function saveReviewsToStorage(reviews) {
    localStorage.setItem('productReviews', JSON.stringify(reviews));
}

function generateUniqueId() {
    return '_' + Math.random().toString(36).substr(2, 9);
}

