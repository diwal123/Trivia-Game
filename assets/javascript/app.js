function startGame (){


    
    //All questions
    var questionNO1 = $("#question1"); 
    var questionNO2 = $("#question2"); 
    var questionNO3 = $("#question3"); 
    var questionNO4 = $("#question4"); 
    var questionNO5 = $("#question5"); 
    var questionNO6 = $("#question6"); 
    var questionNO7 = $("#question7"); 
    var questionNO8 = $("#question8"); 
    var questionNO9 = $("#question9"); 
    var questionNO10 = $("#question10"); 
    var questionNO11 = $("#question11"); 
    var questionNO12 = $("#question12"); 
    var questionNO13 = $("#question13"); 
    var questionNO14 = $("#question14"); 
    var questionNO15 = $("#question15"); 
    var questionNO16 = $("#question16"); 
    var questionNO17 = $("#question17"); 
    var questionNO18 = $("#question18"); 
    var questionNO19 = $("#question19"); 
    var questionNO20 = $("#question20"); 
    
    var isClicked = false;
    var timeStarted = false;
    
    $("#timeRemaining").text("10");
    
    // Putting the Question in an array
    var questionArray = [questionNO1, questionNO2, questionNO3, questionNO4, questionNO5, questionNO6, questionNO7, questionNO8, questionNO9, questionNO10, questionNO11, questionNO12, questionNO13, questionNO14, questionNO15, questionNO16, questionNO17, questionNO18, questionNO19, questionNO20];
    
    // Randomly Selecting Question, Make them appear in display and still make selected ques to have display as none
    var quesDiv = $("#questionMainDiv");
    var randomQuestion;
    var index;
    var oldQuestions = [];
    var test;
    
    function random(){
    //Selecting Randomly
    randomQuestion =  questionArray[Math.floor(Math.random()*questionArray.length)];
    index = questionArray.indexOf(randomQuestion);
    console.log(randomQuestion);
    //Copying the random Ques to another array and chinging their CSS
    oldQuestions.push(randomQuestion);
    for (var i = 0; i<oldQuestions.length; i ++ ){
        oldQuestions[i].css("display", "none");
    }
    
    
    
    //Deleting the selected ques from array
    var test = questionArray.splice(index, 1);
    // Making the randomly selected ques to appear on brwser
    quesDiv.append(randomQuestion);
    
    //Making The randomly Selected ques display as block
    randomQuestion.css("display", "block");
    
    isClicked=false;
    timeStarted=false;
    }
    
    random();
    
    
    // Adding Scores $ Color of Answers
    var score =0;
    var correct = $(".correct");
    var incorrect = $(".incorrect");
    
    
    
    
    // Write a for loop to count the score for all the possiblities
    
    
    
    $(correct).on("click", function(){
        if(isClicked==false){
        score++;
        isClicked=true; 
        console.log(score);
        $("#resultDiv").text("Correct");
      
     }    
    })
    
    $(incorrect).on("click", function(){
        if(isClicked==false){
        $("#resultDiv").text("Incorrect");
        } 
    })
    
    
    
    
     
        
    
    // Creating a Time function Which will account time and change question in every 5 seconds
    var time = 10;
    var intervalid;
    
    function timer (){
       time--;;
       
        $("#timeRemaining").text(time);
        if (time <= 0){
            isClicked=true;
            randomQuestion.find(correct).css("backgroundColor", "green");
            randomQuestion.find(incorrect).css("backgroundColor", "red"); 
            $("#timeRemaining").text("Get Ready For Next");
            
            
            if (oldQuestions.length==20 && time== -3){
                $("#questionMainDiv").empty();
                
                var scoreDiv = $("<div class='score'>");
                var displayText = $("<p>").text("Congratulations!!!! You finished the game.Hope You Liked it. Still Working on the game to fine tune it.");
                var displayScore = $("<h2 class = 'scoreTab'>").text("Your Final Score: "+score);
                scoreDiv.append(displayText);
                scoreDiv.append(displayScore);
                $("#timeRemaining").css("display", "none");
    
    
                var b = $("<button>");
                b.addClass("closeButton");
                b.text("Exit");
                scoreDiv.append(b);
                $("#scoreHere").append(scoreDiv);
    
                $(".closeButton").on("click", function(){
                    window.close();
                })
                
                
    
    
        }
           
          }; 
    
        if (time == -3){
            isClicked=true;
            time = 10;
            $("#resultDiv").text(""); 
            random();
    
    
        
        }
    };
    
    $(".list-group").on("click", function(){
        if(timeStarted==false){
        randomQuestion.find(correct).css("backgroundColor", "green");
        randomQuestion.find(incorrect).css("backgroundColor", "red");
        time = 0;
        timeStarted=true;
    }
    }) 
    
    
    
    intervalid = setInterval(timer, 1000);
    
    
    
    
    // My color should display for 2 seconds and 5 seconds for image
    
    }
        
        
    
    
    $("#startGame").on("click", function(){
        $("#rules").css("display", "none");
        //$("#themePage").css("display", "block");
        startGame();
        console.log( $("#themePage"));
    
    
    })  
    
    
    
        
        
        
        
        
        
        
        
        
        
        
        
        
        
        