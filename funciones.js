const guardar_contacto = (db, contacto) =>{
    db.setItem(contacto.id, JSON.stringify(contacto))
    window.location.href = '/'
}

const cargar_contacto = (db) => {
    let claves = Object.keys(db)
    for(clave of claves){
        let contacto = JSON.parse(db.getItem(clave))
        mostrar_contacto(parentNode, contacto, db)
    }
}

const mostrar_contacto = (parentNode, contacto, db) => {
    // crear etiquetas
    let div_contacto = document.createElement("div")
    let apellido_contacto = document.createElement("p")
    let nombre_contacto = document.createElement("p")
    let cuit_contacto = document.createElement("p")
    let cond_iva_contacto = document.createElement("p")
    let icono_delete = document.createElement("span")
    let icono_copy = document.createElement("span")
    // cargar contenido a mostrar dentro de etiquetas
    apellido_contacto.innerHTML = contacto.apellido
    nombre_contacto.innerHTML = contacto.nombre
    cuit_contacto.innerHTML = contacto.cuit
    cond_iva_contacto.innerHTML = contacto.cond_iva
    icono_delete.innerHTML = "delete"
    icono_copy.innerHTML = "content_copy"
    // agregar las clases a las etiquetas
    div_contacto.classList.add("contacto")
    icono_delete.classList.add("material-symbols-outlined", "icono-delete")
    icono_copy.classList.add("material-symbols-outlined", "icono-copy")

    div_contacto.appendChild(apellido_contacto)
    div_contacto.appendChild(nombre_contacto)
    div_contacto.appendChild(cuit_contacto)
    div_contacto.appendChild(cond_iva_contacto)
    div_contacto.appendChild(icono_delete)
    div_contacto.appendChild(icono_copy)
 }