const express = require("express")
const app = express();
const bodyParser = require("body-parser");
const ejs = require('ejs');
app.use(bodyParser.urlencoded({extended: true}))
app.set('view engine', 'ejs');


app.listen(3000, function(){
    console.log("Server started on port 3000.")
})

// Serve Static Assets
app.use(express.static(__dirname + '/public'));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/public/index.html")
})

let bmi = 7;
var value;
var message;
var list1;
var list2;
var list3;
var list4;

app.post("/", function(req, res){
    var weight = Number(req.body.weight);
    var height = Number(req.body.height);
    var names = req.body.Name;
    bmi = calculateBMI(weight, height);
    
    if (bmi < 18.5) {
        value = "underweight";
        message = "Wow, " + names + " you are really underweight. Looking to gain weight? Here are some resources that can help: "
        list1 = "https://www.ennonline.net/fex/15/limits"
        list2 = "https://www.medicalnewstoday.com/articles/321612"
        list3 = "https://www.mayoclinic.org/healthy-lifestyle/nutrition-and-healthy-eating/expert-answers/underweight/faq-20058429"
        list4 = "https://www.wikihow.com/Gain-Weight"
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        value = "normal";
        list1 = "https://www.foundationforpn.org/living-well/lifestyle/"
        list2 = "https://www.healthline.com/nutrition/maintain-weight-loss"
        list3 = "https://ischoolconnect.com/blog/ways-to-maintain-a-healthy-lifestyle/"
        list4 = "https://www.healthworkscollective.com/10-ways-to-maintain-a-healthy-lifestyle/"        
        message = "Wow, " + names + ", you have a pretty good-looking BMI. Keep it up! Learn how to manage your diet and leave a healthy lifestyle here:"
    } else if (bmi > 24.9 && bmi <= 29.9) {
        value = "overweight";
        list1 = "https://siwesbeginner.com/lose-weight-fat-nigeria/"
        list2 = "https://www.fitnigerian.com/lose-weight-in-nigeria/"
        list3 = "https://www.everydayhealth.com/diet-and-nutrition/diet/military-diet-review-beginners-guide-day-plan/"
        list4 = "https://www.nhs.uk/live-well/healthy-weight/managing-your-weight/12-tips-to-help-you-lose-weight/"
        message = "Oops! " + names + ", you might be a little bit heavy there. Maybe come down a bit? Learn how to manage your diet and leave a healthier lifestyle here:"
    } else if (bmi > 29.9 && bmi <= 34.9) {
        value = "obese";
        list1 = "https://siwesbeginner.com/lose-weight-fat-nigeria/"
        list2 = "https://www.fitnigerian.com/lose-weight-in-nigeria/"
        list3 = "https://www.everydayhealth.com/diet-and-nutrition/diet/military-diet-review-beginners-guide-day-plan/"
        list4 = "https://www.nhs.uk/live-well/healthy-weight/managing-your-weight/12-tips-to-help-you-lose-weight/"
        message = "Um, while you make look amazing, maintaining this figure as your BMI may not be so healthy in the long run, " + names + ". Here are some resources that might help."
    } else {
        value = "extremely obese";
        list1 = "https://siwesbeginner.com/lose-weight-fat-nigeria/"
        list2 = "https://www.fitnigerian.com/lose-weight-in-nigeria/"
        list3 = "https://www.everydayhealth.com/diet-and-nutrition/diet/military-diet-review-beginners-guide-day-plan/"
        list4 = "https://www.nhs.uk/live-well/healthy-weight/managing-your-weight/12-tips-to-help-you-lose-weight/"
        message = "This is really not healthy, " + names + ". Having a BMI of " + bmi + " is really not healthy and may lead to complications and diseases in your body. Want a guide to leaving healthier? Check these out: "
    }
    res.render('result.ejs', { bmi: bmi, value: value, name: names, message: message, list1: list1, list2: list2, list3: list3, list4: list4 });
}
 )
    function calculateBMI(weight, height) {
        return Math.floor(weight / (height * height))
    }

     