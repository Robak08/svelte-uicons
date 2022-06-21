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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-tablet {customClass}"><path d="M17 0H7a5.006 5.006 0 0 0-5 5v14a5.006 5.006 0 0 0 5 5h10a5.006 5.006 0 0 0 5-5V5a5.006 5.006 0 0 0-5-5ZM7 2h10a3 3 0 0 1 3 3v12H4V5a3 3 0 0 1 3-3Zm10 20H7a3 3 0 0 1-3-3h7v1a1 1 0 0 0 2 0v-1h7a3 3 0 0 1-3 3Z"/></svg>
