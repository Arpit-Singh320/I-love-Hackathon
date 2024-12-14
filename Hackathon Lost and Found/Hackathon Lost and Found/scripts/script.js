// Global variables to simulate data storage
let reportedItems = [];
let itemID = 0;

document.getElementById('item-form').addEventListener('submit', function(event) {
  event.preventDefault();
  const description = document.getElementById('item-description').value;
  const imageUrl = document.getElementById('item-image').value;

  // Simulate item storage
  const newItem = {
    id: ++itemID,
    description: description,
    imageUrl: imageUrl
  };
  reportedItems.push(newItem);

  // Provide feedback to the user
  document.getElementById('report-response').innerHTML = `<p>Item "${description}" reported successfully!</p>`;

  // Clear form fields
  document.getElementById('item-description').value = '';
  document.getElementById('item-image').value = '';
});

function searchItems() {
  const query = document.getElementById('search-query').value.toLowerCase();
  const filteredItems = reportedItems.filter(item => item.description.toLowerCase().includes(query));

  const itemsList = document.getElementById('items-list');
  itemsList.innerHTML = '';
}