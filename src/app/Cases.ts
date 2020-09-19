
export class Cases{
    state:Array<State>;
}

export class State extends Cases{
    _id:String;
    active:number;
    cured:number;
    death:number;
    total:number;
    name:String;


}