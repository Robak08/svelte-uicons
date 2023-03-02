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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23 10H4V7c0-1.654 1.346-3 3-3h.184A2.996 2.996 0 0 0 10 6h3c3.957-.104 3.954-5.897 0-6h-3a2.996 2.996 0 0 0-2.816 2H7C4.243 2 2 4.243 2 7v3H1c-1.308.006-1.307 1.994 0 2h1.153l1.304 7.821A4.984 4.984 0 0 0 8.389 24h7.223a4.983 4.983 0 0 0 4.932-4.179L21.848 12h1.153c1.308-.006 1.307-1.994 0-2Z"/></svg>
  