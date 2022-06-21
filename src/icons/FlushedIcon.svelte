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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-flushed {customClass}"><path d="M12 0A12.013 12.013 0 0 0 0 12c.6 15.9 23.4 15.893 24 0A12.013 12.013 0 0 0 12 0Zm0 22A10.011 10.011 0 0 1 2 12c.5-13.248 19.5-13.245 20 0a10.011 10.011 0 0 1-10 10Zm4-15a3 3 0 0 0 0 6 3 3 0 0 0 0-6Zm0 4a1 1 0 0 1 0-2 1 1 0 0 1 0 2Zm-5-1a3 3 0 0 0-6 0 3 3 0 0 0 6 0Zm-4 0a1 1 0 0 1 2 0 1 1 0 0 1-2 0Zm10 7a1 1 0 0 1-1 1H8a1 1 0 0 1 0-2h8a1 1 0 0 1 1 1Z"/></svg>
