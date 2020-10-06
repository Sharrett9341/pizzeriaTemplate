//Menu//
/*function displayFunction(){
    var foodMenu = document.getElementById('foodMenu');
    var drinkMenu = document.getElementById('drinkMenu');

    if (foodMenu.style.display === 'none'){
        foodMenu.style.display = 'flex';
        drinkMenu.style.visibility = "hidden";
   
        
    } else{
        foodMenu.style.display = 'none';
        drinkMenu.style.visibility ="flex";
       
       
       
    }
}
*/ 
/*var divs = [ "foodMenu", "drinkMenu" ];
function toggle(layer) {
    var _menus = document.getElementsByClassName("menu");
    for(var i = 0; i < _menus.length; i++) {
        _menu = _menus[i];
        _menu.style.display = 'none';
    }
    
    var _menu = document.getElementById(layer);
    _menu.style.display = 'block';
}*/

function toggle(layer) {
    const hidingDiv = (layer == 'foodMenu') ? 'drinkMenu' : 'foodMenu';
    document.getElementById(layer).style.display = 'block';
    document.getElementById(hidingDiv).style.display = 'none';
}

