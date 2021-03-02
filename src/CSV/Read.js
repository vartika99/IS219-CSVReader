class Read {
    static findRecords(filename, Models) {
        const file = require('../filePath/File');
        const fs = require('fs');
        const parse = require('csv-parse/lib/sync');

        let absolutePath = file.getAbsolutePath(filename);
        const options = {
            columns: true,
            delimiter: ',',
            trim: true,
            skip_empty_lines: true
        };

        let fileContents = fs.readFileSync(absolutePath);
        const records = parse(fileContents, options);
        let list = Array();
        records.forEach(function (data) {
            list.push(Models.create(data));
        });

        return list;
    }
}
module.exports = Read;