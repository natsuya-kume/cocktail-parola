export default class URLAnimation {
  constructor() {
    this.distance = '_'
    this.distanceToTheLoveHotel = this.distance.repeat(23)
    this.drink = '🍷'
    this.hotel = '🏩'
    this.man = '👨'
    this.woman = '👩'

    // eslint-disable-next-line no-undef
    if (typeof window !== 'undefined') {
      // eslint-disable-next-line no-undef
      const session = window.sessionStorage
      const isUrlAnimationExecuted = session.getItem('isUrlAnimationExecuted')
      if (isUrlAnimationExecuted) {
        return
      }
    }
    this.animation().then(() => {
      this.clearHash()
      // eslint-disable-next-line no-undef
      sessionStorage.setItem('isUrlAnimationExecuted', 'true')
    })
  }

  dinner() {
    return new Promise((resolve) => {
      // eslint-disable-next-line no-undef
      location.hash = `${this.drink}${this.distanceToTheLoveHotel}${this.man}${this.woman}`
      resolve()
    })
  }

  walkingToTheLoveHotel() {
    return new Promise((resolve) => {
      const walkingDistanceCount = this.distanceToTheLoveHotel.length - 2
      let count = 1
      const animation = setInterval(() => {
        this.distanceToTheLoveHotel = this.distanceToTheLoveHotel.slice(0, -1)
        // eslint-disable-next-line no-undef
        location.hash = `${this.drink}${this.distanceToTheLoveHotel}${this.man}${this.woman}`
        count++
        if (count > walkingDistanceCount) {
          clearInterval(animation)
          resolve()
        }
      }, 75)
    })
  }

  goInside() {
    return new Promise((resolve) => {
      const animation = setInterval(() => {
        if (this.distanceToTheLoveHotel.length === 0) {
          // eslint-disable-next-line no-undef
          location.hash = `${this.drink}`
          clearInterval(animation)
          resolve()
        } else {
          this.distanceToTheLoveHotel = this.distanceToTheLoveHotel.slice(0, -1)
          // eslint-disable-next-line no-undef
          location.hash = `${this.drink}${this.distanceToTheLoveHotel}${this.man}${this.woman}`
        }
      }, 200)
    })
  }

  haveSex() {
    return new Promise((resolve) => {
      const love = [
        `${this.man}💕____💕${this.woman}`,
        `${this.man}_💕__💕_${this.woman}`,
        `${this.man}___💕___${this.woman}`,
      ]
      let count = love.length
      const animation = setInterval(() => {
        // eslint-disable-next-line no-undef
        location.hash = `${this.drink}${love[count % love.length]}`
        count++
        if (count === love.length * 10) {
          // eslint-disable-next-line no-undef
          location.hash = `${this.drink}${this.man}_✨💖✨_${this.woman}`
          clearInterval(animation)
          resolve()
        }
      }, 200)
    })
  }

  sleeping() {
    return new Promise((resolve) => {
      const sleep = ['🌙🛏💑', '🌙🛏💑💤', '🌙🛏💑💤💤', '🌙🛏💑💤💤💤']
      let count = sleep.length
      const animation = setInterval(() => {
        // eslint-disable-next-line no-undef
        location.hash = `${this.hotel}${sleep[count % sleep.length]}`
        count++
        if (count === sleep.length * 4) {
          // eslint-disable-next-line no-undef
          location.hash = `${this.hotel}🌙🛏💑💤💤💤`
          clearInterval(animation)
          resolve()
        }
      }, 500)
    })
  }

  goodMorning() {
    return new Promise((resolve) => {
      const sun = ['☁', '🌥', '⛅', '🌤', '☀']
      let count = 0
      const animation = setInterval(() => {
        // eslint-disable-next-line no-undef
        location.hash = `${this.hotel}${sun[count]}`
        count++
        if (count === sun.length) {
          clearInterval(animation)
          resolve()
        }
      }, 500)
    })
  }

  goOutside() {
    return new Promise((resolve) => {
      const couple = [`${this.woman}`, `💘${this.woman}`, `${this.man}💘${this.woman}`]
      let count = 0
      const animation = setInterval(() => {
        // eslint-disable-next-line no-undef
        location.hash = `${this.hotel}${couple[count]}`
        count++
        if (count === couple.length) {
          clearInterval(animation)
          resolve()
        }
      }, 250)
    })
  }

  seeYouOff() {
    return new Promise((resolve) => {
      const walkingDistanceCount = 21
      let count = 1
      const animation = setInterval(() => {
        this.distanceToTheLoveHotel = this.distance.repeat(count)
        // eslint-disable-next-line no-undef
        location.hash = `${this.hotel}${this.distanceToTheLoveHotel}${this.man}💘${this.woman}`
        count++
        if (count > walkingDistanceCount) {
          clearInterval(animation)
          resolve()
        }
      }, 75)
    })
  }

  goodbye() {
    return new Promise((resolve) => {
      // eslint-disable-next-line no-undef
      location.hash = `${this.hotel}${this.distanceToTheLoveHotel}${this.man}👋${this.woman}`
      resolve()
    })
  }

  goHomeOnATrain() {
    return new Promise((resolve) => {
      const tracks = '__~'
      let count = 1
      const animation = setInterval(() => {
        // eslint-disable-next-line no-undef
        location.hash = `${this.hotel}${this.distanceToTheLoveHotel}${this.man}${tracks.repeat(
          count,
        )}${this.woman}🚃`
        count++
        if (count > 20) {
          clearInterval(animation)
          resolve()
        }
      }, 200)
    })
  }

  sleep(msec) {
    return new Promise((r) => setTimeout(r, msec))
  }

  clearHash() {
    // eslint-disable-next-line no-undef
    history.replaceState(null, null, ' ')
  }

  async animation() {
    await this.dinner()
    await this.sleep(400)
    await this.walkingToTheLoveHotel()
    await this.sleep(300)
    await this.goInside()
    await this.sleep(700)
    await this.haveSex()
    await this.sleep(1000)
    await this.sleeping()
    await this.sleep(1000)
    await this.goodMorning()
    await this.sleep(700)
    await this.goOutside()
    await this.sleep(400)
    await this.seeYouOff()
    await this.sleep(600)
    await this.goodbye()
    await this.sleep(600)
    await this.goHomeOnATrain()
    await this.sleep(1500)
  }
}
