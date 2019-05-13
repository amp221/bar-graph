
let averageDescription = [
    "Last sample",
    "4-sec average",
    "16-sec average",
    "64-sec average"
];
//test values 
let testAverages = [
    -3475,
    -3337,
    -3326,
    -3275
];

function insertBars() {
    var chart = document.getElementsByClassName("bar-chart");
    for (let i = 0; i < 4; ++i) {
        var newBar = document.createElement("div");
        var aveValue = testAverages[i];
        var adjustedAve = Math.abs(aveValue/ 1000);
       // console.log(adjustedAve);
        var barHeight = adjustedAve.toString() + "em";
       // console.log(barHeight);
       // console.log(chart);
        newBar.style.height = barHeight;
        newBar.style.width = "40px";
        newBar.style.backgroundColor = "blue";
        newBar.setAttribute("class", "bar");
        newBar.setAttribute("class", "bar");
        newBar.setAttribute("id", averageDescription[i].toString());
        newBar.setAttribute("value", aveValue);
        newBar.setAttribute("onclick", "showAve(getAttribute('value'))");
        //console.log(newBar);
        document.getElementsByClassName("bar-chart")[0].appendChild(newBar); 
        barheight = 0;
    }
}
function showAve(e) { 
    //console.log(e);
    newText = "Average:" + " " + e;
    //console.log(newText);
    myVal = document.getElementById("averageN").textContent;
    //console.log(myVal);
    document.getElementById("averageN").textContent = newText;
    //document.getElementById("averageN").textContent = this.bar.value.toString();   
}


function main() {   
    insertBars();
}

