/// <refence path="Utils.ts" /> //? Старый Способ экспорта в TS
//import { getPass, SECRET} from "./Utils"; //? Рекомендуемый способ экспорта TS
//? namespace — это способ группировки кода (функций, переменных, интерфейсов и т. д.) под одним именем, чтобы избежать конфликтов имен.
namespace Utils {
	export const SECRET: string = '12131232';
	const PI: number = 3.14;

	export const getPass = (name: string, age: number): string => `${name}${age}`;

	export const isEmpty = <T>(data: T): boolean => !data;
}

//* Всё, что внутри namespace, по умолчанию недоступно снаружи.
//* Чтобы получить доступ к переменным или функциям снаружи, нужно использовать export
const myPass = Utils.getPass('Yanhen', 31);
const lsSecret = Utils.isEmpty(Utils.SECRET);

const PI = 3;

namespace Utils2 {
	export const SECRET: string = '12131232';

	export const getPass = (name: string, age: number): string => `${name}${age}`;
}
