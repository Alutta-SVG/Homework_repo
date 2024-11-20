// Do not edit HTML

const STATUS_MAP = {
    shelf: {
        color: 'green',
        canReserve: true,
        canCheckout: true,
        canCheckIn: false,
    },
    reserved: {
        color: 'blue',
        canReserve: false,
        canCheckout: true,
        canCheckIn: false,
    },
    overdue: {
        color: 'red',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    },
    checkedOut: {
        color: 'orange',
        canReserve: false,
        canCheckout: false,
        canCheckIn: true,
    }
}

// Edit below line only
const books = [
    {
        status: document.querySelector('#book1 .status').innerText,
        html: {
            status: document.querySelector('#book1 .status'),
            reserve: document.querySelector('#book1 .reserve'),
            checkout: document.querySelector('#book1 .checkout'),
            checkin: document.querySelector('#book1 .checkin'),
        },
    },
    {
        status: document.querySelector('#book2 .status').innerText,
        html: {
            status: document.querySelector('#book2 .status'),
            reserve: document.querySelector('#book2 .reserve'),
            checkout: document.querySelector('#book2 .checkout'),
            checkin: document.querySelector('#book2 .checkin'),
        },
    },
    {
        status: document.querySelector('#book3 .status').innerText,
        html: {
            status: document.querySelector('#book3 .status'),
            reserve: document.querySelector('#book3 .reserve'),
            checkout: document.querySelector('#book3 .checkout'),
            checkin: document.querySelector('#book3 .checkin'),
        },
    }
]

// Loop through each book to set styles and button states
books.forEach((books) => {
    const statusConfig = STATUS_MAP[books.status];
    
    // Set the color of the status element
    books.html.status.style.color = statusConfig.color;

    // Enable or disable buttons based on the status configuration
    books.html.reserve.disabled = !statusConfig.canReserve;
    books.html.checkout.disabled = !statusConfig.canCheckout;
    books.html.checkin.disabled = !statusConfig.canCheckIn;
});