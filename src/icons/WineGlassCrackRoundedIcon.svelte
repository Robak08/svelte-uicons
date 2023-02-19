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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-wine-glass-crack {customClass}"><path d="M19 9V3c0-1.654-1.346-3-3-3H8C6.346 0 5 1.346 5 3v6c0 3.52 2.612 6.441 6 6.928V22H8a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2h-3v-6.072c3.388-.487 6-3.408 6-6.928ZM7 9V3c0-.552.449-1 1-1h3.069S9.101 4.814 9.07 4.917a1.623 1.623 0 0 0 .249 1.431c.303.408.788.652 1.297.652h2.068l-1.533 2.473a1 1 0 0 0 1.7 1.054l1.882-3.037a1.603 1.603 0 0 0-1.337-2.491h-1.998l2.121-3h2.482c.551 0 1 .448 1 1v6c0 2.757-2.243 5-5 5s-5-2.243-5-5Z"/></svg>
  