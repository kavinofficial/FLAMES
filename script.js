let b=document.getElementById("bton");
b.addEventListener("click",fun=()=>
{
    var name1=document.getElementById("mname").value;
    let name2=document.getElementById("oname").value;
    if(name1.length==0 || name2.length==0)
    {
        alert("Please fill the appropriate places!")
    }
    else
    {
    name1 = name1.toLowerCase();
    name2 = name2.toLowerCase();
    name1 = name1.replace(/\s/g, "");
    name2 = name2.replace(/\s/g, "");
    for(var i=0;i<name1.length;i++)
    {
        for(var j=0;j<name2.length;j++)
        {
            if(name1[i]==name2[j])
            {
                name1=name1.replace(name1[i],"");
                name2=name2.replace(name2[j],"");
                i--;
            }
        }
    }
    let diff = name1.length + name2.length;
    let final;
    var flames = [
        "Friends",
        "Lovers",
        "Affectionate",
        "Marriage",
        "Enemies",
        "Secret lovers",
      ];
      
      var count = 0;
      while (flames.length > 1) 
      {
         count = (count + diff - 1) % flames.length;
         console.log("Removed:", flames.splice(count, 1));
      }
      final=flames[0].toUpperCase();
    let p=document.getElementById("flam").innerHTML=final;
    //Meter declaration starts
    let ran=Math.ceil(Math.random() * 100)+"%";
    document.getElementById("visibl").innerHTML=ran;
    document.getElementById("pro").style.width=ran;
    }
})
