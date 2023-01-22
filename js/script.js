    let task = document.querySelector(".task")
    let date = document.querySelector(".date")
    let btn1 = document.querySelector(".btn1")
    let update = document.querySelector(".update")
    let list = document.querySelector("ul")

    arr = []
    btn1.addEventListener("click", function(){
        list.innerHTML = ""
        arr.push({
            name: task.value,
            date: date.value
        })

        arr.map((item,index)=>{
            list.innerHTML += `<li> ${item.name}--> ${item.date} <button data-index=${index} class="btn"> Delete </button><button data-index=${index} class="edit"> Edit </button> </li>`
        })
    

        function test(){
            let btn = document.querySelectorAll(".btn")
            let edit = document.querySelectorAll(".edit")
            let btnarr = Array.from(btn)
            let editarr = Array.from(edit)
            btnarr.map((item)=>{
                item.addEventListener("click", function(){
                    list.innerHTML = ""
                    arr.splice(item.dataset.index,1)
                    arr.map((item,index)=>{
                        list.innerHTML += `<li> ${item.name}--> ${item.date} <button data-index=${index} class="btn"> Delete </button><button data-index=${index} class="edit"> Edit </button> </li>`
                    })
                    test()
                })
            })
            editarr.map((item)=>{
                item.addEventListener("click",function(){
                    console.log(arr[item.dataset.index])
                    update.style.display = "inline-block"  
                    btn1.style.display = "none"  
                })
            })
        }
        test()
    })



