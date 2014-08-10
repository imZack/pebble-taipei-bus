/**
 * Welcome to Pebble.js!
 *
 * This is where you write your app.
 */

var UI = require('ui');
var Vector2 = require('vector2');

var main = new UI.Card({
  title: 'Pebble.js',
  icon: 'images/menu_icon.png',
  subtitle: 'Hello World!',
  body: 'Press any button.'
});

main.show();

main.on('click', 'up', function(e) {
  var menu = new UI.Menu({
    sections: [{
      items: [{
        title: 'Pebble.js',
        icon: 'images/menu_icon.png',
        subtitle: 'Can do Menus'
      }, {
        title: 'Second Item',
        subtitle: 'Subtitle Text'
      }]
    }]
  });
  menu.on('select', function(e) {
    console.log('Selected item: ' + e.section + ' ' + e.item);
  });
  menu.show();
});

main.on('click', 'select', function(e) {
  var wind = new UI.Window();
  var textfield = new UI.Text({
    position: new Vector2(0, 50),
    size: new Vector2(144, 30),
    font: 'gothic-24-bold',
    text: 'Text Anywhere!',
    textAlign: 'center'
  });
  wind.add(textfield);
  wind.show();
});

main.on('click', 'down', function(e) {
  var card = new UI.Card();
  card.title('A Card');
  card.subtitle('Is a Window');
  card.body('The simplest window type in Pebble.js.');
  card.show();
});

