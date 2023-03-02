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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M1.51 6.079a1.492 1.492 0 0 1 1.06.44l7.673 7.672a2.5 2.5 0 0 0 3.536 0l7.661-7.662a1.5 1.5 0 1 1 2.121 2.121L15.9 16.312a5.505 5.505 0 0 1-7.778 0L.449 8.64A1.5 1.5 0 0 1 1.51 6.079Z"/></svg>
  