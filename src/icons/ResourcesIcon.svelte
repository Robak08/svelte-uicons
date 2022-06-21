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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-resources {customClass}"><path d="M7.54 13H2.732l5.133-8.891 3.982 6.9c.051 0 .1-.008.153-.008a5.953 5.953 0 0 1 2.46.534L9.6 3.108a2 2 0 0 0-3.464 0L.134 13.5A1 1 0 0 0 1 15h5.35a6.009 6.009 0 0 1 1.19-2z"/><path d="M23 3H13a1 1 0 0 0-1 1v7a5.976 5.976 0 0 1 2 .35V5h8v8h-5.54a6.009 6.009 0 0 1 1.19 2H23a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1z"/><path d="M12 12a5 5 0 1 1-5 5 5.006 5.006 0 0 1 5-5m0-2a7 7 0 1 0 7 7 7 7 0 0 0-7-7z"/></svg>
