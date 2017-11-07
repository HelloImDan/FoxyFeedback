var app = {
    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
        document.addEventListener("online", onOnline, false);
    },

    onDeviceReady: function() {
        console.log("Application Ready");
    },

    onOnline:function(){
        navigator.vibrate(3000);
    }
};