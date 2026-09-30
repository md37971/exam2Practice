async function userListController() {
    let response = await fetch('http://localhost:3000/api/users');
    let users = await response.json();
    userListView(users);
    console.log("RUNNING THE CONTROLLER.");
    return users;
};

/*
"{ ""username"", ""lastname"", ""firstname"", ""passwd"", ""email"", ""urole"" }"
*/

function userListView(users) {
    let table = document.getElementById("usertable");
    let view = `<thead><tr><th>User ID</th>` +
                        `<th>Username</th>` +
                        `<th>Last Name</th>` +
                        `<th>First Name</th>` +
                        `<th>Password</th>` +
                        `<th>Email</th>` +
                        `<th>U-Role</th>` +
                        `<th>Last Modified</th>`;

    //JSON is a nested array, so we'll need the data tag.
    users.data.forEach(user => {
        view = view + 
        `<tbody><tr><td>${user['userID']}</td> ` +
        `<td>${user['username']}</td>` +
        `<td>${user['lastname']}</td>` +
        `<td>${user['firstname']}</td>` +
        `<td>${user['passwd']}</td>` +
        `<td>${user['email']}</td>` +
        `<td>${user['urole']}</td>` +
        `<td>${user['lastModified']}</tr></tbody>`;
    });
    

    table.innerHTML = view;
    
};


//Creating a new user.
function createNewUser() {
    let firstname = document.getElementById("firstname").value;
    let lastname = document.getElementById("lastname").value;
    let username = document.getElementById("username").value;
    let passwd = document.getElementById("passwd").value;
    let email = document.getElementById("email").value;
    let urole = document.getElementById("urole").value;

    const newuser = {
        username: username,
        lastname : lastname,
        firstname : firstname,
        passwd : passwd,
        email : email,
        urole : urole
    };


    fetch('http://localhost:3000/api/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(newuser)
    });
};