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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M13.049 19.223c-3.987 0-5.808-2.031-5.808-3.521a1.292 1.292 0 0 1 1.363-1.292c1.707 0 1.26 2.56 4.445 2.56 1.628 0 2.584-.98 2.584-1.901 0-.553-.316-1.185-1.391-1.438l-3.556-.897c-2.857-.727-3.355-2.315-3.355-3.789 0-3.058 2.797-4.165 5.461-4.165 2.454 0 5.37 1.355 5.37 3.189 0 .79-.66 1.213-1.426 1.213-1.458 0-1.213-2.047-4.145-2.047-1.458 0-2.225.684-2.225 1.64 0 .956 1.134 1.28 2.13 1.498l2.624.593c2.877.648 3.643 2.335 3.643 3.951 0 2.485-1.924 4.406-5.717 4.406m11.011-5.259c.114-.652.171-1.313.17-1.976A11.228 11.228 0 0 0 11.053.881 6.6 6.6 0 0 0 7.742 0a6.717 6.717 0 0 0-5.796 10.041 11.238 11.238 0 0 0 13.007 13.078A6.608 6.608 0 0 0 18.26 24a6.717 6.717 0 0 0 5.797-10.036" transform="translate(-1)"/></svg>
  