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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-print {customClass}"><path d="M19 6V4a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2a5.006 5.006 0 0 0-5 5v5a5.006 5.006 0 0 0 5 5 3 3 0 0 0 3 3h8a3 3 0 0 0 3-3 5.006 5.006 0 0 0 5-5v-5a5.006 5.006 0 0 0-5-5zM7 4a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2H7zm10 17a1 1 0 0 1-1 1H8a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1zm5-5a3 3 0 0 1-3 3v-2a3 3 0 0 0-3-3H8a3 3 0 0 0-3 3v2a3 3 0 0 1-3-3v-5a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3z"/><path d="M18 10h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2z"/></svg>
