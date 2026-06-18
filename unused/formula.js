// quadratic formula

a = 3
b = 5
c = -7

x1 = ((0-b) + Math.sqrt(b**2 - 4*a*c))/(2*a)
x2 = ((0-b) - Math.sqrt(b**2 - 4*a*c))/(2*a)

console.log(x1, x2)


// as a function
function quadratic(a, b, c){
    x1 = ((0-b) + Math.sqrt(b**2 - 4*a*c))/(2*a)
    x2 = ((0-b) - Math.sqrt(b**2 - 4*a*c))/(2*a)

    x = [x1, x2]

    return(x)
}

console.log(quadratic(3, 5 ,-7))