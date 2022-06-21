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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-tornado {customClass}"><path d="M16 24h-2a1 1 0 0 1 0-2h2a1 1 0 0 0 0-2h-4a3 3 0 0 1 0-6h7a1 1 0 0 0 0-2H6C-1.932 11.747-1.926.25 6 0h14a4 4 0 0 1 0 8H6a1 1 0 0 1 0-2h14a2 2 0 0 0 0-4H6a4 4 0 0 0 0 8h13a3 3 0 0 1 0 6h-7a1 1 0 0 0 0 2h4a3 3 0 0 1 0 6Z"/></svg>
