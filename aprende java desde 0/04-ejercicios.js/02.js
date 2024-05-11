/**
 * nombre: ancho x alto
 * 8K 7680 X 4320
 * 4K 3840 X 2160
 * WQHD 2560 X 1140
 * FHD 1920 X 1080
 * HD 1280 X 720
 */
function nombreResolucion(ancho , alto) {
    if (ancho > 7689 && alto >= 4320) {
        return "8k";
    }else if (ancho >= 3840 && alto >= 2160){
        return "4K";
    }else if (ancho >= 2560 && alto >= 1140){
        return "WQHD";
    }else if (ancho >= 1920 && alto >= 1080){
        return "FHD";
    }else if (ancho >= 1280 && alto >= 720){
        return "HD";
    }
 }
let nombre = nombreResolucion(1366, 768)
console.log(nombre);