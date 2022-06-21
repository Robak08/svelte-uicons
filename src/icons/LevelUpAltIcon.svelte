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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-level-up-alt {customClass}"><path d="M17.087 7H13v12a5.006 5.006 0 0 1-5 5H1a1 1 0 0 1 0-2h7a3 3 0 0 0 3-3V7H6.913a.924.924 0 0 1-.644-1.575L11.356.27a.9.9 0 0 1 1.288 0l5.087 5.155A.924.924 0 0 1 17.087 7Z"/></svg>
