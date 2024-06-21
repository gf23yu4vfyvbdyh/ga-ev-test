function butotnClick2() {
    console.log("テストログ0002")
    var random_lat = Math.floor(Math.random() * 100) + 150;
    var random_lng = Math.floor(Math.random() * 100) + 150;

    gtag('event', 'place_get_upload', {
        "user_v_lng": "test-lng-" + random_lat,
        "user_v_lat": "test-lat-" + random_lng
    });
}

let button2 = document.getElementById('btn_1');
console.log("テストログ0001")
button2.addEventListener('click', butotnClick2);
gtag('set', { 'user_id': 'USER_ID_testP240621' })

