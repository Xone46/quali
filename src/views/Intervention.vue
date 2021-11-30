<template>
   
<div class="container">
    <div id="nav">
        <router-link to="/interventions"  v-if=" this.$route.path === '/interventions'"> Les Interventions </router-link>
    </div>  
    <div class="alert alert-danger" role="alert" v-if="form.flag ">
                    A simple primary alert—check it out!
   </div>
  <input class="form-control" v-model="filter" v-on:keyup.prevent="searchCompte" type="text" placeholder="Search..">
  <br>
  <table class="table table-bordered table-striped table-wrapper">
    <thead>
      <tr>
        <th>Action</th>
        <th>Date RV</th>
        <th>Numéro d'affaire</th>
        <th>Site</th>
        <th>Établissement</th>
        <th>Repère</th>
        <th>Adresse / Code Postal - Ville / Pays</th>
        <th>Métier</th>
        <th>Agence</th>
      </tr>
    </thead>
 
  
    <tbody id="myTable">
      <tr v-for=" row in rowsInterventions" :key="row._id">
         <td>
             <input class="form-check-input" type="checkbox" v-on:click="greet(row._id)">
         </td>
          <td>{{row.date_rv}}</td>  
          <td>{{row.n_affaire}}</td> 
          <td>{{row.site}}</td> 
          <td>{{row.etablissement}}</td> 
          <td>{{row.repere}}</td> 
          <td>{{row.adresse}} / {{row.codepostal}} - {{row.ville}} / {{row.pays}}</td> 
          <td>{{row.metier}}</td> 
          <td>{{row.agence}}</td>

          
      </tr>
    </tbody>
  </table>
  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
      
      <button type="button" class="btn btn-success btn-sm" v-on:click="cree()">Crée un Intervention</button>
      <button type="button" class="btn btn-success btn-sm" v-on:click="modifier()">Modifie un Intervention</button>
      <button type="button" class="btn btn-success btn-sm" v-on:click="voir()">Voir Les equipements</button>
      <button type="button" class="btn btn-success btn-sm" v-on:click="ajouter()">Crée un equipement</button>
      <button type="button" class="btn btn-danger btn-sm" v-on:click="supprimer()">Supprimer</button>
      <button type="button" class="btn btn-primary btn-sm" v-on:click="retour()">Retour</button>
     

</div>
</div>  
 
</template>

<script>


import interventions from '../db/interventions'
import equipements from '../db/equipements'


export default {
  name: 'Interventions',
  data() {
      return {

         form : {
           flag : false,
         },
         filter:'',
         auth_emp : '',
         auth_admin : '',
         tablechicked : [],
         count : 0,
         searchTerm : '',
         rowsInterventions : [
           {
           date_rv : '',
           n_affaire : '',
           site : '',
           adresse : '',
           etablissement : '', 
           pays : '',
           specialite : '',
           metier : '',
           ville : '', 
           _id_intervention : '',
           _rev : '', 
           repere : '', 
           agence : '', 
           codepostal : '',

         }
         ],      
       
      }
    },

created(){

  
if(sessionStorage.getItem('auth_admin') == 1)
{
  
   this.auth_admin = 'Admin' 

interventions.allDocs({ include_docs: true, descending: true })
.then(response => {
      response.rows.forEach((e) => {

      this.rowsInterventions.push({

           date_rv : e.doc.date_rv,
           n_affaire : e.doc.n_affaire,
           site : e.doc.site,
           adresse : e.doc.adresse,
           etablissement : e.doc.etablissement, 
           pays : e.doc.pays,
           specialite : e.doc.specialite,
           metier : e.doc.metier,
           ville : e.doc.ville, 
           _id : e.doc._id,
           _rev : e.doc._rev, 
           repere : e.doc.repere, 
           agence : e.doc.agence, 
           codepostal : e.doc.codepostal

      })   

       
         
    });
})
.catch(error => {console.log(error)});


this.rowsInterventions.shift()


        }

if(sessionStorage.getItem('auth_emp') == 1)
{

this.auth_emp = sessionStorage.getItem('id')
interventions.allDocs({ include_docs: true, descending: true })
.then(response => {
      response.rows.forEach((e) => {
    
    if(e.doc.emp_id == this.auth_emp){

      this.rowsInterventions.push({

           date_rv : e.doc.date_rv,
           n_affaire : e.doc.n_affaire,
           site : e.doc.site,
           adresse : e.doc.adresse,
           etablissement : e.doc.etablissement, 
           pays : e.doc.pays,
           specialite : e.doc.specialite,
           metier : e.doc.metier,
           ville : e.doc.ville, 
           _id : e.doc._id,
           _rev : e.doc._rev, 
           repere : e.doc.repere, 
           agence : e.doc.agence, 
           codepostal : e.doc.codepostal

      })  
    } 

       
         
    });
})
.catch(error => {console.log(error)});
this.rowsInterventions.shift()


}



    },



methods: {
        retour(){

            if(sessionStorage.getItem('auth_admin') == 1)
            {
                this.$router.push('admin'); 
            }

            if(sessionStorage.getItem('auth_emp') == 1)
            {
                this.$router.push('compte');
            }

        },

        cree(){
          this.$router.push('createintervention');
        },
        
        greet(e){
          
          this.tablechicked[this.count] = e
          this.count++
                   
        },
       
        supprimer(){
          if(!this.tablechicked.length)
          {
                  this.form.flag = true
                  
          }else{

          for(let i = 0 ; i < this.tablechicked.length ; i++)
          {
               
                interventions.get(this.tablechicked[i]).then((doc) => {
                      return interventions.remove(doc);
                  }).then((res) => {
                      console.log("The document has been removed"+res);
                  }).catch((err) => {
                      console.error(err);
                  });  

                  equipements.allDocs({ include_docs: true, descending: true }).then(response => {

                            response.rows.forEach((e) => {
                               
                                    if(e.doc.intervention_id == this.tablechicked[i])
                                    {
                                    equipements.get(e.doc._id).then((doc) => {
                                          return equipements.remove(doc);
                                      }).then((res) => {
                                          console.log("The document has been removed"+res);
                                      }).catch((err) => {
                                          console.error(err);
                                      });  
                                    }                                      
                                });
                  }).catch(error => {console.log(error)}); 

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

          modifier(){
          if(!this.tablechicked.length)
          {
                  this.form.flag = true
                  
          }else{   

          sessionStorage.setItem('KeyModifierIntervention' ,this.tablechicked[0]);
          this.$router.push('modifierintervention');

          }
          },

          voir(){

          if(!this.tablechicked.length)
          {
                  this.form.flag = true
                  
          }else{
              sessionStorage.setItem('KeyVoirIntervention' ,this.tablechicked[0]);
              this.$router.push('equipements');
           
          }
          },

          ajouter(){

          if(!this.tablechicked.length)
          {
                  this.form.flag = true
                  
          }else{
          
        if(sessionStorage.getItem('auth_admin') == 1)
        {
          
          sessionStorage.setItem('constructeur' ,this.auth_admin);
        }

        if(sessionStorage.getItem('auth_emp') == 1)
        {
            
            sessionStorage.setItem('constructeur' ,this.auth_emp);


        }

          sessionStorage.setItem('KeyCreateIntervention' ,this.tablechicked[0]);
          this.$router.push('createequipements');
          
          

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