function newElement(type, className, text){
    const elementItem = document.createElement(type);
    if(className !== null)
        elementItem.classList.add(className);
    if(text !== null)
        elementItem.textContent = text;
    return elementItem;
}

module.exports = {addElement};