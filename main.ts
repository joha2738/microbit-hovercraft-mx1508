radio.onReceivedValue(function (name, value) {
    while (name == "f") {
        pins.analogWritePin(AnalogPin.P1, value)
    }
    if (value > 100) {
        basic.showLeds(`
            . . # . .
            . # # # .
            # # # # #
            . . # . .
            . . # . .
            `)
    } else {
        basic.showLeds(`
            . . # . .
            . . # . .
            # # # # #
            . . # . .
            . . # . .
            `)
    }
})
radio.setGroup(1)
pins.digitalWritePin(DigitalPin.P0, 0)
pins.digitalWritePin(DigitalPin.P1, 0)
pins.digitalWritePin(DigitalPin.P2, 0)
let ARM = false
basic.forever(function () {
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P0, 0)
    while (input.buttonIsPressed(Button.A) == true) {
        radio.sendValue("f", 1023)
    }
    while (input.buttonIsPressed(Button.A) == false) {
        radio.sendValue("f", 100)
    }
})
