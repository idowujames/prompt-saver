// TODO: Prevent the default form submission behavior



const form = document.getElementById("add-form")
const title = document.getElementById("prompt-title")
const text = document.getElementById("prompt-text")
const errorText = document.getElementById("error-text")

const saveBtn = document.getElementById("save-prompt")
const closeBtn = document.getElementById("close-window")


form.addEventListener("submit", function(event){
    // Prevent the default form submission behavior
    event.preventDefault()

    // Get the trimed values of the title and text
    const promptTitle = title.value.trim()
    const promptText = text.value.trim()
    const id = `${Date.now()}-${Math.random()}`

    // Quick validation of the input feilds to make sure they are not empty
    if (promptTitle === "" || promptText === ""){
        errorText.textContent = "Prompt title or text cannot be empty"
        return false
    } 


    // Creating the new prompt
    const newPrompt = {
        "Title": promptTitle,
        "Prompt": promptText,
        "promptID": id
    }

    
    let promptList = []
    const prompts = localStorage.getItem("prompts")

    if (prompts != null){
        promptList = JSON.parse(prompts)
    }
    else{promptList = []}


    promptList.push(newPrompt)
    console.log(promptList)

    localStorage.setItem("prompts", JSON.stringify(promptList))

    form.reset()
    errorText.textContent = ""

})

closeBtn.addEventListener('click', function(){
    window.close()
})

