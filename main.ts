// index= 0 plot 0,0
// index=1 plot 1,1
// index=2 plot 2,2
// index= 3 plot 3,3 
// index= 4 plot 4,4
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index <= 4; index++) {
        led.plot(index, 4 - index)
    }
})
// 1*2*3*4              Index= 0 1 2 3 4
// 
// Product= 1
// Product (new)= product*2 (old)= 1*2
// Product (new)= product*3 (old)= 1*2*3*
input.onButtonPressed(Button.B, function () {
    for (let index = 0; index <= 3; index++) {
        Product = Product * (index + 1)
    }
    basic.showNumber(Product)
})
let Product = 0
Product = 1
basic.forever(function () {
	
})
