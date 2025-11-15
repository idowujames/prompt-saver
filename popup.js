document.addEventListener("DOMContentLoaded", function(){
    
    const promptTitle = document.getElementById("input-el");
    const promptText = document.getElementById("text-el");

    const saveBtn = document.getElementById("save-btn");


    saveBtn.addEventListener("click", function(){

        let prompts = chrome.storage.local.get()
        if (!prompts){
            prompts = []
        }
        const title = promptTitle.value;
        const text = promptText.value;

        console.log(`Title: ${title}, Prompt: ${text}`)
    });

});