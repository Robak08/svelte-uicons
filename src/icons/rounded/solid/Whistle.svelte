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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M10 16a2 2 0 1 1-2-2 2 2 0 0 1 2 2Zm14-5.5v1.248a2.5 2.5 0 0 1-2.054 2.46l-5.161.938A1 1 0 0 0 16 16.152a7.9 7.9 0 0 1-.806 3.287A7.956 7.956 0 0 1 9.285 23.9a8.264 8.264 0 0 1-1.279.1 8 8 0 0 1-7.984-8.6A8.152 8.152 0 0 1 8.229 8H21.5a2.5 2.5 0 0 1 2.5 2.5ZM12 16a4 4 0 1 0-4 4 4 4 0 0 0 4-4ZM11 4V1a1 1 0 0 0-2 0v3a1 1 0 0 0 2 0Zm3.4 1.447 1.5-3a1 1 0 0 0-1.79-.894l-1.5 3a1 1 0 1 0 1.789.894Zm-7.428.446a1 1 0 0 0 .441-1.344l-1.516-3a1 1 0 1 0-1.786.9l1.517 3a1 1 0 0 0 .89.551 1.011 1.011 0 0 0 .45-.107Z"/></svg>
  