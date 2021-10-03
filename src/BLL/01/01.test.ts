import {multiply, sum} from "./01";

test( 'sum should be correct', () => {
    //подготовительные данные
    const a = 1;
    const b = 2;
    const c = 5;

    //действие
    const result = sum(a,b)

    //что ожидаем от действия
    expect(result).toBe(3)
})

test( 'multiply should be correct', ()=> {
    const a = 4;
    const b = 8;
    const result2 = multiply(a, b)
    expect(result2).toBe(32)

})