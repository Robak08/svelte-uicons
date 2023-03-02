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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 490.667 490.667"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M469.333 224h-448C9.551 224 0 233.551 0 245.333c0 11.782 9.551 21.333 21.333 21.333h448c11.782 0 21.333-9.551 21.333-21.333.001-11.782-9.551-21.333-21.333-21.333zM21.333 117.333h448c11.782 0 21.333-9.551 21.333-21.333s-9.551-21.333-21.333-21.333h-448C9.551 74.667 0 84.218 0 96s9.551 21.333 21.333 21.333zM469.333 373.333h-448C9.551 373.333 0 382.885 0 394.667S9.551 416 21.333 416h448c11.782 0 21.333-9.551 21.333-21.333.001-11.782-9.551-21.334-21.333-21.334z"/></svg>
  