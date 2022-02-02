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
let _1d = 0
led.plot(0, 4)
led.plot(2, 0)
_1d = 0
basic.forever(function () {
    basic.pause(5000)
})
