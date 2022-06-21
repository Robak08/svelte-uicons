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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-arrow-from-left {customClass}"><path d="m23.121 9.886-4.579-4.579a1 1 0 0 0-1.414 1.414L21.407 11H2V6a1 1 0 0 0-2 0v12a1 1 0 0 0 2 0v-5h19.422l-4.294 4.293a1 1 0 1 0 1.414 1.414l4.58-4.578a3 3 0 0 0-.001-4.243Z"/></svg>
