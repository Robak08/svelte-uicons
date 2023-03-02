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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.006 0H11.451a5.208 5.208 0 0 0 5.211 5.211h2.126v2.057a5.208 5.208 0 0 0 5.211 5.211V.994A.994.994 0 0 0 23.006 0z"/><path d="M17.28 5.76H5.726a5.208 5.208 0 0 0 5.211 5.211h2.126v2.057a5.21 5.21 0 0 0 5.212 5.211V6.754a.996.996 0 0 0-.995-.994z"/><path d="M11.554 11.52H0a5.208 5.208 0 0 0 5.211 5.211h2.126v2.057a5.209 5.209 0 0 0 5.211 5.211V12.514a.994.994 0 0 0-.994-.994z"/></svg>
  