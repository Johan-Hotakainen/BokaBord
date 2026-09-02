// testing
import { date, time } from "./api.js";

export const reformulateDate = ({date, time}) => {
    return `<p> Din bokade tid är: ${date} kl ${time}</p>` 
}