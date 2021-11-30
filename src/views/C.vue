<template>
<div>

<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <form class="d-flex">
      <button class="btn btn-outline-danger me-2" v-if="!FlagColorA" type="submit" @click="A()">RENSEIGNEMENTS GENERAUX</button>
      <button class="btn btn-outline-success me-2" v-if="FlagColorA" type="submit" @click="A()">RENSEIGNEMENTS GENERAUX</button>
      <button class="btn btn-outline-danger me-2" v-if="!FlagColorB"  type="submit" @click="B()">DESCRIPTION DE L’APPAREIL VERIFIE</button>
      <button class="btn btn-outline-success me-2" v-if="FlagColorB"  type="submit" @click="B()">DESCRIPTION DE L’APPAREIL VERIFIE</button>
      <button class="btn btn-outline-danger me-2" v-if="!FlagColorC" type="submit" @click="C()">EXAMENS ET ESSAIS DE L’APPAREIL</button>
      <button class="btn btn-outline-success me-2" v-if="FlagColorC" type="submit" @click="C()">EXAMENS ET ESSAIS DE L’APPAREIL</button>
      <button class="btn btn-outline-danger me-2" v-if="!FlagColorD" type="submit" @click="D()">LISTE RECAPITULATIVE DES OBSERVATIONS</button>
      <button class="btn btn-outline-success me-2" v-if="FlagColorD" type="submit" @click="D()">LISTE RECAPITULATIVE DES OBSERVATIONS</button>
    </form>
  </div>
</nav>

<div class="container">
    <h3>C. EXAMENS ET ESSAIS DE L’APPAREIL</h3>
    <p>Les vérifications ont été conduites sans démontages ni nettoyage.</p>

    <table class="table table-bordered border-primary" border="1">
        <tr>
        <th>Référence</th>
        <th></th>
        <th></th>
        <th></th>
    
        </tr>
    </table>    
<table class="table table-bordered border-primary" border="1">
    <tr>
      <th rowspan="3">C-1</th>
      <th>ACCES INSTALLES A DEMEURE</th>
      <th>BE</th>
      <th>FC</th>
      <th>SA</th>
      <th>NV</th>
      <th>SO</th>
      <th>O</th>
      <th>Observer</th>
    </tr>
    <tr>
      <td>– Accès a la cabine et au poste de conduite</td>
      <td>  
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C1[0].BE">
     </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C1[0].FC">
      </td>
      <td>
          
      </td>
      <td>
          
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C1[0].SO">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C1[0].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C1[0].obs">
      </td>
    </tr>

    <tr>
     
      <td>– Autres accès pour entretien et vérification</td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C1[1].BE">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C1[1].FC">
      </td>
      <td>
          
      </td>
      <td>
          
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C1[1].SO">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C1[1].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C1[1].obs">
      </td>
    </tr>
</table>

<table class="table table-bordered border-primary" border="1">
    <tr>
      <th rowspan="5">C-2</th>
      <th>CHASSIS</th>
      <th>BE</th>
      <th>FC</th>
      <th>SA</th>
      <th>NV</th>
      <th>SO</th>
      <th>O</th>
       <th>Observer</th>
    </tr>
    <tr>
      <td>- Ossature, contrepoids (fixation)– Accès a la cabine et au poste de conduite</td>
      <td>  
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C2[0].BE">
     </td>
      <td></td>
      <td></td>
      <td></td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C2[0].SO">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C2[0].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C2[0].obs">
      </td>
    </tr>

    <tr>
     
      <td>- Organes de roulement (pneumatiques, bandages, galets)– Autres accès pour entretien et vérification</td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C2[1].BE">
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C2[1].SO">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C2[1].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C2[1].obs">
      </td>
    </tr>
    <tr>
     
      <td>– Stabilisateurs</td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C2[2].BE">
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C2[2].SO">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C2[2].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C2[2].obs">
      </td>
    </tr>
    <tr>
     
      <td> 	– Blocage de suspension	</td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C2[3].BE">
      </td>
      <td></td>
      <td></td>
      <td></td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C2[3].SO">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C2[3].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C2[3].obs">
      </td>
    </tr>
</table>

