document.addEventListener("DOMContentLoaded", function () {
    // Ambil semua elemen dengan kelas "filter-item"
    var filterItems = document.querySelectorAll(".filter-item");

    // Loop melalui setiap elemen filter
    filterItems.forEach(function (item) {
        // Tambahkan event listener untuk mengatasi klik
        item.addEventListener("click", function (e) {
            e.preventDefault();

            // Temukan submenu yang berada dalam elemen yang sama
            var submenu = item.nextElementSibling;

            // Toggle (buka/tutup) submenu
            if (submenu.classList.contains("show")) {
                submenu.classList.remove("show");
            } else {
                submenu.classList.add("show");
            }
        });
    });
});
// Get the search input element
const searchInput = document.getElementById('searchInput');

// Add an event listener to the search input for keyup event
searchInput.addEventListener('keyup', function () {
    // Get the search query
    const query = this.value.toLowerCase();

    // Get all product cards
    const productCards = document.querySelectorAll('.item-list');

    // Loop through the product cards
    productCards.forEach(function (card) {
        const title = card.querySelector('.card-title').textContent.toLowerCase();
        const cardElement = card.parentElement; // Get the parent div of the card

        // Check if the title contains the search query
        if (title.includes(query)) {
            cardElement.style.display = 'block'; // Display the card
        } else {
            cardElement.style.display = 'none'; // Hide the card
        }
    });
});
