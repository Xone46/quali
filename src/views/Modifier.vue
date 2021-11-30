<template>
    <div class="row">
        <div class="col-1"></div>
        <div class="col">
                <div id="nav">
                     <router-link to="/modifier"  v-if=" this.$route.path ==='/modifier'">  Modification d'un Compte </router-link>
                </div>  
                    <div class="alert alert-primary" role="alert" v-if="form.flag === 'succes'">
                    A simple primary alert—check it out!
                    </div>
                    <div class="alert alert-danger" role="alert" v-if="form.flag === 'echec'">
                    A simple primary alert—check it out!
                    </div>
                <form class="row g-3">
                <div class="col-md-3">
                    <label for="inputEmail4" class="form-label" >Nom</label>
                    <input type="text" class="form-control" v-model="form.nom" >
                </div>
                <div class="col-md-3">
                    <label for="inputPassword4" class="form-label">Prénom</label>
                    <input type="text" class="form-control" v-model="form.prenom"  >
                </div>
                <div class="col-md-3">
                    <label for="inputPassword4" class="form-label">Téléphone</label>
                    <input type="text" class="form-control" v-model="form.telephone"  >
                </div>
                <div class="col-md-3">
                    <label for="inputPassword4" class="form-label">E-mail</label>
                    <input type="email" class="form-control" v-model="form.email"  >
                </div>
                <div class="col-md-3">
                    <label for="inputPassword4" class="form-label">Identité ou Référence</label>
                    <input type="text" class="form-control" v-model="form.identite"  >
                </div>
                <div class="col-md-3">
                    <label for="inputState" class="form-label">Spécialité</label>
                    <select id="inputState" class="form-select" v-model="form.specialite" >
                        <option selected>Choose...</option>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="C">C</option>
                        <option value="D">D</option>
                    </select>
                </div>
                <div class="col-md-3">
                    <label for="inputPassword1" class="form-label">Mot de Passe</label>
                    <input type="password" class="form-control" v-bind:value = form.pass>
                </div>
                <div class="col-md-3">
                    <label for="inputPassword2" class="form-label">Répéter Mot de Pass</label>
                    <input type="password" class="form-control" v-model="form.rpass" >
                </div>
                <div class="col-md-3">
                    <label for="inputPasswor3" class="form-label"> Date de naissance  </label>
                    <input type="date" class="form-control" v-model="form.naissance" >
                </div>
                <div class="col-9">
                    <label for="inputAddress" class="form-label">Address</label>
                    <input type="text" class="form-control"  placeholder="" v-model="form.adresse" >
                </div>
                <div class="col-md-3">
                    <label for="inputCity" class="form-label">Ville</label>
                    <input type="text" class="form-control"  v-model="form.ville" >
                </div>
                <div class="col-md-3">
                    <label for="inputState" class="form-label">Pays</label>
                    <select  class="form-select" v-model="form.pays" >
                        <option selected>Choose...</option>
                        <option value="Afganistan">Afghanistan</option>
                        <option value="Albania">Albania</option>
                        <option value="Algeria">Algeria</option>
                        <option value="American Samoa">American Samoa</option>
                        <option value="Andorra">Andorra</option>
                        <option value="Angola">Angola</option>
                        <option value="Anguilla">Anguilla</option>
                        <option value="Antigua & Barbuda">Antigua & Barbuda</option>
                        <option value="Argentina">Argentina</option>
                        <option value="Armenia">Armenia</option>
                        <option value="Aruba">Aruba</option>
                        <option value="Australia">Australia</option>
                        <option value="Austria">Austria</option>
                        <option value="Azerbaijan">Azerbaijan</option>
                        <option value="Bahamas">Bahamas</option>
                        <option value="Bahrain">Bahrain</option>
                        <option value="Bangladesh">Bangladesh</option>
                        <option value="Barbados">Barbados</option>
                        <option value="Belarus">Belarus</option>
                        <option value="Belgium">Belgium</option>
                        <option value="Belize">Belize</option>
                        <option value="Benin">Benin</option>
                        <option value="Bermuda">Bermuda</option>
                        <option value="Bhutan">Bhutan</option>
                        <option value="Bolivia">Bolivia</option>
                        <option value="Bonaire">Bonaire</option>
                        <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
                        <option value="Botswana">Botswana</option>
                        <option value="Brazil">Brazil</option>
                        <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
                        <option value="Brunei">Brunei</option>
                        <option value="Bulgaria">Bulgaria</option>
                        <option value="Burkina Faso">Burkina Faso</option>
                        <option value="Burundi">Burundi</option>
                        <option value="Cambodia">Cambodia</option>
                        <option value="Cameroon">Cameroon</option>
                        <option value="Canada">Canada</option>
                        <option value="Canary Islands">Canary Islands</option>
                        <option value="Cape Verde">Cape Verde</option>
                        <option value="Cayman Islands">Cayman Islands</option>
                        <option value="Central African Republic">Central African Republic</option>
                        <option value="Chad">Chad</option>
                        <option value="Channel Islands">Channel Islands</option>
                        <option value="Chile">Chile</option>
                        <option value="China">China</option>
                        <option value="Christmas Island">Christmas Island</option>
                        <option value="Cocos Island">Cocos Island</option>
                        <option value="Colombia">Colombia</option>
                        <option value="Comoros">Comoros</option>
                        <option value="Congo">Congo</option>
                        <option value="Cook Islands">Cook Islands</option>
                        <option value="Costa Rica">Costa Rica</option>
                        <option value="Cote DIvoire">Cote DIvoire</option>
                        <option value="Croatia">Croatia</option>
                        <option value="Cuba">Cuba</option>
                        <option value="Curaco">Curacao</option>
                        <option value="Cyprus">Cyprus</option>
                        <option value="Czech Republic">Czech Republic</option>
                        <option value="Denmark">Denmark</option>
                        <option value="Djibouti">Djibouti</option>
                        <option value="Dominica">Dominica</option>
                        <option value="Dominican Republic">Dominican Republic</option>
                        <option value="East Timor">East Timor</option>
                        <option value="Ecuador">Ecuador</option>
                        <option value="Egypt">Egypt</option>
                        <option value="El Salvador">El Salvador</option>
                        <option value="Equatorial Guinea">Equatorial Guinea</option>
                        <option value="Eritrea">Eritrea</option>
                        <option value="Estonia">Estonia</option>
                        <option value="Ethiopia">Ethiopia</option>
                        <option value="Falkland Islands">Falkland Islands</option>
                        <option value="Faroe Islands">Faroe Islands</option>
                        <option value="Fiji">Fiji</option>
                        <option value="Finland">Finland</option>
                        <option value="France">France</option>
                        <option value="French Guiana">French Guiana</option>
                        <option value="French Polynesia">French Polynesia</option>
                        <option value="French Southern Ter">French Southern Ter</option>
                        <option value="Gabon">Gabon</option>
                        <option value="Gambia">Gambia</option>
                        <option value="Georgia">Georgia</option>
                        <option value="Germany">Germany</option>
                        <option value="Ghana">Ghana</option>
                        <option value="Gibraltar">Gibraltar</option>
                        <option value="Great Britain">Great Britain</option>
                        <option value="Greece">Greece</option>
                        <option value="Greenland">Greenland</option>
                        <option value="Grenada">Grenada</option>
                        <option value="Guadeloupe">Guadeloupe</option>
                        <option value="Guam">Guam</option>
                        <option value="Guatemala">Guatemala</option>
                        <option value="Guinea">Guinea</option>
                        <option value="Guyana">Guyana</option>
                        <option value="Haiti">Haiti</option>
                        <option value="Hawaii">Hawaii</option>
                        <option value="Honduras">Honduras</option>
                        <option value="Hong Kong">Hong Kong</option>
                        <option value="Hungary">Hungary</option>
                        <option value="Iceland">Iceland</option>
                        <option value="Indonesia">Indonesia</option>
                        <option value="India">India</option>
                        <option value="Iran">Iran</option>
                        <option value="Iraq">Iraq</option>
                        <option value="Ireland">Ireland</option>
                        <option value="Isle of Man">Isle of Man</option>
                        <option value="Israel">Israel</option>
                        <option value="Italy">Italy</option>
                        <option value="Jamaica">Jamaica</option>
                        <option value="Japan">Japan</option>
                        <option value="Jordan">Jordan</option>
                        <option value="Kazakhstan">Kazakhstan</option>
                        <option value="Kenya">Kenya</option>
                        <option value="Kiribati">Kiribati</option>
                        <option value="Korea North">Korea North</option>
                        <option value="Korea Sout">Korea South</option>
                        <option value="Kuwait">Kuwait</option>
                        <option value="Kyrgyzstan">Kyrgyzstan</option>
                        <option value="Laos">Laos</option>
                        <option value="Latvia">Latvia</option>
                        <option value="Lebanon">Lebanon</option>
                        <option value="Lesotho">Lesotho</option>
                        <option value="Liberia">Liberia</option>
                        <option value="Libya">Libya</option>
                        <option value="Liechtenstein">Liechtenstein</option>
                        <option value="Lithuania">Lithuania</option>
                        <option value="Luxembourg">Luxembourg</option>
                        <option value="Macau">Macau</option>
                        <option value="Macedonia">Macedonia</option>
                        <option value="Madagascar">Madagascar</option>
                        <option value="Malaysia">Malaysia</option>
                        <option value="Malawi">Malawi</option>
                        <option value="Maldives">Maldives</option>
                        <option value="Mali">Mali</option>
                        <option value="Malta">Malta</option>
                        <option value="Marshall Islands">Marshall Islands</option>
                        <option value="Martinique">Martinique</option>
                        <option value="Mauritania">Mauritania</option>
                        <option value="Mauritius">Mauritius</option>
                        <option value="Mayotte">Mayotte</option>
                        <option value="Mexico">Mexico</option>
                        <option value="Midway Islands">Midway Islands</option>
                        <option value="Moldova">Moldova</option>
                        <option value="Monaco">Monaco</option>
                        <option value="Mongolia">Mongolia</option>
                        <option value="Montserrat">Montserrat</option>
                        <option value="Morocco">Morocco</option>
                        <option value="Mozambique">Mozambique</option>
                        <option value="Myanmar">Myanmar</option>
                        <option value="Nambia">Nambia</option>
                        <option value="Nauru">Nauru</option>
                        <option value="Nepal">Nepal</option>
                        <option value="Netherland Antilles">Netherland Antilles</option>
                        <option value="Netherlands">Netherlands (Holland, Europe)</option>
                        <option value="Nevis">Nevis</option>
                        <option value="New Caledonia">New Caledonia</option>
                        <option value="New Zealand">New Zealand</option>
                        <option value="Nicaragua">Nicaragua</option>
                        <option value="Niger">Niger</option>
                        <option value="Nigeria">Nigeria</option>
                        <option value="Niue">Niue</option>
                        <option value="Norfolk Island">Norfolk Island</option>
                        <option value="Norway">Norway</option>
                        <option value="Oman">Oman</option>
                        <option value="Pakistan">Pakistan</option>
                        <option value="Palau Island">Palau Island</option>
                        <option value="Palestine">Palestine</option>
                        <option value="Panama">Panama</option>
                        <option value="Papua New Guinea">Papua New Guinea</option>
                        <option value="Paraguay">Paraguay</option>
                        <option value="Peru">Peru</option>
                        <option value="Phillipines">Philippines</option>
                        <option value="Pitcairn Island">Pitcairn Island</option>
                        <option value="Poland">Poland</option>
                        <option value="Portugal">Portugal</option>
                        <option value="Puerto Rico">Puerto Rico</option>
                        <option value="Qatar">Qatar</option>
                        <option value="Republic of Montenegro">Republic of Montenegro</option>
                        <option value="Republic of Serbia">Republic of Serbia</option>
                        <option value="Reunion">Reunion</option>
                        <option value="Romania">Romania</option>
                        <option value="Russia">Russia</option>
                        <option value="Rwanda">Rwanda</option>
                        <option value="St Barthelemy">St Barthelemy</option>
                        <option value="St Eustatius">St Eustatius</option>
                        <option value="St Helena">St Helena</option>
                        <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                        <option value="St Lucia">St Lucia</option>
                        <option value="St Maarten">St Maarten</option>
                        <option value="St Pierre & Miquelon">St Pierre & Miquelon</option>
                        <option value="St Vincent & Grenadines">St Vincent & Grenadines</option>
                        <option value="Saipan">Saipan</option>
                        <option value="Samoa">Samoa</option>
                        <option value="Samoa American">Samoa American</option>
                        <option value="San Marino">San Marino</option>
                        <option value="Sao Tome & Principe">Sao Tome & Principe</option>
                        <option value="Saudi Arabia">Saudi Arabia</option>
                        <option value="Senegal">Senegal</option>
                        <option value="Seychelles">Seychelles</option>
                        <option value="Sierra Leone">Sierra Leone</option>
                        <option value="Singapore">Singapore</option>
                        <option value="Slovakia">Slovakia</option>
                        <option value="Slovenia">Slovenia</option>
                        <option value="Solomon Islands">Solomon Islands</option>
                        <option value="Somalia">Somalia</option>
                        <option value="South Africa">South Africa</option>
                        <option value="Spain">Spain</option>
                        <option value="Sri Lanka">Sri Lanka</option>
                        <option value="Sudan">Sudan</option>
                        <option value="Suriname">Suriname</option>
                        <option value="Swaziland">Swaziland</option>
                        <option value="Sweden">Sweden</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Syria">Syria</option>
                        <option value="Tahiti">Tahiti</option>
                        <option value="Taiwan">Taiwan</option>
                        <option value="Tajikistan">Tajikistan</option>
                        <option value="Tanzania">Tanzania</option>
                        <option value="Thailand">Thailand</option>
                        <option value="Togo">Togo</option>
                        <option value="Tokelau">Tokelau</option>
                        <option value="Tonga">Tonga</option>
                        <option value="Trinidad & Tobago">Trinidad & Tobago</option>
                        <option value="Tunisia">Tunisia</option>
                        <option value="Turkey">Turkey</option>
                        <option value="Turkmenistan">Turkmenistan</option>
                        <option value="Turks & Caicos Is">Turks & Caicos Is</option>
                        <option value="Tuvalu">Tuvalu</option>
                        <option value="Uganda">Uganda</option>
                        <option value="United Kingdom">United Kingdom</option>
                        <option value="Ukraine">Ukraine</option>
                        <option value="United Arab Erimates">United Arab Emirates</option>
                        <option value="United States of America">United States of America</option>
                        <option value="Uraguay">Uruguay</option>
                        <option value="Uzbekistan">Uzbekistan</option>
                        <option value="Vanuatu">Vanuatu</option>
                        <option value="Vatican City State">Vatican City State</option>
                        <option value="Venezuela">Venezuela</option>
                        <option value="Vietnam">Vietnam</option>
                        <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
                        <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
                        <option value="Wake Island">Wake Island</option>
                        <option value="Wallis & Futana Is">Wallis & Futana Is</option>
                        <option value="Yemen">Yemen</option>
                        <option value="Zaire">Zaire</option>
                        <option value="Zambia">Zambia</option>
                        <option value="Zimbabwe">Zimbabwe</option>
                    </select>
                </div>
                <div class="col-md-2">
                    <label for="inputZip" class="form-label">Code Postal</label>
                    <input type="text" class="form-control" v-model="form.codepostal"  >
                </div>
                </form><br>
                <div class="col-12">
                    <button type="submit" class="btn btn-primary mb-3 " v-on:click="modifier()">Modifier</button>
                </div>
                 <div class="col-12">
                    <button type="submit" class="btn btn-danger" v-on:click="retour()">Retour</button>
                </div>
        </div>
        <div class="col-1"></div>
    </div>
