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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512.301 512.301"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M320.119 82.112a21.76 21.76 0 0 0 13.419 19.755c71.67 31.535 117.01 103.433 114.581 181.696-1.72 106.039-89.076 190.605-195.115 188.885-106.039-1.72-190.606-89.076-188.885-195.115.101-76.006 45.028-144.798 114.581-175.445a21.824 21.824 0 0 0 13.419-19.797c.019-11.782-9.518-21.348-21.3-21.367a21.335 21.335 0 0 0-8.012 1.548C43.898 113.824-10.705 252.01 40.848 370.919S230.586 544.43 349.495 492.878c118.909-51.552 173.511-189.738 121.959-308.647A234.67 234.67 0 0 0 349.495 62.272c-10.913-4.442-23.36.804-27.802 11.716a21.325 21.325 0 0 0-1.574 8.124z"/><path d="M256.119 0c11.782 0 21.333 9.551 21.333 21.333v128c0 11.782-9.551 21.333-21.333 21.333-11.782 0-21.333-9.551-21.333-21.333v-128C234.785 9.551 244.337 0 256.119 0z"/></svg>
  