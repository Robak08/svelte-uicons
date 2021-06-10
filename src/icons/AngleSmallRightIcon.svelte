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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-angle-small-right {customClass}"><path d="m15.4 9.879-4.589-4.586A1 1 0 0 0 9.4 6.707l4.586 4.586a1 1 0 0 1 0 1.414L9.4 17.293a1 1 0 0 0 1.415 1.414l4.585-4.586a3 3 0 0 0 0-4.242z"/></svg>
