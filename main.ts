input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    x = -1
    a1 += x
    a2 += x
    a3 += x
    a4 += x
    a5 += x
    a6 += x
    a7 += x
    a8 += x
    a9 += x
    a10 += x
    a11 += x
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    a1 = 0
    a2 = 0
    a3 = 1
    a4 = 1
    a5 = 1
    a6 = 1
    a7 = 2
    a8 = 3
    a9 = 3
    a10 = 3
    a11 = 4
    x = 0
})
input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    x = 1
    a1 += x
    a2 += x
    a3 += x
    a4 += x
    a5 += x
    a6 += x
    a7 += x
    a8 += x
    a9 += x
    a10 += x
    a11 += x
})
let x = 0
let a11 = 0
let a10 = 0
let a9 = 0
let a8 = 0
let a7 = 0
let a6 = 0
let a5 = 0
let a4 = 0
let a3 = 0
let a2 = 0
let a1 = 0
a1 = 0
a2 = 0
a3 = 1
a4 = 1
a5 = 1
a6 = 1
a7 = 2
a8 = 3
a9 = 3
a10 = 3
a11 = 4
x = 0
basic.forever(function () {
    led.plot(a1, 0)
    led.plot(a2, 1)
    led.plot(a3, 0)
    led.plot(a4, 1)
    led.plot(a5, 2)
    led.plot(a6, 3)
    led.plot(a7, 3)
    led.plot(a8, 3)
    led.plot(a9, 2)
    led.plot(a10, 1)
    led.plot(a11, 1)
    basic.pause(500)
})
