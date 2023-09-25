const form = document.getElementById('loginForm');

form.addEventListener('submit', e => {
    e.preventDefault();
    const data = new FormData(form);
    const obj = {};
    data.forEach((value, key) => obj[key] = value);
    
    fetch('api/sessions/login', {
        method: 'POST',
        body: JSON.stringify(obj),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => {
        if (!response.ok) {
            return response.json().then(data => {
                throw new Error(data.message); // Using the custom error message you send from the backend
            });
        }
        return response.json();
    })
    .then(data => {
        // Successful login, so redirect to /products
        window.location.replace('/products');
    })
    .catch(error => {
        // Handle/display the error message here
        alert(error.message);
    });
});
