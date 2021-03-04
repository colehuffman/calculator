input.onButtonPressed(Button.A, function () {
    number_one += 1
    basic.showNumber(number_one)
})
input.onButtonPressed(Button.AB, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
})
input.onButtonPressed(Button.B, function () {
    number_one += -1
    basic.showNumber(number_one)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.showNumber(number_one - number_two)
})
let number_two = 0
let number_one = 0
number_one = 0
number_two = 0
basic.forever(function () {
	
})
