input.onButtonPressed(Button.A, function () {
    basic.showNumber(input.temperature())
    if (input.temperature() < 4) {
        music.ringTone(262)
    } else if (input.temperature() > 28) {
        music.ringTone(494)
    }
    basic.pause(2000)
    music.stopAllSounds()
})
