if("Notification" in window) {
    if(Notification.permission !== "default") {
        const title = "TODO Application";
        const options = {
            body: "Your app notification is working fine"
        };
        var n = new Notification(title, options);
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
var notify50 = (x) => {
    var dline = new Date(todos[x].deadline);
    var now = new Date();
    // to show a user friendly time left
    var years = dline.getFullYear() - now.getFullYear();
    var months = dline.getMonth() - now.getMonth();    
    var days = dline.getDate() - now.getDate();
    var hours = dline.getHours() - now.getHours();
    var minutes = dline.getMinutes() - now.getMinutes();
    var seconds = dline.getSeconds() - now.getSeconds();

    var timeLeft = "";
    if(years != 0)
        timeLeft += years + " Yr ";
    if(months != 0)
        timeLeft += months + " Mo "; 
    if(days != 0)
        timeLeft += days + " D ";
    if(hours != 0)
        timeLeft += hours + " Hrs ";
    if(minutes != 0)
        timeLeft += minutes + " min ";
    if(seconds != 0)
        timeLeft += seconds + " sec ";

    const title = "50% time remaining";
    const options = {
        body: "Dealine : " + new Date(todos[x].deadline) + 
              " and timeleft :" + timeLeft
    };
    var n = new Notification(title, options);   
}