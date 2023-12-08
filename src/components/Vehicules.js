//amélioration de l'encapsulation en utilisant des propriétés privées. Cela garantit que les détails internes de la classe ne peuvent pas être modifiés directement de l'extérieur.

export class Vehicule {
    #marque;
    #modele;
  
    constructor(marque, modele) {
      this.#marque = marque;
      this.#modele = modele;
    }
  
    get marque() {
      return this.#marque;
    }
  
    get modele() {
      return this.#modele;
    }
  
    getDetails() {
      return `Marque: ${this.#marque}, Modèle: ${this.#modele}`;
    }
  }
  
  export class Voiture extends Vehicule {
    #portes;
  
    constructor(marque, modele, portes) {
      super(marque, modele);
      this.#portes = portes;
    }
  
    get portes() {
      return this.#portes;
    }
  
    getDetails() {
      return `${super.getDetails()}, Portes: ${this.#portes}`;
    }
  }
  
  export class Moto extends Vehicule {
    #type;
  
    constructor(marque, modele, type) {
      super(marque, modele);
      this.#type = type;
    }
  
    get type() {
      return this.#type;
    }
  
    getDetails() {
      return `${super.getDetails()}, Type: ${this.#type}`;
    }
  }
  