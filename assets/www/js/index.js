

    // Wait for PhoneGap to load
    //
document.addEventListener("deviceready", onDeviceReady, false);

    // PhoneGap is ready
    //
function onDeviceReady() {

 
}

var x = document.getElementById("x");
var z = document.getElementById("y");
var z = document.getElementById("z");

function onSuccess(acceleration) {
    x.innerHTML= 'Acceleration X: ' + acceleration.x ;
    y.innerHTML= 'Acceleration Y: ' + acceleration.y ;
    z.innerHTML= 'Acceleration Z: ' + acceleration.z ;
};

function onError() {
    alert('onError!');
};

navigator.accelerometer.getCurrentAcceleration(onSuccess, onError);
