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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M20.025 22.026h-1v-1.655A4.014 4.014 0 0 0 17.8 17.5c-1.924-1.859-2.709-3.989-2.766-7.476h.988a1 1 0 0 0 0-2h-.556a3.949 3.949 0 0 0 .556-2c0-1.375-1.162-3.717-1.893-4.87a2.5 2.5 0 0 0-4.212 0c-.732 1.154-1.894 3.5-1.894 4.871a3.959 3.959 0 0 0 .556 2h-.553a1 1 0 0 0 0 2h.989c-.058 3.487-.844 5.616-2.766 7.475a4.019 4.019 0 0 0-1.223 2.87v1.655h-1a1 1 0 0 0 0 2h16a1 1 0 0 0 0-2zm-8.417-19.8a.5.5 0 0 1 .835 0 10.752 10.752 0 0 1 1.582 3.8 2 2 0 1 1-4 0 10.763 10.763 0 0 1 1.583-3.799zm1.43 7.8c.054 3.516.8 5.951 2.522 8H8.491c1.72-2.049 2.468-4.485 2.523-8zM7.026 20.371a1.905 1.905 0 0 1 .036-.345h9.928a2 2 0 0 1 .035.345v1.655h-10z"/></svg>
  