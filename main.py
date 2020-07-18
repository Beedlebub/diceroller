def on_gesture_shake():
    music.play_melody("C5 B A G F E D C ", 500)
    led.set_brightness(64)
    basic.pause(100)
    led.set_brightness(128)
    basic.pause(100)
    led.set_brightness(64)
    basic.pause(100)
    led.set_brightness(255)
    basic.show_number(randint(1, 6))
input.on_gesture(Gesture.SHAKE, on_gesture_shake)

basic.clear_screen()
basic.show_number(randint(1, 6))