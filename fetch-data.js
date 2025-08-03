// fetch-data.js

// This async function fetches user data from a public API and displays it.
async function fetchUserData() {
    // Define the API URL.
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';
    // Select the element where the data will be displayed.
    const dataContainer = document.getElementById('api-data');

    try {
        // Fetch data from the API.
        const response = await fetch(apiUrl);
        // Parse the response as JSON.
        const users = await response.json();

        // Clear the initial "Loading" message.
        dataContainer.innerHTML = '';

        // Create a new unordered list element.
        const userList = document.createElement('ul');

        // Loop through the users and create a list item for each one.
        users.forEach(user => {
            const listItem = document.createElement('li');
            listItem.textContent = user.name;
            userList.appendChild(listItem);
        });

        // Append the completed list to the data container.
        dataContainer.appendChild(userList);

    } catch (error) {
        // If there is an error, display a user-friendly message.
        console.error('Failed to fetch user data:', error);
        dataContainer.innerHTML = 'Failed to load user data.';
    }
}

// Add an event listener to run the function when the page is fully loaded.
document.addEventListener('DOMContentLoaded', fetchUserData);