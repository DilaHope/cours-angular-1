// définition de la classe
class Product {
    private _name: string; // privé dans la classe actuelle

    constructor(name: string) {
        this.name = name; // setter assigne une valeur à l'attribut _name
    }

    // setter
    set name(name: string) {
        this._name = name;
    }

    // getter afficher une valeur dans le code courant
    get name(): string {
        return this._name;
    }

}

// instance de la classe
let bike = new Product('Super Bike');



