$(document).ready(function () {

    $('.paywithrozpay').click(function (e) {
        e.preventDefault();

        var fname = $('[name="fname"]').val();
        var lname = $('[name="lname"]').val();
        var email = $('[name="email"]').val();
        var phone = $('[name="phone"]').val();
        var address = $('[name="address"]').val();
        var city = $('[name="city"]').val();
        var stats = $('[name="stats"]').val();
        var conutry = $('[name="conutry"]').val();
        var pincode = $('[name="pincode"]').val();
        var token = $('[name="csrfmiddlewaretoken"]').val();


        if (fname == "" || lname == "" || email == "" || phone == "" || address == "" || city == "" || stats == "" || conutry == "" || pincode == "") {
            // alert('All Feilds Are Mandatory !');
            // swal('error', 'All Feilds Are Mandatory !');
            swal("All Feild are Mandtatory","", "error")
            return false;

        } else {

            $.ajax({
                method: "GET",
                url: "/procced_to_pay",
                success: function (response) {
                    console.log(response)
                    var options = {
                        "key": "Your key ", // Enter the key ID genreated from the Dashbord 
                        // "amount"  : response.total_price , // Amount is in Currency subun
                        "amount": response.total_price * 100, // Amount is in Currency subun
                        "currency": "",
                        "name": "Hamzoooz",
                        "descriptions": "Thank You for Buying from us ! ",
                        "image": "https://bookhope.com/logo.png",
                        "order_id": "order_83495708934weuiorfj34iouer",
                        "handler": function (responseB) {
                            alert(responseB.Razorpay_payment_id);
                            // swal(responseB.Razorpay_payment_id, "", "error");
                            // alert(response.Razorpay_order_id);
                            // alert(response.Razorpay_signature);
                            data = {
                                "fname": fname,
                                "lname": lname,
                                "email": email,
                                "phone": phone,
                                "address": address,
                                "city": city,
                                "stats": stats,
                                "conutry": conutry,
                                "pincode": pincode,
                                "payment_mode": "Paid by Razorpay",
                                "payment_id": responseb.Razorpay_payment_id,
                                csrfmiddlewaretoken: token

                            }

                            $.ajax({
                                method: "POST",
                                url: "/place-order",
                                data: data,
                                success: function (responseC) {
                                    swal("Congratulations !", responseC.status, "success").then((value) => {
                                        window.location.href = '/'
                                    });
                }
            });
        },
        "prefill": {
            "name": fname + " " + lname,
                "email": email,
                    "contact": phone,
                        },
        "note": {
            "address": "Razropay Corporate Office",
                        },
        "theme": {
            "color": "#3399cc",
                        }
    };

    var razp = new Razorpay(options);
    razp.open();
}
            });


        }


    });
});  
