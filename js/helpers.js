// Format samples within the <code> tag so they don't render as HTML
function formatCodeSamples() {
    $('code').each(function(){
        var $this = $(this);
        var t = $this.html();
        console.log(t);
        t = t.trim();
        t = t.replace(/</g, '&lt;').replace(/>/g, '&gt;');
        t = t.replace(/(?:\r\n|\r|\n)/g, '<br />'); // Replace line breaks
        $(this).html(t);
    });
}



$(document).ready(function() { 
    formatCodeSamples();
});