export default class Card {
    constructor(selector, elements, data, title){
        this._selector = selector;
        this._elements = elements;
        this._title = title;
        this._link = data.link;
    }

    _getTemplate(){
        return document.querySelector(this._selector).content.querySelector(".element").cloneNode(true)
    }

    getView(){
        return this._getTemplate()
    }
}