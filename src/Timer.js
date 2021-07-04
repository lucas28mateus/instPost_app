import View from './View.js'
import {Emitter} from './Emitter.js'

const Timer = {
    time: 60 * 60,
    currentTime: 0,
    intervall: null,

    timeToMinutes: time => Math.floor(time / 60),
    timeToSeconds: time => time % 60,

    formatTime: time => String(time).padStart(2, '0'),


    init(time) {
        Emitter.emit('countdown-start')

        Timer.time = time || Timer.time
        Timer.currentTime = Timer.time

       Timer.intervall = setInterval(Timer.countdown, 1000)

      
    },

    countdown() {
        Timer.currentTime = Timer.currentTime -1
        const minutes = Timer.formatTime(Timer.timeToMinutes(Timer.currentTime))
        const seconds = Timer.formatTime(Timer.timeToSeconds(Timer.currentTime))

        View.render({
            minutes,
            seconds
        })

        if(Timer.currentTime === 0) {
          clearInterval(Timer.intervall)
          Emitter.emit('countdown-end')
          return;
       }
    }
}

export {Timer}