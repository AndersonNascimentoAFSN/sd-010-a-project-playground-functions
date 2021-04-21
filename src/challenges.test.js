const { decode, encode } = require('./challenges');

describe('Testa função decode', () => {
  test('Testa se decode é uma função', () => {
    expect(typeof decode === 'function').toBeTruthy();
  });

  it('decode números 1, 2, 3, 4, 5 são convertido vogais a, e, i, o, u, respectivamente', () => {
    expect(decode('12345')).toEqual('aeiou');
  });

  it('decode não converte os demais números', () => {
    expect(encode('67890')).toEqual('67890');
  });

  it('String retornada têm mesmo número de caracteres que a passada como parâmetro', () => {
    const numbers = '12345';
    expect(encode(numbers).length === numbers.length).toBeTruthy();
  });
});

describe('Testa função encode', () => {
  test('Testa se encode é uma função', () => {
    expect(typeof encode === 'function').toBeTruthy();
  });

  it('função encode vogais a, e, i, o, u são convertidas em 1, 2, 3, 4, 5, respectivamente', () => {
    expect(encode('aeiou')).toEqual('12345');
  });

  it('encode não converte as demais letras', () => {
    expect(encode('bcdfg')).toEqual('bcdfg');
  });
});
