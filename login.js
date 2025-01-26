// Insert your code here

document.querySelector('#register').addEventListener('click', function() {
    const signup = {
        name: document.querySelector('#registerName').value,
        email: document.querySelector('#registerEmail').value,
        password: document.querySelector('#registerPassword').value
    };
    fetch('https://weatherapp-part4-backend-bay.vercel.app/users/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signup)
    })
    .then(response => response.json())
    .then(data => {
        if (data.result) {
            window.location.assign('index.html');
        }
    })
});
document.querySelector('#connection').addEventListener('click', function() {
    const signin = {
        email: document.querySelector('#connectionEmail').value,
        password: document.querySelector('#connectionPassword').value,
    }
    fetch('https://weatherapp-part4-backend-bay.vercel.app/users/signin', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(signin)
    })
    .then(response => response.json())
    .then(data => {
        console.log(data)
            if (data.result) {
                window.location.assign('index.html')
        }
    })
})