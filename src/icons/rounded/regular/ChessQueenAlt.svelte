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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M19 18h-.316a44.01 44.01 0 0 1-2.615-10H17a1 1 0 0 0 0-2h-.472s1.281-2.214 1.294-2.245a1.942 1.942 0 0 0-2.864-2.4l-.677.364S13.461.634 13.432.6a2.045 2.045 0 0 0-2.864 0c-.029.03-.849 1.11-.849 1.11l-.677-.36a1.942 1.942 0 0 0-2.864 2.4C6.191 3.786 7.472 6 7.472 6H7a1 1 0 0 0 0 2h.931a44.084 44.084 0 0 1-2.615 10H5a3 3 0 0 0 0 6h14a3 3 0 0 0 0-6ZM9.526 3.881A1 1 0 0 0 10.8 3.6L12 2.013 13.2 3.6a1 1 0 0 0 1.272.277l1.409-.758L14.215 6h-4.43L8.11 3.119ZM9.939 8h4.122a43.091 43.091 0 0 0 2.487 10h-9.1A43.091 43.091 0 0 0 9.939 8ZM19 22H5a1 1 0 0 1 0-2h14a1 1 0 0 1 0 2Z"/></svg>
  