var matrice = [
    [0,0,0],
    [0,0,0],
    [0,0,0]
]

//Cerchio "https://bit.ly/3vQXNvs"
//Croce "https://bit.ly/3Cnflla"

var AvversarioPC = false; //l'utente sta giocando contro la CPU se impostato a true
var MossaCPU = false; //Il PC esegue la prima mossa se true

function GiocoPC(){
    AvversarioPC = true;
    document.getElementById("giocatore2").innerHTML = "Sta giocando la CPU";
}

function IniziaCPU(){
    document.getElementById("giocatore2").innerHTML = "Sta giocando la CPU";
    MossaCPU = true;
    //Eseguo la prima mossa del computer
    MossaComputer();
}

function Gioca(idCasellaSelezionata){
    //Prima mossa PC
    if(MossaCPU)
    {
        //derivo le coordinate del blocco cliccato dal suo id
        var x = idCasellaSelezionata.split(",")[0];
        var y = idCasellaSelezionata.split(",")[1];

        //Eseguo un controllo per assicurarmi che il blocco non contenga già un elemento di gioco
        if(!Controlla(x,y))
            alert("Casella già selezionata!");
        else {
            //In caso non lo sia confermo la mossa del giocatore
            InserisciGiocata(x,y);
        }

        MossaComputer();

        ControllaVincita();
    }
    else //giocatore 1 contro giocatore 2 o PC
    {
        //derivo le coordinate del blocco cliccato dal suo id
        var x = idCasellaSelezionata.split(",")[0];
        var y = idCasellaSelezionata.split(",")[1];

        //Eseguo un controllo per assicurarmi che il blocco non contenga già un elemento di gioco
        if(!Controlla(x,y))
            alert("Casella già selezionata!");
        else {
            //In caso non lo sia confermo la mossa del giocatore
            InserisciGiocata(x,y);

            //in caso il giocatore stia giocando contro il computer eseguo la mossa della CPU
            if(AvversarioPC)
                MossaComputer();

            ControllaVincita();
        }  
    }
}

function MossaComputer(){
    //Genero casualemnte due coordinate e in caso il blocco sia libero inserisco la mossa avversaria
    var x = Math.floor(Math.random() * (3));
    var y = Math.floor(Math.random() * (3));

    if(!Controlla(x,y))
        MossaComputer();
    else
    {
        document.getElementById(x + "," + y).src = "https://bit.ly/3vQXNvs";
        matrice [x][y] = "O";
    }
}

//Semplice metodo che verifica la presenza o meno di un elemento di gioco all'interno della matrice
function Controlla(x,y){
    if(matrice[x][y] == 0)
        return true;
    else
        return false;
}

//MEtodo che conferma l'inserimento della mossa da parte dei giocatori
var player = "X";
function InserisciGiocata(x,y){
    if(player == "X")
    {
        matrice [x][y] = "X";
        document.getElementById(x + "," + y).src = "https://bit.ly/3Cnflla";    
        //In caso non stia giocando il PC cambio il giocatore per far sì che la prossima mossa sia legata al secondo giocatore
        if(!AvversarioPC && !MossaCPU)
            player = "O";
    }
    else
    {
        matrice [x][y] = "O";
        document.getElementById(x + "," + y).src = "https://bit.ly/3vQXNvs";    
        //Una volta finalizzata la mossa del secondo giocatore reimposto la variabile
        player = "X";
    }
}

//Controllo della vincita tramite ogni possibilità
function ControllaVincita(){
    if(matrice[0][0] == "X" && matrice[0][1] == "X" && matrice[0][2] == "X")
        alert("Hai vinto giocatore 1!");
    else if (matrice[0][0] == "O" && matrice[0][1] == "O" && matrice[0][2] == "O")
        if(!AvversarioPC && !MossaCPU)
            alert("Hai vinto giocatore 2!");
        else
            alert("Ha vinto la CPU!");
    else if (matrice[1][0] == "X" && matrice[1][1] == "X" && matrice[1][2] == "X")
        alert("Hai vinto giocatore 1!");
    else if (matrice[1][0] == "O" && matrice[1][1] == "O" && matrice[1][2] == "O")
        if(!AvversarioPC && !MossaCPU)
            alert("Hai vinto giocatore 2!");
        else
            alert("Ha vinto la CPU!");
    else if (matrice[2][0] == "X" && matrice[2][1] == "X" && matrice[2][2] == "X")
        alert("Hai vinto giocatore 1!");
    else if (matrice[2][0] == "O" && matrice[2][1] == "O" && matrice[2][2] == "O")
        if(!AvversarioPC && !MossaCPU)
            alert("Hai vinto giocatore 2!");
        else
            alert("Ha vinto la CPU!");
    else if(matrice[0][0] == "X" && matrice[1][0] == "X" && matrice[2][0] == "X")
        alert("Hai vinto giocatore 1!");
    else if(matrice[0][0] == "O" && matrice[1][0] == "O" && matrice[2][0] == "O")
        if(!AvversarioPC && !MossaCPU)
            alert("Hai vinto giocatore 2!");
        else
            alert("Ha vinto la CPU!");
    else if(matrice[0][1] == "X" && matrice[1][1] == "X" && matrice[2][1] == "X")
        alert("Hai vinto giocatore 1!");
    else if(matrice[0][1] == "O" && matrice[1][1] == "O" && matrice[2][1] == "O")
        if(!AvversarioPC && !MossaCPU)
            alert("Hai vinto giocatore 2!");
        else
            alert("Ha vinto la CPU!");
    else if(matrice[0][2] == "X" && matrice[1][2] == "X" && matrice[2][2] == "X")
        alert("Hai vinto giocatore 1!");
    else if(matrice[0][2] == "O" && matrice[1][2] == "O" && matrice[2][2] == "O")
        if(!AvversarioPC && !MossaCPU)
            alert("Hai vinto giocatore 2!");
        else
            alert("Ha vinto la CPU!");
    else if(matrice[0][0] == "X" && matrice[1][1] == "X" && matrice[2][2] == "X")
        alert("Hai vinto giocatore 1!");
    else if(matrice[0][0] == "O" && matrice[1][1] == "O" && matrice[2][2] == "O")
        if(!AvversarioPC && !MossaCPU)
            alert("Hai vinto giocatore 2!");
        else
            alert("Ha vinto la CPU!");            
    else if(matrice[0][2] == "X" && matrice[1][1] == "X" && matrice[2][0] == "X")
        alert("Hai vinto giocatore 1!");
    else if(matrice[0][2] == "O" && matrice[1][1] == "O" && matrice[0][2] == "O")
        if(!AvversarioPC && !MossaCPU)
            alert("Hai vinto giocatore 2!");
        else
            alert("Ha vinto la CPU!");

    let caselleVuote = 0;

    for(let i = 0; i < matrice.length; i++)
        for(let j = 0; j < matrice.length; j++)
            if (matrice[i][j] == 0)
                caselleVuote++

    //Nel caso sia rimasta una sola casella vuota e il porgramma non abbia rilevato alcuna vittoria comunico ai giocatori il pareggio
    if(caselleVuote == 1)
        alert("Pareggio!");
}