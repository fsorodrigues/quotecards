var margin = { top: 100,
               right: 100,
               bottom: 100,
               left: 100,
             };

var nestedData = [];

var canvas = d3.select("#grid");

// var columns = 6;
//
// var width = document.getElementById("grid").clientWidth;
// var height = document.getElementById("grid").clientHeight;
//
// console.log(width);
// console.log(height);
// console.log(columns);
//
// var column = width / columns;
// var cardWidth = column * 0.95;
// var offset = column * 0.05;

//import the data from the .csv file
d3.csv('./quotes.csv', function(dataIn){

    var sizer = canvas.append("div")
                        .attr("class", "grid-sizer");

    var cards = canvas.selectAll("g")
                        .data(dataIn)
                        .enter()
                        .append("div")
                          .attr("class", "card");

    var front = cards.append("div")
                      .attr("class", "grid-item front")
                      .attr("id", function(d,i){ return d.name + " " + d.surname })
                      .style("background-image", function(d,i) { return "url('./images/" + d.name + ".jpg')"});

    var back = cards.append("div")
                        .attr("class", "grid-item back")

    var quote = back.append("p")
                      .html(function(d,i){ return "\"" + d.quote + "\"" })
                      .attr("class", "quote");

    var name = back.append("p")
                      .html(function(d,i){ return d.name + " " + d.surname })
                      .attr("class", "name");

});

$('#grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: '.grid-sizer'
});

$(function(){ $(".card").flip(); })
