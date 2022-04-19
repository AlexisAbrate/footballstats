import { Goals } from "./goals";
import { Matches } from "./matches";
import { Team } from "./team";

export class Standing {
    constructor(
        public rank : number,
        public team : Team,
        public points : number,
        public goalsDiff: number,
        public group: string,
        public form: string,
        public status: string,
        public description: string,
        public all: Matches,
        public home: Matches,
        public away: Matches,
        public update: Date

    ){}
}