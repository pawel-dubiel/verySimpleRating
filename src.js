;(function ( $, window, document, undefined ) {
    var pluginName = "verySimpleRating",
        defaults = {
            ico_path: "",
            ico_width: 0,
            ico_height:0,
            ico_right_padding:0,
            color_top: '#000',
            color_back:'#eee'
        };

    function Plugin( element, options ) {
        this.element = element;
        this.options = $.extend( {}, defaults, options) ;
        this._defaults = defaults;
        this._name = pluginName;
        this.init();
    }

    Plugin.prototype = {
        init: function() {
            var el = this.element;
            var opt = this.options;
            var av = $(el).data('average');

            var n1 = 'stars_rating';
            var n2 = 'bg_rating';

            if ( av > 0 ) {
                var total_w = (opt.ico_width * av) + ( Math.floor(av) * opt.ico_right_padding );
                var max_w = (opt.ico_width * 5) + ( 5 * opt.ico_right_padding );


                $(el).append($('<div class="bg_rating"><div class="'+n1+'"></div></div>'));

                $(el).css( {
                    'width': max_w+'px',
                    'height': opt.ico_height + 'px',
                    'clear': 'both',
                    'background-color': opt.color_back,
                    'position': 'relative'
                });

                $('.'+n1, el).css({
                    'background-image': 'url('+opt.ico_path + ')',
                    'width': max_w + 'px',
                    'height': opt.ico_height + 'px',
                    'background-repeat': 'repeat-x',
                    'position': 'absolute',
                    'left': '0',
                    'top': '0'
                });

                $('.'+n2, el).css({
                    'height': opt.ico_height + 'px',
                    'width': total_w + 'px',
                    'background-color': opt.color_top
                });

                $(el).show();
            }
        }
    };

    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, "plugin_" + pluginName)) {
                $.data(this, "plugin_" + pluginName,
                    new Plugin( this, options ));
            }
        });
    };

})( jQuery, window, document );
