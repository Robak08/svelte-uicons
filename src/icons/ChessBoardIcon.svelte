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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-chess-board {customClass}"><path d="M19 0H5a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5Zm3 14v4h-4v4h-4v-4h-4v4H6v-4H2v-4h4v-4H2V6h4V2h4v4h4V2h4v4h4v4h-4v4Zm-12-4H6V6h4Zm4 0V6h4v4Zm-4 4v4H6v-4Zm4 0h4v4h-4Zm-4-4h4v4h-4Z"/></svg>
