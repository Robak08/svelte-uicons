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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-computer {customClass}"><path d="M19 1H5a5.006 5.006 0 0 0-5 5v8a5.006 5.006 0 0 0 5 5h6v2H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2h-4v-2h6a5.006 5.006 0 0 0 5-5V6a5.006 5.006 0 0 0-5-5ZM5 3h14a3 3 0 0 1 3 3v7H2V6a3 3 0 0 1 3-3Zm14 14H5a3 3 0 0 1-2.816-2h19.632A3 3 0 0 1 19 17Z"/></svg>
