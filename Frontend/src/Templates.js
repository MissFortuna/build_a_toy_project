/**
 * Created by Elizabeth on 1/7/2017.
 */
var fs = require('fs');
var ejs = require('ejs');

exports.ClothCart_OneItem = ejs.compile(fs.readFileSync('./Frontend/templates/ClothCart_OneItem.ejs', "utf8"));
exports.ClothCatalog_OneItem = ejs.compile(fs.readFileSync('./Frontend/templates/ClothCatalog_OneItem.ejs', "utf8"));
exports.StyleCart_OneItem.ejs = ejs.compile(fs.readFileSync('./Frontend/templates/StyleCart_OneItem.ejs', "utf8"));