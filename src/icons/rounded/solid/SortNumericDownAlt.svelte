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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M22 3.5V5c0 3.645-1.962 6-5 6a1 1 0 1 1 0-2c1.71 0 2.456-1.115 2.774-2.24A3.504 3.504 0 0 1 15 3.5C15 1.57 16.57 0 18.5 0S22 1.57 22 3.5Zm-2 0c0-.827-.673-1.5-1.5-1.5S17 2.673 17 3.5 17.673 5 18.5 5 20 4.327 20 3.5Zm.383 9.576a.996.996 0 0 0-1.09.217l-2 2a.999.999 0 1 0 1.414 1.414l.293-.293V23a1 1 0 1 0 2 0v-9a1 1 0 0 0-.617-.924Zm-9.09 4.631L8 21V1a1 1 0 1 0-2 0v20l-3.293-3.293a.999.999 0 1 0-1.414 1.414l4.293 4.293c.39.39.902.585 1.414.585s1.024-.195 1.414-.585l4.293-4.293a.999.999 0 1 0-1.414-1.414Z"/></svg>
  