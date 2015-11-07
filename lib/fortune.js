/**
 * Created by Darshan on 11/7/2015.
 */
//for dynamic view
var fortunes = [
    "Conquer your fears or they will conquer you.",
    "Rivers need springs.",
    "Do not fear what you don't know.",
    "You will have a pleasant surprise.",
    "Whenever possible, keep it simple.",
];

exports.getFortune = function(){
    var idx = Math.floor(Math.random() * fortunes.length);
    return fortunes[idx];
};