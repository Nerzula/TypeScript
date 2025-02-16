//? interface – это специальная конструкция, которая задает шаблон (чертеж) для объектов.
//? Она описывает, какие свойства и методы должен иметь объект и какого они типа.

interface UserInfo {
	phone: string;
	email: string;
}

//* Описывает объект с двумя обязательными строковыми полями:
//* phone: string
//* email: string
interface User extends UserInfo {
	name: string;
	surname: string;
	hieght?: number;
}

//* Расширяет UserInfo, то есть, наследует его поля phone и email.
//* Добавляет свои поля:
//*   name: string
//*   surname: string
//*   hieght?: number – необязательное поле (в конце стоит ?).

interface Customer {
	user: User;
	bill: number;
}

//* Описывает объект с двумя полями:
//* user: User – вложенный объект типа User.
//* bill: number – число.

const customer: Customer = {
	user: {
		name: 'Alex',
		surname: 'Shvetz',
		phone: '+88888',
		email: 'help@gmail.com',
	},
	bill: 12312,
};

//* Объект customer соответствует интерфейсу Customer.
//* Внутри вложенный объект user полностью соответствует интерфейсу User (необязательное поле hieght можно не указывать).
//* Поле bill — число, как требуется.
