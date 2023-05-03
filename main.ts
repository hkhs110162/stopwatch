let Start = 0
let elapsed = 0
input.onButtonPressed(Button.A, function () {
    Start = input.runningTime()
})
input.onButtonPressed(Button.B, function () {
    elapsed = input.runningTime() - Start
    basic.showNumber(Math.idiv(elapsed, 1000))
})
