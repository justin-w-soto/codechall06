import { returnTen, findMax, totalSum } from './code-challenge-11';



  test('it should return the last 10 characters of a string as an array', () => {
    expect(returnTen('hello world')).toStrictEqual(['e','l','l','o',' ','w','o','r','l','d']);
    expect(returnTen('world')).toStrictEqual(['w','o','r','l','d']);
  });

  test('it should return the highest number', () => {
    const input = [[13,24,24,2], [2,5,6], [2,3]]; 
    const output = findMax(input); 
    expect(output).toEqual(24);
    });
    
  test('it should return the sum of all numbers', () => {
    const input = [[13,24,24,2], [2,5,6], [2,3]]; 
    const output = totalSum(input);
    expect(output).toEqual(81); 
    });