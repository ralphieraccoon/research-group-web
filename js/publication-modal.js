$(function(){
    $('#bibtex-modal').on('show.bs.modal', function (event) {
      var button = $(event.relatedTarget) // Button that triggered the modal
      var title = button.data('title') // Extract info from data-* attributes
      var bibtex = button.data('bibtex') // Extract info from data-* attributes
      // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
      // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
      var modal = $(this)
      modal.find('.modal-body').html('<pre style="word-wrap: break-word; white-space: pre-wrap;">' + bibtex + '</pre>')
      modal.find('.modal-title').text(title)
    });
    $('#bibtex-copy').click(function () {
        navigator.clipboard.writeText($('.modal-body').text())
    });
});
