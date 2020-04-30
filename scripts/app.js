//This Keyword
let rect = {
    width: 100,
    height: 50,
    draw: function() {
        console.log('I am a rectangle')
        this.printProperties()
        console.log(this)
    },
    printProperties: function() {
        console.log('My width is ' + this.weight)
        console.log('My height is ' + this.height)
    }
}

rect.draw()

function myFunc() {
    console.log(this)
}

new myFunc

var another = {
    weight: 10,
    height: 20,
    print: rect.printProperties
}

another.print()
