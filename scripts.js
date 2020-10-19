
function toggle(layer) {
    const hidingDiv = (layer == 'food-menu') ? 'drink-menu' : 'food-menu';
    document.getElementById(layer).style.display = 'flex';
    document.getElementById(hidingDiv).style.display = 'none';
}
