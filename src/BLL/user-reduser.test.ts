import {sum} from "./user-reduser";

test('sum should be correct', () => {
    //тестовые данные
    let num1 = 10;
    let num2 = 34;
    // выполнение тестируемого кода
    const result = sum(num1,num2);
    //сравнение с ожидаемым результатом
    expect(result).toBe(44);
})