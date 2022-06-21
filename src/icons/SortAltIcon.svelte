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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-sort-alt {customClass}"><path d="M11.293 17.707 8 21V1a1 1 0 1 0-2 0v20l-3.293-3.293a.999.999 0 1 0-1.414 1.414l4.293 4.293c.39.39.902.585 1.414.585s1.024-.195 1.414-.585l4.293-4.293a.999.999 0 1 0-1.414-1.414ZM22.707 6.293a.999.999 0 0 0 0-1.414L18.414.586C18.024.196 17.512 0 17 0s-1.024.195-1.414.585l-4.293 4.293a.999.999 0 1 0 1.414 1.414L16 2.999V23a1 1 0 1 0 2 0V3l3.293 3.293a.999.999 0 0 0 1.414 0Z"/></svg>