</template>

<script>

import users from '../db/users'



    export default {
    name: 'Modifier',
    data() {
       return {
        
        form: {
          _id : '',
          _rev : '',
          nom: '',
          prenom:'',
          telephone: '',
          email: '',
          identite: '',
          pass: '',
          rpass: '',
          ville: '',
          pays: '',
          codepostal: '',
          adresse : '',
          naissance : '',
          specialite : '',
          keyModifier:'',
          flag: null,
        }
      }
    },
created(){

        this.form.keyModifier = sessionStorage.getItem('keyModifier'); 
        

        users.get(this.form.keyModifier).then((doc) => {

                
                        this.form.nom = doc.nom,
                        this.form.prenom = doc.prenom,
                        this.form.adresse = doc.adresse,
                        this.form.email = doc.email,
                        this.form.pass = doc.pass,
                        this.form.ville = doc.ville,
                        this.form.pays = doc.pays,
                        this.form._id = doc._id,
                        this.form._rev = doc._rev,
                        this.form.telephone = doc.telephone,
                        this.form.codepostal = doc.codepostal,
                        this.form.naissance = doc.naissance,
                        this.form.specialite = doc.specialite,
                        this.form.identite = doc.identite,
                        this.form.rpass = doc.pass

            }).catch((err) => {
                console.error(err);
            });



      

  },
    methods : {

    modifier(){

        users.get(this.form.keyModifier).then((doc) => {

                        doc.nom = this.form.nom,
                        doc.prenom = this.form.prenom,
                        doc.adresse = this.form.adresse,
                        doc.email = this.form.email,
                        doc.pass = this.form.pass,
                        doc.ville = this.form.ville,
                        doc.pays = this.form.pays,
                        doc._id = this.form._id,
                        doc._rev = this.form._rev,
                        doc.telephone = this.form.telephone,
                        doc.codepostal = this.form.codepostal,
                        doc.naissance = this.form.naissance,
                        doc.specialite = this.form.specialite,
                        doc.identite = this.form.identite,
                        doc.rpass = this.form.pass

         users.put(doc).then((res)=>{
                 console.log(res);
                    this.form.nom = "",
                    this.form.prenom = "",
                    this.form.email = "",
                    this.form.ville = "",
                    this.form.pays = "",
                    this.form.telephone = "",
                    this.form.pass = "",
                    this.form.rpass = "",
                    this.form.identite = "",
                    this.form.naissance = "",
                    this.form.specialite = "",
                    this.form.adresse = "",
                    this.form.codepostal = ""
                    this.form.flag = 'succes'
         }).catch((err)=>{
                 console.error(err);
                 this.form.flag = 'echec'

         });              
                           
    });

       
    },
    retour() {
               sessionStorage.removeItem('keyModifier');
                this.$router.push('gerer'); 
        },
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