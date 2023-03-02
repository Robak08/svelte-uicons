<script>
  export let size = "100%";
  export let strokeWidth = 0;
  let customClass = "";
  export { customClass as class };
  
  if (size !== "100%") {
    size = size.slice(-1) === 'x' 
    ? size.slice(0, size.length -1) + 'em'
    : parseInt(size) + 'px';
  }
  </script>
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0Zm3.534 13.511-2.241 4.856a1.089 1.089 0 0 1-.989.633h-.213a1.09 1.09 0 0 1-1.09-1.09v-2.365c0-.349-.139-.684-.386-.931l-1.19-1.19A1.45 1.45 0 0 1 9 12.399v-.963c0-.279-.111-.547-.309-.745l-.373-.373A1.085 1.085 0 0 0 7.55 10H5.601a1.4 1.4 0 0 1-1.016-.436L2.927 7.821C4.514 4.391 7.979 2 12 2c.206 0 .407.019.609.031-.533.808-1.016 1.551-1.309 2.005a.886.886 0 0 0-.014.94l.837 1.396a.94.94 0 0 1-.141 1.147l-.003.003a.938.938 0 0 1-1.084.176l-.88-.44a.799.799 0 0 0-.921.149l-.529.529a.797.797 0 0 0 0 1.128l.592.592c.22.22.519.344.83.344h1.431c.381 0 .754.107 1.077.309l2.562 1.601c.539.337.744 1.023.477 1.601Zm3.99-1.251a1.266 1.266 0 0 1-.665-.827l-.627-2.507a1.266 1.266 0 0 1 .595-1.403l1.583-.913A9.928 9.928 0 0 1 22 12c0 .488-.047.963-.115 1.432l-2.362-1.172Z"/></svg>
  