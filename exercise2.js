function changeVocals (str) {
    //code di sini
    var tampung = '';
    for(var i = 0; i < str.length; i++){
    switch(str[i]){
        case 'A' : tampung += 'B'; break;
        case 'I' : tampung += 'J'; break;
        case 'U' : tampung += 'V'; break;
        case 'E' : tampung += 'F'; break;
        case 'O' : tampung += 'P'; break;
        case 'a' : tampung += 'b'; break;
        case 'i' : tampung += 'j'; break;
        case 'u' : tampung += 'v'; break;
        case 'e' : tampung += 'f'; break;
        case 'o' : tampung += 'p'; break;
        default : tampung += str[i];
    }
  }
  return tampung; 
}
  
function reverseWord (str) {
    //code di sini
    var output = '';
    for(var i = str.length-1; i >= 0; i--){
      output += str [i]
    }
    return output;
}
  
function setLowerUpperCase (str) {
    //code di sini
    var output = '';
    for(var i = 0; i < str.length; i++){
      if(str[i] == str[i].toLowerCase()){
          output += str[i].toUpperCase();
      }
      else{
        output += str[i];
      }
    }
    return output;
}
  
function removeSpaces (str) {
    //code di sini
    var output = '';
    for(var i = 0; i < str.length; i++){
      if(str[i] == ' '){
        continue;
      }
      else if(str[i] != ' '){
        output += str[i];
      }
    }
    return output;
}
  
function passwordGenerator (name) {
    //code di sini
    if(name.length < 5){
        return 'Minimal karakter yang diinputkan adalah 5 karakter.'
    }
        return removeSpaces(setLowerUpperCase(reverseWord(changeVocals(name))))
}
  
console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'