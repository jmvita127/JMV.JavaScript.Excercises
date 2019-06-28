var ironMan = {
  nombre : 'IronMan',
  equipo : 'Avengers',
  poderes : ["Volar", "Lanzar misiles", "Disparar láser"],
  energia : 100,
  getPoder : function(poder){
    if (poder === 0) {
      this.energia = this.energia - 20;
    } else if (poder === 1) {
      this.energia = this.energia - 45;
    } else if (poder === 2) {
      this.energia = this.energia - 75;
    }
    return this.poderes[poder];
  }

};

var aleatorio = Math.floor(Math.random()*3);
console.log(ironMan.getPoder(aleatorio));


var hulk = {
  nombre : 'Hulk',
  equipo : 'Avengers',
  poderes : ["Aplastar", "Gritar", "Golpear"],
  energia : 100,
  getPoder : function(poder){
    if (poder === 0) {
      this.energia = this.energia - 45;
    } else if (poder === 1) {
      this.energia = this.energia - 15;
    } else if (poder === 2) {
      this.energia = this.energia - 25;
    }
    return this.poderes[poder];
  }
};

var aleatorio = Math.floor(Math.random()*3);
console.log(hulk.getPoder(aleatorio));
