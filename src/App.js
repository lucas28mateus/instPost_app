import { Notifyer } from './Notifyer.js';
import {Timer} from './Timer.js';
import {Emitter} from './Emitter.js'

const messages = [
    "crie um store",
    "poste uma foto",
    "faça um video",
    "faça uma live",
    "crie um Novo post"
]

const notify = () => {

    const randomIndex = Math.floor(Math.random() * messages.length)

  const notification = Notifyer.notify({
    title: "hora defazer um post",
    body: messages[randomIndex]
 })

 notification()
}

const App = {
    async start() {
        try {
          await Notifyer.init()

            Emitter.on('countdown-start', notify)

            Emitter.on('countdown-end', Timer.init)

            Timer.init()
        } catch (err) {
         console.log(err.message)
        }
    }
}

export { App }