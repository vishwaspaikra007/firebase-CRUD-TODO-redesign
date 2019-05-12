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
    let timeLeft = new Date(todos[x].deadline).getTime() - new Date().getTime();
    const title = "50% time remaining";
    const options = {
        body: "Dealine : " + new Date(todos[x].deadline) + " and timeleft :" + new Date(timeLeft)
    };
    var n = new Notification(title, options);   
}