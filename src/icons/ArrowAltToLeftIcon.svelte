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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-arrow-alt-to-left {customClass}"><path d="M24 12a1 1 0 0 1-1 1H8v3.361c0 .695-.852 1.044-1.35.552l-4.418-4.361a.774.774 0 0 1 0-1.104L6.65 7.087C7.148 6.595 8 6.944 8 7.639V11h15a1 1 0 0 1 1 1ZM1 3a1 1 0 0 0-1 1v16a1 1 0 0 0 2 0V4a1 1 0 0 0-1-1Z"/></svg>
