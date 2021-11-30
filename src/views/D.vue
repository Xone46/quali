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


  <h3>D. LISTE RECAPITULATIVE DES OBSERVATIONS</h3>
  <p>Les vérifications de l’appareil réalisées dans les limites de la présente mission ont fait apparaître l’(es) observation(s) ou anomalie(s) suivante(s) à laquelle (auxquelles) il convient de remédier:</p>
      <form>
            <br>
            <div v-for="(item, key, index) in TabObs" :key="index">
                  <div class="form-group">
                    <br>
                    <label for="exampleFormControlTextarea1">{{item}}</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" v-model="nameObservation[key]"></textarea>
                    {{nameObservation[key]}}
                  </div>
            </div>
            <br>
              <button type="submit" class="btn btn-primary" @click="e()">Valider</button>
              <button type="submit" class="btn btn-primary" @click="retour()">Retour</button>
              <button type="button" class="btn btn-danger btn-sm" v-on:click='quitter()'>Quitter</button>


      </form>      

  <br>

</div> 


<br>
</div>

</template>

<script>

 import rapports from '../db/rapports'

export default {
  data() {
     return {
        FlagColorA : false,
        FlagColorB : false,
        FlagColorC : false,
        FlagColorD : false,
        TabObs  : [],
        nameObservation : [],
        refObservation : []
     }
  },
  created(){

this.IdRapportEquipement = sessionStorage.getItem('IdRapportEquipement')
rapports.get(this.IdRapportEquipement).then((doc) => {

            for(let i = 0 ; i < doc.C1.length ; i++) {
                let j = i+1
                doc.C1[i].O == true ? this.TabObs.push("C1-"+j+""): false
            }
             

            for(let i = 0 ; i < doc.C2.length ; i++) {
                let j = i+1
                doc.C2[i].O == true ? this.TabObs.push("C2-"+j+"") : false
            }

            for(let i = 0 ; i < doc.C3.length ; i++) {
                let j = i+1
                doc.C3[i].O == true ? this.TabObs.push("C3-"+j+"") : false
            }

            for(let i = 0 ; i < doc.C4.length ; i++) {
                let j = i+1
                doc.C4[i].O == true ? this.TabObs.push("C4-"+j+"") : false
            }

            
            for(let i = 0 ; i < doc.C5.length ; i++) {
                let j = i+1
                doc.C5[i].O == true ? this.TabObs.push("C5-"+j+"") : false
            }

           for(let i = 0 ; i < doc.C6.length ; i++) {
                let j = i+1
                doc.C6[i].O == true ? this.TabObs.push("C6-"+j+"") : false
            }

            for(let i = 0 ; i < doc.C7.length ; i++) {
                let j = i+1
                doc.C7[i].O == true ? this.TabObs.push("C7-"+j+""): false
            }

            for(let i = 0 ; i < doc.C8.length ; i++) {
                let j = i+1
                doc.C8[i].O == true ? this.TabObs.push("C8-"+j+"") : false
            }

            for(let i = 0 ; i < doc.C9.length ; i++) {
                let j = i+1
                doc.C9[i].O == true ? this.TabObs.push("C9-"+j+"") : false
            }

            for(let i = 0 ; i < doc.C10.length ; i++) {
                let j = i+1
                doc.C10[i].O == true ? this.TabObs.push("C10-"+j+"") : false
            }

            for(let i = 0 ; i < doc.C11.length ; i++) {
                let j = i+1
                doc.C11[i].O == true ? this.TabObs.push("C11-"+j+"") : false
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
e(){

this.IdRapportEquipement = sessionStorage.getItem('IdRapportEquipement')
rapports.get(this.IdRapportEquipement).then((doc) => {

            
               doc.nameObservation = this.nameObservation
               doc.refObservation = this.TabObs
               doc.etapD = true

    return rapports.put(doc);  
    
});
        
        this.$router.push('e');
    },

  A() { this.$router.push('a');},
  B() { this.$router.push('b');},
  C() { this.$router.push('c');},
  D() { this.$router.push('d');},
  retour(){
    this.$router.push('c');
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