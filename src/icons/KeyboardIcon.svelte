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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-keyboard {customClass}"><path d="M19 6h-6V3a1 1 0 0 0-2 0v3H5a5.006 5.006 0 0 0-5 5v4a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5v-4a5.006 5.006 0 0 0-5-5zm3 9a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3v-4a3 3 0 0 1 3-3h14a3 3 0 0 1 3 3z"/><path d="M15 14H9a1 1 0 0 0 0 2h6a1 1 0 0 0 0-2zM10 12h1a1 1 0 0 0 0-2h-1a1 1 0 0 0 0 2zM19 10h-4a1 1 0 0 0 0 2h4a1 1 0 0 0 0-2zM6 10H5a1 1 0 0 0 0 2h1a1 1 0 0 0 0-2z"/><circle cx="5" cy="15" r="1"/><circle cx="19" cy="15" r="1"/></svg>
