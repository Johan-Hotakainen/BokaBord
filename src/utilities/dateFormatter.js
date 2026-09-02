// testing

const reformulateDate = ({date, time}) => {
    return `<p> Din bokade tid är: ${date} kl ${time}</p>` 
}

// Vill ha från reformulateDate dag, timme fint utskrivet. Och ett objekt som har exakt tid för att stoppa konflikter(om två bokar bord samtidigt)