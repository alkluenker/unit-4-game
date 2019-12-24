var wins = "";
var losses = "";
var totalScore = 0;


var randomNumber = Math.floor(Math.random() * 102) + 20;
$("#randomnumber").text(randomNumber);

var randomValue1 = "";
var randomValue2 = "";
var randomValue3 = "";
var randomValue4 = "";

var randomValue = "";

//var randomValue = randomValue1 + randomValue2 + randomValue3 + randomValue4;

$(document).ready(function() {
    
    function newGame() {
        randomNumber = Math.floor(Math.random() * 102) + 20;
        $("#randomnumber").text(randomNumber);
        console.log("random number " + randomNumber);
        totalScore = 0;
        $("#tsnumber").text(totalScore);
        $("#image1text").empty();
        $("#image2text").empty();
        $("#image3text").empty();
        $("#image4text").empty();
        console.log("total score " + totalScore);
        randomValue1 = Math.floor(Math.random() * 12) + 1;
        randomValue2 = Math.floor(Math.random() * 12) + 1;
        randomValue3 = Math.floor(Math.random() * 12) + 1;
        randomValue4 = Math.floor(Math.random() * 12) + 1;
        
    }

    newGame();
    
    
    /*$(".image").on("click", function() {
        randomValue = Math.floor(Math.random() * 12) + 1
        randomValue += $(this).val();
        
        console.log(randomValue);
        
        randomValue = parseInt(randomValue);
    
        totalScore += randomValue;
        $("#tsnumber").text(totalScore);
        console.log(totalScore);*/
        
    $("#image1").on("click", function() {
        
        $("#image1text").text(randomValue1);

        $("#tsnumber").text(randomValue1);
        randomValue1 += $(this).val();
        
        console.log(randomValue1);
        
        randomValue1 = parseInt(randomValue1);
    
        totalScore += randomValue1;
        $("#tsnumber").text(totalScore);
        //console.log(totalScore);

        if (totalScore === randomNumber) {
            alert("you win");
    
            wins++;
            $("#wins").text("Wins: " + wins);
            console.log("wins " + wins);
            newGame();
        }
    
        if (totalScore > randomNumber) {
            alert("you lose");
            losses++;
            $("#losses").text("Losses: " + losses);
            console.log("losses " + losses);
            newGame();
        }
        
    })

    $("#image2").on("click", function() {
    
        $("#image2text").text(randomValue2);

        $("#tsnumber").text(randomValue2);

        randomValue2 += $(this).val();
        
        console.log(randomValue2);
        
        randomValue2 = parseInt(randomValue2);
    
        totalScore += randomValue2;
        $("#tsnumber").text(totalScore);

        if (totalScore === randomNumber) {
            alert("you win");
    
            wins++;
            $("#wins").text("Wins: " + wins);
            console.log("wins " + wins);
            newGame();
        }
    
        if (totalScore > randomNumber) {
            alert("you lose");
            losses++;
            $("#losses").text("Losses: " + losses);
            console.log("losses " + losses);
            newGame();
        }
        
    })

    $("#image3").on("click", function() {
    
        $("#image3text").text(randomValue3);

        $("#tsnumber").text(randomValue3);

        randomValue3 += $(this).val();
        
        console.log(randomValue3);
        
        randomValue3 = parseInt(randomValue3);
    
        totalScore += randomValue3;
        $("#tsnumber").text(totalScore);

        if (totalScore === randomNumber) {
            alert("you win");
    
            wins++;
            $("#wins").text("Wins: " + wins);
            console.log("wins " + wins);
            newGame();
        }
    
        if (totalScore > randomNumber) {
            alert("you lose");
            losses++;
            $("#losses").text("Losses: " + losses);
            console.log("losses " + losses);
            newGame();
        }
        
    })

    $("#image4").on("click", function() {
        
        $("#image4text").text(randomValue4);

        $("#tsnumber").text(randomValue4);

        randomValue4 += $(this).val();
        
        console.log(randomValue4);
        
        randomValue4 = parseInt(randomValue4);
    
        totalScore += randomValue4;
        $("#tsnumber").text(totalScore);
        
        if (totalScore === randomNumber) {
            alert("you win");
    
            wins++;
            $("#wins").text("Wins: " + wins);
            console.log("wins " + wins);
            newGame();
        }
    
        if (totalScore > randomNumber) {
            alert("you lose");
            losses++;
            $("#losses").text("Losses: " + losses);
            console.log("losses " + losses);
            newGame();
        }
    })



    })



    

    

//})