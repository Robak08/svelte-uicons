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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M17.425 22.239a1.001 1.001 0 0 1-.578.731A11.9 11.9 0 0 1 12 23.999C5.383 24 0 18.617 0 12c0-1.673.347-3.303 1.029-4.846a.997.997 0 0 1 1.621-.302L7 11.201V18a1 1 0 0 0 2 0v-4.799l8.148 8.148a.998.998 0 0 1 .276.89ZM24 12a11.92 11.92 0 0 1-3.515 8.485.997.997 0 0 1-1.414 0L3.515 4.929a1 1 0 0 1 0-1.415A11.925 11.925 0 0 1 12 0c6.617 0 12 5.383 12 12Zm-6-2.5C18 7.019 15.981 5 13.5 5H11c-.765 0-1.508.216-2.148.626a1 1 0 1 0 1.076 1.686C10.247 7.108 10.618 7 11 7h2.5C14.879 7 16 8.122 16 9.5c0 .886-.476 1.714-1.242 2.161a1 1 0 0 0 1.008 1.728A4.517 4.517 0 0 0 18 9.5Z"/></svg>
  