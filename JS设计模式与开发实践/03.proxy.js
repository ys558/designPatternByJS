const Flower = () => '玫瑰花'

const xiaoming = {
  sendFlower: target => {
    const flower = Flower()
    target.receiveFlower(flower)
  }
}

const B = {
  receiveFlower: flower => {
    A.goodMood(() => A.receiveFlower(flower))
  }
}

const A = {
  receiveFlower: flower => console.log('收到', flower),
  // 2秒后心情才变好：
  goodMood: fn => setTimeout(() => fn(), 2000)
}

// 不使用代理：
xiaoming.sendFlower(A) // 收到 玫瑰花

// 使用代理:
// 通过代理B，当心情变好时再收🌹：
xiaoming.sendFlower(B)