export default class Zombie extends Character {
  constructor(name) {
    super(name, 'Zombie');
    this.attack = 40;
    this.defence = 10;
  }
}

const kus_kus = new Zombie('kus_lus');
console.log(kus_kus)
