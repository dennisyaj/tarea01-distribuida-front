<template>
  <div>
    <h1>Lista personas</h1>
  </div>
  <br />
  <div v-if="mostrar">
    <table class="table table-striped">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Nombre</th>
          <th scope="col">Direccion</th>
          <th scope="col">Edad</th>
          <th scope="col">Editar</th>
          <th scope="col">Eliminar</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="l in lista" :key="l.id">
          <th>{{ l.id }}</th>
          <td>{{ l.nombre }}</td>
          <td>{{ l.direccion }}</td>
          <td>{{ l.edad }}</td>
          <td><a class="btn btn-outline-info" @click="editar(l.id)">Editar</a></td>
          <td><a class="btn btn-outline-danger" @click="alerta(l.id)">Eliminar</a></td>
        </tr>
      </tbody>
    </table>
  </div>
  <br />
  <label>{{ mensaje }}</label>
</template>

<script>
import { listaTodasFachada, eliminarPorIdFachada } from "@/js/ProcesarPersona";

export default {
  data() {
    return {
      lista: [],
      mostrar: false,
      mensaje: null,
    };
  },
  props: {
    datos: null,
  },
  methods: {
    async mostrasLista() {
      this.lista = await listaTodasFachada();
      if (this.lista.length == 0) {
        this.mensaje = "Lista vacia";
        this.mostrar = false;
      } else {
        this.mostrar = true;
      }
    },
    async mostrasLista2() {
      if (this.lista.length == 0) {
        this.mensaje = "Lista vacia";
        this.mostrar = false;
      } else {
        this.mostrar = true;
      }
    },
    async eliminar(id) {
      await eliminarPorIdFachada(id);
      alert("Se ha eliminado correctamente");
      location.reload();
    },
    alerta(id) {
      var opcion = confirm("¿Eliminar la persona con id: " + id + "?");
      if (opcion == true) {
        this.eliminar(id);
      } else {
        alert("Accion cancelada");
      }
    },
    editar(id) {
      this.$router.push({ name: "editarPersona", params: { idProp: id } });
    },
    comprobacionPrevia() {
      console.log(this.datos == null);
      if (this.datos == null) {
        this.mostrasLista();
      } else {
        this.lista = this.datos;
        console.log(this.lista);
        this.mostrasLista2();
      }
    },
  },
  mounted() {
    this.comprobacionPrevia();
  },
};
</script>
<style></style>
