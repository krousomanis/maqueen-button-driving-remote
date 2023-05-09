// remote controler
radio.setGroup(89)
basic.showIcon(IconNames.Heart)
basic.forever(function () {
    if (input.buttonIsPressed(Button.A) && input.buttonIsPressed(Button.B)) {
        // move forward
        radio.sendNumber(0)
    } else if (input.buttonIsPressed(Button.A)) {
        // turn right
        radio.sendNumber(1)
    } else if (input.buttonIsPressed(Button.B)) {
        // turn left
        radio.sendNumber(2)
    } else {
        // stop
        radio.sendNumber(3)
    }
})
