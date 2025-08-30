import express from 'express'
import { placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus, verifyStripe, verifyRazorpay } from '../controllers/orderController.js'
import addminAuth from '../middleware/adminAuth.js'
import authUser from '../middleware/auth.js'

const orderRouter= express.Router()

//admin features
orderRouter.post('/list',addminAuth, allOrders)
orderRouter.post('/status',addminAuth, updateStatus)

//Payment features
orderRouter.post('/place',authUser,placeOrder)
orderRouter.post('/stripe',authUser,placeOrderStripe)
orderRouter.post('/razorpay',authUser,placeOrderRazorpay)

//user Fetures
orderRouter.post('/userorders',authUser,userOrders)

//verify payment
orderRouter.post('/verifyStripe',authUser, verifyStripe)
orderRouter.post('/verifyRazorpay',authUser, verifyRazorpay)

export default orderRouter