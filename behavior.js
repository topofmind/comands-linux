document.addEventListener("DOMContentLoaded", function(event) {
    var thumbnailElement = document.getElementById("smart_thumbnail");

    if(thumbnailElement){

        thumbnailElement.addEventListener("click", function() {
            if (thumbnailElement.className == "") {
                thumbnailElement.className = "small";
            }else{
                thumbnailElement.className = "";
            }
          });
    }


      if(document.getElementById('submit')){
          
        let submit = document.getElementById('submit');
        let modal = document.querySelector('.modal');
        let messageModal = document.querySelector('.messageModal');
        let btnSuccess = document.querySelector('.btn-success');

          submit.onclick = (e)=>{

            

              e.preventDefault();
              modal.classList.add('active');
              messageModal.classList.add('visible');
          }

          btnSuccess.onclick = ()=>{
              location.reload();
          }
      }

  
});