<template>
   
<div class="container">
    <div id="nav">
        <router-link to="/equipements"  v-if=" this.$route.path === '/equipements'"> Les Equipements </router-link>
    </div>  
  <input class="form-control" v-model="filter" v-on:keyup.prevent="searchCompte" type="text" placeholder="Search..">
  <br>

   <div class="alert alert-danger" role="alert" v-if="form.flag ">
                    A simple primary alert—check it out!
   </div>
  <table class="table table-bordered table-striped table-wrapper">
    <thead>
      <tr>
        <th>Action</th>
        <th>Type</th>
        <th>Mission</th>
        <th>Numéro de série</th>
        <th>Numéro interne</th>
        <th>Localisation</th>
        <th>Contrôle</th>
        <th>Minute</th>
        <th>Appareil de contrôle</th>
      </tr>
    </thead>
 
  
    <tbody id="myTable">
      <tr v-for=" row in rowsEquipements" :key="row._id">
         <td>
             <input class="form-check-input" type="checkbox" v-on:click="greet(row._id)">
         </td>
          <td>{{row.type}}</td>  
          <td>{{row.mission}}</td> 
          <td>{{row.num_serie}}</td> 
          <td>{{row.num_interne}}</td> 
          <td>{{row.localisation}}</td> 
          <td>{{row.controle}}</td> 
          <td>{{row.minute}}</td> 
          <td>{{row.appareil_non_controle}}</td>

          
      </tr>
    </tbody>
  </table>
  <div class="d-grid gap-2 d-md-flex justify-content-md-end">

      <button type="button" class="btn btn-success btn-sm" v-on:click="apercuRapport()">Aperçu du rapport</button>
      <button type="button" class="btn btn-success btn-sm" v-on:click="creeRapport()">Créer un rapport</button>
      <button type="button" class="btn btn-success btn-sm" v-on:click="modifier()">Modifie un Equipements</button>
      <button type="button" class="btn btn-danger btn-sm" v-on:click="supprimer()">Supprimer</button>
      <button type="button" class="btn btn-primary btn-sm" v-on:click="retour()">Retour</button>
     

</div>
</div>  
 
</template>

<script>


import equipements from '../db/equipements'


export default {
  name: 'equipements',
  data() {
      return {
        form :{
          flag :false,
        },
         filter:'',
         tablechicked : [],
         count : 0,
         searchTerm : '',
         KeyVoirIntervention : '',
         rowsEquipements : [
           {
           type : '',
           mission : '',
           num_serie : '',
           controle : '',
           num_interne : '', 
           minute : '',
           _id: '',
           _rev : '', 
           localisation : '', 
           appareil_non_controle : '', 

         }
         ],      
       
      }
    },

created(){

// get key Intervention
  this.KeyVoirIntervention = sessionStorage.getItem('KeyVoirIntervention');
 
 // afficher les equipments relie  a l intervention 
equipements.allDocs({ include_docs: true, descending: true })
.then(response => {
      response.rows.forEach((e) => {

  if(this.KeyVoirIntervention == e.doc.intervention_id){        

      this.rowsEquipements.push({

           constructeur :e.doc.constructeur,
           intervention_id : e.doc.intervention_id,
           type : e.doc.type,
           mission : e.doc.mission,
           num_serie : e.doc.num_serie,
           controle : e.doc.controle,
           num_interne : e.doc.num_interne, 
           minute : e.doc.minute,
           _id : e.doc._id,
           _rev : e.doc._rev, 
           localisation : e.doc.localisation, 
           appareil_non_controle : e.doc.appareil_non_controle, 

      })
  }   

       
         
    });
})
.catch(error => {console.log(error)});
this.rowsEquipements.shift()




},




methods: {

  // retour la page precedent
        retour(){

            if(sessionStorage.getItem('auth_admin') == 1)
            {
                sessionStorage.removeItem('KeyVoirIntervention');
                this.$router.push('intervention');   
            }

            if(sessionStorage.getItem('auth_emp') == 1)
            {
                sessionStorage.removeItem('KeyVoirIntervention');
                this.$router.push('intervention');  
            }

        },
// target l cas spesfique
        greet(e){
          
          this.tablechicked[this.count] = e
          this.count++
          console.log(this.tablechicked)
                   
        },
 // supression un equipement      
        supprimer(){

          if(!this.tablechicked.length)
          {
                  this.form.flag = true
                  
          }else{

          for(let i = 0 ; i < this.tablechicked.length ; i++)
          {

                equipements.get(this.tablechicked[i]).then((doc) => {
                      return equipements.remove(doc);
                  }).then((res) => {
                      console.log("The document has been removed"+res);
                  }).catch((err) => {
                      console.error(err);
                  });  
          }

            if(sessionStorage.getItem('auth_admin') == 1)
            {
                this.$router.go(this.$router.currentRoute)
            }

            if(sessionStorage.getItem('auth_emp') == 1)
            {
                this.$router.go(this.$router.currentRoute)
            }


          }
          },
//pour Modfier un Rapport
          modifier()
          {

            if(!this.tablechicked.length)
              {
                  this.form.flag = true
                  
              }else{
            
          sessionStorage.setItem('KeyModifierEquipement' ,this.tablechicked[0]);
          this.$router.push('modifierequipement'); 

              }

          },
// pour apercu Rapport

          apercuRapport(){

          if(!this.tablechicked.length)
          {
                  this.form.flag = true
                  
          }else{
            console.log('tara');
          }

          },
// pour cree un rapport
          creeRapport(){

          if(!this.tablechicked.length)
          {
                  this.form.flag = true
                  
          }else{

            sessionStorage.removeItem('KeyRapportEquipement');
            sessionStorage.setItem('KeyRapportEquipement',this.tablechicked[0]);
            console.log(sessionStorage.getItem('KeyRapportEquipement'));
            this.$router.push('a');

          }

        }

       
      }

}
</script>
<style scoped>
th{
    font-size: 12px;
}
td{
    font-size: 12px;
}
#nav{
    margin-top: -80px;
}
.table-wrapper {
  max-height: 350px;
  overflow: auto;
  display:inline-block;
}
</style>