//? Generics позволяют создавать функции, классы и интерфейсы, которые могут работать с разными типами данных, сохраняя типизацию.
const getter = (data: any): any => data;
//! Использование any — плохо. Ты теряешь проверку типов.
getter(10);
getter('test');

const getter2 = <T>(data: T): T => data;
//* <T> — это обобщенный тип.
//* T подставляется автоматически в зависимости от переданных данных.
//* Функция "запоминает" тип и возвращает его.
//! getter2(10).length; error //* Вернет Ошибку на не undefined
getter2('test').length;

//getter2<number>(10).length; error
getter2<string>('test').length;
//* Generic возвращет автоматически тип данных, но можно управлять указывая явно, через <> какой тип данных ожидается возврату от функции

const list: Array<number> = [1, 2, 3];
//* При помощи generic можно создать массив и указать какой тип данных он будет содерджать

//* Generic class
class User<T> {
	constructor(public name: T, public age: T) {}

	public getPass(): string {
		return `${this.name}${this.age}`;
	}
}
//* T — обобщенный тип.
//* В конструкторе name и age будут одного типа (любого).
const yanhen = new User('Yauhen', '31');
const max = new User(123, 321);

yanhen.getPass();
max.getPass();
//* Multiple generic types
class User2<T, K> {
	constructor(public name: T, public age: K) {}

	public getPass(): string {
		return `${this.name}${this.age}`;
	}
}
//* T — тип имени.
//* K — тип возраста.
const yanhen2 = new User('Yauhen', '31');
const max2 = new User(123, 321);

yanhen2.getPass();
max2.getPass();

//* New Class method 'getSecter"
class User3<T, K extends number> {
	constructor(public name: T, public age: K) {}

	public getPass(): string {
		return `${this.name}${this.age}`;
	}

	public getSecret(): number {
		return this.age ** 2;
	}
}

//? Ограничение типа (extends):
//* K extends number — теперь возраст может быть только числом.
