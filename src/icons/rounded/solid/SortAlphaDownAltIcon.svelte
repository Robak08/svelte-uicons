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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M15 1a1 1 0 0 1 1-1h4.112a1.888 1.888 0 0 1 1.6 2.885C21.682 2.934 17.158 8 17.158 8h3.841a1 1 0 1 1 0 2h-4.112a1.888 1.888 0 0 1-1.6-2.885C15.317 7.066 19.841 2 19.841 2H16a1 1 0 0 1-1-1Zm7 16.5V23a1 1 0 1 1-2 0v-2h-3v2a1 1 0 1 1-2 0v-5.5c0-1.93 1.57-3.5 3.5-3.5s3.5 1.57 3.5 3.5Zm-2 0c0-.827-.673-1.5-1.5-1.5s-1.5.673-1.5 1.5V19h3v-1.5Zm-9.707.207L7 21V1a1 1 0 1 0-2 0v20l-3.293-3.293a.999.999 0 1 0-1.414 1.414l4.293 4.293c.39.39.902.585 1.414.585s1.024-.195 1.414-.585l4.293-4.293a.999.999 0 1 0-1.414-1.414Z"/></svg>
  