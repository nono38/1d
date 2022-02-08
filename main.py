def on_logo_touched():
    if vs == _1d:
        led.unplot(vs, 0)
        basic.pause(10000)
    else:
        pass
input.on_logo_event(TouchButtonEvent.TOUCHED, on_logo_touched)

def on_microbit_id_button_a_evt_down():
    global _1d
    _1d = _1d - 1
    if -1 == _1d:
        led.unplot(0, 4)
        _1d = 4
    led.plot(_1d, 4)
    led.unplot(_1d + 1, 4)
control.on_event(EventBusSource.MICROBIT_ID_BUTTON_A,
    EventBusValue.MICROBIT_BUTTON_EVT_DOWN,
    on_microbit_id_button_a_evt_down)

def on_microbit_id_button_b_evt_down():
    global _1d
    _1d = _1d + 1
    if 5 == _1d:
        led.unplot(4, 4)
        _1d = 0
    led.plot(_1d, 4)
    led.unplot(_1d - 1, 4)
control.on_event(EventBusSource.MICROBIT_ID_BUTTON_B,
    EventBusValue.MICROBIT_BUTTON_EVT_DOWN,
    on_microbit_id_button_b_evt_down)

vs = 0
_1d = 0
led.plot(2, 4)
led.plot(2, 0)
_1d = 2
vs = 2

def on_forever():
    global vs
    if vs < 5:
        basic.pause(1000)
        vs = vs + 1
        led.plot(vs, 0)
        led.unplot(vs - 1, 0)
    else:
        vs = 0
        led.plot(vs, 0)
        led.unplot(4, 0)
basic.forever(on_forever)
