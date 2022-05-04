// ES5前的老旧写法：
const Singleton = function (name) {
  this.name = name;
}

Singleton.prototype.getName = function () {
  console.log(this.name)
}

Singleton.getInstance = (function () {
  var instance = null;
  return function (name) {
    // 如没有创建实例，则创建实例
    if (!instance) instance = new Singleton(name);
    // 如果已经创建过实例，则用回原来的实例，不再创建新实例
    return instance;
  }
})()

var a = Singleton.getInstance('hello')
var b = Singleton.getInstance('world')

console.log( a===b ) // true
a.getName() // hello
b.getName() // hello


