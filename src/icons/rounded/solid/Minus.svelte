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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M490.667 234.667H21.333C9.551 234.667 0 244.218 0 256c0 11.782 9.551 21.333 21.333 21.333h469.333c11.782 0 21.333-9.551 21.333-21.333.001-11.782-9.55-21.333-21.332-21.333z"/></svg>
  