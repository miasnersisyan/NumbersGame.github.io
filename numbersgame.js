const $ = document.querySelector.bind(document)

const w1 = $("#w1")

let letClick = 0

function randomNumber(number){
  return Math.round(Math.random() * number)
}


for(let i = 0;i < 12;i++){
    w1.innerHTML += `
     <span class="sp1" id="sp${i}">${randomNumber(10)}</span>
    `
}


for(let i = 0;i < 12;i++){
    $(`#sp${i}`).index = 0
    $(`#sp${i}`).value = false
    $(`#sp${i}`).value2 = false
 }







$("#refreshBtn").addEventListener("click",function(){
    
    for(let i = 0;i < 12;i++){
       $(`#sp${i}`).innerHTML = `${randomNumber(10)}`
       $(`#sp${i}`).index = 0
       $(`#sp${i}`).value = false
       $(`#sp${i}`).style.background = "red"
    }

    
})



function valCheck(...vals){
   let valThis = this
  vals.forEach(function(val){
    if(val.index === 1 && val.value === true && val.value2 === false){
        let thisBtn = Math.abs(valThis.innerHTML)
        let findBtn = Math.abs(val.innerHTML)
        let btnSum = thisBtn + findBtn
        if(btnSum === 10 || thisBtn === findBtn){
            valThis.index = 1
            valThis.value = true
            valThis.value2 = true
            valThis.style.background = "green"
            val.index = 1
            val.value = true
            val.value2 = true
            val.style.background = "green"
        }else{
            valThis.index = 0
            valThis.value = false
            valThis.value2 = false
            valThis.style.background = "red"
            val.index = 0
            val.value = false
            val.value2 = false
            val.style.background = "red"
        }
        
    }
  })
}



function mainCheck(...vals){
   let ind = 0
   vals.forEach(function(val){
     if(val.index === 0){
        ind++
     }
   })
   if(ind === vals.length){
        this.style.background = "green"
        this.index = 1
        this.value = true
        this.value2 = false
        return 0
   }
   return 1
}


$("#sp0").addEventListener("click",function(){
    if(letClick === 0){
        letClick = 1
        $("#sp0").style.background = "green"
        $("#sp0").index = 1
        $("#sp0").value = true
        $("#sp0").value2 = false

        setTimeout(function(){
            letClick = 0
            $("#p1").innerHTML = ""
            let inner1 = mainCheck.apply($("#sp0"),[$("#sp1"),$("#sp2"),$("#sp3"),$("#sp4"),$("#sp5"),$("#sp6"),$("#sp7"),
            $("#sp8"),$("#sp9"),$("#sp10"),$("#sp11")])
        
            if(inner1 === 1){
                valCheck.apply($("#sp0"),[$("#sp1"),$("#sp2"),$("#sp3"),$("#sp4"),$("#sp5"),$("#sp6"),$("#sp7"),
                $("#sp8"),$("#sp9"),$("#sp10"),$("#sp11")])
            }
        },2000)
    }else{
        $("#p1").innerHTML = "Not Allowed"
    }
     
    
 
})

$("#sp1").addEventListener("click",function(){
    if(letClick === 0){
        letClick = 1
        $("#sp1").style.background = "green"
        $("#sp1").index = 1
        $("#sp1").value = true
        $("#sp1").value2 = false
        setTimeout(function(){
            letClick = 0
            $("#p1").innerHTML = ""
            let inner1 = mainCheck.apply($("#sp1"),[$("#sp0"),$("#sp2"),$("#sp3"),$("#sp4"),$("#sp5"),$("#sp6"),$("#sp7"),
            $("#sp8"),$("#sp9"),$("#sp10"),$("#sp11")])
    
            if(inner1 === 1){
                valCheck.apply($("#sp1"),[$("#sp0"),$("#sp2"),$("#sp3"),$("#sp4"),$("#sp5"),$("#sp6"),$("#sp7"),
                $("#sp8"),$("#sp9"),$("#sp10"),$("#sp11")])
            }
        },2000)
    }else{
        $("#p1").innerHTML = "Not Allowed"
    }

    
    
})

$("#sp2").addEventListener("click",function(){
    if(letClick === 0){
        letClick = 1
        $("#sp2").style.background = "green"
        $("#sp2").index = 1
        $("#sp2").value = true
        $("#sp2").value2 = false
        setTimeout(function(){
            letClick = 0
            $("#p1").innerHTML = ""
            let inner1 = mainCheck.apply($("#sp2"),[$("#sp0"),$("#sp1"),$("#sp3"),$("#sp4"),$("#sp5"),$("#sp6"),$("#sp7"),
            $("#sp8"),$("#sp9"),$("#sp10"),$("#sp11")])

            if(inner1 === 1){
                valCheck.apply($("#sp2"),[$("#sp0"),$("#sp1"),$("#sp3"),$("#sp4"),$("#sp5"),$("#sp6"),$("#sp7"),
                $("#sp8"),$("#sp9"),$("#sp10"),$("#sp11")])
            }
        },2000)
    }else{
        $("#p1").innerHTML = "Not Allowed"
    }

    
    
})