<table class="table table-bordered border-primary" border="1">
    <tr>
      <th rowspan="5">C-3</th>
      <th>CHARPENTE SUPPORT DE CHARGE</th>
      <th>BE</th>
      <th>FC</th>
      <th>SA</th>
      <th>NV</th>
      <th>SO</th>
      <th>O</th>
       <th>Observer</th>
    </tr>
    <tr>
      <td>– Mâts, guidage, galets, butées</td>
      <td>  
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C3[0].BE">
     </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C3[0].FC">
      </td>
      <td></td>
      <td></td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C3[0].SO">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C3[0].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C3[0].obs">
      </td>
    </tr>

    <tr>
     
      <td>– Tablier, butées</td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C3[1].BE">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C3[1].FC">
      </td>
      <td></td>
      <td></td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C3[1].SO">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C3[1].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C3[1].obs">
      </td>
    </tr>
    <tr>
     
      <td>– Assemblages, liaisons, articulations</td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C3[2].BE">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C3[2].FC">
      </td>
      <td></td>
      <td></td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C3[2].SO">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C3[2].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C3[2].obs">
      </td>
    </tr>
    
</table>

<table class="table table-bordered border-primary" border="1">
    <tr>
      <th rowspan="5">C-4</th>
      <th>SOURCES D’ENERGIE</th>
      <th>BE</th>
      <th>FC</th>
      <th>SA</th>
      <th>NV</th>
      <th>SO</th>
      <th>O</th>
       <th>Observer</th>
    </tr>
    <tr>
      <td>- Dispositif de séparation générale</td>
      <td>  
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C4[0].BE">
     </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C4[0].FC">
      </td>
      <td></td>
      <td></td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C4[0].SO">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C4[0].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C4[0].obs">
      </td>
    </tr>

    <tr>
     
      <td>– Equipements, canalisations</td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C4[1].BE">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C4[1].FC">
      </td>
      <td></td>
      <td></td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C4[1].SO">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C4[1].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C4[1].obs">
      </td>
    </tr>
    <tr>
     
      <td>– Protection des pièces nues sous tension</td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C4[2].BE">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C4[2].FC">
      </td>
      <td></td>
      <td></td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C4[2].SO">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C4[2].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C4[2].obs">
      </td>
    </tr>
</table>


<table class="table table-bordered border-primary" border="1">
    <tr>
      <th rowspan="3">C-5</th>
      <th>ECLAIRAGE INCORPORE A L’APPAREIL</th>
      <th>BE</th>
      <th>FC</th>
      <th>SA</th>
      <th>NV</th>
      <th>SO</th>
      <th>O</th>
       <th>Observer</th>
    </tr>
    <tr>
      <td>- Eclairage de la zone de travail</td>
      <td>  
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C5[0].BE">
     </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C5[0].FC">
      </td>
      <td>
          
      </td>
      <td>
          
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C5[0].SO">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C5[0].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C5[0].obs">
      </td>
    </tr>

     <tr>
      <td>- Eclairage de signalisation (code de la route), gyrophare</td>
      <td>  
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C5[1].BE">
     </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C5[1].FC">
      </td>
      <td>
          
      </td>
      <td>
          
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C5[1].SO">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C5[1].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C5[1].obs">
      </td>
    </tr>

</table>

