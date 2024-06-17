function selectBus(name, startTime, endTime, price) {
    // Save bus details to localStorage
    localStorage.setItem('busName', name);
    localStorage.setItem('startTime', startTime);
    localStorage.setItem('endTime', endTime);
    localStorage.setItem('price', price);
  
    // Redirect to final page
    window.location.href = 'book.html';
  }
  