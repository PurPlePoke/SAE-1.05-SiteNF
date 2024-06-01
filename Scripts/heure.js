function afficherHeure() { // Création de la fonction
    var maintenant = new Date();                    
    var heures = maintenant.getHours();
    var minutes = maintenant.getMinutes();
    var secondes = maintenant.getSeconds();

     // Obtention des informations sur l'heure
    heures = (heures < 10 ? "0" : "") + heures;
    minutes = (minutes < 10 ? "0" : "") + minutes;
    secondes = (secondes < 10 ? "0" : "") + secondes;

    // Formatage de l'heure pour l'affichage
    var horloge = heures + ":" + minutes + ":" + secondes;

    // Mise à jour de l'élément de la page avec l'heure
    document.getElementById('heure').textContent = horloge;
}

// Mise à jour l'heure toutes les secondes
setInterval(afficherHeure, 50);