<table class="table table-bordered border-primary" border="1">
    <tr>
      <th rowspan="11">C-6</th>
      <th>POSTE DE CONDUITE - CABINE</th>
      <th>BE</th>
      <th>FC</th>
      <th>SA</th>
      <th>NV</th>
      <th>SO</th>
      <th>O</th>
       <th>Observer</th>
    </tr>
    <tr>
      <td>– Constitution, fixation, plancher</td>
      <td>  
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C6[0].BE">
     </td>
      <td>
      </td>
      <td>
          
      </td>
      <td>
          
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C6[0].SO">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C6[0].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C6[0].obs">
      </td>
    </tr>

     <tr>
      <td>– Protection contre les chutes de hauteur de l’opérateur à partir du poste de conduite</td>
      <td>  
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C6[1].BE">
     </td>
      <td>
      </td>
      <td>
          
      </td>
      <td>
          
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C6[1].SO">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C6[1].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C6[1].obs">
      </td>
    </tr>

    <tr>
      <td>– Protection du conducteur (protège tête, dosseret de charge, bouclier,...)</td>
      <td>  
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C6[2].BE">
     </td>
      <td>
      </td>
      <td>
          
      </td>
      <td>
          
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C6[2].SO">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C6[2].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C6[2].obs">
      </td>
    </tr>

    <tr>
      <td>– Plateforme rabattable</td>
      <td>  
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C6[3].BE">
     </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C6[3].FC">
      </td>
      <td>
          
      </td>
      <td>
          
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C6[3].SO">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C6[3].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C6[3].obs">
      </td>
    </tr>

    <tr>
      <td>- Visibilité (vitrage, essuie-glaces, rétroviseur)</td>
      <td>  
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C6[4].BE">
     </td>
      <td>
      </td>
      <td>
          
      </td>
      <td>
          
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C6[4].SO">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C6[4].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C6[4].obs">
      </td>
    </tr>

    <tr>
      <td>– Chauffage</td>
      <td>  
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C6[5].BE">
     </td>
      <td>
      </td>
      <td>
          
      </td>
      <td>
          
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C6[5].SO">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C6[5].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C6[5].obs">
      </td>
    </tr>

    <tr>
      <td>– Extincteur sur l'appareil à cabine</td>
      <td>  
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C6[6].BE">
     </td>
      <td>
      </td>
      <td>
          
      </td>
      <td>
          
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C6[6].SO">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C6[6].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C6[6].obs">
      </td>
    </tr>

    <tr>
      <td>– Siège</td>
      <td>  
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C6[7].BE">
     </td>
      <td>
      </td>
      <td>
          
      </td>
      <td>
          
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C6[7].SO">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C6[7].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C6[7].obs">
      </td>
    </tr>

    <tr>
      <td>– Ceinture de sécurité</td>
      <td>  
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C6[8].BE">
     </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C6[8].FC">
      </td>
      <td>
          
      </td>
      <td>
          
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C6[8].SO">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C6[8].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C6[8].obs">
      </td>
    </tr>

    <tr>
      <td>– Eclairage</td>
      <td>  
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C6[9].BE">
     </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C6[9].FC">
      </td>
      <td>
          
      </td>
      <td>
          
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C6[9].SO">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C6[9].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C6[9].obs">
      </td>
    </tr>

</table>

<table class="table table-bordered border-primary" border="1">
    <tr>
      <th rowspan="9">C-7</th>
      <th>ORGANES DE SERVICE ET DE MANOEUVRE</th>
      <th>BE</th>
      <th>FC</th>
      <th>SA</th>
      <th>NV</th>
      <th>SO</th>
      <th>O</th>
       <th>Observer</th>
    </tr>
    <tr>
      <td>- Mise en marche- Arrêt normal - Sélecteur</td>
      <td>  
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C7[0].BE">
     </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C7[0].FC">
      </td>
      <td>
          
      </td>
      <td>
          
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C7[0].SO">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C7[0].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C7[0].obs">
      </td>
    </tr>

     <tr>
      <td>– Identification des organes de service </td>
      <td>  
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C7[1].BE">
     </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C7[1].FC">
      </td>
      <td>
          
      </td>
      <td>
          
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C7[1].SO">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C7[1].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C7[1].obs">
      </td>
    </tr>

    
     <tr>
      <td>- Retour automatique au point neutre </td>
      <td>  
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C7[2].BF">
     </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C7[2].FC">
      </td>
      <td>
          
      </td>
      <td>
          
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C7[2].SO">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C7[2].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C7[2].obs">
      </td>
    </tr>

         <tr>
      <td>- Timon</td>
      <td>  
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C7[3].BE">
     </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C7[3].FC">
      </td>
      <td>
          
      </td>
      <td>
          
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C7[3].SO">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C7[3].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C7[3].obs">
      </td>
    </tr>

         <tr>
      <td>- Autres arrêts accessibles (urgence….) </td>
      <td>  
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C7[4].BE">
     </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C7[4].FC">
      </td>
      <td>
          
      </td>
      <td>
          
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C7[4].S">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C7[4].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C7[4].obs">
      </td>
    </tr>


         <tr>
      <td>- Avertisseur sonore, lumineux</td>
      <td>  
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C7[5].BE">
     </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C7[5].FC">
      </td>
      <td>
          
      </td>
      <td>
          
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C7[5].SO">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C7[5].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C7[5].obs">
      </td>
    </tr>

         <tr>
      <td>– Indicateurs </td>
      <td>  
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C7[6].BE">
     </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C7[6].FC">
      </td>
      <td>
          
      </td>
      <td>
          
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C7[6].SO">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C7[6].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C7[6].obs">
      </td>
    </tr>

         <tr>
      <td>- Interdiction d’emploi (clé, appareils mobiles) </td>
      <td>  
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C7[7].BE">
     </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C7[7].FC">
      </td>
      <td>
          
      </td>
      <td>
          
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C7[7].SO">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C7[7].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C7[7].obs">
      </td>
    </tr>

