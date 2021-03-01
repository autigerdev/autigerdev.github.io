// Load in navbar and footer from seperate files
$(function() {
  $("#navbar").load("navbar.html");
  $("#footer").load("footer.html");
});

// Add mailchimp functionality - testing if it needs to be on every page
!function(c,h,i,m,p){m=c.createElement(h),p=c.getElementsByTagName(h)[0],m.async=1,m.src=i,p.parentNode.insertBefore(m,p)}(document,"script","https://chimpstatic.com/mcjs-connected/js/users/d591c95e629d4843255da6079/afa25182bc364669203b28f49.js");