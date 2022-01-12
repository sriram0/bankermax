$("#signupForm").on("submit", function(e){
    e.preventDefault();
    if($("#passI").val() === $("#cPassI").val()){
        if($("#passI").val().length >= 7){
            add("/auth", $("#userI").val(), $("#passI").val());
            add("/bal", $("#userI").val(), 10);
            $("input").val("");
            alert("Account Created");
            $("#toLogin").text("Login now!")
        }else{
            alert("Password must be at least 7 chars long");
        }
    }else{
        alert("Entered Password does not match Confirmation.");
    }
});