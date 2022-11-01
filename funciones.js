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
        iconoCopy.classList.add("material-symbols-outlined", "icono-copy", "clipboard")
        
        // agregar id y class al elemento de cuit 
        cuitContacto.setAttribute('id', Math.random(1,100))
        cuitContacto.classList.add("cuits")

        // guardar id en variable para pasar a funcion copiar
        //cuitId = document.getElementsByClassName("cuits")[0].id;
        //console.log(cuitId)

        // agregar funcion copiar al clipboard al icono de copiar
        //iconoCopy.setAttribute('onclick', 'copyToClipboard(cuitId)')
        
        //Borrar 
        iconoDelete.onclick = () =>{
            db.removeItem(contacto.id)
            window.location.href = "/"
        }
        
        // agregar las etiquetas al divContacto
        divContacto.appendChild(apellidoContacto)
        divContacto.appendChild(nombreContacto)
        divContacto.appendChild(cuitContacto)
        divContacto.appendChild(condIvaContacto)
        divContacto.appendChild(iconoDelete)
        divContacto.appendChild(iconoCopy)
        // agregar el div al documento  
        parentNode.appendChild(divContacto)
}

    //Copiar
    const buttonCopy = document.querySelector('.iconoCopy')
    const copyData = document.querySelector('.clipboard')
    console.log(copyData)

    function copyToClipboard(var1){
        let val = document.getElementById(var1).innerHTML;
        const selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
      }