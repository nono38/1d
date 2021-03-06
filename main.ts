input.onLogoEvent(TouchButtonEvent.Touched, function () {
    game.gameOver()
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_A, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    _1d = _1d - 1
    if (-1 == _1d) {
        led.unplot(0, 4)
        _1d = 4
    }
    led.plot(_1d, 4)
    led.unplot(_1d + 1, 4)
})
control.onEvent(EventBusSource.MICROBIT_ID_BUTTON_B, EventBusValue.MICROBIT_BUTTON_EVT_DOWN, function () {
    _1d = _1d + 1
    if (5 == _1d) {
        led.unplot(4, 4)
        _1d = 0
    }
    led.plot(_1d, 4)
    led.unplot(_1d - 1, 4)
})
control.onEvent(EventBusSource.MICROBIT_ID_IO_P15, EventBusValue.MICROBIT_PIN_EVT_FALL, function () {
    if (vs == _1d) {
        pins.digitalWritePin(DigitalPin.P12, 1)
        basic.pause(500)
        pins.digitalWritePin(DigitalPin.P12, 0)
        led.unplot(vs, 0)
        game.setScore(game.score() + 1)
        basic.pause(2000)
    }
})
let _1d = 0
let vs = 0
vs = randint(0, 4)
pins.setPull(DigitalPin.P15, PinPullMode.PullUp)
led.plot(2, 4)
led.plot(vs, 0)
_1d = 2
pins.setEvents(DigitalPin.P15, PinEventType.Edge)
basic.forever(function () {
    if (vs < 5) {
        basic.pause(2000)
        led.unplot(vs, 0)
        vs = randint(0, 4)
        led.plot(vs, 0)
    } else {
        vs = 0
        led.plot(vs, 0)
        led.unplot(4, 0)
    }
})
