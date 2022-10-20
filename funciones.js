const guardarContacto = (db, contacto) =>{
    db.setItem(contacto.id, JSON.stringify(contacto));
    window.location.href = '/';
}

const cargarContacto = (db, parentNode) =>{
    let claves = Object.keys(db)

    for(clave of claves){
        let contacto = JSON.parse(db.getItem(clave))
        mostrarContacto(parentNode, contacto, db)
    }
}    

const mostrarContacto = (parentNode, contacto, db) => {
        // crear etiquetas
        let divContacto = document.createElement("div")
        let apellidoContacto = document.createElement("p")
        let nombreContacto = document.createElement("p")
        let cuitContacto = document.createElement("p")
        let condIvaContacto = document.createElement("p")
        let iconoDelete = document.createElement("span")
        let iconoCopy = document.createElement("span")
        // cargar contenido a mostrar dentro de etiquetas
        apellidoContacto.innerHTML = contacto.apellido
        nombreContacto.innerHTML = contacto.nombre
        cuitContacto.innerHTML = contacto.cuit
        condIvaContacto.innerHTML = contacto.cond_iva
        iconoDelete.innerHTML = "delete"
        iconoCopy.innerHTML = "content_copy"
        // agregar las clases a las etiquetas
        divContacto.classList.add("contacto")
        iconoDelete.classList.add("material-symbols-outlined", "icono-delete")
        iconoCopy.classList.add("material-symbols-outlined", "icono-copy")
        //Borrar 
        iconoDelete.onclick = () =>{
            db.removeItem(contacto.id)
            window.location.href = "/"
        }
        //Copiar
        iconoCopy.onclick = (db, contacto) =>{
            db.clipboard(cuit.value)
        }    

        divContacto.appendChild(apellidoContacto)
        divContacto.appendChild(nombreContacto)
        divContacto.appendChild(cuitContacto)
        divContacto.appendChild(condIvaContacto)
        divContacto.appendChild(iconoDelete)
        divContacto.appendChild(iconoCopy)

        parentNode.appendChild(divContacto)
}