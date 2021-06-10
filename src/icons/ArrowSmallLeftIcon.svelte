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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-arrow-small-left {customClass}"><path d="M10.88 17.715a1 1 0 0 0 0-1.415l-3.292-3.293L18 13a1 1 0 0 0 0-2l-10.414.007 3.294-3.292A1 1 0 0 0 9.466 6.3L5.88 9.886a3 3 0 0 0 0 4.243l3.586 3.586a1 1 0 0 0 1.414 0z"/></svg>
