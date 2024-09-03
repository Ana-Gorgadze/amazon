const searchInput = document.getElementById("search-item");
const productItems = document.querySelectorAll(".product")

function search() {
    const searchValue = searchInput.value.toLowerCase();
    let productsVisible = false;
    
    productItems.forEach(item => {
        const title = item.querySelector('h2').innerText.toLowerCase();
        if (title.includes(searchValue)) {
            item.style.display = '';
            productsVisible = true;
        } else {
            item.style.display = 'none';
        }
    });

}




