# remote controler
radio.set_group(89)
basic.show_icon(IconNames.HEART)

def on_forever():
    if input.button_is_pressed(Button.A) and input.button_is_pressed(Button.B):   # move forward
        radio.send_number(0)
    elif input.button_is_pressed(Button.A):    # turn right
        radio.send_number(1)
    elif input.button_is_pressed(Button.B):    # turn left
        radio.send_number(2)
    else:                                      # stop
        radio.send_number(3)
basic.forever(on_forever)
