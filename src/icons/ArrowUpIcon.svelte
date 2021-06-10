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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-arrow-up {customClass}"><path d="M18.707 5.462 14.121.875a3.007 3.007 0 0 0-4.242 0L5.293 5.462a1 1 0 1 0 1.414 1.414L11 2.584V23a1 1 0 0 0 2 0V2.583l4.293 4.293a1 1 0 1 0 1.414-1.414z"/></svg>
