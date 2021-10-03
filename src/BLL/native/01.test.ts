import {multiply, sum} from "./01";

//подготовительные данные вынесли за тесты
const a = 4;
const b = 8;

test( 'sum should be correct', () => {
    //действие
    const result = sum(a,b)
    //что ожидаем от действия
    expect(result).toBe(12)
})

test( 'multiply should be correct', ()=> {
    const result2 = multiply(a, b)
    expect(result2).toBe(32)
})