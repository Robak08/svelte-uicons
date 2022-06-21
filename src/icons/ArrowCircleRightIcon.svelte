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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-arrow-circle-right {customClass}"><path d="M0 12A12 12 0 1 0 12 0 12.013 12.013 0 0 0 0 12Zm22 0A10 10 0 1 1 12 2a10.011 10.011 0 0 1 10 10Zm-8.879-5.707a1 1 0 0 0 0 1.414L16.413 11 6 11.007a1 1 0 1 0 0 2L16.414 13l-3.293 3.293a1 1 0 1 0 1.389 1.438l.025-.024 3.586-3.585a3 3 0 0 0 0-4.243l-3.586-3.586a1 1 0 0 0-1.414 0Z"/></svg>
