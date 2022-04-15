import { Goals } from "./goals";

export class Matches {
    constructor(
        public played : number,
        public win: number,
        public draw: number,
        public lose: number,
        public goals: Goals
           ) {}
    

}