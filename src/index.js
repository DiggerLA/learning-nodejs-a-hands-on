var fs = require('fs');

// sync
var fd = fs.openSync(__filename, 'r');

var buf = Buffer.alloc(1000);
var length = fs.readSync(fd, buf, 0, 1000, null);

fs.closeSync(fd);
console.log(length);
console.log(buf);

// async
fs.open(__filename, 'r', (err, fd) => {
    if (err) return console.log(err);

    var buf = Buffer.alloc(1000);
    fs.read(fd, buf, 0, 1000, null, (err, length) => {
        if (err) return console.log(err);

        console.log(length);
        console.log(buf);
        fs.close(fd, () => {
            console.log('File closed.');
        });
    });
});
