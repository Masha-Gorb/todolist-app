import {ActionType, calculator, sum} from "./user-reduser";

test.skip('sum should be correct', () => {
    //тестовые данные
    let num1 = 10;
    let num2 = 34;
    // выполнение тестируемого кода
    const result = sum(num1,num2);
    //сравнение с ожидаемым результатом
    expect(result).toBe(44);
})

test ('calculator should work', () => {
    //тестовые данные
    let num1 = 10;
    let num2 = 34;
    // выполнение тестируемого кода
    const action: ActionType = {type: "SUM", number: num2}
    const result = calculator(num1, action);
    //сравнение с ожидаемым результатом
    expect(result).toBe(44);
})