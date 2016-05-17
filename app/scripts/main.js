'use strict';
 var $tags = $('#tag-list').select2({
   width: "100%",
   placeholder: 'Select tags'
 });
 $('#save-tag').on('click', function(e){
   e.preventDefault();
   //make ajax request to save to db
   var existing = [];
   if($tags.val() != null)
      existing = $tags.val();
   var newtag = $("#tag-name").val();
   var $option = $("<option></option");
   $option.val(newtag);
   $option.text(newtag);
   $tags.append($option).trigger("change"); // add it to the list of selections

   //after adding the option let's make it one of the selected
   //check if there was no selected tags first
   existing.push(newtag);
   $tags.val(existing).trigger("change");
   //close modal after saving
   $("#addTag").modal('hide');
   $("#tag-name").val("");
 });
//# sourceMappingURL=main.js.map