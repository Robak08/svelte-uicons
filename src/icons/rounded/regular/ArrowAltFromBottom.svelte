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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20 22h-7V6h3.361c.695 0 1.044-.852.552-1.35L12.552.232a.773.773 0 0 0-1.104 0L7.087 4.65C6.595 5.148 6.944 6 7.639 6H11v16H4a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2Z"/></svg>
  