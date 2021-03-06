export default class Character {
  constructor(name, type) {
    if (name.length < 2 || name.length > 10) {
      throw new Error('Имя должно быть от 2 до 10 символов');
    }
    if (typeof name !== 'string') {
      throw new Error('Имя должно быть строкой.');
    }
    const typePlayers = ['Bowman', 'Daemon', 'Magician', 'Swordsman', 'Undead', 'Zombie'];
    if (!typePlayers.includes(type)) {
      throw new Error('Такой персонаж не существует.');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }
}
