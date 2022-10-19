const apellido = document.querySelector('.apellido')
const nombre = document.querySelector('.nombre')
const cuit = document.querySelector('.cuit')
const cond_iva = document.querySelector('.cond-iva')
const btn_agregar = document.querySelector('.btn-agregar')

const listado_contactos = document.querySelector('.listado-contactos')

// acceder al localStorage para DataBase
const db = window.localStorage

btn_agregar.onclick = () => {
    let contacto = {
        id: Math.random(1,100),
        apellido: apellido.value,
        nombre: nombre.value,
        cuit: cuit.value,
        cond_iva: cond_iva.value,
    }
    guardar_contacto(db, contacto)
}

cargar_contacto(db, "listado-contactos")