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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M6 2.5a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Zm18 6.452c0 2.159-1.594 3.865-3.617 4.034L9.044 22.58A6.004 6.004 0 0 1 5.169 24H3.951A3.956 3.956 0 0 1 0 20.048c0-2.159 1.594-3.865 3.617-4.034L5 14.844V9.5C5 7.57 6.57 6 8.5 6a3.506 3.506 0 0 1 3.458 2.957l2.998-2.537A6.004 6.004 0 0 1 18.831 5h1.218A3.956 3.956 0 0 1 24 8.952Zm-17 4.2 3-2.538V9.501c0-.827-.673-1.5-1.5-1.5S7 8.674 7 9.501v3.652Zm15-4.104C22 7.875 21.125 7 20.049 7h-1.218c-.944 0-1.862.336-2.584.947L4.645 17.763a.997.997 0 0 1-.646.237c-1.125 0-2 .875-2 1.952 0 1.173.875 2.048 1.951 2.048h1.218c.944 0 1.862-.336 2.584-.947l11.602-9.816A.997.997 0 0 1 20 11c1.125 0 2-.875 2-1.952Z"/></svg>
  