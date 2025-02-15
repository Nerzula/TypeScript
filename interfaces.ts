interface UserInfo {
	phone: string;
	email: string;
}

interface User extends UserInfo {
	name: string;
	surname: string;
	hieght?: number;
}

interface Customer {
	user: User;
	bill: number;
}

const customer: Customer = {
	user: {
		name: 'Alex',
		surname: 'Shvetz',
		phone: '+88888',
		email: 'help@gmail.com',
	},
	bill: 12312,
};
