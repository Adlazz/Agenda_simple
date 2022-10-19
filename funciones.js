const guardar_contacto = (db, contacto) =>{
    db.setItem(contacto.id, JSON.stringify(contacto))
    //window.location.href = '/'
}