</table>

<table class="table table-bordered border-primary" border="1">
    <tr>
      <th rowspan="7">C-8</th>
      <th>SUSPENTES  TAMBOURS POULIES  DISPOSITIFS DE PREHENSION</th>
      <th>BE</th>
      <th>FC</th>
      <th>SA</th>
      <th>NV</th>
      <th>SO</th>
      <th>O</th>
       <th>Observer</th>
    </tr>
    <tr>
      <td>– Suspentes</td>
      <td>  
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C8[0].BE">
     </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C8[0].FC">
      </td>
      <td>
          
      </td>
      <td>
          
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C8[0].SO">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C8[0].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C8[0].obs">
      </td>
    </tr>

     <tr>
      <td>– Attaches</td>
      <td>  
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C8[1].BE">
     </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C8[1].FC">
      </td>
      <td>
          
      </td>
      <td>
          
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C8[1].SO">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C8[1].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C8[1].obs">
      </td>
    </tr>

    <tr>
      <td>– Tambour, poulies, noix, pignons</td>
      <td>  
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C8[2].BE">
     </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C8[2].FC">
      </td>
      <td>
          
      </td>
      <td>
          
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C8[2].SO">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C8[2].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C8[2].obs">
      </td>
    </tr>

    <tr>
      <td>– Support du dispositif de préhension (TDL, écarteur, tablier rotatif ...)</td>
      <td>  
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C8[3].BE">
     </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C8[3].FC">
      </td>
      <td>
          
      </td>
      <td>
          
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C8[3].SO">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C8[3].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C8[3].obs">
      </td>
    </tr>

    <tr>
      <td>- Dispositifs de préhension (fourches)</td>
      <td>  
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C8[4].BE">
     </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C8[4].FC">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C8[4].SA">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C8[4].NV">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C8[4].SO">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C8[4].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C8[4].obs">
      </td>
    </tr>

        <tr>
      <td>- Dispositifs de préhension (pince ...)</td>
      <td>  
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C8[5].BE">
     </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C8[5].FC">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C8[5].SA">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C8[5].NV">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C8[5].SO">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C8[5].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C8[5].obs">
      </td>
    </tr>

</table> 

<table class="table table-bordered border-primary" border="1">
    <tr>
      <th rowspan="10">C-9</th>
      <th>MECANISMES</th>
      <th>BE</th>
      <th>FC</th>
      <th>SA</th>
      <th>NV</th>
      <th>SO</th>
      <th>O</th>
       <th>Observer</th>
    </tr>
    <tr>
      <td>– Groupes moto-réducteurs, vérinsSuspentes</td>
      <td>  
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C9[0].BE">
     </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C9[0].FC">
      </td>
      <td>
          
      </td>
      <td>
          
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C9[0].SO">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C9[0].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C9[0].obs">
      </td>
    </tr>

     <tr>
      <td>– Vérins, canalisations</td>
      <td>  
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C9[1].BE">
     </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C9[1].FC">
      </td>
      <td>
          
      </td>
      <td>
          
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C9[1].SO">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C9[1].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C9[1].obs">
      </td>
    </tr>

    <tr>
      <td>- Organes de transmission, accouplements</td>
      <td>  
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C9[2].BE">
     </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C9[2].FC">
      </td>
      <td>
          
      </td>
      <td>
          
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C9[2].SO">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C9[2].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C9[2].obs">
      </td>
    </tr>

    <tr>
      <td>– Freins des mouvements concourant au levage</td>
      <td>  
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C9[3].BE">
     </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C9[3].FC">
      </td>
      <td>
          
      </td>
      <td>
          
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C9[3].SO">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C9[3].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C9[3].obs">
      </td>
    </tr>

    <tr>
      <td>– Limitation de la vitesse (absence d’emballement) </td>
      <td>  
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C9[4].BE">
     </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C9[4].FC">
      </td>
      <td>
     
      </td>
      <td>
         
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C9[4].SO">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C9[4].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C9[4].obs">
      </td>
    </tr>

    <tr>
      <td>– Freins sur mouvements autres que levage (rétractation mât, translateur, etc ...)</td>
      <td>  
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C9[5].BE">
     </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C9[5].FC">
      </td>
      <td>
         
      </td>
      <td>
         
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C9[5].SO">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C9[5].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C9[5].obs">
      </td>
    </tr>


    <tr>
      <td>– Freins du mouvement de translation</td>
      <td>  
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C9[6].BE">
     </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C9[6].FC">
      </td>
      <td>
          
      </td>
      <td>
         
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C9[6].SO">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C9[6].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C9[6].obs">
      </td>
    </tr>

    <tr>
      <td> – Freins d'immobilisation en translation (hors srvice) </td>
      <td>  
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C9[7].BE">
     </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C9[7].FC">
      </td>
      <td>
         
      </td>
      <td>
          
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C9[7].SO">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C9[7].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C9[7].obs">
      </td>
    </tr>

    <tr>
      <td> – Protection des organes mobiles de transmission</td>
      <td>  
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C9[8].BE">
     </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C9[8].FC">
      </td>
      <td>
          
      </td>
      <td>
          
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C9[8].SO">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C9[8].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C9[8].obs">
      </td>
    </tr>




    

