//? Literal types - позволяют ограничить значение переменной только определенными строками или числами.
//* В данном примере переменная env может быть только одним из этих значений: 'development', 'stading', или 'production'.
let env: 'development' | 'stading' | 'production' = 'stading';

function setEnv(
	myEnv: 'development' | 'stading' | 'production'
): 'development' | 'stading' | 'production' {
	return myEnv;
}

//? Type Aliases - позволяет создать новый тип, который будет синонимом для нескольких возможных значений.
//* В данном примере Env — это тип, который может быть одним из значений: 'development', 'stading', или 'production'.
type Env = 'development' | 'stading' | 'production';

let env2: Env = 'stading';

function setEnv2(myEnv: Env): Env {
	return myEnv;
}

//? Enums - это способ представления набора именованных значений.
//* В данном примере перечисление Env3 определяет три возможных значения: Development, Stading, и Production, каждое из которых связано с конкретной строкой.
enum Env3 {
	Development = 'development',
	Stading = 'stading',
	Production = 'production',
}

let env3: Env3 = Env3.Production;

function setEnv3(myEnv: Env3): Env3 {
	return myEnv;
}

setEnv3(Env3.Development);
//? const enum — это оптимизированная версия обычного enum.
//? Он удаляется при компиляции, а вместо него подставляются конкретные значения.
//! Нельзя использовать const enum со значением через Object.keys() или for...in:
const enum Env4 {
	Development = 'development',
	Production = 'production',
}
