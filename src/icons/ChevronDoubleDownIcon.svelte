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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-chevron-double-down {customClass}"><path d="M.305 12.293a1 1 0 0 1 1.414 0l8.172 8.171a3 3 0 0 0 4.242 0l8.172-8.171a1 1 0 0 1 1.414 1.414l-8.172 8.171a5 5 0 0 1-7.07 0L.305 13.707a1 1 0 0 1 0-1.414Z"/><path d="M.305 2.293a1 1 0 0 1 1.414 0l9.586 9.586a1 1 0 0 0 1.414 0l9.586-9.586a1 1 0 0 1 1.414 1.414l-9.586 9.586a3 3 0 0 1-4.242 0L.305 3.707a1 1 0 0 1 0-1.414Z"/></svg>
