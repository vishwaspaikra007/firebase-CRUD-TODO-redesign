// function to store in firebase firestore .....................................................
function firestorage(x) {
    const app = firebase.app();
    const db = firebase.firestore();
    const data = db.collection("todos").doc(x);
    data.get() 
        .then(doc => {
            const dat = doc.data();
            if(uid === x) {
            if(dat.time > timeLocal) {
                todos = dat.todo;
                timeLocal = dat.time;
                fillStorage();
            } else if(dat.time < timeLocal) {
                data.update({todo : todos});
                data.update({time : timeLocal}); 
            }
            } else if(!dat) {
                data.set({
                    time : Date.now(),
                    todo : [{data: "start Adding something",
                            date: Date(),
                            deadline: Date()}]
                })
                .then(data => {
                    todos = data.todo;
                })
                fillStorage();
            } else {
                uid = x;
                todos = dat.todo;
                timeLocal = dat.time;
                fillStorage();
            }
        });
    }
//................................................................................................