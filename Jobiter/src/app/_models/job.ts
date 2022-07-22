
export class Job {
    constructor(public id=-1, public title:string, public postedDate:string, public status:string,
        public type:string, public minExperience:number, public maxExperience:number,  public requirements:string){}
}
