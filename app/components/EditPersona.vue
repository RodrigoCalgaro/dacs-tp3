<template>
    <div>
        <form v-on:submit.prevent ="updatePersona" class="card">
            <div class="card-header" >
                <div class="d-flex justify-content-between">
                    <strong class="card-title align-middle"><p class="h2">Editar Persona</p></strong>
                </div>
            </div>
            <div class="card-body">
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="apellidoPersona" class="control-label">Apellido</label>
                        <input v-model="persona.apellido" type="text" pattern=".{0,30}" class="form-control" id="apellidoPersona" placeholder="Apellido" required>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="nombrePersona">Nombre</label>
                        <input v-model="persona.nombre" type="text" pattern=".{0,30}" class="form-control" id="nombrePersona" placeholder="Nombre" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="dniPersona">DNI</label>
                        <input v-model="persona.dni" type="text" pattern="[0-9]{8}" class="form-control" id="dniPersona" placeholder="########" required>
                    </div>
                    <div class="form-group col-md-6">
                        <label for="fechaNacimientoPersona">Fecha de Nacimiento</label>
                        <input type="date" v-model="persona.fecha_nacimiento" class="form-control" id="fechaNacimientoPersona" placeholder= "DD/MM/AAAA">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="telefonoPersona">Telefono</label>
                        <input v-model="persona.telefono" type="tel"  pattern=".{0,15}" class="form-control" id="telefonoPersona" placeholder="telefono">
                    </div>
                    <div class="form-group col-md-6">
                        <label for="emailPersona">Email</label>
                        <input v-model="persona.email" type="text" pattern=".{0,30}" class="form-control" id="emailPersona" placeholder="Email" required>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="direccionPersona">Direccion</label>
                        <input v-model="persona.direccion" type="text" pattern=".{0,40}" class="form-control" id="direccionPersona" placeholder="Direccion" >
                    </div>
                    <div class="form-group col-md-6">
                        <label for="localidadAlumno">Localidad</label>
                        <input v-model="persona.localidad" type="text" pattern=".{0,40}" class="form-control" id="localidadPersona" placeholder="Localidad" >
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <div class="float-right">
                    <router-link :to="{name : 'ListPersona' }" class="btn btn-secondary">Cancelar</router-link>
                    <button type="submit" class="btn btn-primary">Guardar</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                persona: {}
            }
        },
        created(){
            this.getPersona();
        },
        methods: {
            getPersona(){
                this.axios.get('/api/personas/edit/'+ this.$route.params.id)
                .then(
                    res => {this.persona = res.data;
                    console.log(this.persona);
                });
            },
            updatePersona(persona){
                this.axios.put('/api/personas/update/' + this.$route.params.id , this.persona)
                .then(res => {
                    this.$router.replace({name: 'ListPersona' });
                })
                .catch(err => console.log(err))
            },
        }
    }
</script>