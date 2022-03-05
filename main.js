
    fetch("https://raw.githubusercontent.com/HackersOfSweden/Ekonomy/main/Levfakturor_Lidingo_Stad_2018.json").then(
        res => {
        res.json().then(
            data => {
                console.log(data);
                if (data.length > 0) {
                    var temp = "";
                    data.forEach((v) => {
                        temp += "<tr>";
                        temp += "<td>" + v.forvaltning + "</td>";
                        temp += "<td>" + v.leverantor + "</td>";
                        temp += "<td>" + v["org.nr"] + "</td>";
                        temp += "<td>" + v["fakt.nr"] + "</td>";
                        temp += "<td>" + v.konto + "</td></tr>";
                    })
                    document.getElementById("data").innerHTML = temp;
                }
            }
        )
    }
    )
