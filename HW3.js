// Defining Array of type Movie
const inputArray = [];

// Add Movie
function addMovie()
{
    let Movie = {
        title: document.getElementById("title").value,
        year: document.getElementById("year").value,
        rate: document.getElementById("rate").value
    }
    //Sending error whenever it has empty field
    if (Movie.title == "" || Movie.year == "" || Movie.rate == ""){ 
        alert("ERROR: There is empty field.");
        return false;
    }
    else if (Movie.rate < 1 || Movie.rate > 5 ){
        alert("ERROR: Please select 1 ~ 5.");
        return false;
    }
    else {
        inputArray.push(Movie); //Storing input data to array
        console.log(Movie);
    }

    document.getElementById("title").value = ""; //Clear current input screen
    document.getElementById("year").value = "";
    document.getElementById("rate").value = "";
}



function showMovies()
{   //Numeric Sort ascending
    inputArray.sort((a,b) => {
        return a.rate - b.rate;
    });
    //Display sorted array
   console.log(inputArray);
    let myContatiner = document.getElementById("container");
    let myTable = document.createElement("table");
    let myRow = myTable.insertRow(0);
    let myData = myRow.innerHTML = `<tr>
    <th>Movie Title </th>
    <th>Released Year </th>
    <th>Rating </th>
</tr>`;

let count = inputArray.length;
if (count > 10){
    count = 10;
}
        for(let i=0; i < count; i++){
            myRow = myTable.insertRow(-1);
            myData = myRow.insertCell(0).innerHTML = inputArray[i].title;
            myData = myRow.insertCell(1).innerHTML = inputArray[i].year;
            myData = myRow.insertCell(2).innerHTML = inputArray[i].rate;
        }
    myContatiner.innerHTML = "";
    myContatiner.appendChild(myTable);
    console.log(inputArray);
}