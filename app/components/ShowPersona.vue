<template>
    <div class="card">
        <div class="card-header" >
                <div class="d-flex justify-content-between">
                    <strong class="card-title align-middle"><p class="h2">Detalles Persona</p></strong>
                </div>
            </div>
        <div class="card-body">
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="apellidoPersona" class="control-label">Apellido</label>
                        <input readonly v-model="persona.apellido" type="text" class="form-control" id="apellidoPersona" placeholder="Apellido">
                    </div>
                    <div class="form-group col-md-6">
                        <label for="nombrePersona">Nombre</label>
                        <input readonly v-model="persona.nombre" type="text" class="form-control" id="nombrePersona" placeholder="Nombre">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="dniPersona">DNI</label>
                        <input readonly v-model="persona.dni" type="text" pattern="[0-9]{8}" class="form-control" id="dniPersona" placeholder="########">                       
                    </div>
                    <div class="form-group col-md-6">
                        <label for="fechaNacimientoPersona">Fecha de Nacimiento</label>
                        <input readonly type="date" v-model="persona.fecha_nacimiento" class="form-control" id="fechaNacimientoPersona" placeholder= "DD/MM/AAAA">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="telefonoPersona">Telefono</label>
                        <input readonly v-model="persona.telefono" type="tel" class="form-control" id="telefonoPersona" placeholder="telefono">
                    </div>
                    <div class="form-group col-md-6">
                        <label for="emailPersona">Email</label>
                        <input readonly v-model="persona.email" type="tel" class="form-control" id="emailPersona" placeholder="Email">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6">
                        <label for="direccionPersona">Direccion</label>
                        <input readonly v-model="persona.direccion" type="text" class="form-control" id="direccionPersona" placeholder="Direccion" >
                    </div>
                    <div class="form-group col-md-6">
                        <label for="localidadAlumno">Localidad</label>
                        <input readonly v-model="persona.localidad" type="text" class="form-control" id="localidadPersona" placeholder="Localidad" >
                    </div>
                </div>
            </div>
            <div class="card-footer">
                <div class="float-right">
                    <router-link :to="{name : 'ListPersona' }" class="btn btn-primary">Volver</router-link>
                </div>
            </div>    
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
                this.axios.get('/api/personas/show/'+ this.$route.params.id)
                .then(
                    res => {this.persona = res.data;
                    console.log(this.persona);
                });
            }
        }
    }
</script>