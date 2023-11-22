document.addEventListener('DOMContentLoaded', () => {
    

    document.addEventListener('submit', (event) => {
        event.preventDefault();
        const user = document.querySelector('#email').value;
        const password = document.querySelector('#password').value;

        fetch('../data/users.json')
        .then(response => response.json())
        .then(data => {

    

            console.log(data);
            window.location.href = "admin.html";
        })

    })


});