(function() {
    var sizeMap = '640x500';
    var lat = $('.lat');
    var long = $('.long');
    var button = $('.btn');
    var img = $('.img');

    button.on('click', function(e) {
        e.preventDefault();
        var type = $('.type-map option:selected').data('map');
        search(type);
    });

    function search(typeMap) {
        var latVal = lat.val();
        var longVal = long.val();
        if(latVal > 90 || latVal < -90) return;
        if(longVal > 180 || longVal < -180) return;
        else if (latVal !== '' && longVal != '') {
            img.attr('src', 'https://maps.googleapis.com/maps/api/staticmap?center=' + latVal + ',' + longVal + '&zoom=6&size=' + sizeMap + '&maptype=' + typeMap + '&markers=color:red|' + latVal + ',' + longVal);
        }
    }
})();