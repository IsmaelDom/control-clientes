import { Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/auth";

@Injectable()//Solo se agrega en servicios que inyecta a otros servicios
export class LoginService {

    constructor(private authService: AngularFireAuth) {}

    login(email: string, password: string){
        return new Promise((resolve, reject) => {
            this.authService.signInWithEmailAndPassword(email, password)
                .then(datos => resolve(datos),
                    error => reject(error)
                )
        });
    }
}