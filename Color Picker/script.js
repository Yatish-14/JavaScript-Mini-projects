document.addEventListener('DOMContentLoaded', () =>{
    const colorInput = document.querySelector('#colorInput')
    const colorCodeText =  document.querySelector('#colorColorText')

    colorInput.addEventListener('input', () => {
        const colorValue = colorInput.value
        console.log('Selected color:', colorValue)
        document.body.style.background = colorValue
        colorCodeText.textContent = `Selected Color ${colorValue}`
    })
})