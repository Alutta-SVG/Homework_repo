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
const book =[
    {
    status: document.querySelector('#book1.status').innerText,
    html:{
        status: document.querySelector('#book1.status'),
        reserve: document.querySelector('#book1.reserve'),
        checkout: document.querySelector('#book1.checkout'),
        checkin: document.querySelector('#book1.checkin'),
    },
    
   status: document.querySelector('#book2.status').innerText,
   html: { 
    status: document.querySelector('#book2.status'),
    reserve: document.querySelector('#book2.reserve'),
    checkout: document.querySelector('#book2.checkout'),
    checkin: document.querySelector('#book2.checkin'),
    
   },

   status: document.querySelector('#book3.status').innerText,
   html: {
    status: document.querySelector('#book3.status'),
    reserve: document.querySelector('#book3.reserve'),
    checkout: document.querySelector('#book3.checkout'),
    checkin: document.querySelector('#book3.checkin'),

   }
   
    }
]

checkin.0.color = none
status.0.style.color = STATUS_MAP.status.color
reserve.0 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout.0 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin.0 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

checkin.1.color = none
status.1.style.color = STATUS_MAP.status.color
reserve.1 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout.1 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin.1 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'

checkin.2.color = none
status.2.style.color = STATUS_MAP.status.color
reserve.2 = STATUS_MAP.status.canReserver ? 'enabled' : 'disabled'
checkout.2 = STATUS_MAP.status.canCheckout ? 'enabled' : 'disabled'
checkin.2 = STATUS_MAP.status.canCheckIn ? 'enabled' : 'disabled'
