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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="m13.39 9.98.63.64c.54.54 1.41.54 1.95 0l7.26-7.26a5.004 5.004 0 0 0-4.24-2.35H5C2.24 1 0 3.24 0 6v8c0 1.27.48 2.44 1.27 3.32l7.34-7.34a3.38 3.38 0 0 1 4.78 0ZM5.5 8C4.67 8 4 7.33 4 6.5S4.67 5 5.5 5 7 5.67 7 6.5 6.33 8 5.5 8ZM24 6v8c0 2.76-2.24 5-5 5h-6v2h4c.55 0 1 .45 1 1s-.45 1-1 1H7c-.55 0-1-.45-1-1s.45-1 1-1h4v-2H5c-.76 0-1.47-.17-2.12-.47l7.14-7.14c.54-.54 1.41-.54 1.95 0l.63.64a3.38 3.38 0 0 0 4.78 0l6.58-6.58c.02.18.03.37.03.55Z"/></svg>
  