Pebble.addEventListener("showConfiguration", function() {
	var data = 'PCFET0NUWVBFIGh0bWw+DQo8IS0tIC0qLWNvZGluZzogdXRmLTggLSotDQp2aW06IHN3PTIgdHM9MiBleHBhbmR0YWIgYWkNCi0tPg0KDQo8aHRtbD4NCiAgPGhlYWQ+DQogICAgPG1ldGEgbmFtZT0idmlld3BvcnQiIGNvbnRlbnQ9IndpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xIj4NCiAgICA8c3R5bGU+DQogICAgLyohDQogICAgUHVyZSB2MC41LjANCiAgICBDb3B5cmlnaHQgMjAxNCBZYWhvbyEgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLg0KICAgIExpY2Vuc2VkIHVuZGVyIHRoZSBCU0QgTGljZW5zZS4NCiAgICBodHRwczovL2dpdGh1Yi5jb20veXVpL3B1cmUvYmxvYi9tYXN0ZXIvTElDRU5TRS5tZA0KICAgICovDQogICAgLnB1cmUtYnV0dG9ue2Rpc3BsYXk6aW5saW5lLWJsb2NrOypkaXNwbGF5OmlubGluZTt6b29tOjE7bGluZS1oZWlnaHQ6bm9ybWFsO3doaXRlLXNwYWNlOm5vd3JhcDt2ZXJ0aWNhbC1hbGlnbjpiYXNlbGluZTt0ZXh0LWFsaWduOmNlbnRlcjtjdXJzb3I6cG9pbnRlcjstd2Via2l0LXVzZXItZHJhZzpub25lOy13ZWJraXQtdXNlci1zZWxlY3Q6bm9uZTstbW96LXVzZXItc2VsZWN0Om5vbmU7LW1zLXVzZXItc2VsZWN0Om5vbmU7dXNlci1zZWxlY3Q6bm9uZX0ucHVyZS1idXR0b246Oi1tb3otZm9jdXMtaW5uZXJ7cGFkZGluZzowO2JvcmRlcjowfS5wdXJlLWJ1dHRvbntmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZToxMDAlOypmb250LXNpemU6OTAlOypvdmVyZmxvdzp2aXNpYmxlO3BhZGRpbmc6LjVlbSAxZW07Y29sb3I6IzQ0NDtjb2xvcjpyZ2JhKDAsMCwwLC44KTsqY29sb3I6IzQ0NDtib3JkZXI6MXB4IHNvbGlkICM5OTk7Ym9yZGVyOjAgcmdiYSgwLDAsMCwwKTtiYWNrZ3JvdW5kLWNvbG9yOiNFNkU2RTY7dGV4dC1kZWNvcmF0aW9uOm5vbmU7Ym9yZGVyLXJhZGl1czoycHh9LnB1cmUtYnV0dG9uLWhvdmVyLC5wdXJlLWJ1dHRvbjpob3ZlciwucHVyZS1idXR0b246Zm9jdXN7ZmlsdGVyOnByb2dpZDpEWEltYWdlVHJhbnNmb3JtLk1pY3Jvc29mdC5ncmFkaWVudChzdGFydENvbG9yc3RyPScjMDAwMDAwMDAnLCBlbmRDb2xvcnN0cj0nIzFhMDAwMDAwJywgR3JhZGllbnRUeXBlPTApO2JhY2tncm91bmQtaW1hZ2U6LXdlYmtpdC1ncmFkaWVudChsaW5lYXIsMCAwLDAgMTAwJSxmcm9tKHRyYW5zcGFyZW50KSxjb2xvci1zdG9wKDQwJSxyZ2JhKDAsMCwwLC4wNSkpLHRvKHJnYmEoMCwwLDAsLjEpKSk7YmFja2dyb3VuZC1pbWFnZTotd2Via2l0LWxpbmVhci1ncmFkaWVudCh0cmFuc3BhcmVudCxyZ2JhKDAsMCwwLC4wNSkgNDAlLHJnYmEoMCwwLDAsLjEpKTtiYWNrZ3JvdW5kLWltYWdlOi1tb3otbGluZWFyLWdyYWRpZW50KHRvcCxyZ2JhKDAsMCwwLC4wNSkgMCxyZ2JhKDAsMCwwLC4xKSk7YmFja2dyb3VuZC1pbWFnZTotby1saW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQscmdiYSgwLDAsMCwuMDUpIDQwJSxyZ2JhKDAsMCwwLC4xKSk7YmFja2dyb3VuZC1pbWFnZTpsaW5lYXItZ3JhZGllbnQodHJhbnNwYXJlbnQscmdiYSgwLDAsMCwuMDUpIDQwJSxyZ2JhKDAsMCwwLC4xKSl9LnB1cmUtYnV0dG9uOmZvY3Vze291dGxpbmU6MH0ucHVyZS1idXR0b24tYWN0aXZlLC5wdXJlLWJ1dHRvbjphY3RpdmV7Ym94LXNoYWRvdzowIDAgMCAxcHggcmdiYSgwLDAsMCwuMTUpIGluc2V0LDAgMCA2cHggcmdiYSgwLDAsMCwuMikgaW5zZXR9LnB1cmUtYnV0dG9uW2Rpc2FibGVkXSwucHVyZS1idXR0b24tZGlzYWJsZWQsLnB1cmUtYnV0dG9uLWRpc2FibGVkOmhvdmVyLC5wdXJlLWJ1dHRvbi1kaXNhYmxlZDpmb2N1cywucHVyZS1idXR0b24tZGlzYWJsZWQ6YWN0aXZle2JvcmRlcjowO2JhY2tncm91bmQtaW1hZ2U6bm9uZTtmaWx0ZXI6cHJvZ2lkOkRYSW1hZ2VUcmFuc2Zvcm0uTWljcm9zb2Z0LmdyYWRpZW50KGVuYWJsZWQ9ZmFsc2UpO2ZpbHRlcjphbHBoYShvcGFjaXR5PTQwKTsta2h0bWwtb3BhY2l0eTouNDstbW96LW9wYWNpdHk6LjQ7b3BhY2l0eTouNDtjdXJzb3I6bm90LWFsbG93ZWQ7Ym94LXNoYWRvdzpub25lfS5wdXJlLWJ1dHRvbi1oaWRkZW57ZGlzcGxheTpub25lfS5wdXJlLWJ1dHRvbjo6LW1vei1mb2N1cy1pbm5lcntwYWRkaW5nOjA7Ym9yZGVyOjB9LnB1cmUtYnV0dG9uLXByaW1hcnksLnB1cmUtYnV0dG9uLXNlbGVjdGVkLGEucHVyZS1idXR0b24tcHJpbWFyeSxhLnB1cmUtYnV0dG9uLXNlbGVjdGVke2JhY2tncm91bmQtY29sb3I6IzAwNzhlNztjb2xvcjojZmZmfQ0KICAgIGJvZHkgeyBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTsgdGV4dC1hbGlnbjogY2VudGVyOyBjb2xvcjogYmxhY2s7fQ0KICAgIGgxIHsgbWFyZ2luOiAwIH0NCiAgICBzbWFsbCB7IGNvbG9yOiBibGFjayB9DQogICAgYSB7IGNvbG9yOiBibGFjayB9DQogICAgLnN1Ym1pdCB7IHdpZHRoOiA5MyU7IG1hcmdpbjogMC40ZW0gfQ0KICAgIC5wYXJhbSB7IGRpc3BsYXk6IGlubGluZS10YWJsZTsgd2lkdGg6IDk1JTsgaGVpZ2h0OiAzZW0gO30NCiAgICAubGFiZWwsIC5jaGVja2JveCB7IGRpc3BsYXk6IHRhYmxlLWNlbGw7IHZlcnRpY2FsLWFsaWduOiBtaWRkbGUgfQ0KICAgIC5sYWJlbCB7IHRleHQtYWxpZ246IGxlZnQgfQ0KICAgIC5jaGVja2JveCB7IHRleHQtYWxpZ246IHJpZ2h0OyB3aWR0aDogMS41ZW07IGhlaWdodDogMS41ZW0gfQ0KICAgIC5leGFtcGxlIHsgd2lkdGg6IDc1JTsgZGlzcGxheTogaW5saW5lLWJsb2NrOyB0ZXh0LWFsaWduOiBsZWZ0OyBmb250LXNpemU6IDAuNmVtIH0NCiAgICBpbnB1dFt0eXBlPSJ0ZXh0Il0ge3dpZHRoOiA5OCV9DQogICAgLmZvcm0tYWxpZ24tbGVmdCB7d2lkdGg6IDM4JTsgdGV4dC1hbGlnbjogcmlnaHQ7IGRpc3BsYXk6IGlubGluZS1ibG9jazsgbWFyZ2luLXJpZ2h0OiAxMHB4O30NCiAgICAuZm9ybS1hbGlnbi1yaWdodCB7d2lkdGg6IDU4JTsgdGV4dC1hbGlnbjogbGVmdDsgZGlzcGxheTogaW5saW5lLWJsb2NrO30NCiAgICA8L3N0eWxlPg0KICAgIDxzY3JpcHQ+DQoNCiAgICAgIHZhciBjb25maWcgPSB7fTsgLy9fQ09ORklHXzsNCiAgICAgIHZhciBidXNMaXN0ID0gW107DQoNCiAgICAgIGZ1bmN0aW9uIHB1dF9jb25maWcoKSB7DQogICAgICAgIHJlZnJlc2hfbGlzdCgpOw0KICAgICAgICBmb3IgKHZhciBwYXJhbSBpbiBjb25maWcpIHsNCiAgICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHBhcmFtKTsNCiAgICAgICAgICBpZiAoZWxlbWVudCkgew0KICAgICAgICAgICAgaWYgKHR5cGVvZiBjb25maWdbcGFyYW1dID09PSAnYm9vbGVhbicpIHsNCiAgICAgICAgICAgICAgZWxlbWVudC5jaGVja2VkID0gY29uZmlnW3BhcmFtXTsNCiAgICAgICAgICAgIH0gZWxzZSB7DQogICAgICAgICAgICAgIGVsZW1lbnQudmFsdWUgPSBjb25maWdbcGFyYW1dOw0KICAgICAgICAgICAgfQ0KICAgICAgICAgIH0NCiAgICAgICAgfQ0KICAgICAgfQ0KDQogICAgICBmdW5jdGlvbiBnZXRfY29uZmlnKCkgew0KICAgICAgICB2YXIgb21pdCA9IFsic2F2ZSIsICJhZGRCdXMiLCAiZGlyZWN0aW9uQmFjayIsICJkaXJlY3Rpb25HbyIsICJzdG9wTmFtZSIsICJidXNOYW1lIl07DQogICAgICAgIHZhciBmb3JtID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NvbmZpZ19mb3JtJyk7DQogICAgICAgIGZvciAoY29uZmlnID0ge30sIGkgPSAwOyBpIDwgZm9ybS5sZW5ndGggOyBpKyspIHsNCiAgICAgICAgICBpZCA9IGZvcm1baV0uaWQ7DQogICAgICAgICAgaWYgKG9taXQuaW5kZXhPZihpZCkgPT09IC0xKSB7DQogICAgICAgICAgICBpZiAoZm9ybVtpXS50eXBlID09PSAnY2hlY2tib3gnKSB7DQogICAgICAgICAgICAgIGNvbmZpZ1tpZF0gPSBmb3JtW2ldLmNoZWNrZWQ7DQogICAgICAgICAgICB9IGVsc2Ugew0KICAgICAgICAgICAgICBjb25maWdbaWRdID0gZm9ybVtpXS52YWx1ZTsNCiAgICAgICAgICAgIH0NCiAgICAgICAgICB9DQogICAgICAgIH0NCiAgICAgICAgY29uZmlnLmJ1c0xpc3QgPSBidXNMaXN0Ow0KICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShjb25maWcpKTsNCiAgICAgICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gInBlYmJsZWpzOi8vY2xvc2UjIiArIGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjb25maWcpKTsNCiAgICAgIH0NCg0KICAgICAgZnVuY3Rpb24gdG9nZ2xlX3Zpc2liaWxpdHkoaWQpIHsNCiAgICAgICAgdmFyIGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCk7DQogICAgICAgIGlmKGUuc3R5bGUuZGlzcGxheSA9PSAnYmxvY2snKQ0KICAgICAgICAgIGUuc3R5bGUuZGlzcGxheSA9ICdub25lJzsNCiAgICAgICAgZWxzZQ0KICAgICAgICAgIGUuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7DQogICAgICB9DQoNCiAgICAgIGZ1bmN0aW9uIGFkZF9idXMoKSB7DQogICAgICAgIHZhciBidXMgPSB7fTsNCiAgICAgICAgLy8gZ2V0IGJ1cw0KICAgICAgICBidXMubmFtZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdidXNOYW1lJykudmFsdWU7DQogICAgICAgIGJ1cy5zdG9wID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3N0b3BOYW1lJykudmFsdWU7DQogICAgICAgIA0KICAgICAgICB2YXIgZWxlbWVudHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5TmFtZSgiZGlyZWN0aW9uIik7DQogICAgICAgIGZvciAodmFyIGk9MCwgbGVuPWVsZW1lbnRzLmxlbmd0aDsgaTxsZW47ICsraSkgew0KICAgICAgICAgIGlmIChlbGVtZW50c1tpXS5jaGVja2VkKSB7DQogICAgICAgICAgICBidXMuZGlyZWN0aW9uID0gZWxlbWVudHNbaV0udmFsdWU7DQogICAgICAgICAgfQ0KICAgICAgICB9DQoNCiAgICAgICAgYnVzTGlzdC5wdXNoKGJ1cyk7DQogICAgICAgIHJlZnJlc2hfbGlzdCgpOw0KICAgICAgfQ0KDQogICAgICBmdW5jdGlvbiBkZWxfYnVzKGJ1cykgew0KICAgICAgICBidXNMaXN0LnNwbGljZShidXNMaXN0LmluZGV4T2YoYnVzKSwgMSk7DQogICAgICAgIHJlZnJlc2hfbGlzdCgpOw0KICAgICAgfQ0KDQogICAgICBmdW5jdGlvbiByZWZyZXNoX2xpc3QoKSB7DQogICAgICAgIHZhciBlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J1c05hbWVMaXN0Jyk7DQogICAgICAgIHZhciBodG1sID0gIiI7DQogICAgICAgIHZhciByZW1vdmVCdXR0b24gPSBmdW5jdGlvbihidXMpIHsNCiAgICAgICAgICByZXR1cm4gIjxzcGFuIG9uY2xpY2s9ImRlbF9idXMoIiArIGJ1cyArICIpIj5bcmVtb3ZlXTwvc3Bhbj4iOw0KICAgICAgICB9Ow0KDQogICAgICAgIGZvciAodmFyIGkgPSBidXNMaXN0Lmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7DQogICAgICAgICAgdmFyIGJ1cyA9IGJ1c0xpc3RbaV07DQogICAgICAgICAgaHRtbCArPSAiPGRpdj4iICsgYnVzLmRpcmVjdGlvbiArICIgLSAiICsgYnVzLm5hbWUgKyAiIC0gIiArIGJ1cy5zdG9wICsgIiAgICIgKyByZW1vdmVCdXR0b24oImJ1c0xpc3RbIiArIGkgKyAiXSIpICsgIjwvZGl2PiI7DQogICAgICAgIH07DQogICAgICAgIGUuaW5uZXJIVE1MID0gaHRtbDsNCiAgICAgIH0NCiAgICA8L3NjcmlwdD4NCiAgPC9oZWFkPg0KICA8Ym9keSBvbmxvYWQ9InB1dF9jb25maWcoKTsiPg0KICAgIDxkaXYgY2xhc3M9ImNlbnRlciI+DQogICAgICA8aDE+VGFpcGVpIEJ1czwvaDE+DQogICAgICA8c21hbGw+djAuMC4xIGJ5IFl1THVuPC9zbWFsbD4NCiAgICAgIDxociBzaXplPSIxIiAvPg0KICAgICAgPGZvcm0gYWN0aW9uPSJqYXZhc2NyaXB0OiBnZXRfY29uZmlnKCk7IiBpZD0iY29uZmlnX2Zvcm0iPg0KICAgICAgICAgIDxkaXYgY2xhc3M9InBhcmFtIj4NCiAgICAgICAgICAgIDxkaXYgY2xhc3M9ImZvcm0tYWxpZ24tbGVmdCI+DQogICAgICAgICAgICAgIEJ1cyBOYW1lOg0KICAgICAgICAgICAgPC9kaXY+DQogICAgICAgICAgICA8ZGl2IGNsYXNzPSJmb3JtLWFsaWduLXJpZ2h0Ij4NCiAgICAgICAgICAgICAgPGlucHV0IGlkPSJidXNOYW1lIiB0eXBlPSJ0ZXh0IiBwbGFjZWhvbGRlcj0iNjQyIj4NCiAgICAgICAgICAgIDwvZGl2Pg0KICAgICAgICAgIDwvZGl2Pg0KICAgICAgICAgIDxkaXYgY2xhc3M9InBhcmFtIj4NCiAgICAgICAgICAgIDxkaXYgY2xhc3M9ImZvcm0tYWxpZ24tbGVmdCI+DQogICAgICAgICAgICAgIFN0b3AgTmFtZToNCiAgICAgICAgICAgIDwvZGl2Pg0KICAgICAgICAgICAgPGRpdiBjbGFzcz0iZm9ybS1hbGlnbi1yaWdodCI+DQogICAgICAgICAgICAgIDxpbnB1dCBpZD0ic3RvcE5hbWUiIHR5cGU9InRleHQiIHBsYWNlaG9sZGVyPSLmlrDlupflnIvlsI8iPg0KICAgICAgICAgICAgPC9kaXY+DQogICAgICAgICAgPC9kaXY+DQogICAgICAgICAgPGRpdiBjbGFzcz0iIj4NCiAgICAgICAgICAgIDxsYWJlbCBmb3I9ImRpcmVjdGlvbkdvIiBjbGFzcz0icHVyZS1yYWRpbyI+DQogICAgICAgICAgICAgIDxpbnB1dCBpZD0iZGlyZWN0aW9uR28iIHR5cGU9InJhZGlvIiBuYW1lPSJkaXJlY3Rpb24iIHZhbHVlPSJnbyIgY2hlY2tlZD4NCiAgICAgICAgICAgICAgR28NCiAgICAgICAgICAgIDwvbGFiZWw+DQogICAgICAgICAgICA8bGFiZWwgZm9yPSJkaXJlY3Rpb25CYWNrIiBjbGFzcz0icHVyZS1yYWRpbyI+DQogICAgICAgICAgICAgIDxpbnB1dCBpZD0iZGlyZWN0aW9uQmFjayIgdHlwZT0icmFkaW8iIG5hbWU9ImRpcmVjdGlvbiIgdmFsdWU9ImJhY2siPg0KICAgICAgICAgICAgICBCYWNrDQogICAgICAgICAgICA8L2xhYmVsPg0KICAgICAgICAgIDwvZGl2Pg0KICAgICAgICA8aW5wdXQgaWQ9ImFkZEJ1cyIgdHlwZT0iYnV0dG9uIiBjbGFzcz0ic3VibWl0IHB1cmUtYnV0dG9uIiBvbmNsaWNrPSJhZGRfYnVzKCkiIHZhbHVlPSJBcHBseSIgLz4NCg0KICAgICAgICA8ZGl2IGlkPSJidXNOYW1lTGlzdCI+PC9kaXY+DQoNCiAgICAgICAgPGhyIHNpemU9IjEiIC8+DQoNCiAgICAgICAgPHNwYW4gb25jbGljaz0idG9nZ2xlX3Zpc2liaWxpdHkoJ2F1dGgnKSI+QWR2YW5jZWQgU2V0dGluZ3MgPHNtYWxsPihvcHRpb25hbCk8L3NtYWxsPjwvc3Bhbj4NCiAgICAgICAgPGRpdiBpZD0iYXV0aCIgc3R5bGU9ImRpc3BsYXk6IG5vbmU7Ij4NCiAgICAgICAgPGJyPg0KICAgICAgICAgIDxkaXYgY2xhc3M9InBhcmFtIj4NCiAgICAgICAgICAgIDxkaXYgY2xhc3M9ImZvcm0tYWxpZ24tbGVmdCI+DQogICAgICAgICAgICAgIFNlcnZlciBVUkw6DQogICAgICAgICAgICA8L2Rpdj4NCiAgICAgICAgICAgIDxkaXYgY2xhc3M9ImZvcm0tYWxpZ24tcmlnaHQiPg0KICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0idGV4dCIgaWQ9InVybCIgY2xhc3M9InRleHQiIHZhbHVlPSIiPg0KICAgICAgICAgICAgPC9kaXY+DQogICAgICAgICAgPC9kaXY+DQogICAgICAgICAgPGRpdiBjbGFzcz0icGFyYW0iPg0KICAgICAgICAgICAgPGRpdiBjbGFzcz0iZm9ybS1hbGlnbi1sZWZ0Ij4NCiAgICAgICAgICAgICAgUGViYmxlIFRva2VuOg0KICAgICAgICAgICAgPC9kaXY+DQogICAgICAgICAgICA8ZGl2IGNsYXNzPSJmb3JtLWFsaWduLXJpZ2h0Ij4NCiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9InRleHQiIGlkPSJ0b2tlbiIgY2xhc3M9InRleHQiIHZhbHVlPSIiPg0KICAgICAgICAgICAgPC9kaXY+DQogICAgICAgICAgPC9sYWJlbD4NCiAgICAgICAgICA8L2Rpdj4NCiAgICAgICAgICA8ZGl2IGNsYXNzPSJwYXJhbSI+DQogICAgICAgICAgICA8ZGl2IGNsYXNzPSJmb3JtLWFsaWduLWxlZnQiPg0KICAgICAgICAgICAgICBQYXNzd29yZDoNCiAgICAgICAgICAgIDwvZGl2Pg0KICAgICAgICAgICAgPGRpdiBjbGFzcz0iZm9ybS1hbGlnbi1yaWdodCI+DQogICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSJ0ZXh0IiBpZD0icGFzc3dvcmQiIGNsYXNzPSJ0ZXh0IiB2YWx1ZT0iIj4NCiAgICAgICAgICAgIDwvZGl2Pg0KICAgICAgICAgIDwvZGl2Pg0KDQogICAgICAgICAgPGRpdiBjbGFzcz0icGFyYW0iPg0KICAgICAgICAgICAgPGRpdiBjbGFzcz0ibGFiZWwiPg0KICAgICAgICAgICAgICBBcHBlbmQgR1BTIGNvb3JkaW5hdGVzIHRvIFVSTDo8YnI+DQogICAgICAgICAgICAgIDxzbWFsbD4oY2FuIGVhdCB5b3VyIHBob25lIGJhdHRlcnkpPC9zbWFsbD4NCiAgICAgICAgICAgIDwvZGl2Pg0KICAgICAgICAgICAgPGRpdiBjbGFzcz0iY2hlY2tib3giPg0KICAgICAgICAgICAgICA8aW5wdXQgdHlwZT0iY2hlY2tib3giIGlkPSJjb25maWdfbG9jYXRpb24iIGNsYXNzPSJjaGVja2JveCI+DQogICAgICAgICAgICA8L2Rpdj4NCiAgICAgICAgICA8L2Rpdj4NCg0KICAgICAgICAgIDxkaXYgY2xhc3M9InBhcmFtIj4NCiAgICAgICAgICAgIDxkaXYgY2xhc3M9ImxhYmVsIj4NCiAgICAgICAgICAgICAgVmlicmF0ZSBvbiBibHVldG9vdGggY29ubmVjdGlvbiBsb3NzOg0KICAgICAgICAgICAgPC9kaXY+DQogICAgICAgICAgICA8ZGl2IGNsYXNzPSJjaGVja2JveCI+DQogICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSJjaGVja2JveCIgaWQ9ImNvbmZpZ192aWJyYXRlIiBjbGFzcz0iY2hlY2tib3giPg0KICAgICAgICAgICAgPC9kaXY+DQogICAgICAgICAgPC9kaXY+DQoNCiAgICAgICAgICA8ZGl2IGNsYXNzPSJwYXJhbSI+DQogICAgICAgICAgICA8ZGl2IGNsYXNzPSJsYWJlbCI+DQogICAgICAgICAgICAgIFNlY29uZHMgZG90cyBibGlua2luZzo8YnI+DQogICAgICAgICAgICAgIDxzbWFsbD4oY2FuIGVhdCB5b3VyIHBlYmJsZSBiYXR0ZXJ5KTwvc21hbGw+DQogICAgICAgICAgICA8L2Rpdj4NCiAgICAgICAgICAgIDxkaXYgY2xhc3M9ImNoZWNrYm94Ij4NCiAgICAgICAgICAgICAgPGlucHV0IHR5cGU9ImNoZWNrYm94IiBpZD0iY29uZmlnX3NlY29uZHMiIGNsYXNzPSJjaGVja2JveCI+DQogICAgICAgICAgICA8L2Rpdj4NCiAgICAgICAgICA8L2Rpdj4NCg0KICAgICAgICAgIDxkaXYgY2xhc3M9InBhcmFtIj4NCiAgICAgICAgICAgIDxkaXYgY2xhc3M9ImxhYmVsIj4NCiAgICAgICAgICAgICAgVXBkYXRlIHdpdGggc2hha2luZzo8YnI+DQogICAgICAgICAgICAgIDxzbWFsbD4ocG9zc2libGUgdW5uZWNlc3NhcnkgdXBkYXRlcyk8L3NtYWxsPg0KICAgICAgICAgICAgPC9kaXY+DQogICAgICAgICAgICA8ZGl2IGNsYXNzPSJjaGVja2JveCI+DQogICAgICAgICAgICAgIDxpbnB1dCB0eXBlPSJjaGVja2JveCIgaWQ9ImNvbmZpZ19zaGFrZSIgY2xhc3M9ImNoZWNrYm94Ij4NCiAgICAgICAgICAgIDwvZGl2Pg0KICAgICAgICAgIDwvZGl2Pg0KICAgICAgICA8L2Rpdj4NCiAgICAgICAgPGRpdj4NCiAgICAgICAgPGhyIHNpemU9IjEiIC8+DQogICAgICAgIDxpbnB1dCB0eXBlPSJzdWJtaXQiIGlkPSJzYXZlIiBjbGFzcz0ic3VibWl0IHB1cmUtYnV0dG9uIHB1cmUtYnV0dG9uLXByaW1hcnkiIHZhbHVlPSJTYXZlICYgQXBwbHkiPg0KICAgICAgICA8L2Rpdj4NCiAgICAgIDwvZm9ybT4NCg0KICAgICAgPGhyIHNpemU9IjEiIC8+DQogICAgICA8c21hbGw+c2VlIGRvY3VtZW50YXRpb24gb24gPGEgaHJlZj0iaHR0cHM6Ly9naXRodWIuY29tL2ltWmFjay9wZWJibGUtdGFpcGVpLWJ1cyI+Z2l0aHViPC9hPjwvc21hbGw+PGJyPg0KICAgIDwvZGl2Pg0KDQogICAgDQogIDwvYm9keT4NCjwvaHRtbD4=';
	Pebble.openURL('data:text/html;charset=utf-8;base64,' + data);
});