//amélioration de l'encapsulation en utilisant des propriétés privées. Cela garantit que les détails internes de la classe ne peuvent pas être modifiés directement de l'extérieur.

export class Vehicule { //export permet d'exporter la classe pour pouvoir l'utiliser dans un autre fichier
    #marque; // # permet de définir une propriété privée
    #modele;// # permet de définir une propriété privée
  
    constructor(marque, modele) { //constructeur
      this.#marque = marque; //this permet de faire référence à l'objet courant
      this.#modele = modele;//this permet de faire référence à l'objet courant
    }
  
    get marque() { //get permet de définir une méthode getter pour la propriété marque
      return this.#marque;//this permet de faire référence à l'objet courant
    }
  
    get modele() {//get permet de définir une méthode getter pour la propriété modele
      return this.#modele;//this permet de faire référence à l'objet courant
    }
  
    getDetails() {//get permet de définir une méthode getter pour la propriété getDetails
      return `Marque: ${this.#marque}, Modèle: ${this.#modele}`;//this permet de faire référence à l'objet courant
    }
  }
  
  export class Voiture extends Vehicule {//export permet d'exporter la classe pour pouvoir l'utiliser dans un autre fichier
    #portes;
  
    constructor(marque, modele, portes) {//constructeur
      super(marque, modele);//super est utilisé pour appeler le constructeur de la classe parente (Vehicule) depuis les sous-classes (Voiture et Moto). Cela est nécessaire pour initialiser correctement les instances des sous-classes.
      this.#portes = portes;//this permet de faire référence à l'objet courant
    }
  
    get portes() {//get permet de définir une méthode getter pour la propriété portes
      return this.#portes;//this permet de faire référence à l'objet courant
    }
  
    getDetails() {//get permet de définir une méthode getter pour la propriété getDetails
      return `${super.getDetails()}, Portes: ${this.#portes}`;//super est utilisé pour appeler le constructeur de la classe parente (Vehicule) depuis les sous-classes (Voiture et Moto). Cela est nécessaire pour initialiser correctement les instances des sous-classes.
    }
  }
  
  export class Moto extends Vehicule {//export permet d'exporter la classe pour pouvoir l'utiliser dans un autre fichier
    #type;// # permet de définir une propriété privée
  
    constructor(marque, modele, type) {//constructeur
      super(marque, modele);//super est utilisé pour appeler le constructeur de la classe parente (Vehicule) depuis les sous-classes (Voiture et Moto). Cela est nécessaire pour initialiser correctement les instances des sous-classes.
      this.#type = type;//this permet de faire référence à l'objet courant
    }
  
    get type() {//get permet de définir une méthode getter pour la propriété type
      return this.#type;//this permet de faire référence à l'objet courant
    }
  
    getDetails() {//get permet de définir une méthode getter pour la propriété getDetails
      return `${super.getDetails()}, Type: ${this.#type}`;//super est utilisé pour appeler le constructeur de la classe parente (Vehicule) depuis les sous-classes (Voiture et Moto). Cela est nécessaire pour initialiser correctement les instances des sous-classes.
    }
  }
  