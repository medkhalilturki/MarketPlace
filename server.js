const express = require('express')

const app = express();
app.use(express.json())

const users = require('./routes/api/user-api')
const produit = require('./routes/api/produit-api')
const auth = require('./routes/api/auth-api')
const commande = require('./routes/api/commande-api')
const categorie = require('./routes/api/categorie-api')
const lignecom = require('./routes/api/ligne_commande-api')


app.use("/api/auth" , auth)
app.use('/api/users',users)
app.use('/api/produit',produit)
app.use('/api/commande',commande)
app.use('/api/categorie',categorie)
app.use('/api/ligne_commande',lignecom)

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>console.log(`Server running on port ${PORT}`))
