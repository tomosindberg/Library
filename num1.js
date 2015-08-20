// var lodash = require('lodash');  //comment out to run with HTML
// var _ = require('lodash');    //same as above

var people =[
  {
  name: 'Bob',
  occupation: 'programmer',
  awesomeIndex: 7,
  },

  {
  name: 'Alice',
  occupation: 'programmer',
  awesomeIndex: 8,
  },

  {
  name: 'Zaphod',
  occupation: 'President of the Galaxy',
  },

  {
  name: 'Alice',
  occupation: 'programmer',
  awesomeIndex: 7,
  },

  {
  name: 'Julie',
  occupation: 'x-programmer',
  awesomeIndex: 3,
  }
];

function staffInfo() {
  var text = [];
  //var i = 0;
  _.forEach(people, function(n) {
    text += "<tr><td>" + "Name:  " + n.name + "<td>" +
    "Occupation:  " + n.occupation + "<td>" +
    "Awesome Index:  " + n.awesomeIndex + "</tr>";
    //i++;
  });
  // console.log(text);
  return text;
}

function average() {
  var sum = 0;
  var aweArray = 0;

  aweArray = _.pluck(_.filter(people, {'occupation':'programmer'}),
    'awesomeIndex');
  sum = _.reduce(aweArray, function(total, i){
    return total + i;
  });
  return _.round((sum/_.size(aweArray)),1);
}

$("#staff").click (function(){
  console.log("clicked staff button");
  $("#name").html(staffInfo());
});

$("#AvgAwesomeButton").click (function(){
  console.log("clicked Awesome button");
  $("#awesome-index").text("Average Awesomeness:  " + average());
});
