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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M18.427 4.911 14.508.992a3.583 3.583 0 0 0-4.95 0L5.639 4.911A1.5 1.5 0 0 0 7.76 7.032l2.78-2.78.023 18.25a1.5 1.5 0 0 0 1.5 1.5 1.5 1.5 0 0 0 1.5-1.5L13.54 4.266l2.766 2.766a1.5 1.5 0 1 0 2.121-2.121Z"/></svg>
  