window.onload = () => {
    //movies
    var moviesFetch = fetch("../movies.json");
        moviesFetch.then(x => x.json())
        .then(y => {
           var x1 = localStorage.getItem("Movies");
            console.log("x1"+x1);
            if(x1==null){
                localStorage.setItem("Movies", JSON.stringify(y));
            }
            // else{
            //      localStorage.setItem("Movies", JSON.stringify(x1));
            //  }
        }).catch(err => console.log(err));

        //comedy
    var laughterFetch = fetch("../comedy.json");
        laughterFetch.then(x => x.json())
        .then(y => {
            localStorage.setItem("LaughterShows", JSON.stringify(y));
        }).catch(err => console.log(err));

        //events
        var eventsFetch = fetch("../events.json");
        eventsFetch.then(x => x.json())
        .then(y => {
            localStorage.setItem("Events", JSON.stringify(y));
        }).catch(err => console.log(err));

        //plays
        var playsFetch = fetch("../plays.json");
        playsFetch.then(x => x.json())
        .then(y => {
            localStorage.setItem("Plays", JSON.stringify(y));
        }).catch(err => console.log(err));

        //sports
        var sportsFetch = fetch("../sports.json");
        sportsFetch.then(x => x.json())
        .then(y => {
            localStorage.setItem("Sports", JSON.stringify(y));
        }).catch(err => console.log(err));

        //activities
    var activitiesFetch = fetch("../activities.json");
        activitiesFetch.then(x => x.json())
        .then(y => {
            localStorage.setItem("Activities", JSON.stringify(y));
        }).catch(err => console.log(err));
}