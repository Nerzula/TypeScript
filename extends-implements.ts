//? implements — проверяет, что класс соответствует этому шаблону.

interface Person {
	name: string;
	surname?: string; //* ? Не обязательное свойство
}

interface PersonAdditInfo {
	birthday: string;
	age: number;
}

interface User12 extends Person, PersonAdditInfo {
	height: number;
}
//* extends позволяет одному интерфейсу наследовать свойства других интерфейсов.
//* User12 объединяет свойства Person и PersonAdditInfo, добавляя свое height.

const user1231: User12 = {
	height: 10,
	birthday: 'asaasd',
	age: 80,
	name: 'adawaw',
	surname: 'asdada',
};
interface Class444 {
	name: string;
}

class Classs12312 implements Class444 {
	name: string;
	constructor(name: string) {
		this.name = name;
	}
}

//? Когда использовать extends, а когда implements?
//? extends	- Чтобы унаследовать свойства/методы.
//? implements - Чтобы класс соответствовал интерфейсу.
