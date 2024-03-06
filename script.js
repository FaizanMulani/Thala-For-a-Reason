function handleChange() {
    var input = document.getElementById("input");
    var length = input.value.length;
    var hideBtn = document.getElementById("hide");
  
    if (length == 7) {
      document.getElementById("result").innerHTML = `
        <br />
        <p>Thala For a Reason.....!</p>
        <br />
        <video src="video.mp4" autoplay loop></video>
      `;
      hideBtn.style.display = "block";
    } else {
      document.getElementById("result").innerHTML = `
        <br />
        <p>Sorry.....!</p>
      `;
      hideBtn.style.display = "block";
    }
  }
  
function hide() {
    document.getElementById("result").innerHTML = "";
    document.getElementById("hide").style.display = "none";
  }


showName = () => {
    var name = document.getElementById("input").value;
    document.getElementById("name").innerHTML = "Your name " + name + " has " + name.length + " letters.";
    // if(length == 7) {
    //     document.getElementById("name").innerHTML = "Your name " + name + " has seven letters.";
    // } else if(length > 7 ){
    //     document.getElementById("name").innerHTML = "Your name " + name + " has greater than seven letters.";
    // } else if(length < 7 ){
    //     document.getElementById("name").innerHTML = "Your name " + name + " has less than seven letters."
    // }
}

hideName = () => {
    if(length == 7) {
        document.getElementById("name").innerHTML = " ";
    } else if(length > 7 ){
        document.getElementById("name").innerHTML = " ";
    } else if(length < 7 ){
        document.getElementById("name").innerHTML = " "
    }
}
