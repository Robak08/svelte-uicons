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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M24 8H0V7c0-2.757 2.243-5 5-5h1V1a1 1 0 1 1 2 0v1h8V1a1 1 0 1 1 2 0v1h1c2.757 0 5 2.243 5 5v1ZM10 22.545c0-.892.187-1.753.535-2.545H6a1 1 0 1 1 0-2l5.92.001L13.921 16H6a1 1 0 1 1 0-2h9.922l2.741-2.741A4.27 4.27 0 0 1 21.702 10H0v9c0 2.757 2.243 5 5 5h5v-1.455Zm10.077-9.872a2.299 2.299 0 0 1 3.25 3.25L16.52 22.73A4.334 4.334 0 0 1 13.455 24H12v-1.455c0-1.15.457-2.252 1.27-3.065l6.807-6.807Z"/></svg>
  