</table>  


<table class="table table-bordered border-primary" border="1">
    <tr>
      <th rowspan="10">C-10</th>
      <th>DISPOSITIFS DE SECURITE</th>
      <th>BE</th>
      <th>FC</th>
      <th>SA</th>
      <th>NV</th>
      <th>SO</th>
      <th>O</th>
       <th>Observer</th>
    </tr>
    <tr>
      <td> - Limiteurs de course haute ou mise en butée </td>
      <td>  
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C10[0].BE">
     </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C10[0].FC">
      </td>
      <td>
          
      </td>
      <td>
          
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C10[0].SO">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C10[0].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C10[0].obs">
      </td>
    </tr>

<tr>
      <td>- Autres limiteurs de course/hors course</td>
      <td>  
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C10[1].BE">
     </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C10[1].FC">
      </td>
      <td>
          
      </td>
      <td>
          
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C10[1].SO">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C10[1].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C10[1].obs">
      </td>
    </tr>

<tr>
      <td>– Limiteur de charge (limiteur de pression) ou dispositif s’opposant a la surcharge– Groupes moto-réducteurs, vérinsSuspentes</td>
      <td>  
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C10[2].BE">
     </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C10[2].FC">
      </td>
      <td>
          
      </td>
      <td>
          
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C10[2].SO">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C10[2].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C10[2].obs">
      </td>
    </tr>

<tr>
      <td> – Contrôle de présence du conducteur (siège, pédale,...)	</td>
      <td>  
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C10[3].BE">
     </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C10[3].FC">
      </td>
      <td>
          
      </td>
      <td>
          
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C10[3].SO">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C10[3].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C10[3].obs">
      </td>
    </tr>

<tr>
      <td>– Sécurité de timons</td>
      <td>  
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C10[4].BE">
     </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C10[4].FC">
      </td>
      <td>
          
      </td>
      <td>
          
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C10[4].SO">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C10[4].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C10[4].obs">
      </td>
    </tr>

<tr>
      <td>– Autre dispositif de sécurité</td>
      <td>  
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C10[5].BE">
     </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C10[5].FC">
      </td>
      <td>
          
      </td>
      <td>
          
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C10[5].SO">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C10[5].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C10[5].obs">
      </td>
    </tr>


</table>


