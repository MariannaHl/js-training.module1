// ----------To String---------- //
//Будь-яке string значення
let value = 'Bla Bla Bla'

//--1
let toNumber = Number(value)
console.log(`${value}, через конструктор Number():`, toNumber)
console.log(`тип даних ${value}, через конструктор Number():`, typeof toNumber)

//--2
toNumber = +value
console.log(`${value}, через унарний +:`, toNumber)
console.log(`тип даних ${value}, через унарний +:`, typeof toNumber)

//Будь-яке string число
value = '123'
//--1
toNumber = Number(value)
console.log(`${value}, через конструктор Number():`, toNumber)
console.log(`тип даних ${value}, через конструктор Number():`, typeof toNumber)

//--2
toNumber = +value
console.log(`${value}, через унарний +:`, toNumber)
console.log(`тип даних ${value}, через унарний +:`, typeof toNumber)

//Пустий рядок
value = ''
//--1
toNumber = Number(value)
console.log(`пустий рядок ${value}, через конструктор Number():`, toNumber)
console.log(`тип даних пустого рядку ${value}, через конструктор Number():`, typeof toNumber)

//--2
toNumber = +value
console.log(`пустий рядок ${value}, через унарний +:`, toNumber)
console.log(`тип даних пустого рядку ${value}, через унарний +:`, typeof toNumber)

//Пробіл
value = ' '
//--1
toNumber = Number(value)
console.log(`пробіл ${value}, через конструктор Number():`, toNumber)
console.log(`тип даних пробілу ${value}, через конструктор Number():`, typeof toNumber)

//--2
toNumber = +value
console.log(`пробіл ${value}, через унарний +:`, toNumber)
console.log(`тип даних пробілу ${value}, через унарний +:`, typeof toNumber)

// Boolean
// true
value = true
//--1
toNumber = Number(value)
console.log(`${value}, через конструктор Number():`, toNumber)
console.log(`тип даних ${value}, через конструктор Number():`, typeof toNumber)

//--2
toNumber = +value
console.log(`${value}, через унарний +:`, toNumber)
console.log(`тип даних ${value}, через унарний +:`, typeof toNumber)

// false
value = false
//--1
toNumber = Number(value)
console.log(`${value}, через конструктор Number():`, toNumber)
console.log(`тип даних ${value}, через конструктор Number():`, typeof toNumber)

//--2
toNumber = +value
console.log(`${value}, через унарний +:`, toNumber)
console.log(`тип даних ${value}, через унарний +:`, typeof toNumber)

// undefined
value = undefined
//--1
toNumber = Number(value)
console.log(`${value}, через конструктор Number():`, toNumber)
console.log(`тип даних ${value}, через конструктор Number():`, typeof toNumber)

//--2
toNumber = +value
console.log(`${value}, через унарний +:`, toNumber)
console.log(`тип даних ${value}, через унарний +:`, typeof toNumber)

// null
value = null
//--1
toNumber = Number(value)
console.log(`${value}, через конструктор Number():`, toNumber)
console.log(`тип даних ${value}, через конструктор Number():`, typeof toNumber)

//--2
toNumber = +value
console.log(`${value}, через унарний +:`, toNumber)
console.log(`тип даних ${value}, через унарний +:`, typeof toNumber)