$("#sp3").addEventListener("click",function(){
    if(letClick === 0){
        letClick = 1
        $("#sp3").style.background = "green"
        $("#sp3").index = 1
        $("#sp3").value = true
        $("#sp3").value2 = false
        setTimeout(function(){
            letClick = 0
            $("#p1").innerHTML = ""
            let inner1 = mainCheck.apply($("#sp3"),[$("#sp0"),$("#sp1"),$("#sp2"),$("#sp4"),$("#sp5"),$("#sp6"),$("#sp7"),
            $("#sp8"),$("#sp9"),$("#sp10"),$("#sp11")])

            if(inner1 === 1){
                valCheck.apply($("#sp3"),[$("#sp0"),$("#sp1"),$("#sp2"),$("#sp4"),$("#sp5"),$("#sp6"),$("#sp7"),
                $("#sp8"),$("#sp9"),$("#sp10"),$("#sp11")])
            }
        },2000)
    }else{
        $("#p1").innerHTML = "Not Allowed"
    }

    
    
})

$("#sp4").addEventListener("click",function(){
    if(letClick === 0){
        letClick = 1
        $("#sp4").style.background = "green"
        $("#sp4").index = 1
        $("#sp4").value = true
        $("#sp4").value2 = false
        setTimeout(function(){
            letClick = 0
            $("#p1").innerHTML = ""
            let inner1 = mainCheck.apply($("#sp4"),[$("#sp0"),$("#sp1"),$("#sp2"),$("#sp3"),$("#sp5"),$("#sp6"),$("#sp7"),
            $("#sp8"),$("#sp9"),$("#sp10"),$("#sp11")])

            if(inner1 === 1){
                valCheck.apply($("#sp4"),[$("#sp0"),$("#sp1"),$("#sp2"),$("#sp3"),$("#sp5"),$("#sp6"),$("#sp7"),
                $("#sp8"),$("#sp9"),$("#sp10"),$("#sp11")])
            }
        },2000)
    }else{
        $("#p1").innerHTML = "Not Allowed"
    }

    
    
})

$("#sp5").addEventListener("click",function(){
    if(letClick === 0){
        letClick = 1
        $("#sp5").style.background = "green"
        $("#sp5").index = 1
        $("#sp5").value = true
        $("#sp5").value2 = false
        setTimeout(function(){
            letClick = 0
            $("#p1").innerHTML = ""
            let inner1 = mainCheck.apply($("#sp5"),[$("#sp0"),$("#sp1"),$("#sp2"),$("#sp3"),$("#sp4"),$("#sp6"),$("#sp7"),
            $("#sp8"),$("#sp9"),$("#sp10"),$("#sp11")])

            if(inner1 === 1){
                valCheck.apply($("#sp5"),[$("#sp0"),$("#sp1"),$("#sp2"),$("#sp3"),$("#sp4"),$("#sp6"),$("#sp7"),
                $("#sp8"),$("#sp9"),$("#sp10"),$("#sp11")])
            }
        },2000)
    }else{
        $("#p1").innerHTML = "Not Allowed"
    }

    
})

$("#sp6").addEventListener("click",function(){
    if(letClick === 0){
        letClick = 1
        $("#sp6").style.background = "green"
        $("#sp6").index = 1
        $("#sp6").value = true
        $("#sp6").value2 = false
        setTimeout(function(){
            letClick = 0
            $("#p1").innerHTML = ""
            let inner1 = mainCheck.apply($("#sp6"),[$("#sp0"),$("#sp1"),$("#sp2"),$("#sp3"),$("#sp4"),$("#sp5"),$("#sp7"),
            $("#sp8"),$("#sp9"),$("#sp10"),$("#sp11")])

            if(inner1 === 1){
                valCheck.apply($("#sp6"),[$("#sp0"),$("#sp1"),$("#sp2"),$("#sp3"),$("#sp4"),$("#sp5"),$("#sp7"),
                $("#sp8"),$("#sp9"),$("#sp10"),$("#sp11")])
            }
        },2000)
    }else{
        $("#p1").innerHTML = "Not Allowed"
    }

    
    
})

