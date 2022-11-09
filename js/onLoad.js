/**
 * brief: Determine the mobile operating system.
 * This function returns one of 'iOS', 'Android', 'Windows Phone', or 'unknown'.
 *
 * @returns {String}
 */
function getMobileOperatingSystem() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
        return "Windows Phone";
    }

    if (/android/i.test(userAgent)) {
        return "Android";
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        return "iOS";
    }

    return "unknown";
}

/**
 * brief: Click on the link to return back to the app
 * This function should only run on iOS devices
 */
$(document).ready(function(){
    if (getMobileOperatingSystem() == "iOS") {
        const queryString = window.location.search;
        console.log(queryString);
        const urlParams = new URLSearchParams(queryString);
        var isHazelverse = false;
        if (urlParams.has('isHazelverse') && urlParams.get('isHazelverse')) {
            console.log("show image");
            $("#marginBar").remove();
            $('#success_page')[0].click();
        } else {
            $("#hazelverseInstructions").remove();
            $('#success_page')[0].click();
        }
    } else {
        $("#hazelverseInstructions").remove();
    }
});
