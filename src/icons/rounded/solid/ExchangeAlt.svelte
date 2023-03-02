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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M0 7a1 1 0 0 1 1-1h17V2.639a.792.792 0 0 1 1.35-.552l4.418 4.361a.773.773 0 0 1 0 1.1l-4.418 4.365a.792.792 0 0 1-1.35-.552V8H1a1 1 0 0 1-1-1Zm23 9H6v-3.361a.792.792 0 0 0-1.35-.552L.232 16.448a.773.773 0 0 0 0 1.1l4.418 4.365A.792.792 0 0 0 6 21.361V18h17a1 1 0 0 0 0-2Z"/></svg>
  