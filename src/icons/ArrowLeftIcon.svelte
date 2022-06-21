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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-arrow-left {customClass}"><path d="m.876 14.088 3.879 3.879a1 1 0 0 0 1.414 0 1 1 0 0 0 0-1.414L2.614 13H23a1 1 0 0 0 1-1 1 1 0 0 0-1-1H2.553l3.616-3.619a1 1 0 0 0 0-1.414 1 1 0 0 0-1.414 0L.875 9.846a3.007 3.007 0 0 0 .001 4.242z"/></svg>
