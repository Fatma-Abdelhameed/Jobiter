import { WorkExperience } from "./work-experience";

export class Developer {
    constructor(public id:number, public first_name:string, public last_name:string ,public username:string, public email:string, public job_title:string,
        public city:string, public phone:string, public level:string, public dob:string, public gender:string,
         public cv:string){

    }
}
