// notification permission ..................................................................
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
// ............................................................................................
//  notify 50 ............................................................................
var notify50 = (x) => {
    var dline = new Date(todos[x].deadline).getTime();
    var now = new Date();
    // to show a user friendly time left
    var years = ((dline - now)/3.154e+10).toFixed();
    var months = ((dline - now)/2628336214).toFixed();    
    var days = ((dline - now)/86410959).toFixed();
    var hours = ((dline - now)/3600457).toFixed();
    var minutes = ((dline - now)/60008).toFixed();
    var seconds = ((dline - now)/1000).toFixed();

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

    const title = "50% time remaining";
    const options = {
        body: "Dealine : " + new Date(todos[x].deadline) + 
              " and timeleft :" + timeLeft
    };
    var n = new Notification(title, options);   
}
//..........................................................................................