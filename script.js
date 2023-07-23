// Get the input element and postcards
const searchInput = document.getElementById('searchInput');
const postcards = document.querySelectorAll('.postcard');

// Add an event listener for the input event on the search bar
searchInput.addEventListener('input', filterPostcards);

// Function to filter the postcards based on user input
function filterPostcards() {
  const searchText = searchInput.value.toLowerCase();

  postcards.forEach((postcard) => {
    const title = postcard.querySelector('h2').innerText.toLowerCase();
    const description = postcard.querySelector('p').innerText.toLowerCase();

    if (title.includes(searchText) || description.includes(searchText)) {
      postcard.style.display = 'block';
    } else {
      postcard.style.display = 'none';
    }
  });
}
