<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/qualiconsult.jpg">
    <HelloWorld msg="Bienvenue à QualiConsult Exploitation Maroc"/><br>

    <form class="row g-3 d-flex justify-content-center" @submit="onSubmit" @reset="onReset">
        <div class="col-auto">
          <label for="staticEmail2" class="visually-hidden">Email</label>
          <input type="text" class="form-control" id="inputPassword1" placeholder="Identité" v-model="form.identite">
        </div>
        <div class="col-auto">
          <label for="inputPassword2" class="visually-hidden">Password</label>
          <input type="password" class="form-control" id="inputPassword2" placeholder="Mot de passe" v-model="form.pass">
        </div>
        <div class="col-auto">
          <button style="margin:5px;" type="submit" class="btn btn-primary mb-3 ">Confirmer l'identité</button>
          <button style="margin:5px;" type="submit" class="btn btn-danger mb-3">réinitialiser</button>
        </div>
    </form>
  </div>

</template>

<style scoped>
#btn {
margin: 10px;
}
img {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

</style>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

import users from '../db/users'

export default {
  name: 'Home',
  components: {
    HelloWorld
  },
    data() {
      return {
        form: {
          identite: '',
          pass: '',
          flag: false,
        }
      }
    },
    created(){
      if(sessionStorage.getItem('auth_admin') == 1){
        this.$router.push('admin');
      }
      if(sessionStorage.getItem('auth_emp') == 1)
      {
        this.$router.push('compte');
      }
    },
    methods: {
      onSubmit(evt) {
        evt.preventDefault()
        if(this.form.identite == "eng.jamal" && this.form.pass == 2021) {
          sessionStorage.setItem('auth_admin',1);

          this.$router.push('admin');


          }
         
        users.allDocs({ include_docs: true, descending: true })
        .then(response => {
              response.rows.forEach((e) => { 

              if(e.doc.identite == this.form.identite && e.doc.pass == this.form.pass)
              {
                  sessionStorage.setItem( 'auth_emp' , 1);
                  sessionStorage.setItem( 'id' ,e.doc._id);

                  this.$router.push('compte');          
              }             
                
            });
        })
        .catch(error => {console.log(error)});
      },



      onReset(evt){
        evt.preventDefault()
        this.form.identite = ""
        this.form.pass = ""
        this.form.flag = false

      },
    },

}
</script>
