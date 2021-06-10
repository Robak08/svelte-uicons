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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-inbox {customClass}"><path d="M21 12h-3a2 2 0 0 0-2 2 2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2 2 2 0 0 0-2-2H3a3 3 0 0 0-3 3v4a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5v-4a3 3 0 0 0-3-3zm1 7a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-4a1 1 0 0 1 1-1h3a4 4 0 0 0 4 4h4a4 4 0 0 0 4-4h3a1 1 0 0 1 1 1zM3 10h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2zM3 6h18a1 1 0 0 0 0-2H3a1 1 0 0 0 0 2z"/></svg>
