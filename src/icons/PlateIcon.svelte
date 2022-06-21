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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-plate {customClass}"><path d="M12 24A12.013 12.013 0 0 1 0 12C.63-3.908 23.373-3.9 24 12a12.013 12.013 0 0 1-12 12Zm0-22A10.011 10.011 0 0 0 2 12c.525 13.257 19.477 13.253 20 0A10.011 10.011 0 0 0 12 2Zm8 10a1 1 0 0 0-2 0c-.251 7.929-11.749 7.928-12 0a6.006 6.006 0 0 1 6-6 1 1 0 0 0 0-2 8.009 8.009 0 0 0-8 8c.376 10.588 15.626 10.586 16 0Z"/></svg>
