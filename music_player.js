let musicHandle = document.querySelector('input[type="file"]')
let music = document.querySelector('#music')
let box = document.querySelector('#box')
let img = document.querySelector('img')
if(window.FileReader && window.File && window.FileList){
    function showFile(){
        let musicReader = new FileReader()
        for (let i = 0; i < musicHandle.files.length; i++) {
            musicReader.onloadend = function (e){
                music.innerText = musicHandle.files[i].name
                let a = document.createElement('audio')
                a.src = e.target.result
                box.append(a)
                a.autoplay = true
                img.classList.add('roll')
                a.controls = true
                a.addEventListener('ended', ()=>{
                img.classList.remove('roll')
                    box.innerHTML = ''
                    music.innerText = ''
                })
            }
        musicReader.readAsDataURL(musicHandle.files[i])
        }
    }
}
musicHandle.addEventListener('change', showFile)