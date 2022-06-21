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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-canned-food {customClass}"><path d="M23 22V8a1 1 0 0 0 0-2h-4.556A4.007 4.007 0 0 0 15 0a1 1 0 0 0 0 2 2 2 0 0 1 0 4H1a1 1 0 0 0 0 2v14a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2ZM3 20h15a1 1 0 0 0 0-2H3v-6h15a1 1 0 0 0 0-2H3V8h18v14H3Z"/></svg>
