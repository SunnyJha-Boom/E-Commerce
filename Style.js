document.onload;

const bar =document.getElementById('bar');
const close =document.getElementById('close');
const nav = document.getElementById('navbar');

if (bar) {
    bar.addEventListener ('click', () => {
        nav.classList.add('active')
    });
}

if (close) {
    close.addEventListener ('click', () => {
        nav.classList.remove('active')
    });
}


if (window.innerWidth <= 768) {
        // Get the search input element
        var searchInput = document.getElementById('search');

        // Set initial placeholder text
        searchInput.placeholder = "Search QuantumMarket";

        // Update placeholder text on window resize
        window.addEventListener('resize', function () {
            if (window.innerWidth <= 768) {
                searchInput.placeholder = "Search QuantumMarket";
            } else {
                searchInput.placeholder = "Search for Products, Brand and More ...";
            }
        });
    }


    