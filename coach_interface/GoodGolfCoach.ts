import { Coach } from "./Coach";
import { GolfCoach } from "./GolfCoach";

export class GoodGolfCoach extends GolfCoach implements Coach {

    getDailyWorkout(): string {
        return "Good job, lad.";
    }
    
}