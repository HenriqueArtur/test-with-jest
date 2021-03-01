const Heroina = require('./Heroina')
const Arma = require('./Arma')

jest.mock('./Arma', () => jest.fn(() => {}));

const mockReturnDano = jest.fn()
jest.mock('./Arma', () => {
  return jest.fn().mockImplementation(() => {
    return {returnDano: mockReturnDano};
  });
});

beforeEach(() => {
  Arma.mockClear()
  mockReturnDano.mockClear()
})

it('Check if Arma be called', () => {
  const heroina = new Heroina();
  expect(Arma).toHaveBeenCalledTimes(1);
});

it('Check if Heroina be called', () => {
  const heroina = new Heroina();
  expect(heroina).toBeTruthy();
});
