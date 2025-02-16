/*
? Primitive types
	*boolean
	*number
	*string
	*null
	*undefined
	*symbol
	*bigint
*/

//? Знак : рядом с название переменной указывает явно тип данных заданной в переменной
//? Если явно не задавать TS автоматически определит тип данных и присвоит : атоматически.
//? В большинстве своем примитивы определяются автоматически
let num: number = 10;
// ! num = 'aawaw' выдаст ошибку при попытки присвоить значение другого типа.
let str: string = `aawdawdaw${num}`;
let inNormal: boolean = false;

const user = {
	name: 'Alex',
	surname: 'Shvetz',
	age: null,
};

let myNull: null = null;
// ! myNull = undefined нельзя присвоит другой тип данных кроме null
let myUnddefined: undefined = undefined;

//? автоматически присвоей тип данных : symbol
let mySymbol = Symbol('awawaw');
//? автоматически присвоей тип данных : bigint
let bitInteadsdf = 13123n;

//? Union Types (Объединение типов)

// * let переменная: тип1 | тип2 | тип3;

let username: string | null = null;
username = 'Александр';

function getUsername(): string | null {
	return Math.random() > 0.5 ? 'Александр' : null;
}

let person = getUsername();

// ! Нужно проверять данные перед отправкой
if (person !== null) {
	console.log(person.toUpperCase()); // ✅ безопасно
}
