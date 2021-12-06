

$("#transForm button").on("mousedown", function(e){
    e.preventDefault();
    var doneOnce = false;
    get("/bal", function(key, data){
        console.clear()
        console.log(Number($("#numI").val()) , data);
        if(key == localStorage.getItem("bankerU") && Number($("#numI").val()) <= data && doneOnce==false){
            doneOnce = true;
            console.log(doneOnce);
            var num = Number($("#numI").val());
            var doneOnce2 = false;
            get("/bal", function(Ikey, Idata){
                if(Ikey === $("#recipI").val() & !doneOnce2){
                    doneOnce2 = true;
                    add("/bal", $("#recipI").val(), Idata+num);
                    alert("Transaction Successful");
                    $("#transForm").after(`<div class="bg-light text-body round"><h5>Transaction Receipt</h5> <label>Recipient Username: ${$("#recipI").val()}<br>Amount Sent: $${$("#numI").val()}</label></div>`)
                }
            });
            add("/bal", localStorage.getItem("bankerU"), data-num);
        }
    });
});

$("#depForm button").on("mousedown", function(e){
    e.preventDefault();
    var doneOnce = false;
    get("/bal", function(key, data){
        console.clear()
        console.log(Number($("#numI").val()) , data);
        if(key == localStorage.getItem("bankerU") && doneOnce==false){
            doneOnce = true;
            console.log(doneOnce);
            var num = Number($("#amI").val());
            add("/bal", localStorage.getItem("bankerU"), data+num);
            alert("Addition Successful")
        }
    });
});

get("/bal", function(key, data){
    if(key === localStorage.getItem("bankerU")){
        $("#balance").html("Your Current Balance: "+data);
    }
});

var logout = function(){
    localStorage.removeItem("bankerU");
    location = "index.html";
}