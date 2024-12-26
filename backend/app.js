const express = require("express")
const app = express()
const user = require("./routes/userAuth")
const register = require("./routes/register")
const login = require("./routes/login")
const itemRouter = require("./routes/item")
const favourite = require("./routes/favourite")
require("dotenv").config()

require("dotenv").config()
require("./connect/connect")
app.use(express.json())

app.use("/api", register)
app.use("/api", login)
app.use("/api", user)
app.use("/api", itemRouter)
app.use("/api", favourite)

// app.get("/", (req, res) => {
//   res.send("backend running")
// })

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`)
})
