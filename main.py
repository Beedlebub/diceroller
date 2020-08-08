def on_button_pressed_a():
    global die_1, die_2, total
    die_1 = randint(1, 6)
    music.play_tone(440, music.beat(BeatFraction.QUARTER))
    serial.write_line("" + str(die_1))
    die_2 = randint(1, 6)
    music.play_tone(494, music.beat(BeatFraction.QUARTER))
    serial.write_line("" + str(die_2))
    total = die_1 + die_2
    music.play_tone(523, music.beat(BeatFraction.HALF))
    serial.write_line("" + str(total))
    if total == 7:
        serial.write_line("Seven Thrown!")
    if total == 11:
        serial.write_line("Eleven Thrown!")
    if die_1 == die_2:
        serial.write_line("Doubles Thrown!")
    serial.write_line("")
    basic.show_string("" + str(die_1) + "+" + ("" + str(die_2)) + "=" + ("" + str(total)))
input.on_button_pressed(Button.A, on_button_pressed_a)

total = 0
die_2 = 0
die_1 = 0
music.set_volume(64)
music.play_tone(262, music.beat(BeatFraction.SIXTEENTH))