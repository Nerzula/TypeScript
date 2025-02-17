//? Класс – это шаблон, который объединяет данные (свойства) и поведение (методы) в одном месте, с возможностью инкапсуляции, наследования и типизации.
//? Интерфейс IClassUser – описание типа данных
//* "Объект должен иметь name и surname – строки
interface IClassUser {
	name: string;
	surname: string;
}

//? Класс ClassUser – базовый класс
//? public - По умолчанию. Свойство или метод доступны везде.
//? private - Только внутри этого класса.
//? protected - В этом классе и в дочерних классах.
//* name, surname – публичные свойства.
//* secretMessage – защищенное (protected), доступно только в ClassUser и его наследниках.
//* printSecretMessage() – приватный метод, можно вызывать только внутри ClassUser.

class ClassUser {
	name: string;
	surname: string;
	//private secretMessage: string;
	protected secretMessage: string;

	constructor(props: { name: string; surname: string }) {
		this.name = props.name;
		this.surname = props.surname;
		this.secretMessage = `${props.name} secret message`;
	}

	consoleFullName(): void {
		console.log(`${this.name} ${this.surname}`);
	}
	returnFullName(): string {
		return `${this.name} ${this.surname}`;
	}
	private printSecretMessage(password: number): string | null {
		if (password === 123) {
			return this.secretMessage;
		}

		return null;
	}
}

const mySuperUser = new ClassUser({
	name: 'Alex',
	surname: 'Shvetz',
});

mySuperUser.consoleFullName(); //* Можно вызвать consoleFullName(), потому что это публичный метод.
// mySuperUser.printSecretMessage(123); //! Нельзя вызвать printSecretMessage(), потому что он private:

//? Наследование extends у интерфейса IClassUser
//* Все поля из IClassUser + поле bill."
interface IClassCustomer extends IClassUser {
	bill: number;
}

//? Класс ClassCustomer – наследник ClassUser
class ClassCustomer extends ClassUser {
	bill: number;

	constructor(promps: IClassCustomer) {
		super({
			name: promps.name,
			surname: promps.surname,
		});

		this.bill = promps.bill;
	}

	getBill(): string {
		return `${this.secretMessage} ${this.bill}`;
	}
}
//* Используем super() – вызываем конструктор родительского класса.
//* Через protected secretMessage можно получить secretMessage в наследнике.
//* Метод getBill() доступен, потому что secretMessage – protected.

const mySuperCusstomer = new ClassCustomer({
	name: 'Alex',
	surname: 'Shvetz',
	bill: 1000,
});
