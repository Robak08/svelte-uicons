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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-label {customClass}"><path d="M20.457 4.555 12.486.126a1 1 0 0 0-.972 0L3.543 4.555A3 3 0 0 0 2 7.177V19a5.006 5.006 0 0 0 5 5h10a5.006 5.006 0 0 0 5-5V7.177a3 3 0 0 0-1.543-2.622ZM20 19a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7.177a1 1 0 0 1 .515-.877L12 2.144 19.486 6.3a1 1 0 0 1 .514.877Z"/><circle cx="12" cy="7" r="1.5"/></svg>
