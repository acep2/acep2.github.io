/* **************************************** */
/* Copyright Zygomatic, zygomatic.nl        */
/* Programming by WebGear, webgear.nl       */
/* This file is hosted on cdn.htmlgames.com */
/* **************************************** */

(function() {
        var scripts = document.getElementsByTagName('script'),
                path = scripts[scripts.length-1].src,
                idx = path.lastIndexOf('?');
        if (idx !== -1) {
                path = path.substr(idx, path.length-1);
        }

        function $_GET(name) {
                var a = new RegExp(name+"=([^&#=]*)");
                a = a.exec(path);
                if (null === a) return false;
                return decodeURIComponent(a[1]);
        }

        function isMobile() {
                var check = false;
                (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
            return check;
        }

        var urlPrefix = location.protocol == 'file:' ? 'http:' : '';
        var url = urlPrefix + '//cdn.htmlgames.com/',
                game = $_GET('game'),
                icon,
                lang = $_GET('lang'),
                bgcolor = $_GET('bgcolor'),
                width = $_GET('width') || 800,
                height = $_GET('height') || 480,
                html = [],
                args = [];

        if (false === game) {
                alert("ERROR: Please provide a 'game' argument!");
                return;
        }

        url += encodeURIComponent(game) + '/index.html';
        if (false !== bgcolor) {
                args.push('bgcolor=' + encodeURIComponent(bgcolor));
        }
        if (false !== lang) {
                args.push('lang=' + encodeURIComponent(lang));
        }
        if (args.length > 0) {
                url += '?' + args.join('&amp;');
        }

        icon = urlPrefix + '//cdn.htmlgames.com/' + encodeURIComponent(game) + '/img/icon/icon-196x196.png';

        // Show 'Play game' on mobile devices with a touch screen:
        if (isMobile() && ('ontouchstart' in window || navigator.msMaxTouchPoints)) {
                if (/^\d+$/.test(width)) { width += 'px'; }
                if (/^\d+$/.test(height)) { height += 'px'; }
                html.push(
                        '<div id="ZMgameDiv" style="width:' + width + ';height:' + height + '">',
                        '<div style="position:relative;top:50%;transform:translateY(-50%);-webkit-transform:translateY(-50%)">',
                        '<a href="' + url + '"><img src="' + icon + '" width="196" height="196" style="border-radius:8px"></a>',
                        '<br><br>',
                        '<a href="' + url + '" target="ZMgame" style="font:18px Arial,Helvetica;background-color:#f63;border:1px solid #a84c2d;border-radius:6px;color:#fff;padding:10px 16px;text-decoration:none">Play game</a>',
                        '</div>',
                        '</div>'
                );
        }
        else {
                html.push(
                        '<iframe id="ZMgameFrame" src="' + url + '" width="' + width + '" height="' + height + '" frameborder="0" style="display:block" allowfullscreen></iframe>'
                );
        }

        document.write(html.join(''));
})();
