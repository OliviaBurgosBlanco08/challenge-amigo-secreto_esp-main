// The main objective of this challenge is to strengthen your programming logic skills. Here, you'll develop the logic to solve the problem.
  // Array to store friends' names
let friends = [];

// Function to add a friend to the list
function addFriend() {
    let input = document.getElementById("friend"); // Capture the input field
    let name = input.value.trim(); // Removes spaces before and after

    // Validation to avoid empty names or just spaces
    if (name === "" || name.length === 0) {
        alert("Please enter a valid name.😓");
        return;
    }

    // Validation to avoid duplicate names (ignores upper/lower case)
    if (friends.some(friend => friend.toLowerCase() === name.toLowerCase())) {
        alert(`"${name}" has already been added to the list.😎`);
        return;
    }

    friends.push(name); // Add the name to the array
    updateList(); // Update the list in the HTML

    input.value = ""; // Clear the input field
}

// Function to update the friends list in HTML
function updateList() {
    let list = document.getElementById("friendList");
    list.innerHTML = ""; // Clear the list before updating

    // Loop through the array and create a <li> for each friend
    friends.forEach((friend) => {
        let li = document.createElement("li");
        li.textContent = friend;
        list.appendChild(li);
    });
}

// Function to draw a random friend
function drawFriend() {
    if (friends.length === 0) {
        alert("There are no friends on the list to draw.");
        return;
    }

    let randomIndex = Math.floor(Math.random() * friends.length); // Generates a random index
    let friendSelected = friends[randomIndex]; // Get the random friend

    let result = document.getElementById("result");
    result.innerHTML = `<li class="winner">😊 ${friendSelected} has been chosen! 😊</li>`; // Show the result
}

// Function to restart the game
function newGame() {
    friends = []; // Empty the friends array
    document.getElementById("friendList").innerHTML = ""; // Clean the list in HTML
    document.getElementById("result").innerHTML = ""; // Clear the draw result
}
