import express from 'express';
import { login, signup, logout } from '../controllers/auth.controller.js';

const router = express.Router();

router.post("/signup", signup );

router.post("/login", login);

router.post("/logout", logout);

router.get("/health", (req, res)=>{
    res.send("Welcome to React Admin Portal");
});

export default router;