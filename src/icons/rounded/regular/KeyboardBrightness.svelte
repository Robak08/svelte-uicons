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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M16 18H8c-.55 0-1-.45-1-1s.45-1 1-1h8c.55 0 1 .45 1 1s-.45 1-1 1Zm-3-9V4c0-.55-.45-1-1-1s-1 .45-1 1v5c0 .55.45 1 1 1s1-.45 1-1Zm-8 8c0-.55-.45-1-1-1H1c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1Zm19 0c0-.55-.45-1-1-1h-3c-.55 0-1 .45-1 1s.45 1 1 1h3c.55 0 1-.45 1-1Zm-5.29-5.29 3-3A.996.996 0 1 0 20.3 7.3l-3 3a.996.996 0 0 0 .71 1.7c.26 0 .51-.1.71-.29Zm-12 0a.996.996 0 0 0 0-1.41l-3-3A.996.996 0 1 0 2.3 8.71l3 3c.2.2.45.29.71.29s.51-.1.71-.29Z"/></svg>
  