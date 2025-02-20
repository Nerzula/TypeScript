//? Декораторы — это специальная конструкция в TypeScript, которая позволяет добавлять поведение к классам, методам, свойствам и аксессорам (get / set) без изменения их кода.
//* Простыми словами:
//* Декоратор — это функция, которая "оборачивает" сущность (класс, метод, свойство) и может изменить её или добавить логику.

//? Тип декоратора	Пример	Для чего нужен
//? Класса |	@logClass |	Ловит сам класс при создании
//? Свойства |	@logProperty |	Ловит свойство (property) класса
//? Метода |	@logMethod |	Ловит метод класса
//? get / set | @logSet |	Ловит геттер или сеттер
//? Фабрика декораторов |	@enumerable(false)	Позволяет передавать аргументы
//? Составной (несколько) |	@first() @second()	Несколько декораторов подряд

class Person {
	constructor(public name: string, public age: number) {}

	public getPass(): string {
		return `${this.name}${this.age}`;
	}
}

// Base structure of Decorator :)
//Todo: const logClass = () => ();

// Class Decorator
const logClass = (constructor: Function) => {
	console.log(constructor);
};

@logClass
class Person2 {
	constructor(public name: string, public age: number) {}

	public getPass(): string {
		return `${this.name}${this.age}`;
	}
}

// Property Decorator
const logProlerty = (target: Object, propertyKey: string | symbol) => {
	console.log(propertyKey);
};

class Person3 {
	@logProlerty
	secret: number;

	constructor(public name: string, public age: number, secret: number) {
		this.secret = secret;
	}

	public getPass(): string {
		return `${this.name}${this.age}`;
	}
}

// Method Decorator
const logMethodd = (
	target: Object,
	propertyKey: string | symbol,
	descriptor: PropertyDecorator
) => {
	console.log(propertyKey);
};

class Peron3 {
	constructor(public name: string, public age: number) {}

	@logMethodd
	public getPass(): string {
		return `${this.name}${this.age}`;
	}
}

// get/set Decorator
const logSet = (
	target: Object,
	propertyKey: string | symbol,
	descriptor: PropertyDescriptor
) => {
	console.log(propertyKey); // Result of call: "myAge"
};

class Person4 {
	constructor(public name: string, public age: number) {}
	@logSet // <--- Apply decorator for set
	set myAge(age: number) {
		this.age = age;
	}
}

// Factory Decorator
function factory(value: any) {
	// Factory
	return function (target: any) {
		// Decorator
		console.log(target); // Decorator logic
	};
}

// Applying Factory Decorator
const enumerable = (value: boolean) => {
	return (
		target: any,
		propertyKey: string | symbol,
		descriptor: PropertyDescriptor
	) => {
		descriptor.enumerable = value;
	};
};

class User5 {
	constructor(public name: string, public age: number) {}

	@enumerable(false) // <--- Call decorator factory with argument
	public getPass(): string {
		return `${this.name}${this.age}`;
	}
}

// Decorator composition syntax
// Apply decorators (one line)
//@f @g x

// Apply decorators (multiple lines)
//@f
//@g
//x

// Example of two factory decorators
const first = () => {
	console.log('first() completing');
	return (
		target: any,
		propertyKey: string | symbol,
		descriptor: PropertyDescriptor
	) => {
		console.log('first() called');
	};
};

const second = () => {
	console.log('second() completing');
	return (
		target: any,
		propertyKey: string | symbol,
		descriptor: PropertyDescriptor
	) => {
		console.log('second() called');
	};
};

// Apply and call two factory decorators
class Person6 {
	constructor(public name: string, public age: number) {}
	@first()
	@second()
	public getPass(): string {
		return `${this.name}${this.age}`;
	}
}

// Call results:
('first() completing'); // Factory 1
('second() completing'); // Factory 2
('second() called'); // Decorator 2
('first() called'); // Decorator 1
