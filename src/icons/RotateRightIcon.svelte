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

<svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} fill="#000" viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-rotate-right {customClass}"><path d="M22.951 12a.982.982 0 0 0-.989.878A10.009 10.009 0 1 1 19.128 5h-2.752a1 1 0 1 0 0 2h4a2 2 0 0 0 2-2V1a1 1 0 0 0-2 0v2.415A11.994 11.994 0 1 0 23.95 13.1a1.007 1.007 0 0 0-.999-1.1z"/></svg>
