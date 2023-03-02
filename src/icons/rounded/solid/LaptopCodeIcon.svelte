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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M21.5 16a2.5 2.5 0 1 1 0 5h-19a2.5 2.5 0 1 1 0-5h5.651a2 2 0 0 1 1.527.708l.247.292h4.149l.247-.292A2 2 0 0 1 15.848 16H21.5Zm.5-8v6.11a4.91 4.91 0 0 0-1-.11h-5.151c-.983 0-1.92.359-2.646 1h-2.404a3.992 3.992 0 0 0-2.646-1H3a4.91 4.91 0 0 0-1 .11V8c0-2.757 2.243-5 5-5h10c2.757 0 5 2.243 5 5Zm-12.934.888 1.681-1.681a.999.999 0 1 0-1.414-1.414L7.652 7.474a2.241 2.241 0 0 0 .015 3.176l1.638 1.572a.998.998 0 0 0 1.414-.03 1 1 0 0 0-.029-1.414L9.066 9.221a.235.235 0 0 1 0-.333Zm7.279-1.414-1.681-1.681a.999.999 0 1 0-1.414 1.414l1.681 1.681c.092.092.092.241.015.318l-1.638 1.572a1 1 0 0 0 1.385 1.444l1.653-1.586a2.237 2.237 0 0 0 0-3.161Z"/></svg>
  