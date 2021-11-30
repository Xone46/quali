<template>
<div class="container">

<h3>E.	CONCLUSION</h3>

<ul>

  <li>
    <input class="one-nested-input" type="radio" v-model="form.conclusion" value="La vérification de l’état de conservation et les essais de fonctionnement réalisés dans les limites de la présente mission n’ont pas fait apparaître d’observation ni d’anomalie.">
   <p class="text-center"> 
       La vérification de l’état de conservation et les essais de fonctionnement réalisés dans les limites de la présente mission n’ont pas fait apparaître d’observation ni d’anomalie.
   </p>   
  </li>

  <li>
    <input class="one-nested-input" type="radio" v-model="form.conclusion" value="La vérification de l’état de conservation et les essais de fonctionnement réalisés dans les limites de la présente mission font apparaitre des observations ne s’opposant pas a l’utilisation de l’appareil auxquelles il convient de remédier">
     <p class="text-center">
    La vérification de l’état de conservation et les essais de fonctionnement réalisés dans les limites de la présente mission font apparaitre des observations ne s’opposant pas a l’utilisation de l’appareil auxquelles il convient de remédier
     </p>
  </li>

  <li>
    <input class="one-nested-input" type="radio" v-model="form.conclusion" value="La vérification de l’état de conservation et les essais de fonctionnement réalisés dans les limites de la présente mission font apparaitre des observations s’opposant a l’utilisation de l’appareil auxquelles il convient de remédier :">
    <p class="text-center">
    La vérification de l’état de conservation et les essais de fonctionnement réalisés dans les limites de la présente mission font apparaitre des observations s’opposant a l’utilisation de l’appareil auxquelles il convient de remédier :
    </p>
  </li>

  <li>
    <input class="one-nested-input" type="radio" v-model="form.conclusion">
    <p class="text-center">
    Commentaire complémentaire :
    </p>
    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="form.commentaire"></textarea>
  </li>
</ul>  



  <button type="submit" class="btn btn-primary" @click="rapportPDF()">Valider</button>
  <button type="submit" class="btn btn-primary" @click="retour()">Retour</button>
  <button type="button" class="btn btn-danger btn-sm" v-on:click='quitter()'>Quitter</button>


</div>    
</template>

<script>
 import rapports from '../db/rapports'

export default {

data() {
  return {
    form : {

     conclusion :"",
     commentaire : ''

     }

    }
  
}, 
methods:{

  retour(){
        this.$router.push('d');
  },
  quitter(){
    
        this.KeyRapportEquipement = ''
        sessionStorage.removeItem('KeyRapportEquipement')
        sessionStorage.removeItem('IdRapportEquipement') 
        this.$router.push('equipements');

  },
    rapportPDF(){

        this.IdRapportEquipement = sessionStorage.getItem('IdRapportEquipement')
        rapports.get(this.IdRapportEquipement).then((doc) => {

               doc.conclusion = this.form.conclusion
               doc.commentaire = this.form.commentaire
                   return rapports.put(doc);  
    
});
        this.$router.push('pdf');
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
ul {
  list-style: none;
}
</style>