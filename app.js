$(document).ready(function() {
    document.getElementsByClassName("nav-item")[0].click();
});

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("nav-item");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}

function openModal(modalSelector) {
    $('#' + modalSelector).css('display', 'block');
}

function closeModal(modalSelector) {
    $('#' + modalSelector).css('display', 'none');
}


$.ajax({
    url: "data.json",
    method: "POST",
    data: [
        {
            "id": 2
        }
    ],
    success: function (data){
        console.log("Saved!");
        console.log(data);
    },
    error: function (e){
        console.log("Error!");
        console.log(e);
    }
});
