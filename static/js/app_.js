// set url to a variable
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

function init() {
    //read in json data with d3 library
    d3.json(url).then((data)=>{
        console.log(data);


    })
}


function setNames(names) {


}

function optionChanged(value){
    //Select the dropdown
    let dropdown = d3.select("#selDataset");
}
