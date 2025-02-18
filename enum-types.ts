//? Enum (перечисление) — это способ задать набор именованных значений.
//*  Удобно, когда есть фиксированный список вариантов, например:
//* Статусы заказа (новый, отправлен, доставлен)
//* Роли пользователей (пользователь, админ, модератор)
//* Окружение (dev, staging, production).

enum Directions {
	Up,
	Down,
	Left,
	Right,
}

Directions.Up; // 0
Directions.Down; // 1
Directions.Left; // 2
Directions.Right; // 3

//* Автоматически присваиваются числа от 0 и дальше:
//* Directions.Up → 0
//* Directions.Down → 1
//* Directions.Left → 2
//* Directions.Right → 3

enum Directions2 {
	Up,
	Down,
	Left,
	Right,
}

Directions2[0]; // Up
Directions2[1]; // Down
Directions2[2]; // Left
Directions2[3]; // Right

//?  Можно обращаться как по имени, так и по числу (обратный маппинг):

enum Directions3 {
	Up = 2,
	Down = 4,
	Left = 6,
	Right = 8,
}

//* Явно задаем значения:
//* Directions3.Up → 2
//* Directions3[6] → 'Left'
//* Directions3[8] → 'Right'

Directions3.Up;
Directions3.Down;
Directions3[6];
Directions3[8];

//*Обратный маппинг тоже работает.

enum links {
	youtube = 'https://youtube.com/',
	vk = 'httpss://vk.com/',
	facebook = 'httpss://facebook.com/',
}
//! Только строковые значения, обратного маппинга нет:
//! links['https://youtube.com/']; // Ошибка

links.vk; // httpss://vk.com/
links.youtube; // 'https://youtube.com/'

//? const enum — оптимизация:
const enum links2 {
	youtube = 'https://youtube.com/',
	vk = 'httpss://vk.com/',
	facebook = 'httpss://facebook.com/',
}
//? После компиляции подставятся строковые значения напрямую:

const arr = [links2.vk, links2.facebook];

//! const enum работает только внутри проекта, его нельзя импортировать из других файлов, если isolateModules или preserveConstEnums включены.
