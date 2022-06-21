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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-arrow-circle-left {customClass}"><path d="M24 12a12 12 0 1 0-12 12 12.013 12.013 0 0 0 12-12ZM2 12a10 10 0 1 1 10 10A10.011 10.011 0 0 1 2 12Zm8.879 5.707a1 1 0 0 0 0-1.414L7.587 13 18 12.993a1 1 0 0 0 0-2L7.586 11l3.293-3.293A1 1 0 1 0 9.49 6.269l-.025.024-3.586 3.585a3 3 0 0 0 0 4.243l3.586 3.586a1 1 0 0 0 1.414 0Z"/></svg>
