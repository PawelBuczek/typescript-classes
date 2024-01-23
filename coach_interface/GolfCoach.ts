import { Coach } from "./Coach";

export class GolfCoach implements Coach {

    getDailyWorkout(): string {
        return "Grab the bat by the correct end, damn it!";
    }
}