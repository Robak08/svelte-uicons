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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M15.5 15c-.83 0-1.5-.67-1.5-1.5v-4c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v4c0 .83-.67 1.5-1.5 1.5ZM13 13.5v-4c0-.83-.67-1.5-1.5-1.5S10 8.67 10 9.5v4c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5Zm7.25-12.48c-.74.12-1.25.81-1.25 1.56v10.74c0 1.9-1.44 3.59-3.34 3.67-.8.04-1.55-.2-2.16-.63-.57.4-1.26.63-2 .63-.83 0-1.58-.29-2.18-.77-.02.02-1.82 1.83-2.44 2.44a.996.996 0 1 1-1.41-1.41l2.33-2.33c.86-.86.77-2.3-.26-3.05-.81-.58-1.94-.41-2.65.29L2.2 14.85c-1.6 1.6-1.6 4.19 0 5.79l1.59 1.59a5.987 5.987 0 0 0 4.24 1.76H17c2.76 0 5-2.24 5-5V2.5c0-.91-.81-1.63-1.75-1.48ZM8 9.86V1.58C8 .83 7.49.14 6.75.02 5.81-.13 5 .59 5 1.5v8.26c.97-.36 2.05-.32 3 .09Z"/></svg>
  