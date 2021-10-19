try{
    console.log("you see"+look())
   }catch(err){
    console.log("something went wrong "+err)
   }
   
   function look(){
    var dir = direction("which direction");
    if(dir=="L"){
     return "near to home";
   }
   else{
     return "near to tiger";
   }
   }
   
   function direction(qs){
       var q = prompt(qs);
       if(q.toLowerCase()=="right") return "L";
       if(q.toLowerCase()=="left") return "R";
       throw new Error("Invalid direction: " + result);
   }