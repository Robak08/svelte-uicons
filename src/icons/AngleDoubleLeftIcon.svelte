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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-angle-double-left {customClass}"><path d="M12 24a1 1 0 0 1-.707-.293l-8.171-8.172a5 5 0 0 1 0-7.07L11.293.293a1 1 0 0 1 1.414 1.414L4.536 9.879a3 3 0 0 0 0 4.242l8.171 8.172A1 1 0 0 1 12 24z"/><path d="M22 24a1 1 0 0 1-.707-.293l-9.586-9.586a3 3 0 0 1 0-4.242L21.293.293a1 1 0 0 1 1.414 1.414l-9.586 9.586a1 1 0 0 0 0 1.414l9.586 9.586A1 1 0 0 1 22 24z"/></svg>
