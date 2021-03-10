def on_button_pressed_a():
    global 敵生命
    敵生命 += -1
    if 敵生命 < 1:
        basic.show_string("P1 win P2 lost")
    _12.delete()
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    global 我生命
    我生命 += -1
    if 我生命 < 1:
        basic.show_string("P2 win P1 lost")
    _13.delete()
input.on_button_pressed(Button.B, on_button_pressed_b)

我生命 = 0
敵生命 = 0
_13: game.LedSprite = None
_12: game.LedSprite = None
_13 = game.create_sprite(1, 2)
_12 = game.create_sprite(3, 2)
敵生命 = 10
我生命 = 10

def on_forever():
    pass
basic.forever(on_forever)
