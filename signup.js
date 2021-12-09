$("#signupForm").on("submit", function(e){
    e.preventDefault();
    if($("#passI").val() === $("#cPassI").val()){
        if($("#passI").val().length >= 7){
            add("/auth", $("#userI").val(), $("#passI").val());
            add("/bal", $("#userI").val(), 10);
            $("input").val("");
            $("a").animate({
                fontSize: "20px"
            }, 5000, function(){
                $("a").html("Login to your New Account");
            });
            alert("Account Created");
            location = "index.html";
        }else{
            alert("Password must be at least 7 chars long");
        }
    }
});