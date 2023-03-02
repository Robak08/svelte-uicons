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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20 2h-3V1c0-.55-.45-1-1-1s-1 .45-1 1v1H4C1.79 2 0 3.79 0 6s1.79 4 4 4h11v1c0 .55.45 1 1 1s1-.45 1-1v-1h3c2.21 0 4-1.79 4-4s-1.79-4-4-4Zm-9 6V4h4v4h-4Zm9 6h-7v-1c0-.55-.45-1-1-1s-1 .45-1 1v1H4c-2.21 0-4 1.79-4 4s1.79 4 4 4h7v1c0 .55.45 1 1 1s1-.45 1-1v-1h7c2.21 0 4-1.79 4-4s-1.79-4-4-4ZM7 20v-4h4v4H7Z"/></svg>
  