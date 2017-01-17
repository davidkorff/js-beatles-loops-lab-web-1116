function theBeatlesPlay(musicians, instruments){
  var array = []
  for(let i = 0; i<musicians.length; i++){
    array =  [...array, musicians[i] + " plays " + instruments[i]]
  }
  return array


}

function johnLennonFacts(facts){
  var array = []
  for(let i = 0; i<facts.length; i++){
    array = [...array, facts[i]+"!!!"]
  }
  return array

}

function iLoveTheBeatles(times){
  var newArray = [];
    do {
      newArray.push('I love the Beatles!');
      } while (++times < 15);
      return newArray;
   }
