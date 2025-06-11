const products = [
    { id: 1, name: "Pixel 9 pro" },
    { id: 2, name: "Iphone 16" },
    { id: 3, name: "Samsung S25 Ultra" }
];

window.onload = function() {

    const select = document.getElementById('productName');
    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        select.appendChild(option);
    });


    let reviewCount = localStorage.getItem('reviewCount');
    if (!reviewCount) {
        reviewCount = 0;
    }
    reviewCount = parseInt(reviewCount, 10);
    const reviewCountElement = document.getElementById('reviewCount');
    if (reviewCountElement) {
        reviewCountElement.textContent = `You have submitted ${reviewCount} review(s).`;
    }

    document.getElementById('currentyear').textContent = new Date().getFullYear();
    document.getElementById('lastModified').textContent = "Last Modified: " + document.lastModified;


    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            let reviewCount = localStorage.getItem('reviewCount');
            if (!reviewCount) {
                reviewCount = 0;
            }
            reviewCount = parseInt(reviewCount, 10) + 1;
            localStorage.setItem('reviewCount', reviewCount);
            location.reload();
        });
    }
};