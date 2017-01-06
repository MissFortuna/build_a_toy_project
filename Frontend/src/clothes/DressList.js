/**
 * Created by Elizabeth on 1/6/2017.
 */
var Shop_List = require('../Shop_List');
var Templates = require('../Templates');
var ClothCart = require('./ClothCart');

//HTML элементы где будут хранится элементы

//doll
var doll_head=$("#heads");
var doll_dress=$("#dresses");
var doll_shirt=$("#shirts");
var doll_shorts=$("#shorts");

//turtle
var turtle_head=$("#theads");
var turtle_dress=$("#tdresses");
var turtle_shirt=$("#tshirts");
var turtle_shorts=$("#tshorts");
var turtle_shell=$("#tshells");

//Обновление одного элемента
/*
function showPizzaList(list) {
    //Очищаємо старі піци в кошику
    $pizza_list.html("");

    //Обновление элемента в карусели
    function showOneCloth(cloth) {

      //  var html_code = Templates.PizzaMenu_OneItem({pizza: pizza});

        var $node = $(html_code);

        $node.find(".buy-element").click(function(){
            DressCart.addToCart(cloth, DressCart.DressSize.Big);
        });

        $pizza_list.append($node);
    }

    list.forEach(showOnePizza);
}

*/

//
function filterStaff(filter) {
    var doll_heads=[];
    var doll_dresses=[];
    var doll_shirtss=[];
    var doll_shortss=[];

    var turtle_heads=[];
    var turtle_dresses=[];
    var turtle_shirts=[];
    var turtle_shortss=[];
    var turtle_shells=[];

    if (filter === "doll") {
        Shop_List.forEach(function (cloth) {
            if (cloth.type === 'Одяг для ляльки') {
                if(cloth.cloth_type==='Плаття'){
                    doll_dresses.push(cloth);
                }

                } else if(cloth.cloth_type==='Лялька'){
                    doll_heads.push(cloth);
                }
                else if(cloth.cloth_type==='Шортики'){
                    doll_shortss.push(cloth);
                }
                else if(cloth.cloth_type==='Сорочка'){
                    doll_shirtss.push(cloth);
            }
        });
        $.each(doll_heads, function( intIndex, objValue ){
            doll_head.append($('<div class="item"><img src="'+objValue.icon+'"></div>'));
        });
        $.each(doll_dresses, function( intIndex, objValue ){
            doll_dress.append($('<div class="item"><img src="'+objValue.icon+'"></div>'));
        });
        $.each(doll_shirtss, function( intIndex, objValue ){
            doll_shirt.append($('<div class="item"><img src="'+objValue.icon+'"></div>'));
        });
        $.each(doll_shortss, function( intIndex, objValue ){
            doll_shorts.append($('<div class="item"><img src="'+objValue.icon+'"></div>'));
        });
    }
    else if(filter==="turtle"){
        Shop_List.forEach(function (cloth) {
            if (cloth.type === 'Одяг для черепашки') {
                if(cloth.cloth_type==='Панцир'){
                    turtle_shells.push(cloth);
                }

            } else if(cloth.cloth_type==='Черепашка'){
                turtle_heads.push(cloth);
            }
            else if(cloth.cloth_type==='Шортики'){
                turtle_shortss.push(cloth);
            }
            else if(cloth.cloth_type==='Сорочка'){
                turtle_shirts.push(cloth);
            }
        });

        $.each(turtle_heads, function( intIndex, objValue ){
            turtle_head.append($('<div class="item"><img src="'+objValue.icon+'"></div>'));
        });
        $.each(turtle_dresses, function( intIndex, objValue ){
            turtle_dress.append($('<div class="item"><img src="'+objValue.icon+'"></div>'));
        });
        $.each(turtle_shirtss, function( intIndex, objValue ){
            turtle_shirt.append($('<div class="item"><img src="'+objValue.icon+'"></div>'));
        });
        $.each(turtle_shortss, function( intIndex, objValue ){
            turtle_shorts.append($('<div class="item"><img src="'+objValue.icon+'"></div>'));
        });
        $.each(turtle_shells, function( intIndex, objValue ){
            turtle_shell.append($('<div class="item"><img src="'+objValue.icon+'"></div>'));
        });

    }
}

$("#doll_staff").click(function(){
    filterStaff('doll');
});

$("#turtle_staff").click(function(){
    filterStaff('turtle');
});

//function initialiseMenu() {
    //Показуємо усі піци
  //  showPizzaList(Pizza_List)
//}

//add button "buy doll & cloth", button "buy only cloth"

exports.filterStaff = filterStaff;
//exports.initialiseMenu = initialiseMenu;
