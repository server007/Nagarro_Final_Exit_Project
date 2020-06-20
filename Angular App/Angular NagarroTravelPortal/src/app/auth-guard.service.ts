import { Injectable } from "@angular/core";
import { CanLoad, Router, Route, CanActivate } from "@angular/router";
// import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate {

    loadit:boolean;
    constructor( private router: Router) {}

    canActivate(): boolean {
        if(this.loadit==true){
            return true;
        }
        else{
            this.router.navigate(['']);
        }
        // return this.loadit;
    }
}




// canActivate(): boolean {
    //     if (!this.auth.isAuthenticated()) {
    //       this.router.navigate(['']);
    //       return false;
    //     }
    //     return true;
    //   }





//   constructor(private router: Router) {
//   }
    // canActivate(route: import("@angular/router").ActivatedRouteSnapshot, state: import("@angular/router").RouterStateSnapshot): boolean | import("@angular/router").UrlTree | import("rxjs").Observable<boolean | import("@angular/router").UrlTree> | Promise<boolean | import("@angular/router").UrlTree> {
        // throw new Error("Method not implemented.");
    // }
//   loadit:boolean
 




//   canLoad(route: Route): boolean {
    
    //determine whether you want to load the module
    // return this.loadit;
    // if(sessionStorage.getItem("id")==undefined){
    //     return false;
    // }
    // else{
    //     return true;
    // }
 
//   }

// } 
 