export class Company {
    rating:number = 0
    constructor(public id:number, public company_name:string, public email:string,
        public phone:string, public address:string, public city:string, public industry:string, 
        public startedAt:string, public size:number, public image:string, public website:string,
        public about:string, public allow_notification:boolean
    ){

    }
    public setRating(rating:number){
        this.rating = rating
    }
    public getRating(){
        return this.rating
    }
}
