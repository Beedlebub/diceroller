input.onButtonPressed(Button.A, function () {
    die_1 = randint(1, 6)
    music.playTone(440, music.beat(BeatFraction.Quarter))
    serial.writeLine("" + die_1)
    die_2 = randint(1, 6)
    music.playTone(494, music.beat(BeatFraction.Quarter))
    serial.writeLine("" + die_2)
    total = die_1 + die_2
    music.playTone(523, music.beat(BeatFraction.Half))
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
music.setVolume(64)
music.playTone(262, music.beat(BeatFraction.Sixteenth))
basic.showIcon(IconNames.Yes)
basic.pause(200)
basic.clearScreen()
