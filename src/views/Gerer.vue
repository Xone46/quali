<template>
   
<div class="container">
    <div id="nav">
        <router-link to="/gerer"  v-if=" this.$route.path === '/gerer'"> Manipulation des Comptes </router-link>
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
        <th>Nom</th>
        <th>Prenom</th>
        <th>E-mail</th>
        <th>Telephone</th>
        <th>Date de Naissance</th>
        <th>Mot de Pass</th>
        <th>Identite / Ref</th>
        <th>Adresse / Code Postal - Ville / Pays</th>
        <th>Specialite</th>
      </tr>
    </thead>
 
  
    <tbody id="myTable">
      <tr v-for=" row in rowsUser" :key="row._id">
         <td>
             <input class="form-check-input" type="checkbox" v-on:click="greet(row._id)">
         </td>
          <td>{{row.nom}}</td>  
          <td>{{row.prenom}}</td> 
          <td>{{row.email}}</td> 
          <td>{{row.telephone}}</td> 
          <td>{{row.naissance}}</td> 
          <td>{{row.pass}}</td> 
          <td>{{row.identite}}</td>
          <td>{{row.adresse}} / {{row.codepostal}} - {{row.ville}} / {{row.pays}}</td> 
          <td>{{row.specialite}}</td> 

          
      </tr>
    </tbody>
  </table>
  <div class="d-grid gap-2 d-md-flex justify-content-md-end">
      
      <button type="button" class="btn btn-success btn-sm" v-on:click="modifier()">Modifier</button>
      <button type="button" class="btn btn-danger btn-sm" v-on:click="supprimer()">Supprimer</button>
      <button type="button" class="btn btn-primary btn-sm" v-on:click="retour()">Retour</button>
     

</div>
</div>  
 
</template>

<script>


import users from '../db/users'


export default {
  name: 'Gerer',
  data() {
      return {
         form : {
           flag : false,
         },
         filter:'',
         tablechicked : [],
         count : 0,
         searchTerm : '',
         rowsUser : [
           {
           nom : '',
           prenom : '',
           email : '',
           adresse : '',
           pass : '', 
           identite : '',
           naissance : '',
           pays : '',
           specialite : '',
           telephone : '',
           ville : '', 
           _id : '',
           _rev : '', 
           codepostal : '', 

         }
         ],      
       
      }
    },

created(){
    

users.allDocs({ include_docs: true, descending: true })
.then(response => {
      response.rows.forEach((e) => {

      this.rowsUser.push({
       nom : e.doc.nom,
       prenom : e.doc.prenom,
       adresse : e.doc.adresse,
       email : e.doc.email,
       pass : e.doc.pass,
       ville : e.doc.ville,
       pays : e.doc.pays,
       _id : e.doc._id,
       _rev : e.doc._rev,
       telephone : e.doc.telephone,
       codepostal : e.doc.codepostal,
       naissance : e.doc.naissance,
       specialite : e.doc.specialite,
       identite : e.doc.identite

      })   

       
         
    });
})
.catch(error => {console.log(error)});


this.rowsUser.shift()


    },



methods: {
        retour(){

             this.$router.push('admin');  
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

                users.get(this.tablechicked[i]).then((doc) => {
                      return users.remove(doc);
                  }).then((res) => {
                      console.log("The document has been removed"+res);
                  }).catch((err) => {
                      console.error(err);
                  });  

          }

               window.location.replace('/gerer'); 
          }     
            
        },
        modifier(){
          
          if(!this.tablechicked.length)
          {
                  this.form.flag = true
                  
          }else{

          sessionStorage.setItem('keyModifier' ,this.tablechicked[0]);
          this.$router.push('modifier');  

          }

        },
        searchCompte() {
          if(this.filter != '')
          {
              this.searchTerm = this.filter.toLowerCase();
              const resultat = this.rowsUser.find( el => el.nom.toLowerCase() === this.searchTerm || el.identite.toLowerCase() === this.searchTerm);
               if(resultat)
               {
                  while(this.rowsUser.length > 0) {
                          this.rowsUser.pop();
                      }
                   this.rowsUser.push(resultat)   
               }
          }

         },
      },

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