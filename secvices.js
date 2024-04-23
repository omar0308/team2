

function showp(event) {
    console.log(event);
    let x = event.indexOf('#');
    var images = ["omar", "raed", "chouaib", "louay", "aziz"];
    event = event.slice(x+1);
    console.log(event);
    images.splice(images.indexOf(event, 0), 1);
    for (var i = 0; i < images.length; i++) {
        document.getElementById(images[i]).style.display = 'none'
        console.log(document.getElementById(images[i]))
    }
    document.getElementById(event).children[0].style.width = "700px"
    document.getElementById(event).children[0].style.height = "500px"
    document.getElementById(event).children[1].style.height = "500px"
    document.getElementById(event).children[1].style.width = "700px"
    document.getElementById(event).style.width = "700px"
    document.getElementById(event).style.width = "700px"

    if (event == "aziz" || event == "raed") {
        const box = document.getElementById(event)
        box.style.position = 'relative';
        box.style.left = "150px"
        box.style.top = "25px"
    } else {
        const box = document.getElementById(event)
        box.style.position = 'relative';
        box.style.right = "350px"
        box.style.top = "25px"
    }
}