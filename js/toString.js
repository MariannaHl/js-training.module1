// ----------To String---------- //

let value = 0

//--1
let toString = String(value)
console.log(`${value}, через конструктор String():`, toString)
console.log(`тип даних ${value}, через конструктор String():`, typeof toString)

//--2
toString = value + ''
console.log(`${value}, через конкатенацію:`, toString)
console.log(`тип даних ${value}, через конкатенацію:`, typeof toString)

value = 1

//--1
toString = String(value)
console.log(`${value}, через конструктор String():`, toString)
console.log(`тип даних ${value}, через конструктор String():`, typeof toString)

//--2
toString = value + ''
console.log(`${value}, через конкатенацію:`, toString)
console.log(`тип даних ${value}, через конкатенацію:`, typeof toString)

// Infinity
value = Infinity

//--1
toString = String(value)
console.log(`${value}, через конструктор String():`, toString)
console.log(`тип даних ${value}, через конструктор String():`, typeof toString)

//--2
toString = value + ''
console.log(`${value}, через конкатенацію:`, toString)
console.log(`тип даних ${value}, через конкатенацію:`, typeof toString)

// NaN
value = NaN

//--1
toString = String(value)
console.log(`${value}, через конструктор String():`, toString)
console.log(`тип даних ${value}, через конструктор String():`, typeof toString)

//--2
toString = value + ''
console.log(`${value}, через конкатенацію:`, toString)
console.log(`тип даних ${value}, через конкатенацію:`, typeof toString)

// Boolean
// true
value = true

//--1
toString = String(value)
console.log(`${value}, через конструктор String():`, toString)
console.log(`тип даних ${value}, через конструктор String():`, typeof toString)

//--2
toString = value + ''
console.log(`${value}, через конкатенацію:`, toString)
console.log(`тип даних ${value}, через конкатенацію:`, typeof toString)

// false
value = false

//--1
toString = String(value)
console.log(`${value}, через конструктор String():`, toString)
console.log(`тип даних ${value}, через конструктор String():`, typeof toString)

//--2
toString = value + ''
console.log(`${value}, через конкатенацію:`, toString)
console.log(`тип даних ${value}, через конкатенацію:`, typeof toString)

// undefined
value = undefined

//--1
toString = String(value)
console.log(`${value}, через конструктор String():`, toString)
console.log(`тип даних ${value}, через конструктор String():`, typeof toString)

//--2
toString = value + ''
console.log(`${value}, через конкатенацію:`, toString)
console.log(`тип даних ${value}, через конкатенацію:`, typeof toString)

// null
value = null

//--1
toString = String(value)
console.log(`${value}, через конструктор String():`, toString)
console.log(`тип даних ${value}, через конструктор String():`, typeof toString)

//--2
toString = value + ''
console.log(`${value}, через конкатенацію:`, toString)
console.log(`тип даних ${value}, через конкатенацію:`, typeof toString)
