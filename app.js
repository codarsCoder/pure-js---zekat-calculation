    // virgül fonksiyonu
    function virgul(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
    // varlık hesap
    function toplamHesapla(){
    let toplamVarlik = document.getElementsByClassName("carp"); 
    let toplamTl=0;
    let toplamUsd=0;
    let toplamEuro=0;
    let toplamAltin=0;
    let toplamGumus=0;
    let borcTl=0;
    let borcUsd=0;
    let borcEuro=0;
    for(let i = 0; i<toplamVarlik.length ; i++){
        let id =   toplamVarlik[i].id;
        let deger = document.getElementById(id).value; //i her arttığında deger içine value alalaım
        if(id=="tl" && !isNaN(deger)){
            toplamTl += Number(deger)
        }
        else if(id=="borcTl" && !isNaN(deger)){
            borcTl = Number(deger)           
        }
        else if(id=="usd" && !isNaN(deger)){
            toplamUsd += Number(deger)*18;
        }
        else if(id=="borcUsd" && !isNaN(deger)){
            borcUsd = Number(deger)*18;       
        }
        else if(id=="euro" && !isNaN(deger)){
            toplamEuro += Number(deger)*18;
        }
        else if(id=="borcEuro" && !isNaN(deger)){
            borcEuro = Number(deger)*18;
        }
        else if(id=="grAltin" && !isNaN(deger)){
            toplamAltin += Number(deger) * 999.05;
        }
        else if(id=="ceyrek" && !isNaN(deger)){
            toplamAltin += Number(deger) * 1666;
        }
        else if(id=="yarim" && !isNaN(deger)){
            toplamAltin += Number(deger) * 3286;
        }
        else if(id=="tam" && !isNaN(deger)){
            toplamAltin += Number(deger) * 6572;
        }
        else if(id=="cumhuriyet" && !isNaN(deger)){
            toplamAltin += Number(deger) * 6572;
        }
        else if(id=="bilezik" && !isNaN(deger)){
            toplamAltin += Number(deger) * 930.04;
        }
        else if(id=="gumus" && !isNaN(deger)){
            toplamGumus = Number(deger) * 11.35;
        }
        let genetTutar = (toplamTl + toplamUsd + toplamEuro + toplamAltin + toplamGumus).toFixed(2) -  (borcEuro + borcTl + borcUsd).toFixed(2);
        document.getElementById("toplamTl").innerText = toplamTl.toFixed(2);
        document.getElementById("toplamUsd").innerText = toplamUsd.toFixed(2);
        document.getElementById("toplamEuro").innerText = toplamEuro.toFixed(2);
        document.getElementById("toplamAltin").innerText = toplamAltin.toFixed(2);
        document.getElementById("toplamGumus").innerText = toplamGumus.toFixed(2);
        document.getElementById("toplamBorclar").innerText = (borcEuro + borcTl + borcUsd).toFixed(2);
        document.getElementById("genelToplam").innerText = genetTutar;
        if(genetTutar >= (80*999.05)){
            document.getElementById("zekat").innerText = (genetTutar * 0.025).toFixed(2);
        }else{
            document.getElementById("zekat").innerText = 0;
        }
    }

    }

    let changeElement = document.getElementsByClassName("carp");
    for(let k = 0; k < changeElement.length; k++){
        changeElement[k].addEventListener("change", function(){
            toplamHesapla();
        })
    }

