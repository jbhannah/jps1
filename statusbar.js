var statBarMsg = "New on this website:  " +
		 "A couple of new polls, " +
		 "along with a bit of new news     " +

		 "-jessespokesite-     " ;
function startStatusScroller()
{
    window.status = statBarMsg;
    statBarMsg = statBarMsg.substring(1, statBarMsg.length) +
statBarMsg.substring(0, 1)
    setTimeout("startStatusScroller()", 75)
}