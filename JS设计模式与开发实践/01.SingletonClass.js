// 经过ES6 class改写：
class Singleton {
  constructor(name) {
    this.name = name;
  }

  static getInstance (name) {
    if (!Singleton.instance) Singleton.instance = new Singleton(name);
    return Singleton.instance;
  }
}

const ins1 = Singleton.getInstance('hello');
const ins2 = Singleton.getInstance('world')

console.log(ins1 === ins2) // true
console.log(ins1, ins2) // Singleton { name: 'hello' } Singleton { name: 'hello' }