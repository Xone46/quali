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

  <div class="content">


    <h3>A. RENSEIGNEMENTS GENERAUX</h3>
  <ul>

  <li>
      Constructeur :
      <input class="input" type="text"  v-model="form.nom" disabled>
  </li>
    <li>
      Type constructeur(Plaque) :
      <input class="input" type="text" name="" v-model="form.TypeConstructeur">
    </li>
    <li>
      Année de mise en service (Plaque constructeur):
      <input class="input" type="text"  v-model="form.AnneeMiseService">
    </li>
    <li>
      Numéro(s) de série (plaque constructeur) :
      <input class="input" type="text"  v-model="form.NumeroSerie">
      </li>
    <li>
      Numéro(s) interne(s) :
      <ul>
        <li>
          <input class="one-nested-input" type="radio" @click="FunctionNumeroIntern(false)" value="Sans Object" v-model="form.NumeroInterne">
          Sans objet
        </li>
        <li>
          <input class="one-nested-input" type="radio"  @click="FunctionNumeroIntern(true)" v-model="form.NumeroInterne">
          N°: 
          <input class="input" type="text" v-if="FlagNumeroIntern" v-model="form.NumeroInterne">
        </li>
      </ul>

    </li>
    <li>
      Localisation de(s) l’appareil (s) lors de la visite :
      <input class="input" type="text"  v-model="form.LocalisationAppareil" >
    </li>
    <li>Type d’appareil
      <ul>
        <li>
          <input class="one-nested-input" type="radio"  value="Elévateur Gerbeur a conducteur porté" v-model="form.TypeAppareil"  @click="FunctionTypeAppareil(false)" checked>
          Elévateur Gerbeur a conducteur porté
        </li>
        <li>
          <input class="one-nested-input" type="radio" value="Elévateur Gerbeur a conducteur accompagnant" v-model="form.TypeAppareil" @click="FunctionTypeAppareil(false)">
          Elévateur Gerbeur a conducteur accompagnant
        </li>
        <li>
          <input class="one-nested-input" type="radio" value="Elévateur gerbeur tout terrain" v-model="form.TypeAppareil" @click="FunctionTypeAppareil(false)">
          Elévateur gerbeur tout terrain
        </li>
        <li>
          <input class="one-nested-input" type="radio" value="De manutention automoteur à conducteur porté (porteur, tracteur, pousseur)" v-model="form.TypeAppareil" @click="FunctionTypeAppareil(false)">
          De manutention automoteur à conducteur porté (porteur, tracteur, pousseur 
        </li>
        <li>
          <input class="one-nested-input" type="radio" value="" @click="FunctionTypeAppareil(true)" v-model="form.TypeAppareil">
          Autre :
          <input class="input" type="text"  v-if="FlagTypeAppareil" v-model="form.TypeAppareil">
        </li>
      </ul>
    </li>

    <li>
      Mise en service
      <ul>
        <li>
          <input class="one-nested-input" type="radio" value="Rapport de vérification avant mise ou remise en service" v-model="form.MiseService" @click="FunctionMiseService(false)">
          Rapport de vérification avant mise ou remise en service 
        </li>
        <li>
          <input class="one-nested-input" type="radio" value="Epreuves : Réalisées le " v-model="form.MiseService" @click="FunctionMiseService(false)">
          Epreuves : Réalisées le 
           <input class="input" type="text"  v-if="FlagMiseService" v-model="form.MiseService">  
        </li>
        <li>
          <input class="one-nested-input" type="radio" value="Epreuves : Absence de renseignement " v-model="form.MiseService" @click="FunctionMiseService(false)">
          Epreuves : Absence de renseignement 
        </li>
        <li>
          <input class="one-nested-input" type="radio" value="Sans objet" v-model="form.MiseService" @click="FunctionMiseService(false)">
           Sans objet 
        </li>
      </ul>
    </li>

    <li>
      Date de la dernière vérification périodique :
          <ul>
            <li>
              <input class="one-nested-input" type="radio" value="Absence de renseignement" v-model="form.DateDerniereVerificationPeriodique" @click="FunctionDateDerniereVerificationPeriodique(false)">
              Absence de renseignement :  
              </li>
            <li>
              <input class="one-nested-input" type="radio" value="" @click="FunctionDateDerniereVerificationPeriodique(true)" v-model="form.DateDerniereVerificationPeriodique">
              Effectuée le:
              <input class="input" type="text"  v-if="FlagDateDerniereVerificationPeriodique" v-model="form.DateDerniereVerificationPeriodique">  
            </li>
            <li>
      Effectuée le :
              <ul>
                <li>
                    <input class="tow-nested-input" type="radio" value="Présenté" v-model="form.Effectuee">
                    Présenté
                </li>
                <li>

                </li>
              </ul>
            </li>

          </ul>
    </li>

    <li>
      Essais en charge :
      <ul>
        <li>
          <input class="one-nested-input" type="radio" value="Réalisé avec la Charge maximale utile" v-model="form.EssaisCharge" @click="FunctionEssaisCharge(false)">
          Réalisé avec la Charge maximale utile
        </li>
        <li>
          <input class="one-nested-input" type="radio"  value="" v-model="form.EssaisCharge"  @click="FunctionEssaisCharge(true)">
          Réalisé sous charge de (kg) :
          <input class="input" type="text" v-if="FlagEssaisCharge" v-model="form.EssaisCharge" >
        </li>
        <li>
          <input class="one-nested-input" type="radio" value="Absence de charge pour réaliser les essais" v-model="form.EssaisCharge" @click="FunctionEssaisCharge(false)">
          Absence de charge pour réaliser les essais
        </li>
        <li>
          <input class="one-nested-input" type="radio" value="Absence de tableau des charges pour réaliser les essais" v-model="form.EssaisCharge" @click="FunctionEssaisCharge(false)">
          Absence de tableau des charges pour réaliser les essais
        </li>
        <li>
          <input class="one-nested-input" type="radio" value="Non réalisé. Voir observation critique" v-model="form.EssaisCharge" @click="FunctionEssaisCharge(false)">
          Non réalisé. Voir observation critique
          <br>
          <br>
          <p>
            (Les 4 dernières options conduisent à faire une observation) 
          </p>
        </li>
      </ul>
    </li>

    <li>
        Modification(s) apportée(s) ou autre(s) remarque(s) éventuelle(s) concernant l’appareil examiné :
        <ul>
          <li>
              <input class="one-nested-input" type="radio" value="Sans objet" v-model="form.Mar" @click="FunctionMar(false)">
              Sans objet
          </li>
          <li>
              <input class="one-nested-input" type="radio" value="" v-model="form.Mar" @click="FunctionMar(true)">
              Description :
              <input class="input" type="text" v-if="FlagMar" v-model="form.Mar">
          </li>
        </ul>
    </li>

  </ul>
  <p>
    La vérification des caractéristiques mécaniques du sol, des supports, massifs,
    ancrages, fixations ainsi que des éléments constitutifs des assemblages et, le cas 
    échéant, de leur couple de serrage est exclue de la mission.
  </p>

 
  <button type="button" class="btn btn-primary btn-sm" v-on:click='valider()'>Valider</button>
  <button type="button" class="btn btn-danger btn-sm" v-on:click='update()'>Update</button>
  <button type="button" class="btn btn-danger btn-sm" v-on:click='retour()'>Retour</button>
  <button type="button" class="btn btn-danger btn-sm" v-on:click='quitter()'>Quitter</button>
  <br>

  </div>
</div>

</template>

<script>

 import users from '../db/users'
 import rapports from '../db/rapports'






export default {
  name: 'A',
  data() {

      return {

         form : {

                nom: '',
                prenom: '',
                Constructeur :'',
                TypeConstructeur : '',
                AnneeMiseService:'',
                NumeroSerie: '',
                NumeroInterne: '',
                LocalisationAppareil: '',
                TypeAppareil: '',
                MiseService: '',
                DateDerniereVerificationPeriodique : '',
                Effectuee : '',
                EssaisCharge: '',
                Mar: '',
                flag:"",
                etapA : "",
                 rev : ""
               
         },
         
         auth_emp : '',
         auth_admin : '',
         KeyRapportEquipement : '',
         FlagNumeroIntern : true,
         FlagTypeAppareil : true,
         FlagMiseService : true,
         FlagDateDerniereVerificationPeriodique : true,
         FlagEssaisCharge : true,
         FlagMar : true ,
         FlagColorA : false,
         FlagColorB : false,
         FlagColorC : false,
         FlagColorD : false,
         id : ""      
         }
              
       
      },


created(){

//Auth Admin
  if(sessionStorage.getItem('auth_admin') == 1)
    {
      this.auth_admin = 'Admin' 
      this.form.nom = "Admin"  
      this.KeyRapportEquipement = sessionStorage.getItem('KeyRapportEquipement')
    }

//Auth Employe
  if(sessionStorage.getItem('auth_emp') == 1)
    {
        this.auth_emp = sessionStorage.getItem('id')
        this.KeyRapportEquipement = sessionStorage.getItem('KeyRapportEquipement')

        // get Info User
        users.get(this.auth_emp).then((doc) => {

                 this.form.nom = doc.nom,
                 this.form.prenom = doc.prenom

            }).catch((err) => {
                console.error(err);
            });

    }
// Get rapport Specfique
rapports.allDocs({ include_docs: true, descending: true }).then(response => {

      response.rows.forEach((e) => {

  if(this.KeyRapportEquipement == e.doc.KeyRapportEquipement){   

                this.form.etapA = e.doc.etapA, 
                this.id = e.doc._id,
                this.form.Constructeur = e.doc.Constructeur,
                this.form.TypeConstructeur = e.doc.TypeConstructeur,
                this.form.AnneeMiseService= e.doc.AnneeMiseService,
                this.form.NumeroSerie= e.doc.NumeroSerie,
                this.form.NumeroInterne= e.doc.NumeroInterne,
                this.form.LocalisationAppareil= e.doc.LocalisationAppareil,
                this.form.TypeAppareil= e.doc.TypeAppareil,
                this.form.MiseService = e.doc.MiseService,
                this.form.DateDerniereVerificationPeriodique = e.doc.DateDerniereVerificationPeriodique,
                this.form.Effectuee = e.doc.Effectuee,
                this.form.EssaisCharge = e.doc.EssaisCharge,
                this.form.Mar=e.doc.Mar
                this.form.rev = e.doc._rev

                 // Condition pour affichage Les pages 
                  if(e.doc.etapA == true){
                            this.FlagColorA = true 
                      }
                  if(e.doc.etapB == true){
                            this.FlagColorB = true 
                      }
                  if(e.doc.etapC == true){
                            this.FlagColorC = true 
                      }            
                  if(e.doc.etapD == true){
                            this.FlagColorD = true 
                      } 


  }  
 
// Get id Rapport pour Etape B
  sessionStorage.setItem('IdRapportEquipement',this.id) 
    });

}).catch(error => {console.log(error)});


},

methods: {


    valider(){
           const doc = {
                _id: new Date().toISOString(),
                Constructeur:  this.form.nom,
                KeyRapportEquipement : this.KeyRapportEquipement,
                TypeConstructeur:  this.form.TypeConstructeur,
                AnneeMiseService:this.form.AnneeMiseService,
                NumeroSerie: this.form.NumeroSerie,
                NumeroInterne: this.form.NumeroInterne,
                LocalisationAppareil: this.form.LocalisationAppareil,
                TypeAppareil: this.form.TypeAppareil,
                MiseService: this.form.MiseService,
                DateDerniereVerificationPeriodique : this.form.DateDerniereVerificationPeriodique,
                Effectuee : this.form.Effectuee,
                EssaisCharge: this.form.EssaisCharge,
                Mar: this.form.Mar,  
                etapA : true              
            };

            rapports.put(doc).then((res) => {
                console.log("Document inserted OK"+res)
                sessionStorage.setItem('IdRapportEquipement',doc._id) 
                this.$router.push('b');
            }).catch((err) => {
                console.error(err);
            });
             
        
            
           
          },

  update(){
 
     
        rapports.get(this.id).then((doc) => {

                doc.Constructeur =   this.form.nom,
                doc.KeyRapportEquipement  =  this.KeyRapportEquipement,
                doc.TypeConstructeur =   this.form.TypeConstructeur,
                doc.AnneeMiseService = this.form.AnneeMiseService,
                doc.NumeroSerie =  this.form.NumeroSerie,
                doc.NumeroInterne =  this.form.NumeroInterne,
                doc.LocalisationAppareil =  this.form.LocalisationAppareil,
                doc.TypeAppareil =  this.form.TypeAppareil,
                doc.MiseService =  this.form.MiseService,
                doc.DateDerniereVerificationPeriodique  =  this.form.DateDerniereVerificationPeriodique,
                doc.Effectuee  =  this.form.Effectuee,
                doc.EssaisCharge =  this.form.EssaisCharge,
                doc.Mar =  this.form.Mar,  
                doc.etapA  =  true       

         rapports.put(doc).then((res)=>{       
                    console.log(res)
                    this.$router.push('/a')

         }).catch((err)=>{
                 console.error(err);
         });              
                           
    });


  },     
  FunctionNumeroIntern(e) { this.FlagNumeroIntern = e},
  FunctionTypeAppareil(e) { this.FlagTypeAppareil = e},
  FunctionMiseService(e) {this.FlagMiseService = e},
  FunctionDateDerniereVerificationPeriodique(e) {this.FlagDateDerniereVerificationPeriodique = e},
  FunctionEssaisCharge(e) {this.FlagEssaisCharge = e},
  FunctionMar(e) {this.FlagMar = e},

  A() { this.$router.push('a');},
  B() { this.$router.push('b');},
  C() { this.$router.push('c');},
  D() { this.$router.push('d');},

  retour(){

    this.$router.push('equipements');
    this.KeyRapportEquipement = ''
    sessionStorage.removeItem('KeyRapportEquipement')
    sessionStorage.removeItem('IdRapportEquipement') 

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
<style scoped>
h3{
  margin-left: 30px;
}
.content{
  margin-left: 50px;
}
input{
  width:400px;
}
li{
  margin-bottom: 15px;
}
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