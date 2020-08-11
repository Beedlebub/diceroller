input.onButtonPressed(Button.A, function () {
    music.playTone(440, music.beat(BeatFraction.Quarter))
    music.playTone(494, music.beat(BeatFraction.Quarter))
    music.playTone(523, music.beat(BeatFraction.Half))
    die_1 = randint(1, 6)
    die_2 = randint(1, 6)
    total = die_1 + die_2
    serial.writeLine("" + die_2)
    serial.writeLine("" + die_1)
    serial.writeLine("" + total)
    if (total == 7) {
        serial.writeLine("Seven Thrown!")
    }
    if (total == 11) {
        serial.writeLine("Eleven Thrown!")
    }
    if (die_1 == die_2) {
        serial.writeLine("Doubles Thrown!")
    }
    serial.writeLine("")
    basic.showString("" + die_1 + "+" + ("" + die_2) + "=" + ("" + total))
})
let total = 0
let die_2 = 0
let die_1 = 0
music.setVolume(128)
music.playTone(262, music.beat(BeatFraction.Sixteenth))
basic.showIcon(IconNames.Yes)
basic.pause(200)
basic.clearScreen()
