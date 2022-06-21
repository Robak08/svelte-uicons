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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-subtitles {customClass}"><path d="M19 22H5a5.006 5.006 0 0 1-5-5V7a5.006 5.006 0 0 1 5-5h14a5.006 5.006 0 0 1 5 5v10a5.006 5.006 0 0 1-5 5zM5 4a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h14a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3z"/><path d="M19 13h-8a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2zM7 13H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2zM13 18H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2zM19 18h-2a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2z"/></svg>
