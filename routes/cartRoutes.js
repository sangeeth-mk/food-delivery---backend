import express from 'express'
import cartControllers from '../controllers/cartControllers.js'
import authMiddleware  from '../middleware/auth.js'

const cartRouter = express.Router()

cartRouter.get("/get",authMiddleware,cartControllers.getCart)
cartRouter.post("/add",authMiddleware,cartControllers.addToCart)
cartRouter.delete("/remove",authMiddleware,cartControllers.removeFromCart)

export default cartRouter;