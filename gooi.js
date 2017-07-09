var url = "https://www.googleapis.com/webfonts/v1/webfonts?key=AIzaSyAdnaEVwS5_9i6lubsh5c_VYYDhVtV3Obc"


d3.json(url, function (error, json) {
    if (error) throw error;

    d3.select('#gooi')
        .style("font-family", _.sample(json.items).family);


    var gooi = d3.select("#gooi").text();

    var gooiArray = _.values(gooi);

    console.log(_.sample(json.items).family);

    console.log(gooi);


    _.forEach(gooiArray, function(value, index) {

        console.log(value);


        d3.select("body")
            .data(gooiArray)
            .append("span")
            .style("font-family", _.sample(json.items).family)
            .style("font-size", "2em")
            .text(function() { return gooiArray[index]; });

    });



});

