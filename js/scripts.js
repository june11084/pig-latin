var titleCase = function(string) {
  var str = string.toLowerCase().split(' ');
  console.log(str);
  for (var i = 0; i < str.length; i++) {
    var vowels = ["a", "e", "i", "o", "u"];
    var consonants = ["b", "c", "d", "e", "f", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "x", "y", "z"];
    if(vowels.includes(str[i].charAt(0))===true){
      //Checks for vowels and adds way to end
      console.log("string test: " + str[i]);
      str[i] = str[i] + "way";
    } else if(str[i].charAt(0) === "q" && str[i].charAt(1) === "u") {
        str[i] = str[i].slice(2) + str[i].slice(0, 2) + "ay";
    } else if(consonants.includes(str[i].charAt(0))===true){
      //Checks for consonants and moves consecutive consonants to the end and adds ay
        var numCons = 0;
        for (index = 0; index < str[i].length; index++) {
          if (consonants.includes(str[i].charAt(index))===true) {
            numCons++;
            console.log("numCons: " + numCons)
          } else if (consonants.includes(str[i].charAt(index))===false) {
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
