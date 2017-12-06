var titleCase = function(string) {
  var str = string.split(' ');
  var vowels = new RegExp(/[aeiou]/i);
  var consonants = new RegExp(/[^aeiou]/i);
  console.log(str);
  for (var i = 0; i < str.length; i++) {
    if(str[i].charAt(0).match(vowels)){
      //Checks for vowels and adds way to end
      console.log("string test: " + str[i]);
      str[i] = str[i] + "way";
    } else if(str[i].charAt(0) === "q" && str[i].charAt(1) === "u") {
        str[i] = str[i].slice(2) + str[i].slice(0, 2) + "ay";
    } else if(str[i].charAt(0).match(consonants)){
      //Checks for consonants and moves consecutive consonants to the end and adds ay
      var numCons = 0;
      for (index = 0; index < str[i].length; index++) {
        if (str[i].charAt(index).match(consonants)) {
          numCons++;
          console.log("numCons: " + numCons);
        } else if (str[i].charAt(index).match(vowels)) {
          str[i] = str[i].slice(numCons) + str[i].slice(0, numCons) + "ay";
          console.log("elsed: " + str[i] + " numCons: " + numCons);
          break;
        }
      }
    } else {
      console.log("Reached Else");
    }
  }
  return str.join(' ');
}

$(document).ready(function() {
  $("#formOne").submit(function(event) {
    event.preventDefault();
    var string = $("#stringInput").val();
    //var stringArray = titleCase(string);

    var stringArray = titleCase(string);
    $("#result").text(stringArray);

  });
});
