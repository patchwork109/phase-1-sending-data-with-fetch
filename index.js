
// one method for writing out the POST request
// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json", 
//         "Accept": "application/json",
//     }, 
//     body: JSON.stringify( {
//         dogName: "Byron",
//         dogBreed: "Poodle",
//     }),
// }

// fetch("http://localhost:3000/dogs", configurationObject)


// another method for writing out the POST request
// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   };
  
//   const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json",
//     },
//     body: JSON.stringify(formData),
//   };
  
//   fetch("http://localhost:3000/dogs", configurationObject);


// another method for writing out the POST request
// fetch("http://localhost:3000/dogs", {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json",
//   },
//   body: JSON.stringify({
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   }),
// });

// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
//   };
  
//   const configurationObject = {
//     method: "POST",
//     headers: {
//       "Content-Type": "application/json",
//       "Accept": "application/json",
//     },
//     body: JSON.stringify(formData),
//   };
  
//   fetch("http://localhost:3000/dogs", configurationObject)
//     .then(function (response) {
//       return response.json();
//     })
//     .then(function (object) {
//       console.log(object);
//     });


const userName = "Sam"
const userEmail = "sam@example.com"

function submitData(userName, userEmail) {
    return fetch();
}

fetch("http://localhost:3000/users", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Accept": "application/json",
  },
  body: JSON.stringify({
    name: userName,
    email: userEmail,
  }),
  })
    .then(function (response) {
        return response.json();
    })
    .then(function (userData) {
        console.log(userData);

    const paragraph = document.createElement("p");
    const body = document.querySelector("body");
    body.append(paragraph);

    paragraph.textContent = userData.id
    })
    .catch(function (error) {
        alert("Bad things! Ragnarők!");
        console.log(error.message);
    });



