import React, { useState } from 'react';
import { Voiture, Moto } from './components/Vehicules';

function App() {


  //Utilisation de React.useState , au lieu de créer directement des instances de Voiture et Moto, j'ai juste les initialiser dans le state de React. Cela est plus conforme au modèle de React et permet une meilleure gestion des états.
  const [maVoiture] = useState(new Voiture("Toyota", "Corolla", 4));
  const [maMoto] = useState(new Moto("Yamaha", "MT-07", "Sportive"));

  return (
    <div>
      <h1>Véhicules</h1>
      <div>
        <h2>Voiture</h2>
        <p>{maVoiture.getDetails()}</p>
      </div>
      <div>
        <h2>Moto</h2>
        <p>{maMoto.getDetails()}</p>
      </div>
    </div>
  );
}

export default App;
// Explication de la Chaîne de Prototypes et de super Dans ce projet, l'utilisation de extends et super démontre comment l'héritage fonctionne en JavaScript :extends permet à Voiture et Moto d'hériter des propriétés et méthodes de Vehicule.super est utilisé pour appeler le constructeur de la classe parente (Vehicule) depuis les sous-classes (Voiture et Moto). Cela est nécessaire pour initialiser correctement les instances des sous-classes.La chaîne de prototypes en JavaScript signifie que les méthodes définies sur la classe parente (comme getDetails dans Vehicule) sont accessibles sur les instances des sous-classes. Cela permet une réutilisation efficace du code et une structure de code organisée.