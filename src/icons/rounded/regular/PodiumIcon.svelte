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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 10H4V7c0-1.654 1.346-3 3-3h.172A3.004 3.004 0 0 0 10 6h3c1.654 0 3-1.346 3-3s-1.346-3-3-3h-3a3.004 3.004 0 0 0-2.828 2H7C4.243 2 2 4.243 2 7v3H1a1 1 0 0 0 0 2h1.153l1.304 7.821A4.984 4.984 0 0 0 8.389 24h7.223a4.983 4.983 0 0 0 4.932-4.179L21.848 12h1.153a1 1 0 0 0 0-2ZM10 2h3c.551 0 1 .449 1 1s-.449 1-1 1h-3c-.551 0-1-.449-1-1s.449-1 1-1Zm8.571 17.493A2.991 2.991 0 0 1 15.612 22H8.389a2.99 2.99 0 0 1-2.959-2.507L4.181 12H19.82l-1.249 7.493Z"/></svg>
  