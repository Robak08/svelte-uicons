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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M22 23a1 1 0 0 1-1 1h-4.112a1.886 1.886 0 0 1-1.599-2.886c.03-.049 4.553-5.114 4.553-5.114h-3.841a1 1 0 1 1 0-2h4.112a1.888 1.888 0 0 1 1.598 2.887.9.9 0 0 1-.103.136l-4.449 4.978H21a1 1 0 0 1 1 1Zm0-19.5V9a1 1 0 1 1-2 0V7h-3v2a1 1 0 1 1-2 0V3.5C15 1.57 16.57 0 18.5 0S22 1.57 22 3.5ZM20 5V3.5c0-.827-.673-1.5-1.5-1.5S17 2.673 17 3.5V5h3Zm-9.707 12.707L7 21V1a1 1 0 1 0-2 0v20l-3.293-3.293a.999.999 0 1 0-1.414 1.414l4.293 4.293c.39.39.902.585 1.414.585s1.024-.195 1.414-.585l4.293-4.293a.999.999 0 1 0-1.414-1.414Z"/></svg>
  