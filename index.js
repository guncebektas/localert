function createLocalart() {
  if (location.hostname === 'localhost') {
    const elemDiv = document.createElement('div');
    elemDiv.style.cssText = 'position:fixed;top:0;width:100%;height:5px;background:red;z-index:999999999';
    document.body.appendChild(elemDiv);
  }
}

document.addEventListener('DOMContentLoaded', createLocalart);