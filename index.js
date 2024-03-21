<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
$(document).ready(function() {
    $('.flip-button').click(function(e) {
        e.preventDefault();
        $('.container').toggleClass('flip');
    });
});
</script>
