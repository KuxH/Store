const express = require("express")
const app = express()
const user = require("./routes/userAuth")
const register = require("./routes/register")
const login = require("./routes/login")

require("dotenv").config()
require("./connect/connect")
app.use(express.json())

app.use("/api", register)
app.use("/api", user)
app.use("/api", login)

// app.get("/", (req, res) => {
//   res.send("backend running")
// })

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`)
})
