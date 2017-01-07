/**
 * Created by Elizabeth on 1/7/2017.
 */
$(function() {
    //This code will execute when the page is ready
    var PizzaMenu = require('./cloth/Clothes_carousel');
    var PizzaCart = require('./cloth/Clothes_Cart');
    var Pizza_List = require('./DressList');


    var API = require('./API');
/*
    API.getPizzaList(function (err, pizza_list) {
        if (err) {
            return console.error(err);
        }
        console.log("Pizza List", pizza_list);
        PizzaCart.initialiseCart();
        PizzaMenu.initialiseMenu();
    });
   */
});