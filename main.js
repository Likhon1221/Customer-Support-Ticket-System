// Task 2. Fetch Tickets Using Async/Await and Handle Errors

let container = document.getElementById('container');
let loadingMessage = document.getElementById('loading');

async function fetchTickets() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        let tickets = await response.json();
        if (tickets.length === 0) {
            throw new Error('Tickets not found');
        }
        
        displayTickets(tickets);
    } catch (error) {
        container.innerHTML = `<p>Error: ${error.message}</p>`;
    }

}