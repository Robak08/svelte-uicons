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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M2.246 5.316a4.964 4.964 0 0 1 1.181-1l6-3.6a4.987 4.987 0 0 1 5.145 0l6 3.6a4.95 4.95 0 0 1 1.182 1L12 11.169ZM13 12.9v10.989a4.981 4.981 0 0 0 1.572-.6l6-3.6A5.027 5.027 0 0 0 23 15.4V8.6a4.95 4.95 0 0 0-.258-1.544Zm-2 0L1.258 7.056A4.95 4.95 0 0 0 1 8.6v6.8a5.027 5.027 0 0 0 2.427 4.288l6 3.6a4.986 4.986 0 0 0 1.573.6Z"/></svg>
  