$("#loginForm").on("submit", function(e){
    e.preventDefault();
    var found = false;
    get("/auth", function(key, data){
        if(key === $("#userI").val() && data === $("#passI").val()){
            console.log("here");
            found = true;
            localStorage.setItem("bankerU", $("#userI").val());
            location = "main.html";
        }
    });
    if(!found){
        $(this).before("<b class='text-danger'>Incorrect username and/or password.</b><br>");
    }
});