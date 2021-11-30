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

  <h3>B. DESCRIPTION DE L’APPAREIL VERIFIE</h3>
  <ul>

    <li>
      MARQUAGE
      <ul>
        <li>
          <input class="one-nested-input" type="radio" v-model="form.MARQUAGE" value="CE">
          CE
        </li>
        <li>
          <input class="one-nested-input" type="radio" v-model="form.MARQUAGE" value="Epsilon">
          Epsilon
        </li>
        <li>
          <input class="one-nested-input" type="radio" v-model="form.MARQUAGE" value="Non CE ni Epsilon">
          Non CE ni Epsilon
        </li>
        <li>
          <input class="one-nested-input" type="radio" v-model="form.MARQUAGE" value="Absence de marquage"> 
          Absence de marquage
        </li>
      </ul>
    </li>

    <li>
      CARACTERISTIQUES DIMENSIONNELLES ET DE CHARGE
      <ul>
        <li>
          Charge maximale utile (kg)
          <input class="input" type="text" v-model="form.chu">
        </li>
        <li>
          Distance du centre de gravité en mm
          <input class="input" type="text" v-model="form.dcg">
        </li>
        <li>
          Charge maximale utile (kg) a hauteur de levée maximale
          <input class="input" type="text" v-model="form.cmu">
        </li>
        <li>
          Hauteur de levée maximale (m)
          <input class="input" type="text" v-model="form.hlm">
        </li>
        <li>
          Pour chariots sans marquage (ni CE ni Epsilon) Charge maximale mat incliné et a la hauteur maximale (m)
          <input class="input" type="text" v-model="form.pcm">
        </li>
      </ul>
    </li>

    <li>
      MECANISMES:
      <ul>
        <li>
          Levage :
          <ul>
            <li>
              <input class="tow-nested-input" type="radio" v-model="form.Levage" value="" @click="check.isShow.nv0 = !check.isShow.nv0">
              Nombre de vérins :
              <input class="input" type="text" v-model="form.Levage" v-if="check.isShow.nv0">
            </li>
            <li>
              <input class="tow-nested-input" type="radio" v-model="form.Levage" value = "Sans Chaines  /  Câbles" @click="check.isShow.nv0 = !check.isShow.nv0">
              Sans Chaines  /  Câbles
            </li>
          </ul>
        </li>
        <li>
          Inclinaison – Relevage :
          <ul>
            <li>
              <input class="tow-nested-input" type="radio" v-model="form.InclinaisonRelevage" value="" @click="check.isShow.nv1 = !check.isShow.nv1">
              Nombre de vérins :
              <input class="input" type="text" v-model="form.InclinaisonRelevage" v-if="check.isShow.nv1">
            </li>
            <li>
              <input class="tow-nested-input" type="radio" v-model="form.InclinaisonRelevage" value="Sans" @click="check.isShow.nv1 = !check.isShow.nv1">
              Sans
            </li>
          </ul>
        </li>
        <li>
          Rétractation :
          <ul>
            <li>
              <input class="tow-nested-input" type="radio" v-model="form.Retractation"  value="" @click="check.isShow.nv2 = !check.isShow.nv2">
              Nombre de vérins :
              <input class="input" type="text" v-model="form.Retractation"  v-if="check.isShow.nv2">
            </li>
            <li>
              <input class="tow-nested-input" type="radio" v-model="form.Retractation" value="Sans" @click="check.isShow.nv2 = !check.isShow.nv2">
              Sans
            </li>
          </ul>
        </li>
      </ul>
    </li>

    <li>
      SOURCE D’ENERGIE :
      <ul>
        <li>
              <input class="one-nested-input" type="radio" value ="Electrique" v-model="form.SourceEnergie">
              Electrique
        </li>
        <li>
              <input class="one-nested-input" type="radio" value ="Thermique" v-model="form.SourceEnergie">
              Thermique
        </li>
        <li>
              <input class="one-nested-input" type="radio" value ="Diesel" v-model="form.SourceEnergie">
              Diesel
        </li>
        <li>
              <input class="one-nested-input" type="radio" value ="Gaz" v-model="form.SourceEnergie">
              Gaz
        </li>
        <li>
              <input class="one-nested-input" type="radio" value ="Essence" v-model="form.SourceEnergie">
              Essence
        </li>
      </ul>
    </li>

    <li>
      TRANSLATION :
      <ul>
        <li>
              <input class="one-nested-input" type="radio" v-model="form.TRANSLATION" value="Motorisée">
              Motorisée
        </li>
        <li>
              <input class="one-nested-input" type="radio" v-model="form.TRANSLATION" value="Manuelle">
              Manuelle
        </li>
      </ul>
    </li>

    <li>
      DISPOSITIFS D’ELEVATION
      <ul>
        <li>
          Mat :
          <ul>
            <li>
              <input class="tow-nested-input" type="radio" value ="Simple" v-model="form.Mat">
              Simple
              <input class="input" type="text" v-bind="form.MatValue">
            </li>
            <li>
              <input class="tow-nested-input" type="radio" value ="Duplex" v-model="form.Mat">
              Duplex
              <input class="input" type="text" v-bind="form.MatValue">
            </li>
            <li>
              <input class="tow-nested-input" type="radio" value ="Triplex" v-model="form.Mat">
              Triplex
              <input class="input" type="text" v-bind="form.MatValue">
            </li>
            <li>
              <input class="tow-nested-input" type="radio" value ="Quadruple" v-model="form.Mat">
              Quadruple
              <input class="input" type="text" v-bind="form.MatValue">
            </li>
            <li>
              <input class="tow-nested-input" type="radio" value ="Autre" v-model="form.Mat">
              Autre
              <input class="input" type="text" v-bind="form.MatValue">
            </li>
          </ul>
        </li>
        <li>
          Chaînes :
          <ul>
            Chaines de levée libre
            <li>
              <input class="tow-nested-input" type="radio" v-model="form.ChainesLibre" value= "">
              Sans objet
            </li>
            <li>
              <input class="tow-nested-input" type="radio" v-model="form.ChainesLibre" value= "A maille jointives">
              A maille jointives
            </li>
            <li>
              <input class="tow-nested-input" type="radio" v-model="form.ChainesLibre" value= "A rouleau">
              A rouleau
            </li>
            <li>
              <input class="one-nested-input" type="radio" v-model="form.ChainesLibre" value= "Combinaison :">
              Combinaison :
              <input class="input" type="text" v-model="form.ChainesLibreValue">
            </li>
            <li>
              <input class="one-nested-input" type="radio" v-model="form.ChainesLibre" value= "Nombre :">
              Nombre :
              <input class="input" type="text" v-model="form.ChainesLibreValue">
            </li>
            <li>
              <input class="one-nested-input" type="radio" v-model="form.ChainesLibre" value= "Pas théorique :">
              Pas théorique :
              <input class="input" type="text" v-model="form.ChainesLibreValue">
            </li>
          </ul>

          <ul>
            Chaines de levée mât
            <li>
              <input class="tow-nested-input" type="radio" v-model="form.ChainesMat" value ="Sans objet">
              Sans objet
            </li>
            <li>
              <input class="tow-nested-input" type="radio" v-model="form.ChainesMat" value="A maille jointives">
              A maille jointives
            </li>
            <li>
              <input class="tow-nested-input" type="radio" v-model="form.ChainesMat" value="A rouleau">
              A rouleau
            </li>
            <li>
              <input class="one-nested-input" type="radio" v-model="form.ChainesMat" value="Combinaison :">
              Combinaison :
              <input class="input" type="text" v-model="form.ChainesMatValue">
            </li>
            <li>
              <input class="one-nested-input" type="radio" v-model="form.ChainesMat" value="Nombre :">
              Nombre :
              <input class="input" type="text" v-model="form.ChainesMatValue">
            </li>
            <li>
              <input class="one-nested-input" type="radio" v-model="form.ChainesMat" value="Pas théorique :">
              Pas théorique :
              <input class="input" type="text" v-model="form.ChainesMatValue">
            </li>
          </ul>
        </li>

        <li>
          Câbles de levée mat :
          <ul>
            <li>
              <input class="one-nested-input" type="radio" value="Sans objet" v-model="form.CablesLevee">
              Sans objet
            </li>
            <li>
              <input class="one-nested-input" type="radio" value="Nombre" v-model="form.CablesLevee">
              Nombre
              <input class="input" type="text" v-model="form.CablesLeveeValue">
            </li>
            <li>
              <input class="one-nested-input" type="radio" value="Diamètre théorique" v-model="form.CablesLevee">
              Diamètre théorique
              <input class="input" type="text" v-model="form.CablesLeveeValue">
            </li>
            <li>
              <input class="one-nested-input" type="radio" value="Diamètre mesuré" v-model="form.CablesLevee">
              Diamètre mesuré
              <input class="input" type="text" v-model="form.CablesLeveeValue">
            </li>
          </ul>
        </li>
        <li>
          Sangles de levage :
          <ul>
            <li>
              <input class="one-nested-input" type="radio" v-model="form.SanglesLevage" value = "Sans objet">
              Sans objet
            </li>
            <li>
              <input class="one-nested-input" type="radio" v-model="form.SanglesLevage" value = "Nombre">
              Nombre
              <input class="input" type="text" v-model="form.SanglesLevageValue">
            </li>
            <li>
              <input class="one-nested-input" type="radio" v-model="form.SanglesLevage" value = "Dimension théorique">
              Dimension théorique
              <input class="input" type="text" v-model="form.SanglesLevageValue">
            </li>
          </ul>
        </li>
      </ul>
    </li>
    <li>
      DISPOSITIF DE PREHENSION
      <ul>
        <li>
              <input class="one-nested-input" type="radio" v-model="form.DISPOSITIF" value="a">
               Fourches
              <input class="input" type="text" v-model="form.DISPOSITIFvalueFourches">  
               Nombre de bras :
              <input class="input" type="text" v-model="form.DISPOSITIFvalueNB" style="width:40px;">
              Longueur (m) :
              <input class="input" type="text" v-model="form.DISPOSITIFvalueL" style="width:40px;">
              CMU X 2(Kg) :
              <input class="input" type="text" v-model="form.DISPOSITIFvalueKg" style="width:40px;">
   
        </li>
        <li>
              <input class="one-nested-input" type="radio" v-model="form.DISPOSITIF" value="b">
               Pinces CMU (Kg) :
              <input class="input" type="text" v-model="form.DISPOSITIFvaluePinces">
        </li>
        <li>
              <input class="one-nested-input" type="radio" v-model="form.DISPOSITIF" value="c">
               Autre:
              <input class="input" type="text" v-model="form.DISPOSITIFvalueAutre">  
               CMU (Kg)
              <input class="input" type="text" v-model="form.DISPOSITIFvalueCMU">
   
        </li>
      </ul>
    </li>
    <li>
      EQUIPEMENTS INTERCHANGEABLES
      <ul>
        <li>
               <input class="one-nested-input" type="radio" value = "Sans" v-model="form.EQUIPEMENTS">
               Sans
        </li>
        <li>
               <input class="one-nested-input" type="radio" value = "Potence" v-model="form.EQUIPEMENTS">
               Potence
        </li>
        <li>
               <input class="one-nested-input" type="radio" value = "Tablier a déplacement latéral" v-model="form.EQUIPEMENTS">
               Tablier a déplacement latéral
        </li>
        <li>
               <input class="one-nested-input" type="radio" value = "Tablier a déplacement latéral" v-model="form.EQUIPEMENTS">
               Rallonges de fourches
        </li>
        <li>
               <input class="one-nested-input" type="radio" value = "Tablier rotatif" v-model="form.EQUIPEMENTS">
               Tablier rotatif
        </li>
        <li>
               <input class="one-nested-input" type="radio" value = "Autre:" v-model="form.EQUIPEMENTS">
               Autre:
               <input class="input" type="text" v-model="form.EQUIPEMENTSvalue">
        </li>
         <li>
               <input class="one-nested-input" type="radio" value = "Si présence Identification de l’équipement concerné :" v-model="form.EQUIPEMENTS">
               Si présence Identification de l’équipement concerné :
               <input class="input" type="text" v-model="form.EQUIPEMENTSvalue">
        </li>
      </ul>
    </li>
  </ul>


  


  <button type="button" class="btn btn-primary btn-sm" v-on:click='c()'>Valider</button>
  <button type="button" class="btn btn-primary btn-sm" v-on:click='retour()'>Retour</button>
  <button type="button" class="btn btn-danger btn-sm" v-on:click='quitter()'>Quitter</button>


  <br>

  </div>



