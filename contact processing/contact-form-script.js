$("#contactForm").validator().on("submit", function(event) {
    if(event.isDefaultPrevented()){
        // handle invalid form
        formError();
        submitMSG(false, "Fill form");
    } else {
        //success
        event.preventDefault();
        submitForm();
    }
})

function submitForm() {
    let name = $("#name").val();
    let email = $("#email").val();
    let subject = "Mail from Portfolio Website"
    let message = $("#message").val();

    $.ajax({
        type: "POST",
        url: "contact processing\form-process.php",
        data: "name=" + name + "&email=" + email + "&msg_subject=" + subject + "&message=" + message,
        success : function(text){
            if (text == "success"){
                formSuccess();
            } else{
                formError();
            }
        }
    });
}

function formSuccess(){
    alert("Message Submitted")
}

function formError(){
    alert("Form error");
}
