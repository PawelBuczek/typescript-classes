import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";

let cricketCoach: CricketCoach = new CricketCoach();
let golfCoach: GolfCoach = new GolfCoach();

let coachesCollection: Coach[] = [];
coachesCollection.push(cricketCoach);
coachesCollection.push(golfCoach);

coachesCollection.forEach(coach => console.log(coach.getDailyWorkout()));