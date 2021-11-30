<template>
    <div class="row">
        <div class="col-1"></div>
        <div class="col">
                <div id="nav">
                     <router-link to="/modifierequipement"  v-if=" this.$route.path ==='/modifierequipement'"> Modifier un Équipement  </router-link>
                </div>  
                    <div class="alert alert-primary" role="alert" v-if="form.flag === 'succes'">
                    A simple primary alert—check it out!
                    </div>
                    <div class="alert alert-danger" role="alert" v-if="form.flag === 'echec'">
                    A simple primary alert—check it out!
                    </div>
                <form class="row g-3">
                <div class="col-md-3">
                    <label for="inputEmail4" class="form-label" >Type</label>
                    <input type="text" class="form-control" v-model="form.type" >
                </div>
                <div class="col-md-3">
                    <label for="inputPassword4" class="form-label">Mission</label>
                    <input type="text" class="form-control" v-model="form.mission"  >
                </div>
                <div class="col-md-3">
                    <label for="inputPassword4" class="form-label">Numéro de série</label>
                    <input type="email" class="form-control" v-model="form.num_serie"  >
                </div>
                <div class="col-md-3">
                    <label for="inputPassword4" class="form-label">Numéro interne</label>
                    <input type="text" class="form-control" v-model="form.num_interne"  >
                </div>

                <div class="col-md-3">
                    <label for="inputPassword1" class="form-label">Localisation</label>
                    <input type="password" class="form-control" v-model="form.localisation"  >
                </div>
                <div class="col-md-3">
                    <label for="inputPassword2" class="form-label">Contrôle</label>
                    <input type="password" class="form-control" v-model="form.controle" >
                </div>
                <div class="col-md-2">
                    <label for="inputPasswor3" class="form-label"> Minute </label>
                    <input type="text" class="form-control" v-model="form.minute" >
                </div>
                <div class="col-4">
                    <label for="inputAddress" class="form-label">Appareil de contrôle</label>
                    <input type="text" class="form-control"  placeholder="" v-model="form.appareil_non_controle" >
                </div>
                </form>
                <br>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary mb-3 " v-on:click="changer()">Changer</button>
                </div>
                 <div class="col-12">
                    <button type="submit" class="btn btn-danger" v-on:click="retour()">Retour</button>
                </div>
        </div>
        <div class="col-1"></div>
    </div>
</template>

<script>

import equipements from '../db/equipements'

    export default {
    name: 'Equipements',
    data(){
        return {
            
            form:{
               
                KeyModifierEquipement : '',
                type : '',
                mission : '',
                num_serie : '',
                num_interne : '',
                localisation : '',
                controle : '',
                minute : '',
                appareil_non_controle : '',
                flag : null,
                id : '',


            }
        }
    },

  created(){
        this.form.KeyModifierEquipement = sessionStorage.getItem('KeyModifierEquipement');
        
        equipements.get(this.form.KeyModifierEquipement).then((doc) => {

           this.form.id = doc._id,    
           this.form.type  =  doc.type,
           this.form.mission  =  doc.mission
           this.form.num_serie  =  doc.num_serie,
           this.form.num_interne  =  doc.num_interne,
           this.form.localisation  =  doc.localisation,
           this.form.controle  =  doc.controle, 
           this.form.minute  =  doc.minute,
           this.form.appareil_non_controle  =  doc.appareil_non_controle


            }).catch((err) => {
                console.error(err);
            });
            
    },

    methods :{
retour(){
            sessionStorage.removeItem('KeyModifierIntervention');
            this.$router.push('intervention');      
        },

changer(){
    
        equipements.get(this.form.id).then((doc) => {

                doc.type = this.form.type
                doc.mission = this.form.mission
                doc.num_serie = this.form.num_serie
                doc.num_interne = this.form.num_interne
                doc.localisation = this.form.localisation
                doc.controle = this.form.controle 
                doc.minute = this.form.minute
                doc.appareil_non_controle = this.form.appareil_non_controle  

         equipements.put(doc).then((res)=>{
             
                    console.log(res);
                    this.form.type = "",
                    this.form.num_serie = "",
                    this.form.controle = "",
                    this.form.appareil_non_controle = "",
                    this.form.minute = "",
                    this.form.num_interne = "",
                    this.form.localisation = "",
                    this.form.mission = "",
                    this.form.flag = 'succes'

         }).catch((err)=>{
                 console.error(err);
                 this.form.flag = 'echec'

         });              
                           
    });
          
    }
   
    }
  }
        
</script>

<style scoped>
.btn{
   width: 450px;
}
.col{
    margin: 0px;
}
.row{
    margin: 0px;
}

#nav{
    margin-top: -80px;
}
</style>