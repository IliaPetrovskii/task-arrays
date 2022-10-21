import { arraySorting, arrayFiltering, arrayPushing } from './Arrays';

describe('Работа с массивами', () => {
    it('Cортировка массива', () => {
        expect(arraySorting('101,2,0,4,44')).toBe('0,2,4,44,101');
    });

    it('Фильтрация массива - должны быть удалены все числа больше 100', () => {
        expect(arrayFiltering([101, 12, 220, 340, 4, 44])).toStrictEqual([
            12, 4, 44,
        ]);
    });

    it('Объединение массивов', () => {
        expect(
            arrayPushing([1, 2, 3, 4, 5], [101, 102, 103, 104, 105]),
        ).toStrictEqual([1, 101, 2, 102, 3, 103, 4, 104, 5, 105]);
    });
});