$("#sp7").addEventListener("click",function(){
    if(letClick === 0){
        letClick = 1
        $("#sp7").style.background = "green"
        $("#sp7").index = 1
        $("#sp7").value = true
        $("#sp7").value2 = false
        setTimeout(function(){
            letClick = 0
            $("#p1").innerHTML = ""
            let inner1 = mainCheck.apply($("#sp7"),[$("#sp0"),$("#sp1"),$("#sp2"),$("#sp3"),$("#sp4"),$("#sp5"),$("#sp6"),
            $("#sp8"),$("#sp9"),$("#sp10"),$("#sp11")])

            if(inner1 === 1){
                valCheck.apply($("#sp7"),[$("#sp0"),$("#sp1"),$("#sp2"),$("#sp3"),$("#sp4"),$("#sp5"),$("#sp6"),
                $("#sp8"),$("#sp9"),$("#sp10"),$("#sp11")])
            }
        },2000)
    }else{
        $("#p1").innerHTML = "Not Allowed"
    }


    
    
})


$("#sp8").addEventListener("click",function(){
    if(letClick === 0){
        letClick = 1
        $("#sp8").style.background = "green"
        $("#sp8").index = 1
        $("#sp8").value = true
        $("#sp8").value2 = false
        setTimeout(function(){
            letClick = 0
            $("#p1").innerHTML = ""
            let inner1 = mainCheck.apply($("#sp8"),[$("#sp0"),$("#sp1"),$("#sp2"),$("#sp3"),$("#sp4"),$("#sp5"),$("#sp6"),
            $("#sp7"),$("#sp9"),$("#sp10"),$("#sp11")])

            if(inner1 === 1){
                valCheck.apply($("#sp8"),[$("#sp0"),$("#sp1"),$("#sp2"),$("#sp3"),$("#sp4"),$("#sp5"),$("#sp6"),
                $("#sp7"),$("#sp9"),$("#sp10"),$("#sp11")])
            }
        },2000)
    }else{
        $("#p1").innerHTML = "Not Allowed"
    }

    
    
})

$("#sp9").addEventListener("click",function(){
    if(letClick === 0){
        letClick = 1
        $("#sp9").style.background = "green"
        $("#sp9").index = 1
        $("#sp9").value = true
        $("#sp9").value2 = false
        setTimeout(function(){
            letClick = 0
            $("#p1").innerHTML = ""
            let inner1 = mainCheck.apply($("#sp9"),[$("#sp0"),$("#sp1"),$("#sp2"),$("#sp3"),$("#sp4"),$("#sp5"),$("#sp6"),
            $("#sp7"),$("#sp8"),$("#sp10"),$("#sp11")])

            if(inner1 === 1){
                valCheck.apply($("#sp9"),[$("#sp0"),$("#sp1"),$("#sp2"),$("#sp3"),$("#sp4"),$("#sp5"),$("#sp6"),
                $("#sp7"),$("#sp8"),$("#sp10"),$("#sp11")])
            }
        },2000)
    }else{
        $("#p1").innerHTML = "Not Allowed"
    }

    
    
})

$("#sp10").addEventListener("click",function(){
    if(letClick === 0){
        letClick = 1
        $("#sp10").style.background = "green"
        $("#sp10").index = 1
        $("#sp10").value = true
        $("#sp10").value2 = false
        setTimeout(function(){
            letClick = 0
            $("#p1").innerHTML = ""
            let inner1 = mainCheck.apply($("#sp10"),[$("#sp0"),$("#sp1"),$("#sp2"),$("#sp3"),$("#sp4"),$("#sp5"),$("#sp6"),
            $("#sp7"),$("#sp8"),$("#sp9"),$("#sp11")])

            if(inner1 === 1){
                valCheck.apply($("#sp10"),[$("#sp0"),$("#sp1"),$("#sp2"),$("#sp3"),$("#sp4"),$("#sp5"),$("#sp6"),
                $("#sp7"),$("#sp8"),$("#sp9"),$("#sp11")])
            }
        },2000)
    }else{
        $("#p1").innerHTML = "Not Allowed"
    }

    
    
})

$("#sp11").addEventListener("click",function(){
    if(letClick === 0){
        letClick = 1
        $("#sp11").style.background = "green"
        $("#sp11").index = 1
        $("#sp11").value = true
        $("#sp11").value2 = false
        setTimeout(function(){
            letClick = 0
            $("#p1").innerHTML = ""
            let inner1 = mainCheck.apply($("#sp11"),[$("#sp0"),$("#sp1"),$("#sp2"),$("#sp3"),$("#sp4"),$("#sp5"),$("#sp6"),
            $("#sp7"),$("#sp8"),$("#sp9"),$("#sp10")])

            if(inner1 === 1){
                valCheck.apply($("#sp11"),[$("#sp0"),$("#sp1"),$("#sp2"),$("#sp3"),$("#sp4"),$("#sp5"),$("#sp6"),
                $("#sp7"),$("#sp8"),$("#sp9"),$("#sp10")])
            }
        },2000)
    }else{
        $("#p1").innerHTML = "Not Allowed"
    }

    
    
})


