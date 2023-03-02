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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M12.74.045a12.036 12.036 0 0 0-9.328 3.492 12.025 12.025 0 0 0-3.479 9.334c.44 6.354 6.052 11.146 13.054 11.146h5.917c2.757 0 5-2.243 5-5v-6.66C23.904 5.878 19 .47 12.74.045ZM17 11c-.552 0-1-.447-1-1s-.449-1-1-1h-2v8h1a1 1 0 1 1 0 2h-4a1 1 0 1 1 0-2h1V9H9c-.551 0-1 .448-1 1a1 1 0 0 1-2 0c0-1.654 1.346-3 3-3h6c1.654 0 3 1.346 3 3a1 1 0 0 1-1 1Z"/></svg>
  