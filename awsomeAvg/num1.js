//var lodash = require('lodash');
//var _ = require('lodash');

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
  return text;
}

function average() {
  var sum = 0;
  var numProgrammers = 0;

  _.forEach(people, function(n) {   //could run (n,i)  people[i]
    if(n.occupation == 'programmer') {  //_.filter, pluck, mape and reduce
      sum += n.awesomeIndex;          //remove forEach and If
      numProgrammers += 1;
    }
  });
  return (sum/numProgrammers).toFixed(1);
}

$("#staff").click (function(){
  console.log("clicked staff button");
  $("#name").html(staffInfo());
});

$("#AvgAwesomeButton").click (function(){
  console.log("clicked Awesome button");
  $("#awesome-index").text("Average Awesomeness:  " + average());
});
