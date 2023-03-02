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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M22 6v5h-9V6ZM11 6H2v5h9Zm7 8a1 1 0 0 1-2 0v-1H8v1a1 1 0 0 1-2 0v-1H2v1a4.994 4.994 0 0 0 4.278 4.927l-2.135 3.558a1 1 0 0 0 1.714 1.03L8.566 19h6.868l2.709 4.515a1 1 0 0 0 1.714-1.03l-2.135-3.558A4.994 4.994 0 0 0 22 14v-1h-4ZM17 0H7a5.009 5.009 0 0 0-4.9 4h19.8A5.009 5.009 0 0 0 17 0Z"/></svg>
  