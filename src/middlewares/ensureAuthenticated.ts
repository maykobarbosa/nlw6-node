import {Response, Request, NextFunction} from "express"
import { verify } from "jsonwebtoken"

interface IPayLoad {
    sub: string
}

export function ensureAuthenticated(
    request: Request, 
    response: Response, 
    next: NextFunction
    ){
        //Receber o token
        const authToken = request.headers.authorization
        //console.log(authToken)


        /// validar se token esta preenchido
        if(!authToken){
            return response.status(401).end()
        }       

        // validar se o token é válido
        const [, token] = authToken.split(" ");
        try{
            const { sub } =  verify(token, "e547a102e84c16b040e014e709aa3071") as IPayLoad;
            request.user_id = sub
            return next()
        }catch(err){
            return response.status(401).end()
        }

        //Recuperar informações do usuário

       

    

}