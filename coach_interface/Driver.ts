import { Coach } from "./Coach";
import { CricketCoach } from "./CricketCoach";
import { GolfCoach } from "./GolfCoach";
import { GoodGolfCoach } from "./GoodGolfCoach";

let cricketCoach: CricketCoach = new CricketCoach();
let golfCoach: GolfCoach = new GolfCoach();
let golfCoachButGood: GolfCoach = new GoodGolfCoach();
let goodGolfCoach: GoodGolfCoach = new GoodGolfCoach();

let coachesCollection: Coach[] = [];
coachesCollection.push(cricketCoach);  // Practice your spin bowling technique
coachesCollection.push(golfCoach);  // Grab the bat by the correct end, damn it!
coachesCollection.push(golfCoachButGood);  // Good job, lad.
coachesCollection.push(goodGolfCoach);  // Good job, lad.

coachesCollection.forEach(coach => console.log(coach.getDailyWorkout()));