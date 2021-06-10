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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-angle-double-small-left {customClass}"><path d="M10.482 19a1 1 0 0 1-.707-.293l-4.586-4.586a3 3 0 0 1 0-4.242l4.586-4.586a1 1 0 0 1 1.414 1.414L6.6 11.293a1 1 0 0 0 0 1.414l4.585 4.586A1 1 0 0 1 10.482 19z"/><path d="M17.482 19a1 1 0 0 1-.707-.293l-6-6a1 1 0 0 1 0-1.414l6-6a1 1 0 1 1 1.414 1.414L12.9 12l5.293 5.293A1 1 0 0 1 17.482 19z"/></svg>
