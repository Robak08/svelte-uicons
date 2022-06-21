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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-arrow-alt-from-left {customClass}"><path d="M23.768 11.448 19.35 7.087c-.498-.492-1.35-.143-1.35.552V11H2V4a1 1 0 0 0-2 0v16a1 1 0 0 0 2 0v-7h16v3.361c0 .695.852 1.044 1.35.552l4.418-4.361a.773.773 0 0 0 0-1.104Z"/></svg>
