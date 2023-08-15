// set url to a variable
const url = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

function init() {
    //Select the dropdown
    let dropdown = d3.select("#selDataset")
    //read in json data with d3 library
    d3.json(url).then((data)=> {
        console.log(data);

        let names = data.names;
        names.forEach((name)=> {
        dropdown.append('option').text(name).property('value',name);
    })
    let name = names[0]

    bar(name);
    bubble(name);
    demographic(name);
})


}


function bar(x) {
    d3.json(url).then((data))=>{
        console.log(data);
        let results = data.samples;
        let value - results.filter(result => result.id == x);
        let valueData = value[0];
    }
}
