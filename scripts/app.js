//Class using factory pattern
var createRect = function(width, height) {
    return {
        width: width,
        height: height,
        draw: function() {
            console.log('I am a rectangle')
            this.printProperties()
        },
        printProperties: function() {
            console.log('My width is ' + this.width)
            console.log('My height is ' + this.height)
        }
    }
}

var rect2 = createRect(6, 8)

rect2.draw()

var rect3 = createRect(5, 393)

rect3.draw()