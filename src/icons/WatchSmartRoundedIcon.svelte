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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-watch-smart {customClass}"><path d="M18 4.003V1a1 1 0 1 0-2 0v2.101A4.995 4.995 0 0 0 15 3H9c-.342 0-.677.035-1 .101V1a1 1 0 1 0-2 0v3.003A4.994 4.994 0 0 0 4 8v8c0 1.632.786 3.084 2 3.997V23a1 1 0 1 0 2 0v-2.101c.323.066.658.101 1 .101h6c.342 0 .677-.035 1-.101V23a1 1 0 1 0 2 0v-3.003A4.994 4.994 0 0 0 20 16V8a4.994 4.994 0 0 0-2-3.997ZM18 16c0 1.654-1.346 3-3 3H9c-1.654 0-3-1.346-3-3V8c0-1.654 1.346-3 3-3h6c1.654 0 3 1.346 3 3v8Zm-3.293-2.707a.999.999 0 1 1-1.414 1.414l-2-2A.997.997 0 0 1 11 12V8a1 1 0 1 1 2 0v3.586l1.707 1.707Z"/></svg>
  