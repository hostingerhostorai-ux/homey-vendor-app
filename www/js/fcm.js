document.addEventListener('deviceready', function () {

    FirebasePlugin.getToken(function (token) {
        console.log("🔥 FCM TOKEN:", token);

        // send token to server
        fetch("https://ehomey.in/api/save_fcm_token.php", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: "token=" + token + "&role=vendor"
        });

    }, function (err) {
        console.error("FCM TOKEN ERROR", err);
    });

    // Notification received (foreground)
    FirebasePlugin.onMessageReceived(function (msg) {
        console.log("📩 Notification:", msg);
    });

}, false);
