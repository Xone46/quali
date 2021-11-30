<template>
    <div class="row">
                <div class="col"></div>
                <div class="col">
  
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
        name : 'Compte',
        data(){
            return {
                auth : ''
            }

        },

        methods : {
                  deconnexion() {

                      sessionStorage.removeItem('id');
                      sessionStorage.removeItem('auth_emp');

                     window.location.href = '/';
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