if (module.hot) {
    module.hot.accept();
}

const getLatLng = async() => {
    const res = await fetch(
        `https://geo.ipify.org/api/v2/country,city?apiKey=at_k705Ppzs1oviTSMrmFKH6DI1OA2kP&ipAddress=192.212.174.101`
    );

    if (!res.ok) return;

    const data = await res.json();
    console.log(data);
    return data.location;
};
const displayMap = async() => {
    const { lat, lng } = await getLatLng();
    const coords = [lat, lng];
    console.log(coords);

    const map = L.map("map").setView(coords, 13);

    L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(map);

    L.marker(coords)
        .addTo(map)
        .bindPopup("A pretty CSS3 popup.<br> Easily customizable.")
        .openPopup();
};
displayMap();
console.log("hey");