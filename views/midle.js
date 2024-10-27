<<<<<<< HEAD



export function dataClasse(ecole){
    const db= new sqlite(ecole+'.db')
    db.all("SELECT * FROM  classes ",[],(err, rows) =>{
        if(err){
            console.log(err)
        }
        return rows
    })
}

=======



export function dataClasse(ecole){
    const db= new sqlite(ecole+'.db')
    db.all("SELECT * FROM  classes ",[],(err, rows) =>{
        if(err){
            console.log(err)
        }
        return rows
    })
}

>>>>>>> 3a733c9521923c162d700995691520249a551ac0
