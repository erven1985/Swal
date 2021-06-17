// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")

require("bootstrap")
var Swal = require("sweetalert2");



window.removeItem = function(e) {
  let id = e.id;
  Swal.fire({
    title: 'Are you sure?',
    text: 'You will not be able to rollback this action',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonText: 'Yes, delete it!',
    cancelButtonText: 'No, keep it'
  }).then((result) => {
    if (result.isConfirmed) {

      console.log($(`#tr_${id}`))
      $(`#tr_${id}`).remove()
      
      $.ajax({
        url: `/rows/${id}`,
        method: "DELETE", 
        dataType: "json", 
        success: function(response) {
          Swal.fire(
            'Deleted!',
             response.message,
            'success'
          )
        }
      })
      
    } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'Cancelled',
        'Next time think before pressing this button :)',
        'error'
      )
    }
  })
}


// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)
