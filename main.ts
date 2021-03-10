input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    basic.showString("reset")
    敵方生命 = 5
    我方生命 = 5
    我方等級 = 1
    敵方等級 = 1
})
input.onButtonPressed(Button.A, function () {
    if (敵方生命 < 1) {
        我方等級 += 1
        我方生命 = 我方生命 * 我方等級
        敵方生命 = 敵方生命 * 敵方等級
        我方攻擊力 += 我方等級
        basic.showString("P1.LV." + 我方等級)
    } else {
        敵方生命 += 我方攻擊力 - 我方攻擊力 - 我方攻擊力
    }
})
input.onButtonPressed(Button.B, function () {
    if (我方生命 < 1) {
        敵方等級 += 1
        我方生命 = 我方生命 * 我方等級
        敵方生命 = 敵方生命 * 敵方等級
        敵方攻擊力 = 敵方等級
        basic.showString("P2.LV" + 敵方等級)
    } else {
        我方生命 += 敵方攻擊力 - 敵方攻擊力 - 敵方攻擊力
    }
})
let 我方攻擊力 = 0
let 敵方攻擊力 = 0
let 敵方等級 = 0
let 我方等級 = 0
let 我方生命 = 0
let 敵方生命 = 0
let 我方 = game.createSprite(1, 2)
let 敵方 = game.createSprite(3, 2)
敵方生命 = 5
我方生命 = 5
我方等級 = 1
敵方等級 = 1
敵方攻擊力 = 1
我方攻擊力 = 1
basic.forever(function () {
    if (input.soundLevel() <= 30) {
        basic.showString("Hush, keep your voice down.")
    }
})
