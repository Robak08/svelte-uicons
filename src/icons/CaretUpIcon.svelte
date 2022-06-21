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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-caret-up {customClass}"><path d="M6.41 16h11.18a1 1 0 0 0 .7-1.71l-5.58-5.58a1 1 0 0 0-1.42 0l-5.58 5.58a1 1 0 0 0 .7 1.71Z"/></svg>
