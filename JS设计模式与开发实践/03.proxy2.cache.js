const multiple = (...params) => {
  let a = 1;
  for (let i =0; i < params.length; i++) {
    a = a * params[i];
  }
  return a
}

const plus = (...params) => {
  let b = 0;
  for (let i = 0; i < params.length; i++) {
    b = b + params[i];
  }
  return b
}

const proxyFactory = fn => {
  let cache = {};
  return (...params) => {
    var key = params.join(',')
    // 高阶函数缓存代理：第一次打印时，
    // console.log(cache) // { '1,2,3,4': 24 }
    if (key in cache) {
      return cache[key]
    }
    return cache[key] = fn(...params)
  }
}

const proxyMultiple = proxyFactory(multiple)
const proxyPlus = proxyFactory(plus)

console.log(proxyMultiple(1,2,3,4)) // 24 // 第一次调用时，上面的 cache 为 {}
console.log(proxyMultiple(1,2,3,4)) // 24 // 之后每次调用，上面的 cache 缓存为 { '1,2,3,4': 24 }，避免每次都重新调用multiple重新执行一次
console.log(proxyPlus(1,2,3,4)) // 10
console.log(proxyPlus(1,2,3,4)) // 10