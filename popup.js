document.addEventListener("DOMContentLoaded", function(){
    
    const addPromptBtn = document.getElementById("add-prompt-btn")


    addPromptBtn.addEventListener("click", function(){
        const width = 500
        const height = 400
        const left = Math.round((screen.width - width) / 2)
        const top  = Math.round((screen.height - height) / 2)

        chrome.windows.create({
            url: "add-prompt.html",
            type: "popup",
            width: width,
            height: height,
            top: top,
            left: left,
            focused: true
        })
    })

});