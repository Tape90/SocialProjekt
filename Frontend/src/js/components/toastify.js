import Toastify from 'toastify-js';
import 'toastify-js/src/toastify.css';

export default function toastify(text, color) {

    let bColor = "00b09b";
    if (color) {
        bColor = color;
    };

  Toastify({
    text: text,
    duration: 3000,
    gravity: 'top',
    close: true,
    position: 'right',
    style: {
        background: bColor
    }
  }).showToast();
}