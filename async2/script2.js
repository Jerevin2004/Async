fetch("https://dog.ceo/api/breeds/image/random")
   .then(response => response.json())
   .then(data => {
       console.log("Here's your advice:",data.slip.advice);
   })
   .catch(error => console.error("Error;", error));
