<template>
    <div class="card">
        <div class="card-header" >
            <div class="d-flex justify-content-between">
                <strong class="card-title align-middle"><p class="h2">Lista de Personas</p></strong>
                <div>
                    <router-link :to="{name: 'CreatePersona'}" class='btn btn-primary mt-2'>Agregar Persona</router-link>
                </div>
            </div>
        </div>
        <div class="card-body">
            <table class="table table-striped table-bordered">
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>DNI</th>
                        <th>Email</th>
                        <th>Opciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="persona in personas" :key="persona.idPersona">
                        <td>{{persona.nombre}}</td>
                        <td>{{persona.apellido}}</td>
                        <td>{{persona.dni}}</td>
                        <td>{{persona.email}}</td>
                        <td>
                            <router-link :to="{name : 'ShowPersona', params: { id : persona.idPersona } }" class="btn btn-info">Ver</router-link>
                            <router-link :to="{name : 'EditPersona', params: { id : persona.idPersona } }" class="btn btn-warning">Editar</router-link>
                            <a href="#" class="btn btn-danger" v-on:click="eliminarPersona(persona.idPersona, persona.nombre , persona.apellido , persona.dni)">Eliminar</a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>   
</template>

<script>
    export default {
        data(){
            return {
                personas: []
            }
        },
        created() {
            this.getPersonas();
        },
        methods: {
            getPersonas(){
                this.axios.get('/api/personas/')
                .then(res => {
                    this.personas = res.data;
                    console.log(res.data);
                } )
                .catch(err => console.log(err));
            },
            eliminarPersona(id, nombre, apellido, dni){
                const resp = confirm('Está seguro que desea eliminar el registro "' + nombre + ' ' + apellido + ', DNI: ' + dni + '", esta acción es irreversible');
                if (resp) {   
                    this.axios.delete('/api/personas/delete/'+ id)
                    .then(res => {
                        this.getPersonas();
                    })
                    .catch(err => console.log(err))
                }
            }
        }
        
    }
</script>