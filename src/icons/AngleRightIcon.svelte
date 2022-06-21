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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-angle-right {customClass}"><path d="M7 24a1 1 0 0 1-.707-1.707l8.172-8.172a3 3 0 0 0 0-4.242L6.293 1.707A1 1 0 0 1 7.707.293l8.172 8.172a5.005 5.005 0 0 1 0 7.07l-8.172 8.172A1 1 0 0 1 7 24z"/></svg>
