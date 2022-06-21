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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-cross-circle {customClass}"><path d="M16 8a1 1 0 0 0-1.414 0L12 10.586 9.414 8A1 1 0 0 0 8 9.414L10.586 12 8 14.586A1 1 0 0 0 9.414 16L12 13.414 14.586 16A1 1 0 0 0 16 14.586L13.414 12 16 9.414A1 1 0 0 0 16 8Z"/><path d="M12 0a12 12 0 1 0 12 12A12.013 12.013 0 0 0 12 0Zm0 22a10 10 0 1 1 10-10 10.011 10.011 0 0 1-10 10Z"/></svg>
