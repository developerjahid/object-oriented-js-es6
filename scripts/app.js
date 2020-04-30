//apply, call, bind
function test(c, d) {
    console.log(this)
    console.log(this.a + this.b + c + d)
}

//Call, Apply
test.call({a: 4, b: 5}, 2, 1)
test.apply({a: 4, b: 5}, [2, 1])

//bind
var testBind = test.bind({a: 4, b: 5}, 2, 1)
testBind()

//bind
var testBind2 = test.bind({a: 4, b: 5})
testBind2(5, 8)