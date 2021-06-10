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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-angle-small-up {customClass}"><path d="M18 15.5a1 1 0 0 1-.707-.293l-4.586-4.586a1.021 1.021 0 0 0-1.414 0l-4.586 4.586a1 1 0 0 1-1.414-1.414l4.586-4.586a3.073 3.073 0 0 1 4.243 0l4.585 4.586A1 1 0 0 1 18 15.5z"/></svg>
