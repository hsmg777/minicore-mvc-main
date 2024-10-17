<template>
    <div>
      <h2>Empleados</h2>
      <div class="table-responsive">
        <table class="table table-bordered table-hover">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nombre</th>
              <th>Apellido</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="empleado in empleados" :key="empleado.id">
              <td>{{ empleado.id }}</td>
              <td>{{ empleado.nombre }}</td>
              <td>{{ empleado.apellido }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </template>
  
  <script>
  import { fetchEmpleados } from '../controllers/empleadosController';
  
  export default {
    name: 'Empleados',
    data() {
      return {
        empleados: []
      };
    },
    async created() {
      this.empleados = await fetchEmpleados();
    }
  };
  </script>
  
  <style scoped>
  .table-responsive {
    overflow-x: auto;
  }
  
  .table {
    width: 100%;
    margin-bottom: 1rem;
    background-color: #fff;
    color: #333;
    border-collapse: collapse;
    border: 1px solid #ccc;
  }
  
  .table th,
  .table td {
    padding: 0.75rem;
    text-align: left;
    vertical-align: top;
    border-top: 1px solid #ccc;
  }
  
  .table th {
    font-weight: bold;
    background-color: #f0f0f0;
  }
  </style>
  