<table class="table table-bordered border-primary" border="1">
    <tr>
      <th rowspan="10">C-11</th>
      <th>PRESCRIPTIONS DIVERSES </th>
      <th>BE</th>
      <th>FC</th>
      <th>SA</th>
      <th>NV</th>
      <th>SO</th>
      <th>O</th>
       <th>Observer</th>
    </tr>
    <tr>
      <td>- Plaque constructeur </td>
      <td>  
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C11[0].BE">
     </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C11[0].FC">
      </td>
      <td>
          
      </td>
      <td>
          
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C11[0].SO">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C11[0].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C11[0].obs">
      </td>
    </tr>

    <tr>
      <td>– Affichage capacité, tableau des charges</td>
      <td>  
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C11[1].BE">
     </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C11[1].FC">
      </td>
      <td>
          
      </td>
      <td>
          
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C11[1].SO">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C11[1].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C11[1].obs">
      </td>
    </tr>

    <tr>
      <td> - Consignes de sécurité et d’utilisation (lisibilité)</td>
      <td>  
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C11[2].BE">
     </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C11[2].FC">
      </td>
      <td>
          
      </td>
      <td>
          
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C11[2].SO">
      </td>
      <td>
          <input class="form-check-input" type="checkbox" value = "true" v-model="form.C11[2].O">
      </td>
      <td>
          <input class="form-check-input" type="text" style="width:450px; height:25px;" v-model="form.C11[2].obs">
      </td>
    </tr>
</table>  
<br>
  <button type="submit" class="btn btn-primary" @click="d()">Valider</button>
  <button type="button" class="btn btn-primary btn-sm" v-on:click='retour()'>Retour</button>
  <button type="button" class="btn btn-danger btn-sm" v-on:click='quitter()'>Quitter</button>



</div>   

</div>
</template>

<script>

 import rapports from '../db/rapports'

