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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-refresh {customClass}"><path d="M23 12a.982.982 0 0 0-.988.878A9.986 9.986 0 0 1 4.924 19h2.745a1 1 0 1 0 0-2h-4a2 2 0 0 0-2 2v4a1 1 0 0 0 2 0v-2.438A11.977 11.977 0 0 0 24 13.1a1.007 1.007 0 0 0-1-1.1zM21.331 0a1 1 0 0 0-1 1v2.438A11.977 11.977 0 0 0 0 10.9 1.007 1.007 0 0 0 1 12a.982.982 0 0 0 .988-.878A9.986 9.986 0 0 1 19.076 5h-2.745a1 1 0 0 0 0 2h4a2 2 0 0 0 2-2V1a1 1 0 0 0-1-1z"/></svg>
