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
  
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24"  fill="currentColor" stroke="currentColor" stroke-width="{strokeWidth}" stroke-linecap="round" stroke-linejoin="round" class="uicon uicon-undefined {customClass}"><path d="M23.9 11.437A12 12 0 0 0 4 4.052a12.055 12.055 0 0 0-.246 17.66A4.847 4.847 0 0 0 7.114 23h9.766a4.988 4.988 0 0 0 3.508-1.429A11.942 11.942 0 0 0 23.9 11.437Zm-4.91 8.705a3.005 3.005 0 0 1-2.11.858H7.114a2.863 2.863 0 0 1-1.982-.741 10.045 10.045 0 0 1 .205-14.716 10 10 0 0 1 13.653 14.6ZM20 13a7.927 7.927 0 0 1-2.409 5.715 1 1 0 1 1-1.4-1.43C20.039 13.684 17.268 6.9 12 7a6.024 6.024 0 0 0-5.939 5.142 1 1 0 0 1-1.98-.284C5.766 2.13 19.73 3.113 20 13Zm-6 0a2.013 2.013 0 0 1-3.184 1.612l-4.867 2.136a1 1 0 1 1-.8-1.832l4.867-2.136A2 2 0 0 1 14 13Z"/></svg>
  