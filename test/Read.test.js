const CSVRead = require('../src/CSV/Read');
const City = require('../src/Models/City');
const expect = require('expect');
test('Reads CSV File', () => {
    let filename  = 'data/worldcities.csv';
    let records = CSVRead.getRecords(filename, City);
    expect(records.length).toBe(6);
});