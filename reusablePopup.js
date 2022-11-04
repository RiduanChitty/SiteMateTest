document.addEventListener("DOMContentLoaded", function(event) {
    var modal = document.getElementById("reusable-modal");
    var modalResult = document.getElementById("modal-result");
    var modalTriggers = document.getElementsByClassName("modal-trigger");

    for (const trigger of modalTriggers){
        trigger.onclick = function() {
            modal.style.display = "block";
        }
    }

    var modalReplies = document.getElementsByClassName("modal-reply-btn");

    for (const replyBtn of modalReplies){  	
    replyBtn.onclick = function() {
            modal.style.display = "none";
            modalResult.innerHTML = `You just clicked \"${replyBtn.innerHTML}\"`;
        }
    }
});