// notification permission ..................................................................
if("Notification" in window) {
    if(Notification.permission !== "default") {
        // navigator.serviceWorker.getRegistration()
        //     .then( reg => {
        //         const options = {
        //             body: "Your app notification is working fine",
        //             icon: "../firebase-CRUD-TODO-redesign/favicon.ico"
        //         };
        //         reg.showNotification("TODO NOtification",options)
        //     })
    } else {
        Notification.requestPermission()
            .then(result => {
                console.log(result);
            })
            .catch(err => {
                console.log(err);

            })
    }
}
// ............................................................................................
//  notify 50 ............................................................................
var notify50 = (x) => {
    var dline = new Date(todos[x].deadline).getTime();
    var now = new Date().getTime();
    subVal = dline - now;
    // to show a user friendly time left
    var years = ((subVal)/3.154e+10).toFixed();
    var months = ((subVal)/2628336214).toFixed();    
    var days = ((subVal)/86410959).toFixed();
    var hours = ((subVal)/3600457).toFixed();
    var minutes = ((subVal)/60008).toFixed();
    var seconds = ((subVal)/1000).toFixed();

    var timeLeft = "";
    if(years > 0)
        timeLeft += years + " Yr ";
    if(months > 0)
        timeLeft += months + " Mo "; 
    if(days > 0)
        timeLeft += days + " D ";
    if(hours > 0)
        timeLeft += hours + " Hrs ";
    if(minutes > 0)
        timeLeft += minutes + " min ";
    if(seconds > 0)
        timeLeft += seconds + " sec ";

    if(Notification.permission == "granted")
    {
        navigator.serviceWorker.getRegistration()
            .then( reg => {
                const options = {
                    body: "Dealine : " + new Date(todos[x].deadline) + 
                          " and timeleft :" + timeLeft,
                    icon: "../firebase-CRUD-TODO-redesign/favicon.ico"
                };
                reg.showNotification("50% time remaining",options)
            })
    }  
}
//..........................................................................................