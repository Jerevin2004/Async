//part 1

console.log("First message");

setTimeout(()=> {
    console.log ("Second message (after 2)");
}, 2000);

console.log("Third message");


//part 2

fetch("https://api.adviceslip.com/advice")
   .then(response => response.json())
   .then(data => {
       console.log("Here's your advice:",data.slip.advice);
   })
   .catch(error => console.error("Error;", error));


//part 3


async function getAdvice() {
    try{
        let response = await fetch("https://api.adviceslip.com/advice");
        let data = await response.json();
        console.log("Here's your advice:", data.slip.advice);
    } catch (error) {
        console.error("Error:", error)

    }
}



