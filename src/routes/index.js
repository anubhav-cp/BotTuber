import { Router } from "express"
import authrouter from "./auth.js"

const router = Router()


router.use(authrouter)




export default router