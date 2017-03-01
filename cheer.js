var array = ['Give me a J!', 
    'Give me an O!', 
    'Give me an H!', 
    'Give me an N!', 
    'Give me a D!', 
    'Give me an O!', 
    'Give me an E!', 
    'What does that spell?', 
    'JOHN DOE!']

for (let elem of array) {
    console.log(elem)
}

let letters = ['Give me a J!', 
    'Give me an O!', 
    'Give me an H!', 
    'Give me an N!', 
    'Give me a D!', 
    'Give me an O!',
    'Give me an E!', 
    'What does that spell?', 
    'JOHN DOE!']

let [J, O, H, N, D, O2, E,...theRest] = letters
console.log(letters)