// Реализация очереди через массив
// Класс ArrayQueue должен имплементировать интерфейс Queue
// Класс может работать с любым типом данных, то есть помещать любые данные в массив  <-- Важно
// Очередь - это структура данных, которая выглядит как реальная очередь в магазине
// Первый, кто подошел к прилавку, первым и уйдет. Так же и в коде при выполнении задач
// Чуть подробнее можно найти в википедии или на других сайтах по поиску "Очередь структура данных"
var ArrayQueue = /** @class */ (function () {
    function ArrayQueue() {
        // Создать приватное свойство queue, которое по умолчанию массив и содержит массив любого типа
        this.queue = [];
    }
    // Подсказка по методам:
    // при добавлении в очередь можно выполнить метод push
    ArrayQueue.prototype.enqueue = function (item) {
        this.queue.push(item);
    };
    // при удалении - shift, так как нужно удалить первый элемент.
    ArrayQueue.prototype.dequeue = function () {
        return this.queue.shift();
    };
    // Обратите внимание на возвращаемое значение
    // isEmpty может использоваться в других методах
    ArrayQueue.prototype.peek = function () {
        return this.isEmpty() ? null : this.queue[0];
    };
    ArrayQueue.prototype.isEmpty = function () {
        return this.queue.length === 0;
    };
    ArrayQueue.prototype.length = function () {
        return this.queue.length;
    };
    return ArrayQueue;
}());
// Стэк - это еще одна структура данных. Проще всего её представить как стопку листов на столе
// Последний, который вы положите сверху, вы и первым потом возьмете.
// Чуть подробнее можно найти в википедии или на других сайтах по поиску "Стэк структура данных"
// Класс Stack содержит другие методы, так что ничего имплементировать не нужно
// Класс может работать с любым типом данных, то есть помещать любые данные в массив и содержит массив любого типа  <-- Важно
var Stack = /** @class */ (function () {
    // Здесь мы установим лимит на стопку листов.
    // При переполнении стэка программа зависает, а очень высокая стопка листов падает
    // Так что лимит всегда должен быть
    function Stack(limit) {
        if (limit === void 0) { limit = Number.MAX_VALUE; }
        // Создать приватное свойство stack, которое по умолчанию массив и содержит массив любого типа
        // Создать приватное свойство limit, которое будет типом number
        this.stack = [];
        this.limit = limit;
    }
    Stack.prototype.push = function (value) {
        // Добавляет элемент в стэк
        // Если стэк переполнен - выбрасывает ошибку (throw new Error)
        if (this.stack.length >= this.limit) {
            throw new Error("Stack overflow: стэк переполнен");
        }
        this.stack.push(value);
    };
    Stack.prototype.pop = function () {
        // Удаляет последний элемент массива
        // Если в стеке пусто - выбрасывает ошибку (throw new Error)
        // При удалении элемента возвращает его
        // Простыми словами: вы берете верхний лист в стопке и используете его
        // Если на столе нет листов - получается ошибка, брать нечего
        if (this.isEmpty()) {
            throw new Error("Stack underflow: стэк пуст");
        }
        return this.stack.pop();
    };
    Stack.prototype.length = function () {
        // Возвращает кол-во элементов в стэке
        return this.stack.length;
    };
    Stack.prototype.isEmpty = function () {
        // Проверяет стэк на "пустоту"
        return this.stack.length === 0;
    };
    Stack.prototype.top = function () {
        // Возвращает последний (верхний) элемент стэка, но не удаляет его
        // Вы просто читаете, что написано на верхнем листе
        // Если стэк пуст - вернется null
        return this.isEmpty() ? null : this.stack[this.stack.length - 1];
    };
    return Stack;
}());
// Для тестов
var arrTest1 = new ArrayQueue();
arrTest1.enqueue(5);
arrTest1.enqueue(10);
console.log(arrTest1.peek());
console.log(arrTest1.dequeue());
console.log(arrTest1.length());
var arrTest2 = new ArrayQueue();
arrTest2.enqueue("5");
arrTest2.enqueue("10");
console.log(arrTest2.peek());
console.log(arrTest2.dequeue());
console.log(arrTest2.length());
var stackTest1 = new Stack(10);
stackTest1.push(20);
stackTest1.push(50);
console.log(stackTest1.top());
console.log(stackTest1.pop());
console.log(stackTest1.length());
var stackTest2 = new Stack(10);
stackTest2.push("20");
stackTest2.push("50");
console.log(stackTest2.top());
console.log(stackTest2.pop());
console.log(stackTest2.length());
