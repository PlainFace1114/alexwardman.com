
function changeImage() {
    if (document.getElementById("imgClickAndChange").src == "http://www.userinterfaceicons.com/80x80/minimize.png"){
        document.getElementById("imgClickAndChange").src = "http://www.userinterfaceicons.com/80x80/maximize.png";
    } else {
        document.getElementById("imgClickAndChange").src = "http://www.userinterfaceicons.com/80x80/minimize.png";
    }
}

    //Select button by id
const MyButton = document.getElementById('MyButton');
    //Add on click listener for button
MyButton.addEventListener('click', function() {
        //Select (h1) heading by id, and then change it's value to (bananas)
    document.getElementById('MyHeading').innerText = "Qxd6 cxd6"
    document.getElementById('MyHeading2').innerText = "Ba5 Qb6"
    document.getElementById('MyHeading3').innerText = "Bxb6#"
})
