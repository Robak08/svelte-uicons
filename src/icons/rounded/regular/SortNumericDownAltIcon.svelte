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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21.923 3.5V5c0 3.645-1.962 6-5 6a1 1 0 1 1 0-2c1.71 0 2.456-1.115 2.774-2.24a3.504 3.504 0 0 1-4.774-3.26c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5Zm-2 0c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5.673 1.5 1.5 1.5 1.5-.673 1.5-1.5Zm.383 9.576a.996.996 0 0 0-1.09.217l-2 2a.999.999 0 1 0 1.414 1.414l.293-.293V23a1 1 0 1 0 2 0v-9a1 1 0 0 0-.617-.924Zm-9.013 4.631L8 21V1a1 1 0 1 0-2 0v20l-3.293-3.293a.999.999 0 1 0-1.414 1.414l4.293 4.293c.39.39.902.585 1.414.585s1.024-.195 1.414-.585l4.293-4.293a.999.999 0 1 0-1.414-1.414Z"/></svg>
  