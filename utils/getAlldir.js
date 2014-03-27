var fs = require('fs');
var path = require('path');

var fileDir = [];
var pathList = [];
function find(dir){
    filter(readFileDir(dir), dir);
    while(pathList.length){
        find(pathList.pop());
    }
};

function filter(fileNameArray, dir) {
    var extname ;
    for(var index = fileNameArray.length; index --;) {
        extname = path.extname(fileNameArray[index]);
        if (extname == '.' || extname == '.txt') {
        } else if (extname == '.js' ) {
            fileDir.push(dir + '/' + fileNameArray[index]);
        } else if (extname == '.hbs') {
            fileDir.push(dir + '/' + fileNameArray[index]);
        } else if (extname == '.html') {
            fileDir.push(dir + '/' + fileNameArray[index]);
        } else if (extname == '') {
            pathList.push(dir + '/' + fileNameArray[index]);
        };
    }
};

function readFileDir(dir) {
    try{
        return fs.readdirSync(dir);
    } catch (err) {
        return [];
    }
}

exports.findAll = function(dir){
    find(dir);
    return fileDir;
};

// find(dir);

// console.log(fileDir);

