if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    console.log('mobile interface found');
    document.getElementById('parent_map_iframe').src = 'mobile/index.html';
}

console.log('js loaded');