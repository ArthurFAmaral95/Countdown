let countDownDate = new Date('Jul 31, 2022 23:59:59').getTime()

let updateTime = setInterval(function () {
  let now = new Date().getTime()

  let timeDistance = countDownDate - now

  let days = Math.floor(timeDistance / (1000 * 60 * 60 * 24))
  if (days < 10) {
    days = '0' + hours
  } else {
    days = days
  }
  let hours = Math.floor(
    (timeDistance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  )
  if (hours < 10) {
    hours = '0' + hours
  } else {
    hours = hours
  }
  let minutes = Math.floor((timeDistance % (1000 * 60 * 60)) / (1000 * 60))
  if (minutes < 10) {
    minutes = '0' + minutes
  } else {
    minutes = minutes
  }
  let seconds = Math.floor((timeDistance % (1000 * 60)) / 1000)
  if (seconds < 10) {
    seconds = '0' + seconds
  } else {
    seconds = seconds
  }
  seconds

  document.getElementById('days').innerHTML = days + ' :'
  document.getElementById('hours').innerHTML = hours + ' :'
  document.getElementById('minutes').innerHTML = minutes + ' :'
  document.getElementById('seconds').innerHTML = seconds
}, 1000)
