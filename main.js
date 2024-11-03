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
        container.innerHTML = `<p>Error: ${error.message}</p>`
    
// Task 4 Use finally to Ensure Cleanup

}finally {
    processingMessage.style.display = 'cleanup';
};
}

// Task 3. Display Tickets Dynamically on the Page

function displayTickets(tickets) {
    const ticketsContainer = document.getElementById('container');
    ticketsContainer.innerHTML = '';

    for (let i = 0; i < tickets.length; i++) {
        const ticket = tickets[i];
        const ticketElement = document.createElement('div');

        ticketElement.innerHTML = `
            <p>Customer Name: User ${ticket.userId}</p>
            <p>Issue Description: ${ticket.title}</p>
            <p>Details: ${ticket.body}</p>
            <hr>
        `;

        ticketsContainer.appendChild(ticketElement);
    }
};

fetchTickets();