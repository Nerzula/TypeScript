interface User555 {
	name: string;
	surname: string;
}

interface Arcticles {
	title: string;
	author: string;
	content: string;
}

function makeRequest<Type>(
	url: string,
	params?: { quere: {} }
): Type | Arcticles {
	return {
		name: 'Alex',
		surname: 'Shvetz',
	};
}

const myUser = makeRequest('/getUssers');
const myArticles = makeRequest('/getArticle');
