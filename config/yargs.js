

const descripcion = {
    demand: true,
    alias:'d',
    desc: 'Descripcion de la tarea por hacer'
}

const completado = {
    default: true,
    alias: 'c',
    desc:'Marca como completado la tarea pendiente'
}

const argv= require('yargs')



.command('crear','Crear un elemento por hacer', {
    descripcion
})

.command('actualizar','Actualizar el estado completado de una tarea',{
    descripcion,
    completado
})
.command('borrar','Borrar un elemento por hacer', {
    descripcion
})
.help()
.argv; 


module.exports = {
    argv
}
