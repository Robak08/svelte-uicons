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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21.5 2.5a8.578 8.578 0 0 0-12.075 0c-2.377 2.377-3.157 7.909-3.41 11a4.164 4.164 0 0 0 .585 2.483l-3.8 3.8a1.5 1.5 0 1 0-.649 2.063 1.5 1.5 0 1 0 2.063-.649l3.8-3.8a4.136 4.136 0 0 0 2.484.592c3.086-.253 8.617-1.032 11-3.41A8.577 8.577 0 0 0 21.5 2.5Z"/></svg>
  