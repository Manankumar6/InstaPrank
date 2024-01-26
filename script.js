

let result = document.getElementById("result")

function showiInput(){
    let input = document.getElementById("input_result").value;
    let hack = [
        "Initilizing Hacking Tools",
        "Connecting To The Instagram Server..",
        "Connecting To Server 1.....",
        "Connection Failed Retyring",
        "Cennecting Successfully////",
        "Username",
        "Fetched User Name...",
        "Fetching Hacking Modules....",
        "Connecting to moddules....trying...",
        "Modules intilizing cracking tool...",
        "Password Matching..........",
        "Failed............retrying",
        "Server Error............",
        "Connecting Server 2..",
        "Loading........................",
        "Matched Found...Please wait.......",

      ]
   
        const sleep_meg = async (second) => {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                resolve(true)
              }, second * 1000)
            })
          }
          const show_meg = async (message) => {
            await sleep_meg(1)
            result.innerHTML = result.innerHTML + message + "<br>"
    
          }
    
          async function mainfun(callback) {
            if (input != "") {
              result.innerHTML = ""
              hack.push(input + "hacked!!!!!!!!")
              for (let i = 0; i < hack.length; i++) {
                hack.splice(5, 1, input + " find account")
                await show_meg(hack[i])
              }
              callback()
    
            } else {
              result.innerHTML = "Please Enter UserID"
            }
    
          }
          let dots = 0;

          function show_alert() {
            alert_msg.classList.add("active");
            // alert_msg.innerHTML += "User Id: " + input
    
    
            alert_msg.innerHTML = `loading ${'.......'.slice(0, dots)}`;
            dots = (dots + 1) % 4; // Use 11 to loop through dots 0 to 10
    
    
            timeoutid = setTimeout(show_alert, 500); // Call the function again after 500ms
            setTimeout(show_result, 1000)
    
    
          }
          function show_result() {
            setTimeout(() => {
    
              clearTimeout(timeoutid)
    
              alert_msg.innerHTML = "<h2>Hacked Successfully.</h2>" + "<br>" + "User Id:" + input + "<br>" + "Password : ********" + "<br>" + "<h10>Copy and Paste Password</h10> " + "<h15> *This is only a prank purpose. </h15>"
            }, 3000)
    
          }
          
      mainfun(show_alert)
}

function greeting(){
    setTimeout(() => {
        result.innerHTML= "Hello! Follow me on Instagram @manankumar_06 "  
    }, 100);
}
greeting()