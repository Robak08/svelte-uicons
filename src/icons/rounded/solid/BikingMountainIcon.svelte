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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M10 18a5 5 0 1 1-5-5 5.006 5.006 0 0 1 5 5Zm9-5a5 5 0 1 0 5 5 5.006 5.006 0 0 0-5-5Zm-6.349.241A1 1 0 0 1 13 14v4a1 1 0 0 1-2 0v-3.541l-1.938-1.665a2.99 2.99 0 0 1-.993-1.8C8.046 11 8.024 11 8 11a3 3 0 0 1-3-3c0-2.81 3.521-4 4.923-4a6.454 6.454 0 0 1 3.664 1.19c.044.032 4.12 4.1 4.12 4.1a1 1 0 1 1-1.414 1.414L12.966 7.38s-2.484 2.28-2.653 2.44a.988.988 0 0 0 .051 1.457ZM19 2.5A2.5 2.5 0 1 1 16.5 0 2.5 2.5 0 0 1 19 2.5Z"/></svg>
  