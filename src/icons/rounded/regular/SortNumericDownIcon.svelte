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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M17.707 3.707 18 3.414V10a1 1 0 1 0 2 0V1a.999.999 0 0 0-1.707-.707l-2 2a.999.999 0 1 0 1.414 1.414ZM22 16.5V18c0 3.645-1.963 6-5 6a1 1 0 1 1 0-2c1.71 0 2.456-1.115 2.775-2.24A3.504 3.504 0 0 1 15 16.5c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5Zm-2 0c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5.673 1.5 1.5 1.5 1.5-.673 1.5-1.5Zm-8.707 1.207L8 21V1a1 1 0 1 0-2 0v20l-3.293-3.293a.999.999 0 1 0-1.414 1.414l4.293 4.293c.39.39.902.585 1.414.585s1.024-.195 1.414-.585l4.293-4.293a.999.999 0 1 0-1.414-1.414Z"/></svg>
  