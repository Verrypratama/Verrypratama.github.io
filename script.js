const button = document.getElementById("button");

button.addEventListener("click", () =>{
    const hello = document.getElementById('hello');
    if (hello.style.backgroundColor === "red") {
        hello.style.backgroundColor = "orange";
    } else {
        hello.style.backgroundColor = "red";
    }
});