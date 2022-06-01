async function fetchData() {
    const res = await fetch ("http://api.open-notify.org/astros.json");
    const klu = await fetch ("http://api.open-notify.org/iss-now.json");
    const record = await res.json();
    const jump = await klu.json();
    console.log(record);
    console.log(jump);
    document.getElementById("number").innerHTML= record.number;
    coord = [jump.iss_position['latitude'], jump.iss_position['longitude']];
    document.getElementById("location").innerHTML=coord;
}
fetchData();