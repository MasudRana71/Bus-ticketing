const buttons = document.getElementsByClassName('btn btn-color');
let selectedCount = 0; // Keep track of how many buttons have been selected
const maxSelection = 4; // Maximum number of buttons allowed to be selected
const selectedCountDisplay = document.getElementById('selectedCountDisplay'); // Display element for the selected count
const selectedButtonsList = document.getElementById('selectedButtonsList'); // Display element for the selected buttons list
const addEconomy = document.getElementById('economy');
const totalSeatsDisplay = document.getElementById('totalSeatsDisplay');
const totalPriceDisplay = document.getElementById('totalPriceDisplay');
const addPeice = document.getElementById('addPeice');
const seatPrice = 550; // Price per seat
let totalPrice = 0; // Initialize total price to 0
const totalSeats = 40;
totalSeatsDisplay.textContent = totalSeats;

// Loop through each button and add a click event listener
for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
        // If the button is not already selected and we haven't reached the max selection
        if (!this.classList.contains('selected') && selectedCount < maxSelection) {
            this.style.backgroundColor = 'red'; // Change the background color to red
            this.classList.add('selected'); // Mark this button as selected
            selectedCount++; // Increment the selected count
            totalPrice += seatPrice;
            const blockItem = document.createElement('div'); // or use <p> if you prefer
            blockItem.textContent = this.textContent.trim();
            
            const addText = document.createElement('div');
            addText.innerText = 'Economy';
            addEconomy.appendChild(addText) ;

            const addText2 = document.createElement('div');
            addText2.innerText = '550';
            addPeice.appendChild(addText2) ;
            // Add the button's text (e.g., "Button 1") to the selectedButtons array
            
            selectedButtonsList.appendChild(blockItem);

            // Update the displayed selected count and list of selected buttons
            selectedCountDisplay.textContent = selectedCount;
            totalPriceDisplay.textContent = totalPrice;  
            const availableSeats = totalSeats - selectedCount; // Calculate available seats
            totalSeatsDisplay.textContent = availableSeats;
        }

        
    });
}
// -------------------------------------------------------------------------------------------------------
//  // Select all buttons with the 'btn btn-color' class
//  const buttons = document.getElementsByClassName('btn btn-color');
//  let selectedCount = 0; // Keep track of how many seats have been selected
//  const maxSelection = 4; // Maximum number of seats allowed to be selected
//  const seatPrice = 550; // Price per seat
//  let totalPrice = 0; // Initialize total price to 0

//  const selectedCountDisplay = document.getElementById('selectedCountDisplay'); // Display element for the selected count
//  const totalPriceDisplay = document.getElementById('totalPriceDisplay'); // Display element for the total price
//  const selectedSeatsBlock = document.getElementById('selectedSeatsBlock'); // Block container for selected seats

//  // Loop through each button and add a click event listener
//  for (let i = 0; i < buttons.length; i++) {
//      buttons[i].addEventListener('click', function() {
//          // If the seat is not already selected and we haven't reached the max selection
//          if (!this.classList.contains('selected') && selectedCount < maxSelection) {
//              this.style.backgroundColor = 'red'; // Change the background color to red
//              this.classList.add('selected'); // Mark this seat as selected
//              selectedCount++; // Increment the selected count
//              totalPrice += seatPrice; // Add the price of the seat to the total

//              // Create a new <div> element for block style and set its text to the seat's label
//              const blockItem = document.createElement('div');
//              blockItem.textContent = this.textContent.trim(); // Display seat name

//              // Add the new block item to the block container
//              selectedSeatsBlock.appendChild(blockItem);

//              // Update the displayed selected count and total price
//              selectedCountDisplay.textContent = selectedCount;
//              totalPriceDisplay.textContent = totalPrice;
//          }
//      });
//  }