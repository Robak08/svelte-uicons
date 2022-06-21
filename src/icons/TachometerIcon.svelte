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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-tachometer {customClass}"><path d="M23.9 11.437A12 12 0 0 0 4 4.052a12.055 12.055 0 0 0-.246 17.66A4.847 4.847 0 0 0 7.114 23h9.766a4.988 4.988 0 0 0 3.508-1.429A11.942 11.942 0 0 0 23.9 11.437Zm-4.91 8.705a3.005 3.005 0 0 1-2.11.858H7.114a2.863 2.863 0 0 1-1.982-.741 10.045 10.045 0 0 1 .205-14.716 10 10 0 0 1 13.653 14.6ZM17.707 7.293a1 1 0 0 1 0 1.414l-3.775 3.775a2 2 0 1 1-1.414-1.414l3.775-3.775a1 1 0 0 1 1.414 0Z"/></svg>
  