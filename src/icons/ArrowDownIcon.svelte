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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-arrow-down {customClass}"><path d="M18.048 17.788a1 1 0 0 0-1.414 0L13 21.419V1a1 1 0 0 0-1-1 1 1 0 0 0-1 1v20.408l-3.619-3.62A1 1 0 1 0 5.967 19.2l3.919 3.919a3 3 0 0 0 4.243 0l3.919-3.919a1 1 0 0 0 0-1.412z"/></svg>
