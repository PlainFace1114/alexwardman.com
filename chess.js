
function changeImage()
{
var img = document.getElementById("image");
img.src="img/begin.png";
return false;
}


    //Select button by id
const MyButton = document.getElementById('MyButton');
    //Add on click listener for button
MyButton.addEventListener('click', function() {
        //Select (h1) heading by id, and then change it's value to (bananas)
    if (document.getElementById('MyHeading').innerText = "Qxd6 cxd6"){
    document.getElementById('MyHeading').innerText = "Ba5 Qb6";
    } else {
        document.getElementById('MyHeading').innerText = "Bxb6#";
    }
})
