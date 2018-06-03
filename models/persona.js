'use strict';
module.exports = (sequelize, DataTypes) => {
  var Persona = sequelize.define('Persona', {
    idPersona: {
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    nombre: DataTypes.STRING(30),
    apellido: DataTypes.STRING(30),
    dni: DataTypes.STRING(8),
    fecha_nacimiento: DataTypes.DATEONLY,
    telefono: DataTypes.STRING(15),
    direccion: DataTypes.STRING(40),
    localidad: DataTypes.STRING(40),
    email: DataTypes.STRING(30),
    }, 
    {
    //Para que no se agreguen los timestamp attributes (updatedAt, createdAt)
    timestamps: false,
    //Acá van otras configuraciones
    indexes:[
        //Agregando un indice 'unique' a dni
        {
        unique: true,
        fields: ['dni']
        },
    ]
        
    },
    );
  
  Persona.associate = function(models) {
    //Acá se definen las asociaciones
  };
  return Persona;
};