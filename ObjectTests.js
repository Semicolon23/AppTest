function card(name, type, dmg, health, text, isReflex) {
  this.name = name;
  this.type = type;
  this.dmg = dmg;
  this.health = health;
  this.text = text;
  this.reflex = reflex;

}

function game(){
  //Game board setup
  //All areas created
  var board = new Array[14];

  //ARENA CARD IS AT LOCATION 7 IN THE BOARD ARRAY
  //Reward Decks
  board[0]= new Array[14];
  board[8]= new Array[14];
  //Leader Areas, Position 0 holds leader
  //Positions 1-3 hold the skills
  board[1]= new Array[3];
  board[9]= new Array[3];
  //Dungeon Areas
  board[2]= new Array[100];
  board[10]= new Array[100];
  //Support Areas
  board[3]= new Array[3];
  board[11]= new Array[3];
  //Council Areas
  board[4]= new Array[11];
  board[12]= new Array[11];
  //Deck Areas
  board[5]=new Array[100];
  board[13]=new Array[100];
  //Hand Areas
  board[6]=new Array[15];
  board[14]=new Array[15]



  this.fight = function(card1, card2){
    card1.health = card1.health - card2.dmg;
    card2.health = card2.health - card1.dmg;

    if(card1.health <= 0){
      card1.
    }
    if(card2.health <= 0){

    }
  }

  this.shuffle(){
    var m = array.length, t, i;
    while (m){
      // Pick a remaining element…
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }
  }



}
