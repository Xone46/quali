<template>
    <div class="row">
        <div class="col-1"></div>
        <div class="col">
                <div id="nav">
                     <router-link to="/equipements"  v-if=" this.$route.path ==='/equipements'">  Ajouter un 'appareil(s) , Équipement(s) ou Installation(s) du site   </router-link>
                </div>  
                    <div class="alert alert-primary" role="alert" v-if="form.flag === 'succes'">
                    Vous avez été enregistré avec succès 
                    </div>
                    <div class="alert alert-danger" role="alert" v-if="form.flag === 'echec'">
                    Malheureusement, le processus n'a pas enregistré !
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
                    <input type="text" class="form-control" v-model="form.localisation"  >
                </div>
                <div class="col-md-3">
                    <label for="inputPassword2" class="form-label">Contrôle</label>
                    <input type="text" class="form-control" v-model="form.controle" >
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
                    <button type="submit" class="btn btn-primary mb-3 " v-on:click="onSubmit()">Créer</button>
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
                intervention_id :'',
                type : '',
                mission : '',
                constructeur : '',
                num_serie : '',
                num_interne : '',
                localisation : '',
                controle : '',
                minute : '',
                appareil_non_controle : '',
                flag : null


            }
        }
    },

    created(){
        this.form.constructeur = sessionStorage.getItem('constructeur');
        this.form.intervention_id = sessionStorage.getItem('KeyCreateIntervention');
        

        console.log(this.form.constructeur)
        console.log(this.form.intervention_id )
    },

    methods :{
        retour(){
            
            sessionStorage.removeItem('KeyCreateIntervention');
            this.$router.push('intervention'); 
            
        },

onSubmit(){
    
            const doc = {
                _id: new Date().toISOString(),
                intervention_id :  this.form.intervention_id,
                type :this.form.type,
                mission : this.form.mission,
                constructeur : this.form.constructeur,
                num_serie : this.form.num_serie,
                num_interne : this.form.num_interne,
                localisation : this.form.localisation,
                controle : this.form.controle,
                minute : this.form.minute,
                appareil_non_controle : this.form.appareil_non_controle,

            };

equipements.put(doc).then((res) => {
    console.log("Document inserted OK"+res);

             
                this.form.type = '',
                this.form.mission = '',
                this.form.num_serie = '',
                this.form.num_interne = '',
                this.form.localisation = '',
                this.form.controle = '',
                this.form.minute = '',
                this.form.appareil_non_controle = ''


            }).catch((err) => {
                console.error(err);
                this.form.flag = 'echec' 
            });

             this.form.flag = 'succes' 
          
    },
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