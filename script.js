// Get to DOM elements
const gameContainer = document.querySelector(".container"),
userResult = document.querySelector(".user_result img"),
cpuResult = document.querySelector(".cpu_result img"),
result = document.querySelector(".result"),
optionImages = document.querySelectorAll(".option_image");

//Loop through each option image element
optionImages.forEach((image, index)=>{
    image.addEventListener("click",(e)=>{
        image.classList.add("active");

        userResult.src=cpuResult.src="images/rock.png";
        result.textContent="Wait...";

        //loop through each option element again
        optionImages.forEach((image2, index2)=>{
            //if the current index doesn't match the clicked index
            //remove the "active" class from the other option images
            index !== index2 && image2.classList.remove("active");
        });

        gameContainer.classList.add("start");

        //set a timeout to delay the result calculation
        let time=setTimeout(()=>{
            gameContainer.classList.remove("start");
            //get the source of the clicked option
            let imageSrc = e.target.querySelector("img").src;
            //set the user image to the clicked option image
            userResult.src = imageSrc;
            
            //Generate a random number between 0 amd 2
            let randomNumber = Math.floor(Math.random()*3);
            //create an array of CPU image options
            let cpuImages = ["images/rock.png","images/paper.png","images/scissors.png"];
            //set the cpu image to a random option from the array
            cpuResult.src=cpuImages[randomNumber];
            
            //Assign a letter value to the CPU option (R for rock,P for paper,S for scissors)
            let cpuValue=["R","P","S"][randomNumber];
            //Assign a letter value to the clicked option (based on index)
            let userValue = ["R","P","S"][index];
            
            //create an object with all possible outcomes
            let outcomes={
                RR: "Draw",
                RP: "Computer",
                RS: "User",
                PP: "Draw",
                PR: "User",
                PS: "Computer",
                SS: "Draw",
                SR: "Computer",
                SP: "User",
            };
            
            //Look up at the outcome value based on user and CPU options
            let outComeValue=outcomes[userValue+cpuValue];
            
            //display the result
            result.textContent= userValue===cpuValue?"Match Draw":`${outComeValue} Won!!`;
        }, 2500);       
    });
});