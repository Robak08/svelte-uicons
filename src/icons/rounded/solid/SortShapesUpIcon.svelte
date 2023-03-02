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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 17v3c0 1.65-1.35 3-3 3h-3c-1.65 0-3-1.35-3-3v-3c0-1.65 1.35-3 3-3h3c1.65 0 3 1.35 3 3ZM8.12.88C6.99-.25 4.99-.24 3.89.86L.31 4.28a.987.987 0 0 0-.03 1.41c.38.4 1.01.42 1.41.03L5 2.57V23c0 .55.45 1 1 1s1-.45 1-1V2.57l3.31 3.15c.19.18.44.28.69.28.26 0 .53-.1.72-.31.38-.4.37-1.03-.03-1.41L8.12.88Zm15.07 5.7L20.5 2.19c-.4-.74-1.17-1.2-2.01-1.2s-1.61.46-1.98 1.15l-2.74 4.48c-.39.71-.37 1.56.05 2.26S14.97 10 15.78 10h5.43c.81 0 1.55-.42 1.96-1.12s.43-1.54.02-2.3Z"/></svg>
  