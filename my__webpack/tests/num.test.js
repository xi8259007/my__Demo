import mod from '../src/js/num';


test('test sum', ()=>{              //  测试集(test suit)
  expect(mod.sum(12, 5)).toBe(17);  //  测试项(test)
  expect(mod.sum(1, 1)).toBe(2);
  expect(mod.sum(0, 0)).toBe(0);
});
