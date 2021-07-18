document.addEventListener("DOMContentLoaded",function () {

    const submitForm = document.getElementById("form");

    submitForm.addEventListener("submit", function(event) {
        event.preventDefault();
        modal.classList.remove("modal-open");
        addBook();
    })

    if(isStorageExist()){
        loadDataFromStorage();
    }
});

document.addEventListener("ondatasaved", function () {
    console.log("Data berhasil disimpan.");
  });
  
document.addEventListener("ondataloaded", function () {
  refreshDataFromBooks();
});