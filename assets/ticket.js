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
            this.style.backgroundColor = '#42b249'; // Change the background color
            this.classList.add('selected'); // Mark this button as selected
            selectedCount++; // Increment the selected count
            totalPrice += seatPrice;
            const blockItem = document.createElement('div');
            blockItem.textContent = this.textContent.trim();
            
            const addText = document.createElement('div');
            addText.innerText = 'Economy';
            addEconomy.appendChild(addText);

            const addText2 = document.createElement('div');
            addText2.innerText = '550';
            addPeice.appendChild(addText2);

            selectedButtonsList.appendChild(blockItem);

            // Update the displayed selected count and list of selected buttons
            selectedCountDisplay.textContent = selectedCount;
            totalPriceDisplay.textContent = totalPrice;  
            const availableSeats = totalSeats - selectedCount; // Calculate available seats
            totalSeatsDisplay.textContent = availableSeats;
        }
        
        console.log(totalPriceDisplay.textContent);
    });
}  

function applyDiscount() {
    // Get input values
    const inputText = document.getElementById("userInput").value;
    const price = totalPriceDisplay.textContent; // Get the text content for total price
    let totalPrice = parseFloat(price); // Convert price value to a number
    console.log(totalPrice);
    
    const grandPrice = document.getElementById('grandPrice');

    // Check if totalPrice is a valid number
    if (isNaN(totalPrice)) {
        grandPrice.innerText = "Invalid Price";
        return; // Stop the function if the price is invalid
    }

    // Check if the input text matches the discount code
    if (inputText === "NEW15") {
        // Apply 15% discount
        totalPrice -= (totalPrice * 0.15);
    } else if (inputText === "Couple20") {
        // Apply 20% discount
        totalPrice -= (totalPrice * 0.20);
    }

    // Display the final price in the 'grandPrice' element
    grandPrice.innerText = totalPrice.toFixed(2); // Format it to 2 decimal places
}
