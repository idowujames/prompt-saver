document.addEventListener("DOMContentLoaded", function(){
    
    const addPromptBtn = document.getElementById("add-prompt-btn")
    const ulEl = document.getElementById("promptList")

    
    // Retrive prompts
    const prompts = localStorage.getItem("prompts")

    if(prompts){        
        let promptArr = JSON.parse(prompts)
        render(promptArr)
    }


    // Add new prompt
    addPromptBtn.addEventListener("click", addPrompt)

        




    // Render PromptList Function
    function render(promptArr) {
        
        if (promptArr.length === 0){
                ulEl.innerHTML = `<li><p>No Saved Prompts</p></li>`
            }

            else{
                    let listItems = ""
                    for(let i = 0; i < promptArr.length; i++){
                        
                        listItems += `<li data-id=${promptArr[i].promptID}>
                        <div class="prompt-title">
                            <a href="#">${promptArr[i].Title}</a>
                            <button class="del-btn">🗑️</button>
                        </div>
                        <div class="prompt-text">${truncate(promptArr[i].Prompt, 10)}</div></li>`            
                    }
                    ulEl.innerHTML = listItems
                }    
    }

    // Add Prompt
    function addPrompt() {
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
    }

});






// Helper function to truncate by words
function truncate(text, numWords) {

  // 1. Split the text into an array of words
  const words = text.split(' ');

  // 2. Check if truncation is necessary
  if (words.length <= numWords) {
    return text; // No truncation needed
  }

  // 4. Join the words back into a string and add the ellipsis
  return words.slice(0, numWords).join(' ') + "...";
}
