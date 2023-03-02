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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 512 512"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><circle cx="394.667" cy="32" r="32"/><circle cx="458.667" cy="138.667" r="32"/><path d="M510.784 231.552c-.975-10.173-9.027-18.225-19.2-19.2-101.655-9.794-182.111-90.258-191.893-191.915-.975-10.173-9.027-18.225-19.2-19.2C272.405.448 264.256 0 256 0 114.615 0 0 114.615 0 256s114.615 256 256 256 256-114.615 256-256c0-8.256-.448-16.405-1.216-24.448zM309.333 341.333c-17.673 0-32-14.327-32-32s14.327-32 32-32 32 14.327 32 32-14.327 32-32 32zM202.667 234.667c-17.673 0-32-14.327-32-32s14.327-32 32-32 32 14.327 32 32-14.327 32-32 32zm32 74.666c0 17.673-14.327 32-32 32s-32-14.327-32-32 14.327-32 32-32c17.673 0 32 14.327 32 32z"/></svg>
  