## ⚙️ Установка TypeScript

### 1. Установка TypeScript глобально на компьютер

```bash
npm i typescript -g
```

### 2. Инициализация TypeScript в проекте (создание tsconfig.json)

```bash
tsc --init
```

### 3. Изменение версии синтаксиса JavaScript (ECMAScript) в tsconfig.json

По умолчанию используется стандарт **ES2016**. Чтобы изменить, например, на **ES2020**:

```json
{
	"target": "es2020"
}
```

### 4. Компиляция TypeScript-файла в JavaScript вручную

```bash
tsc app.ts
```

### ❗ Важно

TypeScript нельзя подключить напрямую в HTML. Браузер не понимает файлы с расширением `.ts`. Необходимо сначала скомпилировать их в `.js`.

После компиляции используйте сгенерированный `.js` файл:

```html
<script src="app.js"></script>
```
