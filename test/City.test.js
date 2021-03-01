const City = require('../src/Models/City');

test('Creates a city object', () => {
    let city = new City();
    expect(city).toBeInstanceOf(City);
});
test('Creates a city object by factory', () => {
    let city = City.create();
    expect(city).toBeInstanceOf(City);
});