<template>
    <div class="row">
                <div class="col"></div>
                <div class="col">
  
                    <router-link type="button" class="btn btn-outline-success btn-lg btn-block" to='/create'>Création un Compte</router-link><br><br>
                    <router-link type="button" class="btn btn-outline-success btn-lg btn-block" to='/gerer'>Gérer Les comptes</router-link><br><br>
                    <router-link type="button" class="btn btn-outline-success btn-lg btn-block" to='/intervention'>Intervention en Cours</router-link><br><br>
                    <router-link type="button" class="btn btn-outline-success btn-lg btn-block" to='/transferer'>Transférer des Minutes</router-link><br><br>
                    <router-link type="button" class="btn btn-outline-success btn-lg btn-block" to='/previsualisation'>Prévisualisation Rapports</router-link><br><br>
                    <router-link type="button" class="btn btn-outline-success btn-lg btn-block" to='/modification'>Modification Rapports</router-link><br><br>
                    <router-link type="button" class="btn btn-outline-success btn-lg btn-block" to='/sauvegarde'>Sauvegarde de Secours </router-link><br><br>
                    <button style="margin:5px;" type="submit" class="btn btn-danger mb-3 " v-on:click="deconnexion()">Deconnexion</button>
                </div>
                <div class="col"></div>
    </div>
</template>

<script>
    export default {
    name: 'Admin',
    data() {
      return {
      }
    },
    methods : {
        deconnexion() {

             sessionStorage.setItem('auth_admin',0);
             window.location.href = '/';
        }
   
    },

        
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