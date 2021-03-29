const toggleButton = document.getElementById("toggler");
const body = document.getElementsByTagName("BODY")[0];
const stopScroll = () => {
    if(toggleButton.checked == true){
        console.log("True");
    body.classList.add('stopScroll');
    } else {
        body.classList.remove('stopScroll');
    }
 }
 