export default {
name: 'C',
data(){

    return {

        form : {
         C1 : [
             {BE : "" , FC : "" , SO : "" , O : "" , obs: ""},
             {BE : "" , FC : "" , SO : "" , O : "" , obs: ""}
         ],
         
         C2 : [
             {BE : "" , SO : "" , O : "" , obs: ""},
             {BE : "" , SO : "" , O : "" , obs: ""},
             {BE : "" , SO : "" , O : "" , obs: ""},
             {BE : "" , SO : "" , O : "" , obs: ""}
         ],

         C3 : [
                {BE : "" , FC : "" , SO : "" , O : "" , obs: ""},
                {BE : "" , FC : "" , SO : "" , O : "" , obs: ""} ,
                {BE : "" , FC : "" , SO : "" , O : "" , obs: ""}  
         ],

         C4 : [
                {BE : "" , FC : "" , SO : "" , O : "" , obs: ""},
                {BE : "" , FC : "" , SO : "" , O : "" , obs: ""} ,
                {BE : "" , FC : "" , SO : "" , O : "" , obs: ""}  
         ],

        C5 : [
                {BE : "" , FC : "" , SO : "" , O : "" , obs: ""},
                {BE : "" , FC : "" , SO : "" , O : "" , obs: ""}  
         ],

        C6 : [
                {BE : ""  , SO : "" , O : "" , obs: ""},
                {BE : ""  , SO : "" , O : "" , obs: ""},
                {BE : ""  , SO : "" , O : "" , obs: ""},
                {BE : "" , FC : "", SO : "" , O : "" , obs: ""},
                {BE : ""  , SO : "" , O : "", obs: ""},
                {BE : ""  , SO : "" , O : "" , obs: ""},
                {BE : ""  , SO : "" , O : "" , obs: ""},
                {BE : ""  , SO : "" , O : "" , obs: ""},
                {BE : ""  , SO : "" , O : "" , obs: ""},
                {BE : ""  , SO : "" , O : "", obs: ""},
                {BE : "" , FC : "" , SO : "" , O : "" , obs: ""},
                {BE : "" , FC : "" , SO : "" , O : "" , obs: ""}  
         ],
         
        C7 : [

                {BE : "" , FC : "" , SO : "" , O : "" , obs: ""},
                {BE : "" , FC : "" , SO : "" , O : "" , obs: ""},
                {BE : "" , FC : "" , SO : "" , O : "" , obs: ""},
                {BE : "" , FC : "" , SO : "" , O : "" , obs: ""},
                {BE : "" , FC : "" , SO : "" , O : "" , obs: ""},
                {BE : "" , FC : "" , SO : "" , O : "" , obs: ""},
                {BE : "" , FC : "" , SO : "" , O : "" , obs: ""}, 
                {BE : "" , FC : "" , SO : "" , O : "" , obs: ""}
         ],

         C8 : [

                {BE : "" , FC : "" , SO : "" , O : "" , obs: ""},
                {BE : "" , FC : "" , SO : "" , O : "" , obs: ""},
                {BE : "" , FC : "" , SO : "" , O : "" , obs: ""},
                {BE : "" , FC : "" , SO : "" , O : "" , obs: ""},
                {BE : "" , FC : "" ,SA : "", NV : "", SO : "" , O : "" , obs: ""},
                {BE : "" , FC : "" ,SA : "", NV : "", SO : "" , O : "" , obs: ""}  
         ],

        C9 : [

                {BE : "" , FC : "" , SO : "" , O : "" , obs: ""},
                {BE : "" , FC : "" , SO : "" , O : "" , obs: ""},
                {BE : "" , FC : "" , SO : "" , O : "" , obs: ""},
                {BE : "" , FC : "" , SO : "" , O : "" , obs: ""},
                {BE : "" , FC : "" , SO : "" , O : "" , obs: ""},
                {BE : "" , FC : "" , SO : "" , O : "" , obs: ""},
                {BE : "" , FC : "" , SO : "" , O : "" , obs: ""},  
                {BE : "" , FC : "" , SO : "" , O : "" , obs: ""},  
                {BE : "" , FC : "" , SO : "" , O : "" , obs: ""} 
         ],

        C10 : [

                {BE : "" , FC : "" , SO : "" , O : "" , obs: ""},
                {BE : "" , FC : "" , SO : "" , O : "" , obs: ""},
                {BE : "" , FC : "" , SO : "" , O : "" , obs: ""},
                {BE : "" , FC : "" , SO : "" , O : "" , obs: ""},
                {BE : "" , FC : "" , SO : "" , O : "" , obs: ""},
                {BE : "" , FC : "" , SO : "" , O : "" , obs: ""}  
         ],
         
        C11 : [

                {BE : "" , FC : "" , SO : "" , O : "" , obs: ""},
                {BE : "" , FC : "" , SO : "" , O : "" , obs: ""},
                {BE : "" , FC : "" , SO : "" , O : "" , obs: ""}  
         ],


        },

        FlagColorA : false,
        FlagColorB : false,
        FlagColorC : false,
        FlagColorD : false,

    }

},

created(){

this.IdRapportEquipement = sessionStorage.getItem('IdRapportEquipement')
rapports.get(this.IdRapportEquipement).then((doc) => {

if(doc.C1 == undefined || doc.C2 == undefined || doc.C3 == undefined || doc.C4 == undefined || doc.C5 == undefined ||doc.C6 == undefined ||doc.C7 == undefined || doc.C8 == undefined || doc.C9 == undefined || doc.C10 == undefined || doc.C11 == undefined)
{
console.log('Not existe Data')
}else{
    console.log('existe Data')
     for(let i = 0 ; i <doc.C1.length ; i++) {
                
                this.form.C1[i].BE = doc.C1[i].BE
                this.form.C1[i].FC = doc.C1[i].FC
                this.form.C1[i].SO = doc.C1[i].SO
                this.form.C1[i].O = doc.C1[i].O       
                this.form.C1[i].obs = doc.C1[i].obs       
            }
            for(let i = 0 ; i <doc.C2.length ; i++) {
                
                this.form.C2[i].BE = doc.C2[i].BE
                this.form.C2[i].SO = doc.C2[i].SO
                this.form.C2[i].O = doc.C2[i].O       
                this.form.C2[i].obs = doc.C2[i].obs       
            }
            for(let i = 0 ; i <doc.C3.length ; i++) {
                
                this.form.C3[i].BE = doc.C3[i].BE
                this.form.C3[i].FC = doc.C3[i].FC
                this.form.C3[i].SO = doc.C3[i].SO
                this.form.C3[i].O = doc.C3[i].O       
                this.form.C3[i].obs = doc.C3[i].obs       
            }
            for(let i = 0 ; i <doc.C4.length ; i++) {
                
                this.form.C4[i].BE = doc.C4[i].BE
                this.form.C4[i].FC = doc.C4[i].FC
                this.form.C4[i].SO = doc.C4[i].SO
                this.form.C4[i].O = doc.C4[i].O       
                this.form.C4[i].obs = doc.C4[i].obs       
            }
            for(let i = 0 ; i <doc.C5.length ; i++) {
                
                this.form.C5[i].BE = doc.C5[i].BE
                this.form.C5[i].FC = doc.C5[i].FC
                this.form.C5[i].SO = doc.C5[i].SO
                this.form.C5[i].O = doc.C5[i].O 
                this.form.C5[i].obs = doc.C5[i].obs     
            }
            for(let i = 0 ; i <doc.C6.length ; i++) {
                
                this.form.C6[i].BE = doc.C6[i].BE
                this.form.C6[i].FC = doc.C6[i].FC
                this.form.C6[i].SO = doc.C6[i].SO
                this.form.C6[i].O = doc.C6[i].O 
                this.form.C6[i].obs = doc.C6[i].obs      
            }
            for(let i = 0 ; i <doc.C7.length ; i++) {
                
                this.form.C7[i].BE = doc.C7[i].BE
                this.form.C7[i].FC = doc.C7[i].FC
                this.form.C7[i].SO = doc.C7[i].SO
                this.form.C7[i].O = doc.C7[i].O 
                this.form.C7[i].obs = doc.C7[i].obs      
            }
            for(let i = 0 ; i <doc.C8.length ; i++) {
                
                this.form.C8[i].BE = doc.C8[i].BE
                this.form.C8[i].FC = doc.C8[i].FC
                this.form.C8[i].SA = doc.C8[i].SA
                this.form.C8[i].NV = doc.C8[i].NV
                this.form.C8[i].SO = doc.C8[i].SO
                this.form.C8[i].O = doc.C8[i].O 
                this.form.C8[i].obs = doc.C8[i].obs      
            }
            for(let i = 0 ; i <doc.C9.length ; i++) {
                
                this.form.C9[i].BE = doc.C9[i].BE
                this.form.C9[i].FC = doc.C9[i].FC
                this.form.C9[i].SO = doc.C9[i].SO
                this.form.C9[i].O = doc.C9[i].O 
                this.form.C9[i].obs = doc.C9[i].obs      
            }
            for(let i = 0 ; i <doc.C10.length ; i++) {
                
                this.form.C10[i].BE = doc.C10[i].BE
                this.form.C10[i].FC = doc.C10[i].FC
                this.form.C10[i].SO = doc.C10[i].SO
                this.form.C10[i].O = doc.C10[i].O
                this.form.C10[i].obs = doc.C10[i].obs       
            }
            for(let i = 0 ; i <doc.C11.length ; i++) {
                
                this.form.C11[i].BE = doc.C11[i].BE
                this.form.C11[i].FC = doc.C11[i].FC
                this.form.C11[i].SO = doc.C11[i].SO
                this.form.C11[i].O = doc.C11[i].O 
                this.form.C11[i].obs = doc.C11[i].obs      
            }
}
           

      

        if(doc.etapA)
             {
                this.FlagColorA  = true
             }

        if(doc.etapB)
             {
                this.FlagColorB  = true
             }
        if(doc.etapC)
             {
                this.FlagColorC  = true
             }
        if(doc.etapD)
             {
                this.FlagColorD  = true
             }          
    
});




},    
methods:{

d(){

this.IdRapportEquipement = sessionStorage.getItem('IdRapportEquipement')
rapports.get(this.IdRapportEquipement).then((doc) => {

               doc.C1  = this.form.C1,
               doc.C2  = this.form.C2,
               doc.C3  = this.form.C3,
               doc.C4  = this.form.C4,
               doc.C5  = this.form.C5,
               doc.C6  = this.form.C6,
               doc.C7  = this.form.C7,
               doc.C8  = this.form.C8,
               doc.C9  = this.form.C9,
               doc.C10  = this.form.C10,
               doc.C11  = this.form.C11,
               doc.etapC = true

    return rapports.put(doc);  
    
});
        
        this.$router.push('d');
    },
  A() { this.$router.push('a');},
  B() { this.$router.push('b');},
  C() { this.$router.push('c');},
  D() { this.$router.push('d');},
  retour(){
    this.$router.push('b');
  },
  quitter(){
    
        this.KeyRapportEquipement = ''
        sessionStorage.removeItem('KeyRapportEquipement')
        sessionStorage.removeItem('IdRapportEquipement') 
        this.$router.push('equipements');
  }
}

}

</script>

<style>
.one-nested-input{
  margin-right: -180px;
}
.tow-nested-input{
  margin-right: -190px;
}
.btn{

  display: block;
  margin-left: auto;
  margin-right: auto;

}
</style>