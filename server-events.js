// Задание 4

// Обработка событий с использованием EventEmitter

// 1.	Создание EventEmitter:

// Импортируйте модуль `events`.
// Создайте экземпляр EventEmitter.

// 2.	Создание сервера:

// Импортируйте модуль `http`.
// Создайте сервер с использованием метода `http.createServer()`.

// 3.	Обработка запросов:

// В функции обратного вызова для сервера вызывайте событие `requestReceived` и передавайте информацию о запросе (метод и URL).
// Используйте метод `on()` для обработки события `requestReceived` и логируйте информацию о запросе в консоль.

// 4.	Формирование ответа:

// Установите статус ответа `200`.
// Установите заголовок `Content-Type` в `text/plain`.
// Отправьте текстовый ответ с сообщением "Событие обработано".

// 5.	Запуск сервера:

// Настройте сервер на прослушивание порта `3000`.
// Добавьте сообщение в консоль, которое будет выводиться при успешном запуске сервера.

const http = require("http");
const EventEmitter = require("events");

// создаём экземпляр EventEmitter
const emitter = new EventEmitter();

// подписываемся на событие
emitter.on("requestReceived", (method, url) => {
  console.log(`Request received: ${method} ${url}`);
});

// создаём сервер
const server = http.createServer((req, res) => {
  // вызываем событие
  emitter.emit("requestReceived", req.method, req.url);

  // формируем ответ
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Событие обработано");
});

// запуск сервера
server.listen(3000, () => {
  console.log("Server is running on port 3000");
});