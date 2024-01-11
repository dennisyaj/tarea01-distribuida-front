<template>
    <div>
        <h1>Registrar persona:</h1>
        <br>
        <table>
            <tr>
                <td><label for="">Nombre: </label></td>
                <td><input class="form-control" v-model="nombre" required type="text"></td>
            </tr>
            <tr>
                <td><label for="">Direccion: </label></td>
                <td><input class="form-control" v-model="direccion" required type="text"></td>
            </tr>
            <tr>
                <td><label for="">Edad: </label></td>
                <td><input class="form-control" v-model="edad" required type="text"></td>
            </tr>
        </table>

        <table>
            <tr>
                <td><button class="btn btn-outline-success" @click="Insertar()">Guardar</button></td>
            </tr>
            <tr>
                <td><label for="">{{ mensaje }}</label></td>
            </tr>
        </table>
        
    </div>
</template>
<script>
import { insertarFachada } from '@/js/ProcesarPersona';

export default {

    data(){
        return {
            nombre: null,
            direccion: null,
            edad: null,
            mensaje: null,
        }
    },
    methods:{
        async Insertar(){
            const p = { nombre: this.nombre, direccion: this.direccion, edad: this.edad };
             if(
                this.nombre == null ||
                this.direccion == null ||
                this.edad == null
             ){
                this.mensaje = "Llene todos los datos"
             }else{
              await insertarFachada(p);
                this.mensaje = "Se ha ingresado correctamente"
                this.nombre == null
                this.direccion == null
                this.edad == null
             }
        }
    }
}

</script>

<style>
table{
    margin: 0 auto;
  }

</style>