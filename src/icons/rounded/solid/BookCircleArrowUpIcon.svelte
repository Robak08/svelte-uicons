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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M10.252 16H6V0h9a5 5 0 0 1 5 5v5.252A8.004 8.004 0 0 0 10.252 16Zm-7.857.061A4.955 4.955 0 0 0 0 17.025V5A5 5 0 0 1 4 .1V16H3a3 3 0 0 0-.605.061ZM12.709 24H3a3 3 0 1 1 0-6h7a7.98 7.98 0 0 0 2.709 6ZM12 18a6 6 0 1 0 12 0 6 6 0 0 0-12 0Zm7.242-2.998 1.5 1.5A.878.878 0 0 1 20.12 18h-1.121v3a1 1 0 1 1-2 0v-3h-1.121a.879.879 0 0 1-.622-1.498l1.5-1.5a1.76 1.76 0 0 1 2.485 0Z"/></svg>
  