</div>

</template>

<script>

 import rapports from '../db/rapports'



export default {
  name: 'B',
  data() {

      return {

        check : {
          isShow : {
            nv0 : true,
            nv1 : true,
            nv2 : true,
          }

        },
        

        form : {
          
              MARQUAGE : "",
              chu : "",
              dcg : "",
              cmu : "",
              hlm : "",
              pcm : "",
              Levage  : "",
              InclinaisonRelevage : "",
              Retractation : "",
              SourceEnergie : "",
              Mat : "",
              MatValue : "",
              ChainesLibre : "",
              ChainesLibreValue : "",
              ChainesMat : "",
              ChainesMatValue : "",
              CablesLevee : "",
              CablesLeveeValue : "",
              SanglesLevage : "",
              SanglesLevageValue : "",
              EQUIPEMENTS : "",
              EQUIPEMENTSvalue : "",
              DISPOSITIF :"",
              DISPOSITIFvalueFourches : "",
              DISPOSITIFvalueNB : "",
              DISPOSITIFvalueL : "",
              DISPOSITIFvalueKg : "",
              DISPOSITIFvalueAutre : "",
              DISPOSITIFvaluePinces : "",
              DISPOSITIFCMU : ""
        },

        IdRapportEquipement : "",
        FlagColorA : false,
        FlagColorB : false,
        FlagColorC : false,
        FlagColorD : false,
         }
              
       
      },


created(){
//Get idRapport 
this.IdRapportEquipement = sessionStorage.getItem('IdRapportEquipement') 
// Get rapport Specfique
rapports.allDocs({ include_docs: true, descending: true }).then(response => {

      response.rows.forEach((e) => {

  if(this.KeyRapportEquipement == e.doc.KeyRapportEquipement){   

               this.form.MARQUAGE = e.doc.MARQUAGE,
               this.form.chu =  e.doc.chu,
               this.form.dcg = e.doc.dcg,
               this.form.cmu = e.doc.cmu,
               this.form.hlm = e.doc.hlm,
               this.form.pcm = e.doc.pcm,
               this.form.Levage = e.doc.Levage,
               this.form.InclinaisonRelevage = e.doc.InclinaisonRelevage,
               this.form.Retractation = e.doc.Retractation,
               this.form.SourceEnergie = e.doc.SourceEnergie,
               this.form.Mat = e.doc.Mat,
               this.form.MatValue = e.doc.MatValue,
               this.form.ChainesLibre = e.doc.ChainesLibre,
               this.form.ChainesLibreValue = e.doc.ChainesLibreValue,
               this.form.ChainesMat = e.doc.ChainesMat,
               this.form.ChainesMatValue = e.doc.ChainesMatValue,
               this.form.CablesLevee = e.doc.CablesLevee,
               this.form.CablesLeveeValue = e.doc.CablesLeveeValue,
               this.form.SanglesLevage = e.doc.SanglesLevage,
               this.form.SanglesLevageValue = e.doc.SanglesLevageValue,
               this.form.EQUIPEMENTS = e.doc.EQUIPEMENTS,
               this.form.EQUIPEMENTSvalue = e.doc.EQUIPEMENTSvalue,
               this.form.DISPOSITIF = e.doc.DISPOSITIF,
               this.form.DISPOSITIFvalueFourches = e.doc.DISPOSITIFvalueFourches,
               this.form.DISPOSITIFvalueNB = e.doc.DISPOSITIFvalueNB,
               this.form.DISPOSITIFvalueL = e.doc.DISPOSITIFvalueL,
               this.form.DISPOSITIFvalueKg = e.doc.DISPOSITIFvalueKg ,
               this.form.DISPOSITIFvalueAutre = e.doc.DISPOSITIFvalueAutre,
               this.form.DISPOSITIFvaluePinces = e.doc.DISPOSITIFvaluePinces,
               this.form.DISPOSITIFCMU = e.doc.DISPOSITIFCMU 

              // verfie que etape A fini
              if(e.doc.etapA) {
                              this.FlagColorA  = true
                          } 
              // verfie que etape A fini
              if(e.doc.etapB) {
                              this.FlagColorB  = true
                          } 
              if(e.doc.etapC) {
                              this.FlagColorC  = true
                          } 
              if(e.doc.etapD) {
                              this.FlagColorD  = true
                          } 


  }  
 
    });

}).catch(error => {console.log(error)});




},

methods: {

c(){

this.IdRapportEquipement = sessionStorage.getItem('IdRapportEquipement')
rapports.get(this.IdRapportEquipement).then((doc) => {

               doc.MARQUAGE  = this.form.MARQUAGE,
               doc.chu  = this.form.chu,
               doc.dcg  = this.form.dcg,
               doc.cmu  = this.form.cmu,
               doc.hlm  = this.form.hlm,
               doc.pcm  = this.form.pcm,
               doc.Levage   = this.form.Levage,
               doc.InclinaisonRelevage  = this.form.InclinaisonRelevage,
               doc.Retractation  = this.form.Retractation,
               doc.SourceEnergie  = this.form.SourceEnergie,
               doc.Mat  = this.form.Mat ,
               doc.MatValue  = this.form.MatValue,
               doc.ChainesLibre  = this.form.ChainesLibre,
               doc.ChainesLibreValue  = this.form.ChainesLibreValue,
               doc.ChainesMat  = this.form.ChainesMat,
               doc.ChainesMatValue  = this.form.ChainesMatValue,
               doc.CablesLevee  = this.form.CablesLevee,
               doc.CablesLeveeValue  = this.form.CablesLeveeValue,
               doc.SanglesLevage  = this.form.SanglesLevage,
               doc.SanglesLevageValue  = this.form.SanglesLevageValue,
               doc.EQUIPEMENTS  = this.form.EQUIPEMENTS,
               doc.EQUIPEMENTSvalue  = this.form.EQUIPEMENTSvalue,
               doc.DISPOSITIF  =this.form.DISPOSITIF,
               doc.DISPOSITIFvalueFourches  = this.form.DISPOSITIFvalueFourches,
               doc.DISPOSITIFvalueNB  = this.form.DISPOSITIFvalueNB,
               doc.DISPOSITIFvalueL  = this.form.DISPOSITIFvalueL,
               doc.DISPOSITIFvalueKg  = this.form.DISPOSITIFvalueKg,
               doc.DISPOSITIFvalueAutre  = this.form.DISPOSITIFvalueAutre,
               doc.DISPOSITIFvaluePinces  = this.form.DISPOSITIFvaluePinces,
               doc.DISPOSITIFCMU  = this.form.DISPOSITIFCMU
               doc.etapB = true

    return rapports.put(doc);  
    
});
this.$router.push('c') 
                      },

  A() { this.$router.push('a');},
  B() { this.$router.push('b');},
  C() { this.$router.push('c');},
  D() { this.$router.push('d');},

  retour(){
    this.$router.push('a');
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