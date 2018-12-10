var answers = ["Abraham Lincoln","true","China","Tesla"]
jQuery(document).ready(function(){
	
	$(document).ready(function(){
    	$("#show").click(function(){
        	$("#intro").hide();
        	$(".article").show();
    	});
    });
    

	$(".article form").submit(function(event){
	
	var total = 0;
	var a1 = $("input:radio[name=answer1]:checked").val();
	var a2 = $("input:radio[name=answer2]:checked").val();
	var a3 = $("input:radio[name=answer3]:checked").val();
	var a4 = $("input:radio[name=answer4]:checked").val();
	
	$(".article").hide()
	if (a1 == undefined|| a2 == undefined || a3 == undefined || a4 == undefined){
	 	alert ("Complete all the questions");
	 }
	 else{
	 	if(a1 === answers[0]){
	 		total += 10
	 	}
	 	if (a2 === answers[1]){
	 		total += 10
	 	}
	 	if (a3 === answers[2]){
	 		total += 10
	 	}
	 	if (a4 === answers[3]){
	 		total += 10
	 	}
	 	total = total/40 * 100
	 	$(document).ready(function(){
	 		$(".hide").hide()
	 		alert("your score is "+total+"%")
	 		$(".hide").click(function(){
	 			$("body").show();
	 		});
	 	})
	 }
	});

})