console.log("%cThe Answer To This Question Is the Password You Seek!", "font-size: 15px;");
console.log("*****What Year Was JavaScript Created?****");


$("#sendMSG").on("click", function(e) {
    e.preventDefault();
    const name = $("#nameInput").val();
    const email = $("#emailInput").val();
    const message = $("#detailsInput").val();
    console.log(`Message From: ${name} | Email: ${email} | Message Details: ${message}`);
});