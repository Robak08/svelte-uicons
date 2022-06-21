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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-underline {customClass}"><path d="M12 20a8.009 8.009 0 0 0 8-8V1a1 1 0 0 0-2 0v11a6 6 0 0 1-12 0V1a1 1 0 0 0-2 0v11a8.009 8.009 0 0 0 8 8ZM23 22H1a1 1 0 0 0 0 2h22a1 1 0 0 0 0-2Z"/></svg>
