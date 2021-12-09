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
    let num2 = 5;
    // выполнение тестируемого кода
    const action1: ActionType = {type: "SUM", number: num2}
    const result1 = calculator(num1, action1);
    const action2: ActionType = {type: "DIV", number: num2}
    const result2 = calculator(num1, action2);
    //сравнение с ожидаемым результатом
    expect(result1).toBe(15);
    expect(result2).toBe(2);

})