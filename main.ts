// Increases number one by 1 when A is pressed
input.onButtonPressed(Button.A, function () {
    number_one += 1
    basic.showNumber(number_one)
})
// Increases number two by 1 when tilted left
input.onGesture(Gesture.TiltLeft, function () {
    number_two += 1
    basic.showNumber(number_two)
})
input.onButtonPressed(Button.AB, function () {
    basic.clearScreen()
    basic.pause(500)
    // adds numbers and sets "sum" to the sum of the numbers
    sum = number_one + number_two
    basic.showString("" + (number_one))
    basic.pause(100)
    basic.showLeds(`
        . . # . .
        . . # . .
        # # # # #
        . . # . .
        . . # . .
        `)
    basic.pause(100)
    basic.showString("" + (number_two))
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        # # # # #
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.pause(100)
    // Displays sum of numbers
    basic.showString("" + (sum))
})
// Decreases number one by 1 when button B is pressed
input.onButtonPressed(Button.B, function () {
    number_one += -1
    basic.showNumber(number_one)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    basic.pause(500)
    // Subtracts number two from number one and sets "product" to the product of the subtraction
    product = number_one - number_two
    basic.showString("" + (number_one))
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        . . . . .
        # # # # #
        . . . . .
        . . . . .
        `)
    basic.pause(100)
    basic.showString("" + (number_two))
    basic.pause(100)
    basic.showLeds(`
        . . . . .
        # # # # #
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.pause(100)
    // Displays product of numbers
    basic.showString("" + (product))
})
// Decreases number two by 1 when tilted right
input.onGesture(Gesture.TiltRight, function () {
    number_two += -1
    basic.showNumber(number_two)
})
// Sets variables to 0 when tipped upside down
input.onGesture(Gesture.LogoDown, function () {
    number_one = 0
    product = 0
    number_two = 0
    sum = 0
    basic.clearScreen()
})
// Sets variables to 0 on start
let product = 0
let sum = 0
let number_two = 0
let number_one = 0
number_one = 0
number_two = 0
sum = 0
product = 0
