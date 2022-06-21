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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-time-past {customClass}"><path d="M12 6a1 1 0 0 0-1 1v5a1 1 0 0 0 .293.707l3 3a1 1 0 0 0 1.414-1.414L13 11.586V7a1 1 0 0 0-1-1z"/><path d="M23.812 10.132A12 12 0 0 0 3.578 3.415V1a1 1 0 0 0-2 0v4a2 2 0 0 0 2 2h4a1 1 0 0 0 0-2H4.827a9.99 9.99 0 1 1-2.835 7.878A.982.982 0 0 0 1 12a1.007 1.007 0 0 0-1 1.1 12 12 0 1 0 23.808-2.969z"/></svg>
