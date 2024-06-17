function getBookingDetails() {
  return {
    from: localStorage.getItem('from'),
    to: localStorage.getItem('to'),
    date: localStorage.getItem('date'),
    busName: localStorage.getItem('busName'),
    startTime: localStorage.getItem('startTime'),
    endTime: localStorage.getItem('endTime'),
    price: localStorage.getItem('price') + 'rs'
  };
}

function displayBookingDetails() {
  const details = getBookingDetails();
  const bookingDetailsDiv = document.getElementById('bookingDetails');
  bookingDetailsDiv.innerHTML = `
    <p><strong>From:</strong> ${details.from}</p>
    <p><strong>To:</strong> ${details.to}</p>
    <p><strong>Date:</strong> ${details.date}</p>
    <p><strong>Bus Name:</strong> ${details.busName}</p>
    <p><strong>Time:</strong> ${details.startTime} - ${details.endTime}</p>
    <p><strong>Price:</strong> ${details.price}</p>
  `;
}

// Display the booking details on page load
window.onload = displayBookingDetails;
