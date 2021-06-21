// ----------To Boolean---------- //
//Будь-яке string значення
let value = 'Bla Bla Bla'

//--1
let toBoolean = Boolean(value)
console.log(`${value}, через конструктор Boolean():`, toBoolean)
console.log(`тип даних ${value}, через конструктор Boolean():`, typeof toBoolean)

//--2
toBoolean = !!value
console.log(`${value}, через !!:`, toBoolean)
console.log(`тип даних ${value}, через унарний +:`, typeof toBoolean)

//Будь-яке string число
value = '123'

//--1
toBoolean = Boolean(value)
console.log(`${value}, через конструктор Boolean():`, toBoolean)
console.log(`тип даних ${value}, через конструктор Boolean():`, typeof toBoolean)

//--2
toBoolean = !!value
console.log(`${value}, через !!:`, toBoolean)
console.log(`тип даних ${value}, через !!:`, typeof toBoolean)

//Пустий рядок
value = ''

//--1
toBoolean = Boolean(value)
console.log(`пустий рядок ${value}, через конструктор Boolean():`, toBoolean)
console.log(`тип даних пустого рядку ${value}, через конструктор Boolean():`, typeof toBoolean)

//--2
toBoolean = !!value
console.log(`пустий рядок ${value}, через !!:`, toBoolean)
console.log(`тип даних пустого рядку ${value}, через !!`, typeof toBoolean)

//Пробіл
value = ' '

//--1
toBoolean = Boolean(value)
console.log(`пробіл ${value}, через конструктор Boolean():`, toBoolean)
console.log(`тип даних пробілу ${value}, через конструктор Boolean():`, typeof toBoolean)

//--2
toBoolean = !!value
console.log(`пробіл ${value}, через !!:`, toBoolean)
console.log(`тип даних пробілу ${value}, через !!`, typeof toBoolean)

//Число
value = 0

//--1
toBoolean = Boolean(value)
console.log(`${value}, через конструктор Boolean():`, toBoolean)
console.log(`тип даних ${value}, через конструктор Boolean():`, typeof toBoolean)

//--2
toBoolean = !!value
console.log(`${value}, через !!:`, toBoolean)
console.log(`тип даних ${value}, через !!`, typeof toBoolean)

value = 1

//--1
toBoolean = Boolean(value)
console.log(`${value}, через конструктор Boolean():`, toBoolean)
console.log(`тип даних ${value}, через конструктор Boolean():`, typeof toBoolean)

//--2
toBoolean = !!value
console.log(`${value}, через !!:`, toBoolean)
console.log(`тип даних ${value}, через !!`, typeof toBoolean)

//NaN
value = NaN

//--1
toBoolean = Boolean(value)
console.log(`${value}, через конструктор Boolean():`, toBoolean)
console.log(`тип даних ${value}, через конструктор Boolean():`, typeof toBoolean)

//--2
toBoolean = !!value
console.log(`${value}, через !!:`, toBoolean)
console.log(`тип даних ${value}, через !!`, typeof toBoolean)

//Infinity
value = Infinity

//--1
toBoolean = Boolean(value)
console.log(`${value}, через конструктор Boolean():`, toBoolean)
console.log(`тип даних ${value}, через конструктор Boolean():`, typeof toBoolean)

//--2
toBoolean = !!value
console.log(`${value}, через !!:`, toBoolean)
console.log(`тип даних ${value}, через !!`, typeof toBoolean)

// undefined
value = undefined
//--1
toBoolean = Boolean(value)
console.log(`${value}, через конструктор Boolean():`, toBoolean)
console.log(`тип даних ${value}, через конструктор Boolean():`, typeof toBoolean)

//--2
toBoolean = !!value
console.log(`${value}, через !!:`, toBoolean)
console.log(`тип даних ${value}, через !!`, typeof toBoolean)

// null
value = null
//--1
toBoolean = Boolean(value)
console.log(`${value}, через конструктор Boolean():`, toBoolean)
console.log(`тип даних ${value}, через конструктор Boolean():`, typeof toBoolean)

//--2
toBoolean = !!value
console.log(`${value}, через !!:`, toBoolean)
console.log(`тип даних ${value}, через !!`, typeof toBoolean)
