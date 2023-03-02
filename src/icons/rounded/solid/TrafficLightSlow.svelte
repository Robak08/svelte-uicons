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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M13 5c0 .551-.449 1-1 1s-1-.449-1-1 .449-1 1-1 1 .449 1 1Zm-1 13c-.551 0-1 .449-1 1s.449 1 1 1 1-.449 1-1-.449-1-1-1Zm8-13v14c0 2.757-2.243 5-5 5H9c-2.757 0-5-2.243-5-5V5c0-2.757 2.243-5 5-5h6c2.757 0 5 2.243 5 5Zm-5 14c0-1.654-1.346-3-3-3s-3 1.346-3 3 1.346 3 3 3 3-1.346 3-3Zm0-7c0-1.654-1.346-3-3-3s-3 1.346-3 3 1.346 3 3 3 3-1.346 3-3Zm0-7c0-1.654-1.346-3-3-3S9 3.346 9 5s1.346 3 3 3 3-1.346 3-3Z"/></svg>
  