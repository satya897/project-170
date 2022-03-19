AFRAME.registerComponent("markerhandler", { 
    init: async function () { 
        this.el.addEventListener("markerFound", () => { 
            console.log("marker is found") 
        this.handleMarkerFound(); 
    }); 
    this.el.addEventListener("markerLost", () => { 
        console.log("marker is lost") 
        this.handleMarkerLost(); 
    }); 
},

handleMarkerFound: function () { 
    // Changing button div visibility 
    var buttonDiv = document.getElementById("button-div"); 
    buttonDiv.style.display = "flex"; 
    var ratingButton = document.getElementById("summary-button"); 
    var orderButtton = document.getElementById("order-button"); 
    // Handling Click Events 
    ratingButton.addEventListener("click", function () { 
        swal({ icon: "warning", title: "Order Summary ", text: "Work In Progress" }); 
    });
orderButtton.addEventListener("click", () => { 
    swal({ icon: "https://i.imgur.com/4NZ6uLY.jpg", title: "Thanks For Order!", text: "This is a toy car for you and your family.!"}); 
}); 
},

getAllToys: async function(){
    return await firebase 
    .firestore()
    .collection("toys")
    .get()
    .then(snap => {
        return snap.docs.map(doc => doc.data ())
    });

},


handleMarkerLost: function () { 
    // Changing button div visibility 
    var buttonDiv = document.getElementById("button-div"); 
    buttonDiv.style.display = "none"; 
} 
    
});

 