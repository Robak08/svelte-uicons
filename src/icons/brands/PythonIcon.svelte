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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M11.859 0a16.34 16.34 0 0 0-2.736.234C6.7.662 6.26 1.558 6.26 3.21v2.182h5.726v.728H4.111c-1.664 0-3.121 1-3.577 2.903-.526 2.181-.549 3.542 0 5.819.407 1.695 1.379 2.903 3.043 2.903h1.969v-2.616c0-1.89 1.635-3.557 3.577-3.557h5.719c1.592 0 2.863-1.311 2.863-2.91V3.21c0-1.552-1.309-2.717-2.863-2.976A17.9 17.9 0 0 0 11.859 0zM8.762 1.755c.591 0 1.074.491 1.074 1.094 0 .601-.483 1.088-1.074 1.088a1.08 1.08 0 0 1-1.074-1.088c0-.603.481-1.094 1.074-1.094z"/><path d="M18.418 6.12v2.543c0 1.971-1.671 3.63-3.577 3.63H9.123c-1.567 0-2.863 1.341-2.863 2.91v5.452c0 1.552 1.349 2.464 2.863 2.91 1.812.533 3.55.629 5.719 0 1.441-.417 2.863-1.257 2.863-2.91v-2.182h-5.719v-.727h8.582c1.664 0 2.284-1.161 2.863-2.903.598-1.794.572-3.518 0-5.819-.411-1.657-1.197-2.903-2.863-2.903h-2.15zm-3.216 13.807a1.08 1.08 0 0 1 1.074 1.088c0 .604-.481 1.094-1.074 1.094a1.086 1.086 0 0 1-1.074-1.094c0-.602.483-1.088 1.074-1.088z"/></svg>
  