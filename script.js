//document.ready or widow.onload or $()?
$(function() {
	// select random string
  var chars = '0123456789abcdefghiklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXTZ';
  var str = '';
  for (i=0; i < 10; i++) {
    str += chars[Math.floor(Math.random() * chars.length)]
  }
  return str;
  // END select random string

  
})
