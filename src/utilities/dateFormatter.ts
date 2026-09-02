
/* export const reformulateDate = ({ date, time }) => {
  return Din bokade tid är: ${date} kl ${time};
}; */

export const reformulateDate = (dateType: string) => {
    const currentDate = new Date(Date.now())
    const currentHour = currentDate.getHours().toString()
    const currentMinutes = currentDate.getMinutes().toString()
    const currentSeconds = currentDate.getSeconds().toString()
    
    if (dateType === "getHours") {
        return `${currentHour}:${currentMinutes}`
    }
    if (dateType === "getSeconds") {
        return `${currentHour}:${currentMinutes}:${currentSeconds}`
    }

}