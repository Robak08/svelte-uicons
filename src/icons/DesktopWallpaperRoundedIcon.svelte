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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-desktop-wallpaper {customClass}"><path d="M5 6.5C5 5.67 5.67 5 6.5 5S8 5.67 8 6.5 7.33 8 6.5 8 5 7.33 5 6.5ZM24 6v8c0 2.76-2.24 5-5 5h-6v2h4c.55 0 1 .45 1 1s-.45 1-1 1H7c-.55 0-1-.45-1-1s.45-1 1-1h4v-2H5c-2.76 0-5-2.24-5-5V6c0-2.76 2.24-5 5-5h14c2.76 0 5 2.24 5 5ZM2 14c0 .72.26 1.38.68 1.9l5.93-5.93a3.38 3.38 0 0 1 4.78 0l.63.64c.54.54 1.41.54 1.95 0l5.78-5.78A3.011 3.011 0 0 0 18.99 3H5C3.35 3 2 4.35 2 6v8Zm20 0V7.41l-4.61 4.61a3.38 3.38 0 0 1-4.78 0l-.63-.64c-.54-.54-1.41-.54-1.95 0l-5.56 5.56c.17.03.35.05.54.05h14c1.65 0 3-1.35 3-3Z"/></svg>
  