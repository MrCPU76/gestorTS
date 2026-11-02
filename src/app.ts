// 1. Model de dades (Interface)
interface Equipo {
    Clubs: string;
    Puntos: number;
    GF: number;
    GC: number;
}

let equipos: Equipo;
let listaEquipos: Equipo[]=[
    {
        "Clubs": "PSG",
        "Puntos": 9,
        "GF": 14,
        "GC": 5
    },
    {
        "Clubs": "Liverpool",
        "Puntos": 9,
        "GF": 12,
        "GC": 7
    },
    {
        "Clubs": "Real Madrid",
        "Puntos": 9,
        "GF": 10,
        "GC": 5
    },
    {
        "Clubs": "Barça",
        "Puntos": 6,
        "GF": 11,
        "GC": 6
    },
    {
        "Clubs": "Aston Vila",
        "Puntos": 9,
        "GF": 12,
        "GC": 3
    },
    {
        "Clubs": "Betis",
        "Puntos": 9,
        "GF": 7,
        "GC": 4
    },
    {
        "Clubs": "VfB Stuttgart",
        "Puntos": 7,
        "GF": 7,
        "GC": 2
    },
    {
        "Clubs": " Arsenal",
        "Puntos": 7,
        "GF": 6,
        "GC": 2
    },
    {
        "Clubs": " Como",
        "Puntos": 6,
        "GF": 10,
        "GC": 5
    },
    {
        "Clubs": " Man. City",
        "Puntos": 6,
        "GF": 9,
        "GC": 5
    },
    {
        "Clubs": "Brujas",
        "Puntos": 6,
        "GF": 9,
        "GC": 6
    },
    {
        "Clubs": "Sport. Port.",
        "Puntos": 6,
        "GF": 7,
        "GC": 4
    },
    {
        "Clubs": "Bor. Dortmund",
        "Puntos": 6,
        "GF": 5,
        "GC": 4
    },
    {
        "Clubs": "Bayern Munic",
        "Puntos": 5,
        "GF": 10,
        "GC": 5
    },
    {
        "Clubs": "Roma",
        "Puntos": 4,
        "GF": 8,
        "GC": 5
    },
    {
        "Clubs": "Atletico Madrid",
        "Puntos": 4,
        "GF": 4,
        "GC": 3
    },
    {
        "Clubs": "Xakhtar",
        "Puntos": 4,
        "GF": 4,
        "GC": 3
    },
    {
        "Clubs": "PSV",
        "Puntos": 4,
        "GF": 2,
        "GC": 2
    },
    {
        "Clubs": "Vila-real",
        "Puntos": 3,
        "GF": 8,
        "GC": 8
    },
    {
        "Clubs": "Inter",
        "Puntos": 3,
        "GF": 5,
        "GC": 6
    },
    {
        "Clubs": "ManU",
        "Puntos": 3,
        "GF": 5,
        "GC": 6
    },
    {
        "Clubs": "Napoles",
        "Puntos": 3,
        "GF": 5,
        "GC": 7
    },
    {
        "Clubs": "Galat.",
        "Puntos": 3,
        "GF": 6,
        "GC": 9
    },
    {
        "Clubs": "Mallorca",
        "Puntos": 3,
        "GF": 6,
        "GC": 9
    }
]

// 2. Funció per llegir el formulari i afegir un nou element a l'array
function afegirElement(): void {
    const inputNom = document.getElementById('iNom') as HTMLInputElement;
    const inputValor = document.getElementById('iValor') as HTMLInputElement;
    const inputValor2 = document.getElementById('iValor2') as HTMLInputElement;
    const inputValor3 = document.getElementById('iValor3') as HTMLInputElement;

    equipos={
        Clubs: inputNom.value,
        Puntos:parseFloat(inputValor.value),
        GF: parseFloat(inputValor2.value),
        GC: parseFloat(inputValor3.value),

    }
    // listaEquipos.push(equipos);
    // console.table(listaEquipos);
    // Actualitzar la pantalla
    if(listaEquipos.length == 24){
        //@ts-ignore
        document.getElementById("btnAfegir").hidden = true;

    }
    actualitzarUI()

    // actualitzarUI();


    //
    // if(listaEquipos.length == 24){
    //    //@ts-ignore
    //     document.getElementById("btnAfegir").hidden = true;
    //
    // }
    // actualitzarUI()

}





// 5. Funció per dibuixar l'array al DOM
function actualitzarUI(): void {
    //pintar el ultimo elemento
    // const Clubs = document.getElementById('club') as HTMLElement;
    // const Puntos = document.getElementById('puntos') as HTMLElement;
    // const GF = document.getElementById('GF') as HTMLElement;
    // const GC = document.getElementById('GC') as HTMLElement;
    //
    // Clubs.innerText= equipos.Clubs
    // Puntos.innerText= String(equipos.Puntos);
    // GF.innerText=String(equipos.GF); // Com que és un número l'hem de passat a text
    // GC.innerText=String(equipos.GC);


//mostrar la lista
    const clubs = document.getElementById('contenedorlista') as HTMLElement;
    const clubs2 = document.getElementById('contenedorlista2') as HTMLElement;
    let html: string='';
    let html2='';
    for (let i = 0; i < listaEquipos.length; i++) {
        if (i<8){
            html += '<div class=\"cardEquipos3\">';
            html += '<h2>'+listaEquipos[i].Clubs+'</h2>' ;
            html += '<h2>'+listaEquipos[i].Puntos+'</h2>';
            let gols = listaEquipos[i].GF - listaEquipos[i].GC

            // html += '<h2>'+listaEquipos[i].GF+ - +listaEquipos[i].GC+ '</h2>';
            html += '<h2>'+gols+ '</h2>';
            html+='<\/div>'
        }else if(i>=8 && i<=11){
            html += '<div class=\"cardEquipos2\">';
            html += '<h2>'+listaEquipos[i].Clubs+'</h2>' ;
            html += '<h2>'+listaEquipos[i].Puntos+'</h2>';
            let gols = listaEquipos[i].GF - listaEquipos[i].GC

            // html += '<h2>'+listaEquipos[i].GF+ - +listaEquipos[i].GC+ '</h2>';
            html += '<h2>'+gols+ '</h2>';
            html +='<\/div>'
        }else if(i>11){
            html2 += '<div class=\"cardEquipos2\">';
            html2 += '<h2>'+listaEquipos[i].Clubs+'</h2>' ;
            html2 += '<h2>'+listaEquipos[i].Puntos+'</h2>';
            let gols = listaEquipos[i].GF - listaEquipos[i].GC

            // html += '<h2>'+listaEquipos[i].GF+ - +listaEquipos[i].GC+ '</h2>';
            html2 += '<h2>'+gols+ '</h2>';
            html2+='<\/div>'
        }
        // clubs2.innerHTML += html2;
    }
    clubs.innerHTML = html;
    clubs2.innerHTML = html2;

}


// 6. Assegurar que el DOM està carregat abans d'assignar esdeveniments
document.addEventListener('DOMContentLoaded', () => {
    const btnAfegir = document.getElementById('btnAfegir');
    btnAfegir?.addEventListener('click', afegirElement);

    actualitzarUI();
});


function ordenarPts(){
    listaEquipos.sort((a, b) => b.Puntos - a.Puntos);
    actualitzarUI();
}

function ordenarGFGC(){
    listaEquipos.sort((a, b) => b.GF - a.GF);
    actualitzarUI();
}

