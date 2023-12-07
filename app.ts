const typeUser = {
    adm: "Seja bem vindo admin",
    estudante: "Voce e um estudante",
    visitante: "voce pode apenas visualizar"
}

type IUser = keyof typeof typeUser // truque para tipar rapidamente com as chaves do objeto

const user: IUser = "adm"

if (user === "adm") {
    console.log("if: " + typeUser.adm)
} else if (user === 'estudante') {
    console.log("if: " + typeUser.estudante)
} else {
    console.log("if: " + typeUser.visitante)
}


// Possui a mesma função que a do if acima
function validateUser(user: IUser) {
    console.log("fn: " + typeUser[user])
}

validateUser(user);