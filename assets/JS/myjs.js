const myCanvas = document.getElementById("myCanvas");
const painter = myCanvas.getContext("2d");

function submitForm(event) {
    event.preventDefault();
    if (validateData()) {
        drawCircle();
        cleanForm();
    }
}

function drawCircle() {
    painter.beginPath();
    painter.strokeStyle = document.getElementById("color").value;
    painter.arc(document.getElementById("x").value, document.getElementById("y").value, document.getElementById("radius").value, 0, 2 * Math.PI); // x , y, radius, start angle, end angle
    painter.stroke();
}

function cleanForm() {
    document.getElementById("myForm").reset();
    document.getElementById("notice").innerHTML = "";
    document.getElementById("x").style.backgroundColor = "transparent";
    document.getElementById("y").style.backgroundColor = "transparent";
    document.getElementById("radius").style.backgroundColor = "transparent";
    document.getElementById("color").style.backgroundColor = "transparent";
}

function validateData() {

    if (document.getElementById("x").value === "") {
        document.getElementById("notice").innerHTML = "Missing x!";
        document.getElementById("x").style.backgroundColor = "red";
        return 0;
    }

    if (document.getElementById("y").value === "") {
        document.getElementById("notice").innerHTML = "Missing y!";
        document.getElementById("y").style.backgroundColor = "red";
        return 0;
    }

    if (document.getElementById("radius").value === "") {
        document.getElementById("notice").innerHTML = "Missing radius!";
        document.getElementById("radius").style.backgroundColor = "red";
        return 0;
    }

    if (document.getElementById("color").value === "") {
        document.getElementById("notice").innerHTML = "Missing color!";
        document.getElementById("color").style.backgroundColor = "red";
        return 0;
    }

    return 1;
}