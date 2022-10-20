const apellido = document.querySelector('.apellido')
const nombre = document.querySelector('.nombre')
const cuit = document.querySelector('.cuit')
const cond_iva = document.querySelector('.cond-iva')
const btnAgregar = document.querySelector('.btn-agregar')

const listadoContactos = document.querySelector('.listado-contactos')

// acceder al localStorage para DataBase
const db = window.localStorage
// crear objeto contacto al hacer click
btnAgregar.onclick = () => {
    let contacto = {
        id: Math.random(1,100),
        apellido: apellido.value,
        nombre: nombre.value,
        cuit: cuit.value,
        cond_iva: cond_iva.value,
    }
    //     db: donde va a guardar   /  contacto: lo que se va a guardar
    guardarContacto(db, contacto);
}

cargarContacto(db, listadoContactos)