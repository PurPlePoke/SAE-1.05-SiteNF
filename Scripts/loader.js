// Ajout d'un évènement
window.addEventListener('load', function () {
    let loader = this.document.getElementById("whenLoading");
    let image = this.document.getElementById("imageLoading");
    image.classList.add("loaderZoom");
    
    this.setTimeout(() => {
        image.classList.remove("loaderZoom");
        loader.classList.add("disparait")
    }, 1000);
    
    this.setTimeout(() => {
        loader.style.display="none"
    }, 2500);
})