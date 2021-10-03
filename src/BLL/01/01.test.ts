import {multiply, sum} from "./01";

test( 'смотри в оба, тупая псина', () => {
    //сперва данные
    const a = 1;
    const b = 2;
    const c = 5;

    //теперь действие
    const result = sum(a,b)
    const result2 = multiply(b, c)

    //что ожидаем от действия
    expect(result).toBe(3)
    expect(result2).toBe(10)

})