//? Readonly<T>
interface Person {
	name: string;
}

const user23: Readonly<Person> = {
	name: 'Yaugen',
};

user23.name = 'Max'; //! Error

// Required<T>
interface Props {
	a?: number;
	b?: string;
}

const obj: Props = { a: 5 };

const obj2: Required<Props> = { a: 5 }; //! Error

//? Record<K, T>
interface PageInfo {
	title: string;
}

type Page = 'home' | 'about' | 'contact';

const x: Record<Page, PageInfo> = {
	about: { title: 'about' },
	contact: { title: 'contact' },
	home: { title: 'home' },
};

// Pick<T, K>

interface Todo {
	title: string;
	description: string;
	completed: boolean;
}

type TodoPreview = Pick<Todo, 'title' | 'completed'>;

const todo: TodoPreview = {
	title: 'Clean room',
	completed: false,
};

//Omit<T, K>
interface Todo {
	title: string;
	description: string;
	completed: boolean;
}

type TodoPreview2 = Omit<Todo, 'description'>;

const todo2: TodoPreview2 = {
	title: 'Clean room',
	completed: false,
};

// Exclude <T, U>
type T0 = Exclude<'a' | 'b' | 'c', 'a'>;
