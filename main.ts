input.onGesture(Gesture.Shake, function () {
    music.playMelody("C5 B A G F E D C ", 500)
    led.setBrightness(64)
    basic.pause(100)
    led.setBrightness(128)
    basic.pause(100)
    led.setBrightness(64)
    basic.pause(100)
    led.setBrightness(255)
    basic.showNumber(randint(1, 6))
})