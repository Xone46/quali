<template>
<div>

<nav class="navbar navbar-light bg-light">
  <div class="container-fluid">
    <form class="d-flex">
      <button class="btn btn-outline-danger me-2" @click="genere()">Genere Pdf</button>
      <button class="btn btn-outline-success me-2" @click="voir()">Apercu</button>
    </form>
  </div>
</nav>

<iframe src="C:\Users\MasterDev\Downloads\a4.pdf" height="100%" width="100%" scrolling="auto"></iframe>

</div>

</template>

<script>
import { jsPDF } from "jspdf";
const doc = new jsPDF();


    export default {
    name: 'pdf',
    data() {
      return {
        data:""

      }
    },

    methods : {

        genere(){

            doc.text("Hello world!", 10, 10);
            doc.save("a4.pdf");

        },

        voir(){

          doc.text("Hello world!", 10, 10);
          this.pdf = doc.save("a4.pdf");
 
        }

    },

        
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