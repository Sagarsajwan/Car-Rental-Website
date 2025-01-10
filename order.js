document.getElementById('orderForm').addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const orderData = {
        name: document.getElementById('customerName').value,
        email: document.getElementById('customerEmail').value,
        carModel: document.getElementById('carModel').value,
        address: document.getElementById('customerAddress').value,
    };
  
    try {
        const response = await fetch('http://127.0.0.1:3000/api/orders', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(orderData),
        });
  
        if (response.ok) {
            alert('Order placed successfully!');
            document.getElementById('orderForm').reset();
        } else {
            const errorMessage = await response.text(); // Get the error message from the server
            console.error('Server Error:', errorMessage);
            alert('Failed to place order. Please try again later.');
        }
    } catch (error) {
        console.error('Client Error:', error);
        alert('Error placing order. Please try again later.');
    }
});

